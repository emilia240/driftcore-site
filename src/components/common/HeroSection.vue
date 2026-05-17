<template>
  <section class="relative isolate overflow-hidden bg-cream text-navy">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-light/30 via-cream to-blue-soft/20"></div>
    <div class="ambient-orb ambient-orb-one"></div>
    <div class="ambient-orb ambient-orb-two"></div>

    <div class="relative z-10 flex min-h-[40vh] items-center justify-center px-6 py-16 lg:py-24">
      <div class="mx-auto max-w-3xl text-center">
        <component
          :is="tag"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 700 } }"
          class="font-heading text-h1 leading-tight text-navy"
        >
          {{ title }}
        </component>
        <p
          v-motion
          :initial="{ opacity: 0, y: 18 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 150, duration: 700 } }"
          class="mt-4 font-body text-body text-navy"
        >
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: 'h1',
  },
})
</script>

<style scoped>
.ambient-orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(100px);
  pointer-events: none;
}

.ambient-orb-one {
  top: -6rem;
  left: -4rem;
  width: 22rem;
  height: 22rem;
  background: rgba(133, 147, 201, 0.18);
}

.ambient-orb-two {
  top: 12%;
  right: 8%;
  width: 20rem;
  height: 20rem;
  background: rgba(84, 201, 235, 0.12);
}

@media (prefers-reduced-motion: reduce) {
  .ambient-orb-one,
  .ambient-orb-two {
    animation: none !important;
  }
}
</style>