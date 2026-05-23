<template>
  <section class="relative isolate overflow-hidden text-navy">

    <div class="relative z-10 lg:min-h-[calc(100vh-8rem)] mx-auto grid max-w-7xl items-center gap-2 px-6 py-10 md:gap-4 lg:grid-cols-2 lg:gap-6 lg:py-16">
        
        <!-- LEFT COLUMN: Text content - delayed until after logo -->
        <div class="flex flex-col gap-4 px-4 lg:pl-6 text-center lg:text-left">
          <h1
          v-motion
          :initial="{ opacity: 0, x: -36 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 900, duration: 600 } }"
          class="font-heading text-h1 leading-hero-copy text-navy mb-2 lg:mb-4"
          >
          Drift through your workday
          </h1>
          
          <p
          v-motion
          :initial="{ opacity: 0, x: -36 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 1050, duration: 600 } }"
          class="font-body text-h5 leading-hero-copy text-navy/80"
          >
          The smooth, low-friction time tracker for teams who want to get back to work.
          </p>
          
          <p
          v-motion
          :initial="{ opacity: 0, x: -36 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 1150, duration: 600 } }"
          class="font-body text-h5 leading-hero-copy text-slateBlue"
          >
          Essential features. No bloat. Start free.
          </p>
          
          <div
          v-motion
          :initial="{ opacity: 0, x: -36 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 1300, duration: 600 } }"
          class="flex flex-col items-center gap-3 pt-4 lg:items-start"
          >
            <router-link
                to="/signup"
                class="inline-block rounded-xl bg-navy px-10 py-4 font-body font-semibold text-base text-whiteBase shadow-2xl transition duration-300 hover:scale-105 hover:bg-brightBlue hover:text-navy"
            >
                Get started
            </router-link>

            <p class="font-body text-sm text-navy/80">
                14-day free trial · No credit card required
            </p>
            </div>
        </div>

        <!-- RIGHT COLUMN: Logo appears FIRST -->
        <div class="flex flex-col items-center gap-2 lg:gap-6">
            
          <!-- LOGO: Hero entrance - starts BIG, scales down -->
          <div class="logo-float flex items-center justify-center p-2 sm:p-4">
              <img 
              v-motion
              :initial="{ opacity: 0, scale: 2.1 }"
              :enter="{ opacity: 1, scale: 1, transition: { delay: 0, duration: 900 } }"
              :src="Logo" 
              alt="DriftCore" 
              class="h-20 w-auto sm:h-28 lg:h-36" 
              />
          </div>

          <!-- CARDS: Appear with logo (small delay for nice overlap) -->
          <HeroCards />
        </div>

    </div>
  </section>
</template>

<script setup>
import Logo from '/logo-driftcore.svg'
import HeroCards from './HeroCards.vue'
</script>

<style scoped>
/* Desktop only: ambient orb + logo drift animations */
@media (min-width: 1024px) {
  .ambient-orb-one {
    animation: orb-drift 18s ease-in-out infinite, orb-color-pulse-1 12s ease-in-out infinite;
  }

  .ambient-orb-two {
    animation: orb-drift-alt 20s ease-in-out infinite, orb-color-pulse-2 14s ease-in-out infinite;
  }

  .logo-float {
    animation: logo-drift 6s ease-in-out infinite;
  }
}

@keyframes logo-drift {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@media (prefers-reduced-motion: reduce) {
  .ambient-orb-one,
  .ambient-orb-two,
  .logo-float {
    animation: none !important;
  }
}
</style>