<template>
  <HeroSection 
  title="About DriftCore" 
  subtitle="Built for teams who want to track hours — not be tracked." />
  <StoryAbout/>
  <MissionAbout/>
  <CustomisationAbout/>
  <OnboardingAbout/>
  <CTASection/>
</template>

<script setup>
import { useMeta } from '../composables/useMeta.js'
import HeroSection from '../components/common/HeroSection.vue'

useMeta({
  title: 'About DriftCore – Built for Focused Teams',
  description: 'DriftCore was built to give small teams a clean, simple time tracking experience. Learn about our mission and the team behind the product.',
  keywords: 'DriftCore about, time tracking for small teams, simple time tracker story',
})
import StoryAbout from '../components/sections/StoryAbout.vue'
import MissionAbout from '../components/sections/MissionAbout.vue'
import CustomisationAbout from '../components/sections/CustomisationAbout.vue'
import OnboardingAbout from '../components/sections/OnboardingAbout.vue'
import CTASection from '../components/common/CTASection.vue'
</script>