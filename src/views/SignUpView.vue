<template>
  <section class="w-full bg-gradient-to-b from-paleBlue/25 to-whiteBase py-16 sm:py-20">
    <div
      class="mx-auto grid w-full max-w-2xl px-4 sm:px-6
             lg:max-w-6xl lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8"
    >
      <!-- ── Left: Branding panel (sticky) ── -->
      <aside class="hidden lg:block lg:sticky lg:top-24"> 
        <div
          class="flex aspect-[4/5] flex-col items-center justify-center gap-8
                 rounded-xl bg-navy px-6 shadow-lg"
        >       
            <!-- Tagline -->
            <p class="font-heading text-h3 text-center leading-tight text-paleBlue">
              Everything you need.<br />Nothing you don't.
            </p>
        
            <!-- Checklist (same icons/items as CTASection) -->
            <ul class="flex flex-col gap-3">
              <li
                v-for="item in brandingFeatures"
                :key="item"
                class="flex items-center gap-3 font-body text-sm text-brightBlue"
              >
                <img :src="CheckIcon" alt="" aria-hidden="true" class="h-4 w-auto shrink-0" />
                {{ item }}
              </li>
            </ul>

             <!-- Bright Blue logo -->
            <img :src="BrightBlueLogo" alt="DriftCore" class="w-44 h-auto" />
          </div>
      </aside>

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

              <!-- ── Team size — Headless UI Listbox ── -->
              <Listbox v-model="form.teamSize" as="div" class="flex flex-col gap-1.5">
                <ListboxLabel class="font-body text-sm font-medium text-navy">Team size</ListboxLabel>
                <div class="relative">
                  <ListboxButton
                    class="w-full rounded-xl border bg-whiteBase px-4 py-3 text-left font-body
                           text-body focus:outline-none focus:ring-2 focus:ring-brightBlue/20 transition-colors"
                    :class="[
                      showTeamSizeError ? 'border-red-400 focus:border-red-400' : 'border-navy/20 focus:border-brightBlue',
                      isTeamSizePlaceholder ? 'text-navy/40' : 'text-navy',
                    ]"
                  >
                    <template v-if="!form.teamSize">Select your team size</template>
                    <template v-else-if="form.teamSize === 'custom'">
                      {{ form.customTeamSize ? `${form.customTeamSize} people` : 'Enter exact number' }}
                    </template>
                    <template v-else>{{ teamSizes.find(s => s.value === form.teamSize)?.label }}</template>
                    <span class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-navy/50" aria-hidden="true">
                      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </ListboxButton>

                  <Transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="opacity-100 scale-100"
                    leave-to-class="opacity-0 scale-95"
                  >
                    <ListboxOptions class="absolute z-10 mt-1 w-full overflow-hidden rounded-xl border border-navy/10 bg-whiteBase py-1 shadow-lg focus:outline-none">
                      <ListboxOption
                        v-for="size in teamSizes"
                        :key="size.value"
                        :value="size.value"
                        as="template"
                        v-slot="{ active, selected }"
                      >
                        <li
                          class="flex cursor-pointer items-center gap-2 px-4 py-3 font-body text-body text-navy transition-colors"
                          :class="[
                            active ? 'bg-paleBlue/40' : '',
                            size.value === 'custom' ? 'border-t border-navy/10 italic' : '',
                          ]"
                        >
                          <span :class="selected ? 'font-medium' : ''">{{ size.label }}</span>
                          <svg v-if="selected" class="ml-auto h-4 w-4 shrink-0 text-brightBlue" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                          </svg>
                        </li>
                      </ListboxOption>
                    </ListboxOptions>
                  </Transition>
                </div>

                <p v-if="showTeamSizeError" role="alert" class="font-body text-sm text-red-500">
                  Please select a team size to continue.
                </p>

                <Transition name="slide-down">
                  <div v-if="form.teamSize === 'custom'" class="flex flex-col gap-1.5">
                    <label for="custom-team-size" class="font-body text-sm text-navy/70">Enter your exact team size</label>
                    <input
                      id="custom-team-size"
                      v-model="form.customTeamSize"
                      type="number"
                      min="1"
                      max="99999"
                      placeholder="e.g. 75"
                      class="w-full rounded-xl border bg-whiteBase px-4 py-3 font-body text-body
                             text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2
                             focus:ring-brightBlue/20 transition-colors"
                      :class="errors.customTeamSize ? 'border-red-400 focus:border-red-400' : 'border-navy/20 focus:border-brightBlue'"
                    />
                    <p v-if="errors.customTeamSize" role="alert" class="font-body text-sm text-red-500">{{ errors.customTeamSize }}</p>
                  </div>
                </Transition>
              </Listbox>

              <!-- ── Plan picker — vertical stack, price displayed, check icon ── -->
              <RadioGroup v-model="form.plan">
                <RadioGroupLabel class="font-body text-sm font-medium text-navy">
                  Choose a plan
                  <span class="font-normal text-navy/50">
                    (<router-link
                      to="/pricing"
                      class="text-slateBlue underline underline-offset-2 transition-colors hover:text-navy"
                    >See pricing features</router-link>)
                  </span>
                </RadioGroupLabel>

                <div class="mt-3 grid grid-cols-1 gap-2">
                  <RadioGroupOption
                    v-for="plan in plans"
                    :key="plan.value"
                    :value="plan.value"
                    as="template"
                    v-slot="{ checked, active }"
                  >
                    <div
                      class="bg-slateBlue flex cursor-pointer items-center justify-between rounded-xl border-2
                             px-4 py-3.5 transition-all duration-200 focus:outline-none"
                      :class="[
                        checked ? 'border-brightBlue bg-paleBlue/40' : 'border-navy/10 hover:border-navy/30',
                        active  ? 'ring-2 ring-brightBlue/30 ring-offset-1' : '',
                      ]"
                    >
                      <div class="flex flex-col gap-0.5">
                        <span class="font-heading text-h5 text-whiteBase">{{ plan.name }}</span>
                        <span class="font-body text-sm text-paleBlue">{{ plan.price }}</span>
                      </div>
                      <!-- Check icon (same path as PricingCard.vue) -->
                      <svg
                        v-if="checked"
                        class="h-5 w-5 shrink-0 text-brightBlue"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1
                             0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>

              <!-- ── Price calculator ── -->
              <Transition name="slide-down">
                <div
                  v-if="priceCalc"
                  class="rounded-xl border border-navy/10 bg-whiteBase px-5 py-4"
                >
                  <!-- Contact us state (enterprise plan or 250+ team) -->
                  <template v-if="priceCalc.type === 'contact'">
                    <p class="font-body text-xs uppercase tracking-wide text-slateBlue">
                      Enterprise & large teams
                    </p>
                    <router-link
                      to="/contact"
                      class="mt-1 block font-heading text-h4 text-navy transition-colors hover:text-slateBlue"
                    >
                      Contact us for a quote →
                    </router-link>
                  </template>

                  <!-- Calculated total -->
                  <template v-else>
                    <div class="flex items-end justify-between gap-4">
                      <div>
                        <p class="font-body text-xs uppercase tracking-wide text-slateBlue">
                          Estimated monthly total
                        </p>
                        <p class="mt-0.5 font-heading text-h3 text-navy">
                          {{ priceCalc.total }} kr.
                        </p>
                      </div>
                      <p class="shrink-0 text-right font-body text-sm text-slateBlue">
                        {{ priceCalc.count }} users<br />
                        × {{ priceCalc.pricePerUser }} kr. / user
                      </p>
                    </div>
                  </template>
                </div>
              </Transition>

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
                class="mt-2 w-full rounded-xl bg-navy px-10 py-4 font-body text-base text-whiteBase
                       shadow-md transition-all duration-300 hover:scale-105 hover:bg-slateBlue"
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
import {
  Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption,
  RadioGroup, RadioGroupLabel, RadioGroupOption,
} from '@headlessui/vue'

import BrightBlueLogo  from '../assets/graphics/Logo-brightBlue.svg'
import CheckIcon from '../assets/graphics/check-icon-brightBlue.svg'

const brandingFeatures = [
  'No steep learning curves',
  'No complex configurations',
  'No bloated features',
  'No micromanagement',
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const route = useRoute()

// ── Plan definitions ──────────────────────────────────────────────────────────
const plans = [
  { value: 'basic',      name: 'Basic',      price: '39 kr. / user / month' },
  { value: 'pro',        name: 'Pro',        price: '79 kr. / user / month' },
  { value: 'enterprise', name: 'Enterprise', price: 'Contact us'            },
]

// ── Team size options ─────────────────────────────────────────────────────────
const teamSizes = [
  { value: '1-5',    label: '1–5 people'        },
  { value: '6-15',   label: '6–15 people'        },
  { value: '16-30',  label: '16–30 people'       },
  { value: '31-50',  label: '31–50 people'       },
  { value: '51-100', label: '51–100 people'      },
  { value: '101-250',label: '101–250 people'     },
  { value: '250+',   label: '250+ people'        },
  { value: 'custom', label: 'Enter exact number' },
]

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

// ── Computed helpers ──────────────────────────────────────────────────────────
const isTeamSizePlaceholder = computed(() =>
  !form.teamSize || (form.teamSize === 'custom' && !form.customTeamSize)
)

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
  if (planParam && plans.some(p => p.value === planParam)) form.plan = planParam
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

<style scoped>
.slide-down-enter-active { transition: all 0.2s ease-out; }
.slide-down-leave-active { transition: all 0.15s ease-in; }
.slide-down-enter-from,
.slide-down-leave-to    { opacity: 0; transform: translateY(-8px); }
</style>