<template>
  <TransitionRoot :show="open" as="template">
    <Dialog as="div" class="relative z-50" @close="$emit('close')">
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

            <!-- ── Step 1: Enter email ── -->
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
                  type="button"
                  @click="$emit('close')"
                  class="flex-1 rounded-xl border border-navy/20 px-4 py-3 font-body text-sm
                         text-navy transition-colors hover:bg-paleBlue/30"
                >Cancel</button>
                <button
                  type="button"
                  @click="handleReset"
                  class="flex-1 rounded-xl bg-navy px-4 py-3 font-body font-semibold text-sm text-whiteBase
                         transition duration-300 hover:bg-slateBlue"
                >Send reset link</button>
              </div>
            </template>

            <!-- ── Step 2: Confirmation ── -->
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
                  type="button"
                  @click="$emit('close')"
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
</template>

<script setup>
import { ref, watch } from 'vue'
import {
  Dialog, DialogPanel, DialogTitle,
  TransitionRoot, TransitionChild,
} from '@headlessui/vue'

const props = defineProps({
  open:         { type: Boolean, required: true },
  initialEmail: { type: String,  default: ''    },
})

defineEmits(['close'])

const resetEmail = ref(props.initialEmail)
const resetSent  = ref(false)

// Seed email and reset state each time the dialog opens
watch(() => props.open, (val) => {
  if (val) {
    resetEmail.value = props.initialEmail
    resetSent.value  = false
  }
})

function handleReset() {
  // TODO: connect to backend password-reset endpoint
  resetSent.value = true
}
</script>
