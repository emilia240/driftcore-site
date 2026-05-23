<template>
  <section class="w-full bg-gradient-to-b from-paleBlue/25 to-whiteBase py-16 sm:py-20">
    <div
      class="mx-auto grid w-full max-w-md px-4 sm:px-6
             lg:max-w-6xl lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8"
    >
      <!-- ── Left: Branding panel ── -->
      <AuthBrandingPanel />

      <!-- ── Right: Login form ── -->
      <div class="flex flex-col gap-8">
        <div class="text-center">
          <h1 class="font-heading text-h2 text-navy">Welcome back</h1>
          <p class="mt-2 font-body text-body text-slateBlue">Log in to your DriftCore account.</p>
        </div>

        <div class="rounded-2xl border border-navy/10 bg-paleBlue p-6 shadow-md sm:p-8">
          <form @submit.prevent="handleLogin" class="space-y-5" novalidate>

            <!-- Email -->
            <div class="flex flex-col gap-1.5">
              <label for="login-email" class="font-body text-sm font-medium text-navy">Email</label>
              <input
                id="login-email"
                v-model="form.email"
                type="email"
                autocomplete="email"
                placeholder="you@company.com"
                class="w-full rounded-xl border bg-whiteBase px-4 py-3 font-body text-body
                       text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2
                       focus:ring-brightBlue/20 transition-colors"
                :class="errors.email
                  ? 'border-red-400 focus:border-red-400'
                  : 'border-navy/20 focus:border-brightBlue'"
              />
              <p v-if="errors.email" role="alert" class="font-body text-sm text-red-500">
                {{ errors.email }}
              </p>
            </div>

            <!-- Password -->
            <div class="flex flex-col gap-1.5">
              <div class="flex items-center justify-between">
                <label for="login-password" class="font-body text-sm font-medium text-navy">Password</label>
                <button
                  type="button"
                  @click="openForgot"
                  class="font-body text-sm text-slateBlue transition-colors hover:text-navy"
                >
                  Forgot password?
                </button>
              </div>
              <input
                id="login-password"
                v-model="form.password"
                type="password"
                autocomplete="current-password"
                placeholder="••••••••"
                class="w-full rounded-xl border bg-whiteBase px-4 py-3 font-body text-body
                       text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2
                       focus:ring-brightBlue/20 transition-colors"
                :class="errors.password
                  ? 'border-red-400 focus:border-red-400'
                  : 'border-navy/20 focus:border-brightBlue'"
              />
              <p v-if="errors.password" role="alert" class="font-body text-sm text-red-500">
                {{ errors.password }}
              </p>
            </div>

            <button
              type="submit"
              class="mt-2 w-full rounded-xl bg-navy px-10 py-4 font-body font-semibold text-base text-whiteBase
                     shadow-md transition duration-300 hover:scale-105 hover:bg-slateBlue"
            >
              Log in
            </button>
          </form>
        </div>

        <p class="text-center font-body text-sm text-slateBlue">
          Don't have an account?
          <router-link to="/signup" class="font-medium text-navy transition-colors hover:underline">
            Sign up free
          </router-link>
        </p>
      </div>
    </div>

    <!-- ── Forgot Password Dialog ── -->
    <TransitionRoot :show="forgotOpen" as="template">
      <Dialog as="div" class="relative z-50" @close="closeForgot">
        <TransitionChild
          as="template"
          enter="ease-out duration-200" enter-from="opacity-0" enter-to="opacity-100"
          leave="ease-in duration-150" leave-from="opacity-100" leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-navy/40 backdrop-blur-sm" aria-hidden="true" />
        </TransitionChild>
        <div class="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as="template"
            enter="ease-out duration-200" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100"
            leave="ease-in duration-150" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full max-w-sm rounded-2xl border border-navy/10 bg-whiteBase p-8 shadow-xl">
              <template v-if="!resetSent">
                <DialogTitle class="font-heading text-h4 text-navy">Reset your password</DialogTitle>
                <p class="mt-2 font-body text-sm text-slateBlue">
                  Enter your account email and we'll send you a reset link.
                </p>
                <div class="mt-5 flex flex-col gap-1.5">
                  <label for="reset-email" class="font-body text-sm font-medium text-navy">Email</label>
                  <input
                    id="reset-email"
                    v-model="resetEmail"
                    type="email"
                    autocomplete="email"
                    placeholder="you@company.com"
                    class="w-full rounded-xl border border-navy/20 bg-whiteBase px-4 py-3
                           font-body text-body text-navy placeholder:text-navy/40
                           focus:border-brightBlue focus:outline-none focus:ring-2 focus:ring-brightBlue/20
                           transition-colors"
                  />
                </div>
                <div class="mt-6 flex gap-3">
                  <button
                    type="button" @click="closeForgot"
                    class="flex-1 rounded-xl border border-navy/20 px-4 py-3 font-body text-sm
                           text-navy transition-colors hover:bg-paleBlue/30"
                  >Cancel</button>
                  <button
                    type="button" @click="handleReset"
                    class="flex-1 rounded-xl bg-navy px-4 py-3 font-body font-semibold text-sm text-whiteBase
                           transition duration-300 hover:bg-slateBlue"
                  >Send reset link</button>
                </div>
              </template>
              <template v-else>
                <div class="flex flex-col items-center gap-4 text-center">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full bg-brightBlue/20">
                    <svg class="h-6 w-6 text-brightBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0L12 13.5 2.25 6.75" />
                    </svg>
                  </div>
                  <div>
                    <DialogTitle class="font-heading text-h4 text-navy">Check your inbox</DialogTitle>
                    <p class="mt-1 font-body text-sm text-slateBlue">
                      If <strong class="text-navy">{{ resetEmail }}</strong> is registered,
                      you'll receive a reset link shortly.
                    </p>
                  </div>
                  <button
                    type="button" @click="closeForgot"
                    class="mt-2 w-full rounded-xl bg-navy px-6 py-3 font-body font-semibold text-sm text-whiteBase
                           transition duration-300 hover:bg-slateBlue"
                  >Done</button>
                </div>
              </template>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- ── Loading / Coming Soon overlay (covers NavBar + Footer) ── -->
    <Teleport to="body">
      <Transition name="overlay-fade">
        <div
          v-if="loginState !== 'idle'"
          class="fixed inset-0 z-[200] overflow-hidden bg-whiteBase"
        >
          <!-- Big ambient orbs, one per corner -->
          <div class="orb orb-tl" />
          <div class="orb orb-tr" />
          <div class="orb orb-bl" />
          <div class="orb orb-br" />

          <!-- Content: loading → coming soon -->
          <div class="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
            <Transition name="content-swap" mode="out-in">

              <!-- Loading state -->
              <div v-if="loginState === 'loading'" key="loading" class="flex flex-col items-center gap-8">
                <img src="/logo-driftcore.svg" alt="DriftCore" class="logo-pulse h-28 w-auto sm:h-36" />
                <div class="flex gap-2.5" aria-label="Loading" role="status">
                  <span class="dot dot-1" />
                  <span class="dot dot-2" />
                  <span class="dot dot-3" />
                </div>
              </div>

              <!-- Coming soon state -->
              <div v-else key="done" class="flex flex-col items-center gap-6">
                <img src="/logo-driftcore.svg" alt="DriftCore" class="h-20 w-auto opacity-80 sm:h-24" />
                <div class="flex flex-col gap-3">
                  <h2 class="font-heading text-h2 text-navy">Coming soon</h2>
                  <p class="mx-auto max-w-sm font-body text-body text-slateBlue">
                    The app is on its way. We'll let you know as soon as it's ready.
                  </p>
                </div>
                <router-link
                  to="/"
                  class="font-body text-sm font-medium text-navy underline underline-offset-4
                         transition-colors hover:text-slateBlue"
                >
                  ← Back to home
                </router-link>
              </div>

            </Transition>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import {
  Dialog, DialogPanel, DialogTitle,
  TransitionRoot, TransitionChild,
} from '@headlessui/vue'
import AuthBrandingPanel from '../components/common/AuthBrandingPanel.vue'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const form   = reactive({ email: '', password: '' })
const errors = reactive({ email: '', password: '' })

// Clear field errors as the user types
watch(() => form.email,    () => { if (errors.email)    errors.email    = '' })
watch(() => form.password, () => { if (errors.password) errors.password = '' })

// 'idle' → 'loading' → 'done'
const loginState = ref('idle')

function validateLogin() {
  errors.email = errors.password = ''
  let ok = true

  if (!form.email) {
    errors.email = 'Email is required.'; ok = false
  } else if (!EMAIL_RE.test(form.email)) {
    errors.email = 'Please enter a valid email address.'; ok = false
  }

  if (!form.password) {
    errors.password = 'Password is required.'; ok = false
  }

  return ok
}

function handleLogin() {
  if (!validateLogin()) return
  loginState.value = 'loading'
  // TODO: replace timeout with real auth call; set loginState = 'done' on success/failure
  setTimeout(() => { loginState.value = 'done' }, 2000)
}

// Forgot password
const forgotOpen = ref(false)
const resetEmail = ref('')
const resetSent  = ref(false)

function openForgot() {
  resetEmail.value = form.email
  resetSent.value  = false
  forgotOpen.value = true
}
function closeForgot() { forgotOpen.value = false }
function handleReset()  {
  // TODO: connect to backend password-reset endpoint
  resetSent.value = true
}
</script>

<style scoped>
/* ── Overlay fade in/out ── */
.overlay-fade-enter-active,
.overlay-fade-leave-active { transition: opacity 0.35s ease; }
.overlay-fade-enter-from,
.overlay-fade-leave-to      { opacity: 0; }

/* ── Content swap (loading ↔ coming soon) ── */
.content-swap-enter-active { transition: opacity 0.45s ease, transform 0.45s ease; }
.content-swap-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.content-swap-enter-from   { opacity: 0; transform: translateY(20px); }
.content-swap-leave-to     { opacity: 0; transform: translateY(-20px); }

/* ── Ambient orbs ── */
.orb {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
}
.orb-tl {
  top: -8rem; left: -8rem;
  width: 44rem; height: 44rem;
  background: rgba(219, 231, 255, 0.55); /* paleBlue */
  filter: blur(140px);
  animation: orb-drift 14s ease-in-out infinite;
}
.orb-tr {
  top: -8rem; right: -8rem;
  width: 40rem; height: 40rem;
  background: rgba(84, 201, 235, 0.20); /* brightBlue */
  filter: blur(150px);
  animation: orb-drift 17s ease-in-out infinite reverse;
}
.orb-bl {
  bottom: -8rem; left: -8rem;
  width: 38rem; height: 38rem;
  background: rgba(74, 93, 135, 0.16); /* slateBlue */
  filter: blur(130px);
  animation: orb-drift 20s ease-in-out infinite 2s;
}
.orb-br {
  bottom: -8rem; right: -8rem;
  width: 42rem; height: 42rem;
  background: rgba(127, 140, 191, 0.20); /* softBlue */
  filter: blur(160px);
  animation: orb-drift 16s ease-in-out infinite 1s reverse;
}

@keyframes orb-drift {
  0%, 100% { transform: translate(0, 0)     scale(1);    }
  33%       { transform: translate(28px, 40px) scale(1.07); }
  66%       { transform: translate(-18px, 18px) scale(0.94); }
}

/* ── Logo breathing animation ── */
.logo-pulse { animation: logo-float 2.6s ease-in-out infinite; }
@keyframes logo-float {
  0%, 100% { transform: scale(1);     opacity: 0.85; }
  50%       { transform: scale(1.04); opacity: 1;    }
}

/* ── Loading dots ── */
.dot {
  display: block;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 9999px;
  background: rgba(33, 51, 69, 0.30);
}
.dot-1 { animation: dot-bounce 1.2s ease-in-out infinite 0s;    }
.dot-2 { animation: dot-bounce 1.2s ease-in-out infinite 0.18s; }
.dot-3 { animation: dot-bounce 1.2s ease-in-out infinite 0.36s; }

@keyframes dot-bounce {
  0%, 80%, 100% { transform: scale(0.65); opacity: 0.35; }
  40%           { transform: scale(1.2);  opacity: 1;    }
}

@media (prefers-reduced-motion: reduce) {
  .orb, .logo-pulse, .dot-1, .dot-2, .dot-3 { animation: none !important; }
}
</style>