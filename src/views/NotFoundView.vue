<template>
  <section class="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 text-center">

    <!-- Large 404 number -->
    <p
      v-motion
      :initial="{ opacity: 0, y: -20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="font-heading leading-none text-brightBlue"
      style="font-size: clamp(6rem, 5rem + 5vw, 10rem);"
      aria-hidden="true"
    >
      404
    </p>

    <!-- Heading -->
    <h1
      v-motion
      :initial="{ opacity: 0, y: 16 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 100, duration: 600 } }"
      class="mt-4 font-heading text-h2 leading-tight text-navy"
    >
      Page not found
    </h1>

    <!-- Subtext -->
    <p
      v-motion
      :initial="{ opacity: 0, y: 16 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
      class="mt-4 max-w-md font-body text-body text-navy/70"
    >
      This page doesn't exist yet — it may be coming soon, or the link may be wrong.
    </p>

    <!-- Back home button -->
    <router-link
      v-motion
      :initial="{ opacity: 0, y: 16 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 600 } }"
      to="/"
      class="mt-8 inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3 font-heading text-sm text-whiteBase transition-colors duration-200 hover:bg-slateBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
    >
      <!-- Arrow icon -->
      <svg class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      Back to home
    </router-link>

  </section>
</template>

<script setup>
import { useMeta } from '../composables/useMeta.js'

useMeta({
  title: 'Page Not Found – DriftCore',
  description: 'Sorry, the page you\'re looking for doesn\'t exist. Head back to DriftCore.',
})
</script>
