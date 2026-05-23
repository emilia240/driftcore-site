<template>
  <aside class="hidden lg:block lg:sticky lg:top-24">
    <div
      class="flex aspect-[4/5] flex-col items-center justify-center gap-8
             rounded-xl bg-navy px-6 shadow-lg"
    >
      <!-- Tagline -->
      <p class="font-heading text-h3 text-center leading-tight text-paleBlue">
        Everything you need.<br />Nothing you don't.
      </p>

      <!-- Checklist -->
      <ul class="flex flex-col gap-3">
        <li
          v-for="item in brandingFeatures"
          :key="item"
          class="flex items-center gap-3 font-body text-sm text-brightBlue"
        >
          <img :src="CheckIcon" alt="" aria-hidden="true" class="h-4 w-auto shrink-0" />
          {{ item }}
        </li>
      </ul>

      <!-- Bright Blue logo -->
      <img :src="BrightBlueLogo" alt="DriftCore" class="w-44 h-auto" />
    </div>
  </aside>
</template>

<script setup>
import BrightBlueLogo from '../../assets/graphics/Logo-brightBlue.svg'
import CheckIcon from '../../assets/graphics/check-icon-brightBlue.svg'

const brandingFeatures = [
  'No steep learning curves',
  'No complex configurations',
  'No bloated features',
  'No micromanagement',
]
</script>
