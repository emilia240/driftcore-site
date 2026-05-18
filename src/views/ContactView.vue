<template>
  <HeroSection 
  title="Get in touch" 
  subtitle="Questions, custom features, or onboarding — we'd love to hear from you." />

  <FormContact/>
  <CompanyContact/>
  <CTASection/>

</template>



<script setup>
import HeroSection from '../components/common/HeroSection.vue'
import CTASection from '../components/common/CTASection.vue'
import FormContact from '../components/sections/FormContact.vue'
import CompanyContact from '../components/sections/CompanyContact.vue'
</script>