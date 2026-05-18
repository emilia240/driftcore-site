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
import HeroSection from '../components/common/HeroSection.vue'
import StoryAbout from '../components/sections/StoryAbout.vue'
import MissionAbout from '../components/sections/MissionAbout.vue'
import CustomisationAbout from '../components/sections/CustomisationAbout.vue'
import OnboardingAbout from '../components/sections/OnboardingAbout.vue'
import CTASection from '../components/common/CTASection.vue'
</script>