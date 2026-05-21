<template>
  <section>
    <div class="mx-auto max-w-7xl px-6 py-14 lg:py-24">

      <div class="mx-auto max-w-3xl text-center">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="font-heading text-h2 leading-tight text-navy"
        >
          Onboarding & Success
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 18 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 150, duration: 600 } }"
          class="mt-4 font-body text-body text-navy"
        >
          Our guided sessions ensure immediate ROI and team adoption.
        </p>
      </div>

      <div class="mt-12 flex flex-col gap-6 lg:mt-16 lg:flex-row">
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 150, duration: 600 } }"
          class="flex flex-1 items-start gap-6 rounded-xl bg-whiteBase border border-brightBlue/90 px-10 py-10"
        >
          <img :src="step.icon" :alt="step.title" class="h-16 w-auto shrink-0" />
          <div>
            <h3 class="font-heading text-h3 leading-tight text-navy">{{ step.title }}</h3>
            <p class="mt-3 font-body text-body text-navy">{{ step.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import Step1 from '../../assets/graphics/step1.svg'
import Step2 from '../../assets/graphics/step2.svg'

const steps = [
  {
    title: 'Environment setup',
    description: 'Configuring projects and billing rates for your organization.',
    icon: Step1,
  },
  {
    title: 'Integration sync',
    description: 'Connecting your current stack (Jira, Slack) with DriftCore.',
    icon: Step2,
  },
]
</script>

<style scoped>
</style>