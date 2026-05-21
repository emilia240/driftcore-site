<template>
  <section class="bg-navy py-16 md:py-24">
    <div class="container mx-auto px-6 max-w-4xl">
      <!-- Centered content with flex -->
      <div class="flex flex-col items-center space-y-8">
        <!-- Heading -->
        <h2 class="text-h2 font-heading text-whiteBase text-center">
          Ready to track time without the headache?
        </h2>
        
        <!-- Subtitle -->
        <p class="text-body text-whiteBase opacity-90 text-center">
          Free for 14 days. No credit card required.
        </p>
        
        <!-- Checklist -->
        <ul class="space-y-4 max-w-2xl w-full flex flex-col items-center">
          <li 
            v-for="item in features" 
            :key="item"
            class="flex items-center gap-3 text-brightBlue text-body"
          >
            <!-- Check icon -->
            <img 
              :src="CheckIcon" 
              alt="Check" 
              class="w-4 h-auto flex-shrink-0"
            />
            <p class="flex">
              {{ item }}
            </p>
          </li>
        </ul>
        
        <!-- CTA Button -->
        <div class="pt-4">
          <router-link
            to="/signup"
            class="flex bg-brightBlue text-navy font-body font-semibold px-8 py-4 rounded-xl hover:bg-whiteBase hover:text-navy transition-all duration-200"
          >
            Get started for free
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CheckIcon from '../../assets/graphics/check-icon-brightBlue.svg'

const features = [
  'No steep learning curves',
  'No complex configurations',
  'No bloated features',
  'No micromanagement'
]
</script>