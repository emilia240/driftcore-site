<template>
  <section class="bg-blue-light text-navy">
    <div class="mx-auto max-w-7xl px-6 py-14 lg:py-20">

      <!-- Heading block -->
      <div class="mx-auto max-w-4xl text-center">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="font-heading text-h2 leading-tight text-navy"
        >
          How it works
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 18 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 150, duration: 600 } }"
          class="mt-4 font-body text-body text-navy"
        >
          Simple steps.
        </p>
      </div>

      <!-- Steps -->
      <div class="mt-12 flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-8 lg:mt-16 lg:gap-12">
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 150, duration: 600 } }"
          class="flex flex-col items-center text-center md:flex-1"
        >
          <img :src="step.icon" :alt="step.title" class="h-28 w-auto" />
          <h3 class="mt-6 font-heading text-h3 leading-tight text-navy">{{ step.title }}</h3>
          <p class="mt-3 font-body text-body text-navy">{{ step.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import Step1 from '../../assets/graphics/step1.svg'
import Step2 from '../../assets/graphics/step2.svg'
import Step3 from '../../assets/graphics/step3.svg'

const steps = [
  {
    title: 'Log time',
    description: 'Log in work hours. Manual entry.',
    icon: Step1,
  },
  {
    title: 'Approve entries',
    description: 'Managers review and sign off on the week.',
    icon: Step2,
  },
  {
    title: 'Generate reports',
    description: 'Export billable hours to invoices in one click.',
    icon: Step3,
  },
]
</script>

<style scoped>
</style>