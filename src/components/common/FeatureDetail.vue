<template>
  <section>
    <div class="mx-auto max-w-7xl px-6 py-8 lg:py-10">
      <div
        class="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16"
        :class="imagePosition === 'right' ? 'lg:flex-row-reverse' : ''"
      >

        <!-- Icon panel -->
        <div
          v-motion
          :initial="{ opacity: 0, x: imagePosition === 'right' ? 24 : -24 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="flex w-full items-center justify-center lg:w-1/2"
        >
          <div class="flex w-full items-center justify-center rounded-xl bg-navy p-12">
            <img :src="icon" :alt="title" class="h-auto w-[65%]" />
          </div>
        </div>

        <!-- Text block -->
        <div
          v-motion
          :initial="{ opacity: 0, x: imagePosition === 'right' ? -24 : 24 }"
          :visible-once="{ opacity: 1, x: 0, transition: { delay: 150, duration: 600 } }"
          class="flex w-full flex-col lg:w-1/2 text-navy"
        >
          <h2 class="font-heading text-h2 leading-tight">{{ title }}</h2>
          <p class="mt-4 font-body text-body">{{ description }}</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imagePosition: {
    type: String,
    default: 'left',
  },
})
</script>

<style scoped>
</style>