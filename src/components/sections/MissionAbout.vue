<template>
  <section class="bg-blue-light text-navy">
    <div class="mx-auto max-w-7xl px-6 py-14 lg:py-20">

      <h2
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="mx-auto max-w-3xl text-center font-heading text-h2 leading-tight text-navy"
      >
        Time tracking should help your team — not spy on it.
      </h2>

      <div class="mt-12 flex flex-col gap-6 lg:flex-row">
        <div
          v-for="(card, index) in cards"
          :key="card.title"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 150, duration: 600 } }"
          class="flex flex-1 items-start gap-6 rounded-xl bg-cream px-8 py-8"
        >
          <img :src="card.icon" :alt="card.title" class="h-16 w-16 shrink-0" />
          <div>
            <h2 class="font-heading text-h3 leading-tight text-navy">{{ card.title }}</h2>
            <p class="mt-3 font-body text-body text-navy">{{ card.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import IconAntiSurveillance from '../../assets/graphics/anti-surveillance.svg'
import IconAntiBloat from '../../assets/graphics/anti-bloat.svg'

const cards = [
  {
    title: 'Anti-surveillance',
    description: "We don't do screenshots, keystroke logging, or webcam tracking. We trust professionals to manage their own time.",
    icon: IconAntiSurveillance,
  },
  {
    title: 'Anti-bloat',
    description: 'Just a high-precision instrument for recording your work sessions. Most tools become heavy over time, adding features until the original purpose is lost. We offer effortless navigation and simplicity.',
    icon: IconAntiBloat,
  },
]
</script>

<style scoped>
</style>