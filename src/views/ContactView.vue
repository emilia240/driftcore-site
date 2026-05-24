<template>
  <HeroSection 
  title="Get in touch" 
  subtitle="Questions, custom features, or onboarding — we'd love to hear from you." />

  <FormContact/>
  <CompanyContact/>
  <CTASection/>

</template>



<script setup>
import { useMeta } from '../composables/useMeta.js'
import HeroSection from '../components/common/HeroSection.vue'

useMeta({
  title: 'Contact Us – DriftCore',
  description: 'Have a question or want to learn more about DriftCore? Reach out to our team — we\'re happy to help.',
  keywords: 'contact DriftCore, time tracker support',
})
import CTASection from '../components/common/CTASection.vue'
import FormContact from '../components/sections/FormContact.vue'
import CompanyContact from '../components/sections/CompanyContact.vue'
</script>