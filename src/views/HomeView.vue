<template>
  <div>
    <HeroHome />
    <FeaturesHome />
    <StepsHome />
    <QuoteHome />
    <DevicesHome />
    <CTASection />
  </div>
</template>

<script setup>
import { useMeta } from '../composables/useMeta.js'
import HeroHome from '../components/sections/HeroHome.vue'

useMeta({
  title: 'Simple Time Tracking for Small Teams',
  description: 'DriftCore is the no-bloat time tracker for focused teams. Track time, projects, and approvals — without the clutter. Start free for 14 days.',
  keywords: 'time tracking for small teams, no-bloat time tracking, simple time tracker, affordable time tracker, team time tracking',
})
import FeaturesHome from '../components/sections/FeaturesHome.vue'
import StepsHome from '../components/sections/StepsHome.vue'
import QuoteHome from '../components/sections/QuoteHome.vue'
import DevicesHome from '../components/sections/DevicesHome.vue'
import CTASection from '../components/common/CTASection.vue'

</script>