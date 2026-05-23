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
    <ForgotPasswordDialog
      :open="forgotOpen"
      :initial-email="form.email"
      @close="closeForgot"
    />

    <!-- ── Loading / Coming Soon overlay ── -->
    <AuthLoadingOverlay :state="loginState" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import AuthBrandingPanel from '../components/common/AuthBrandingPanel.vue'
import ForgotPasswordDialog from '../components/common/ForgotPasswordDialog.vue'
import AuthLoadingOverlay from '../components/common/AuthLoadingOverlay.vue'
import { useLoginForm } from '../composables/useLoginForm.js'

const { form, errors, loginState, handleLogin } = useLoginForm()

// Forgot password dialog toggle
const forgotOpen = ref(false)
function openForgot()  { forgotOpen.value = true  }
function closeForgot() { forgotOpen.value = false }
</script>

