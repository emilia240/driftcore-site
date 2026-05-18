<template>
  <section class="bg-cream">

    <!-- Success toast -->
    <Transition name="toast">
      <div
        v-if="showSuccess"
        class="fixed top-6 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-navy px-10 py-6 font-body text-base text-cream shadow-2xl"
      >
        Message sent! We'll get back to you soon.
      </div>
    </Transition>

    <div class="mx-auto max-w-7xl px-6 py-14 lg:py-20">
      <div class="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12">

        <!-- Left: Form -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -24 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="lg:w-1/2"
        >
          <form
            @submit.prevent="handleSubmit"
            class="flex h-full flex-col gap-6 rounded-xl bg-blue-light px-8 py-10"
          >
            <!-- Name -->
            <div class="flex flex-col gap-2">
              <label for="name" class="font-body text-body font-semibold text-navy">Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Your full name"
                required
                class="rounded-xl border border-navy/20 bg-white px-4 py-3 font-body text-body text-navy placeholder:text-navy/40 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
              />
            </div>

            <!-- Email -->
            <div class="flex flex-col gap-2">
              <label for="email" class="font-body text-body font-semibold text-navy">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="you@company.com"
                required
                class="rounded-xl border border-navy/20 bg-white px-4 py-3 font-body text-body text-navy placeholder:text-navy/40 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
              />
            </div>

            <!-- Message -->
            <div class="flex flex-1 flex-col gap-2">
              <label for="message" class="font-body text-body font-semibold text-navy">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                placeholder="Tell us what you need..."
                required
                rows="6"
                class="flex-1 resize-none rounded-xl border border-navy/20 bg-white px-4 py-3 font-body text-body text-navy placeholder:text-navy/40 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
              />
            </div>

            <!-- Submit -->
            <button
              type="submit"
              class="mt-2 rounded-xl bg-navy px-8 py-4 font-body text-base text-cream shadow-md transition-all duration-300 hover:scale-105 hover:bg-blue-muted"
            >
              Send message
            </button>
          </form>
        </div>

        <!-- Right: Dev team photo -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 24 }"
          :visible-once="{ opacity: 1, x: 0, transition: { delay: 150, duration: 600 } }"
          class="lg:w-1/2"
        >
          <img
            :src="TeamPhoto"
            alt="DriftCore development team"
            class="h-full w-full rounded-xl object-cover object-top"
          />
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import TeamPhoto from '../../assets/images/Team-Sharkware.jpg'

const form = ref({ name: '', email: '', message: '' })
const showSuccess = ref(false)

function handleSubmit() {
  showSuccess.value = true
  setTimeout(() => {
    window.location.reload()
  }, 2800)
}
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-12px);
}
</style>