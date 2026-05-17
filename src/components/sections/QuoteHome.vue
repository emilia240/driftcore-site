<template>
  <section class="bg-cream text-navy">
    <div class="mx-auto max-w-7xl px-6 py-14 lg:py-20">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">

        <!-- Left: founder image -->
        <div
          v-motion
          :initial="isDesktop ? { opacity: 0, x: -24 } : { opacity: 1, x: 0 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
        >
          <img
            :src="founderPhoto"
            alt="The founder of DriftCore"
            class="w-full rounded-xl object-cover"
          />
        </div>

        <!-- Right: quote -->
        <div
          v-motion
          :initial="isDesktop ? { opacity: 0, x: 24 } : { opacity: 1, x: 0 }"
          :visible-once="{ opacity: 1, x: 0, transition: { delay: 150, duration: 600 } }"
          class="flex flex-col justify-center text-center lg:text-left"
        >
          <h2 class="font-heading text-h2 leading-tight text-navy">
            No bloated features. No micromanagement. Just the tools you need.
          </h2>
          <p class="mt-6 font-body text-body text-navy">
            We removed the noise so you can focus on the work that actually matters.
            Traditional apps are bloated with features you never use. DriftCore is built
            for the teams that just want to track time and get back to work. No screen
            tracking, no keystroke monitoring. Just honest time tracking.
          </p>
          <p class="mt-8 font-body text-body text-blue-muted">
            — Rimon Bassem Hanna Issa, Founder of DriftCore
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import founderPhoto from '../../assets/images/Rimon.jpg'

const isDesktop = ref(false)

function checkBreakpoint() {
  isDesktop.value = window.innerWidth >= 1024
}

onMounted(() => {
  checkBreakpoint()
  window.addEventListener('resize', checkBreakpoint)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkBreakpoint)
})
</script>

<style scoped>
</style>