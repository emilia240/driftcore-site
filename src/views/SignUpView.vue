<template>
  <section class="w-full bg-gradient-to-b from-paleBlue/25 to-whiteBase py-16 sm:py-20">
    <div
      class="mx-auto grid w-full max-w-2xl px-4 sm:px-6
             lg:max-w-6xl lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8"
    >
      <!-- ── Left: Branding panel (sticky) ── -->
      <AuthBrandingPanel />

      <!-- ── Right: form or success card ── -->
      <div class="flex flex-col gap-8">

        <!-- ── Success card ── -->
        <template v-if="submitted">
          <div class="flex flex-col items-center gap-6 rounded-2xl border border-navy/10 bg-whiteBase p-10 text-center shadow-md">
            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-brightBlue/20">
              <svg class="h-8 w-8 text-brightBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0L12 13.5 2.25 6.75" />
              </svg>
            </div>
            <div class="flex flex-col gap-2">
              <h2 class="font-heading text-h3 text-navy">Check your email</h2>
              <p class="font-body text-body text-slateBlue">
                We've sent a confirmation link to
                <strong class="text-navy">{{ form.email }}</strong>.
                Click it to activate your account.
              </p>
            </div>
            <router-link to="/" class="font-body text-sm font-medium text-navy underline underline-offset-4 transition-colors hover:text-brightBlue">
              ← Back to home
            </router-link>
          </div>
        </template>

        <!-- ── Sign-up form ── -->
        <template v-else>
          <div class="text-center">
            <h1 class="font-heading text-h2 text-navy">Start your free trial</h1>
            <p class="mt-2 font-body text-body text-slateBlue">14 days free. No credit card required.</p>
          </div>

          <div class="rounded-2xl border border-navy/10 bg-paleBlue p-6 shadow-md sm:p-8">
            <form @submit.prevent="handleSignup" class="space-y-6" novalidate>

              <!-- Work email -->
              <div class="flex flex-col gap-1.5">
                <label for="signup-email" class="font-body text-sm font-medium text-navy">Work email</label>
                <input
                  id="signup-email"
                  v-model="form.email"
                  type="email"
                  autocomplete="email"
                  placeholder="you@company.com"
                  class="w-full rounded-xl border bg-whiteBase px-4 py-3 font-body text-body
                         text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2
                         focus:ring-brightBlue/20 transition-colors"
                  :class="errors.email ? 'border-red-400 focus:border-red-400' : 'border-navy/20 focus:border-brightBlue'"
                />
                <p v-if="errors.email" role="alert" class="font-body text-sm text-red-500">{{ errors.email }}</p>
              </div>

              <!-- Password -->
              <div class="flex flex-col gap-1.5">
                <label for="signup-password" class="font-body text-sm font-medium text-navy">
                  Password <span class="font-normal text-navy/40">(min. 8 characters)</span>
                </label>
                <input
                  id="signup-password"
                  v-model="form.password"
                  type="password"
                  autocomplete="new-password"
                  minlength="8"
                  placeholder="••••••••"
                  class="w-full rounded-xl border bg-whiteBase px-4 py-3 font-body text-body
                         text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2
                         focus:ring-brightBlue/20 transition-colors"
                  :class="errors.password ? 'border-red-400 focus:border-red-400' : 'border-navy/20 focus:border-brightBlue'"
                />
                <p v-if="errors.password" role="alert" class="font-body text-sm text-red-500">{{ errors.password }}</p>
              </div>

              <!-- ── Team size ── -->
              <TeamSizeSelect
                v-model="form.teamSize"
                v-model:custom-value="form.customTeamSize"
                :show-error="showTeamSizeError"
                :custom-error="errors.customTeamSize"
              />

              <!-- ── Plan picker ── -->
              <PlanPicker v-model="form.plan" />

              <!-- ── Price calculator ── -->
              <PriceCalculator :price-calc="priceCalc" />

              <!-- ── Terms of Service checkbox ── -->
              <div class="flex flex-col gap-1.5">
                <div class="flex items-start gap-3">
                  <input
                    id="agree-terms"
                    v-model="form.agreedToTerms"
                    type="checkbox"
                    class="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-navy"
                  />
                  <label for="agree-terms" class="cursor-pointer font-body text-sm leading-relaxed text-navy">
                    I agree to the
                    <a
                      href="/terms"
                      class="text-slateBlue underline underline-offset-2 transition-colors hover:text-navy"
                    >Terms of Service</a>
                    and the
                    <a
                      href="/privacy"
                      class="text-slateBlue underline underline-offset-2 transition-colors hover:text-navy"
                    >Privacy Policy</a>
                  </label>
                </div>
                <p v-if="errors.terms" role="alert" class="font-body text-sm text-red-500">
                  {{ errors.terms }}
                </p>
              </div>

              <!-- Submit -->
              <button
                type="submit"
                class="mt-2 w-full rounded-xl bg-navy px-10 py-4 font-body font-semibold text-base text-whiteBase
                       shadow-md transition duration-300 hover:scale-105 hover:bg-slateBlue"
              >
                Start my free trial
              </button>
            </form>
          </div>

          <p class="text-center font-body text-sm text-slateBlue">
            Already have an account?
            <router-link to="/login" class="font-medium text-navy transition-colors hover:underline">Log in</router-link>
          </p>
        </template>

      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AuthBrandingPanel from '../components/common/AuthBrandingPanel.vue'
import TeamSizeSelect from '../components/common/TeamSizeSelect.vue'
import PlanPicker from '../components/common/PlanPicker.vue'
import PriceCalculator from '../components/common/PriceCalculator.vue'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const route = useRoute()

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

// ── Form state ────────────────────────────────────────────────────────────────
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

// ── Watchers ──────────────────────────────────────────────────────────────────
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

// ── Submission ────────────────────────────────────────────────────────────────
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
</script>
