import { reactive, ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Valid plan values — used to validate the ?plan= URL query param
const VALID_PLANS = ['basic', 'pro', 'enterprise']

// ── Pricing constants ─────────────────────────────────────────────────────────
//   Each range maps to its maximum user count — you pay for your full plan slot.
//   250+ and enterprise are open-ended → "Contact us".
const USER_COUNT_MAP = {
  '1-5':    5,
  '6-15':   15,
  '16-30':  30,
  '31-50':  50,
  '51-100': 100,
  '101-250':250,
}
const PLAN_PRICE = { basic: 39, pro: 79 }

export function useSignupForm() {
  const route = useRoute()

  // ── Form state ──────────────────────────────────────────────────────────────
  const form = reactive({
    email:         '',
    password:      '',
    teamSize:      '',
    customTeamSize:'',
    plan:          'basic',
    agreedToTerms: false,
  })

  const errors = reactive({
    email:          '',
    password:       '',
    customTeamSize: '',
    terms:          '',
  })

  const submitted         = ref(false)
  const showTeamSizeError = ref(false)

  // ── Price calculation ───────────────────────────────────────────────────────
  function getUserCount() {
    if (!form.teamSize || form.teamSize === '250+') return null
    if (form.teamSize === 'custom') {
      const n = parseInt(form.customTeamSize, 10)
      return n > 0 ? n : null
    }
    return USER_COUNT_MAP[form.teamSize] ?? null
  }

  // Recalculates whenever form.plan or form.teamSize (or customTeamSize) changes.
  const priceCalc = computed(() => {
    if (!form.teamSize) return null

    const isContactUs = form.plan === 'enterprise' || form.teamSize === '250+'
    if (isContactUs) return { type: 'contact' }

    const count = getUserCount()
    if (!count) return null

    const pricePerUser = PLAN_PRICE[form.plan]
    return {
      type: 'calculated',
      total: (count * pricePerUser).toLocaleString('da-DK'),  // e.g. 1.950
      count,
      pricePerUser,
    }
  })

  // ── Watchers ────────────────────────────────────────────────────────────────
  watch(() => form.email,          () => { if (errors.email)          errors.email          = '' })
  watch(() => form.password,       () => { if (errors.password)       errors.password       = '' })
  watch(() => form.customTeamSize, () => { if (errors.customTeamSize) errors.customTeamSize = '' })
  watch(() => form.agreedToTerms,  (val) => { if (val) errors.terms = '' })
  watch(() => form.teamSize, (val) => {
    if (val) showTeamSizeError.value = false
    if (val !== 'custom') form.customTeamSize = ''
  })

  onMounted(() => {
    const planParam = route.query.plan
    if (planParam && VALID_PLANS.includes(planParam)) form.plan = planParam
  })

  // ── Submission ──────────────────────────────────────────────────────────────
  function handleSignup() {
    errors.email = errors.password = errors.customTeamSize = errors.terms = ''
    let ok = true

    if (!form.email) {
      errors.email = 'Work email is required.'; ok = false
    } else if (!EMAIL_RE.test(form.email)) {
      errors.email = 'Please enter a valid email address.'; ok = false
    }

    if (!form.password) {
      errors.password = 'Password is required.'; ok = false
    } else if (form.password.length < 8) {
      errors.password = 'Password must be at least 8 characters.'; ok = false
    }

    if (!form.teamSize) {
      showTeamSizeError.value = true; ok = false
    } else if (form.teamSize === 'custom' && !form.customTeamSize) {
      errors.customTeamSize = 'Please enter your exact team size.'; ok = false
    }

    if (!form.agreedToTerms) {
      errors.terms = 'You must agree to the Terms of Service and Privacy Policy.'; ok = false
    }

    if (!ok) return
    // TODO: connect to backend auth endpoint
    submitted.value = true
  }

  return { form, errors, submitted, showTeamSizeError, priceCalc, handleSignup }
}
