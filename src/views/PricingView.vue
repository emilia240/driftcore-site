<template>
  <HeroSection
    title="Simple Pricing"
    subtitle="Pick a plan, try it free for 14 days. Cancel any time."
  />

  <div class="mx-auto px-6 py-8 lg:py-10 flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:items-stretch">
    <PricingCard
      planName="Basic"
      price="39 kr."
      :features="['Time tracking', 'Projects', 'Customers', '14-day free trial']"
    />
    <PricingCard
      planName="Pro"
      price="79 kr."
      :features="['Everything in Basic', 'Time approvals', 'Reporting & invoicing', 'Free onboarding', '14-day free trial']"
      :highlighted="true"
    />
    <PricingCard
      planName="Enterprise"
      price="Contact us"
      priceNote=""
      :features="['Everything in Pro', 'Custom development', 'Free onboarding', 'Priority support']"
      ctaLabel="Contact us"
    />
  </div>

  <p class="mx-6 my-6 rounded-xl bg-brightBlue/60 px-6 py-4 text-center font-body text-body text-navy lg:mx-auto lg:my-12 lg:max-w-4xl">
  Onboarding available as a paid add-on for Basic. Included in Pro & Enterprise.
  </p>

  <CalculatorPricing />
</template>

<script setup>
import HeroSection        from '../components/common/HeroSection.vue'
import PricingCard        from '../components/common/PricingCard.vue'
import CalculatorPricing  from '../components/sections/CalculatorPricing.vue'
</script>