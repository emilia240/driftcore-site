<template>
  <section class="relative isolate overflow-hidden text-navy">

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

</style>