<template>
  <section>
    <div class="mx-auto max-w-7xl px-6 py-14 lg:py-24">
      <div class="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

        <!-- Left: icon + CTA -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -24 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="flex flex-col items-center gap-8 lg:w-1/3 order-2 lg:order-1"
        >
          <img :src="IconCustom" alt="Customisation" class="h-32 w-auto" />
          <router-link
            to="/contact"
            class="rounded-xl bg-navy px-10 py-4 font-body text-base text-whiteBase shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-slateBlue"
          >
            Contact developers
          </router-link>
        </div>

        <!-- Right: text -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 24 }"
          :visible-once="{ opacity: 1, x: 0, transition: { delay: 150, duration: 600 } }"
          class="flex flex-col lg:w-2/3 order-1 lg:order-2 text-center lg:text-left"
        >
          <h2 class="font-heading text-h2 leading-tight text-navy">We offer customisation</h2>
          <p class="mt-4 font-body text-h4 text-navy">Need a custom feature? We build it for you.</p>
          <p class="mt-4 font-body text-body text-navy">
            Unlike mass-market tools that ignore user feedback, we operate as a boutique development
            partner for our clients. If your workflow requires a specific integration or a bespoke
            UI element, our dev team is ready to craft it exclusively for your account.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import IconCustom from '../../assets/graphics/customisation.svg'
</script>

<style scoped>
</style>