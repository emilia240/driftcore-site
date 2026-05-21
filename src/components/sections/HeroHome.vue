<template>
  <section class="relative isolate overflow-hidden text-navy">

    <div class="relative z-10 lg:min-h-[calc(100vh-8rem)] mx-auto grid max-w-8xl items-center gap-2 px-6 py-10 md:gap-4 lg:grid-cols-2 lg:gap-6 lg:py-16">
        
        <!-- LEFT COLUMN: Text content - delayed until after logo -->
        <div class="flex flex-col gap-4 px-4 lg:pl-6 text-center lg:text-left">
          <h1
          v-motion
          :initial="{ opacity: 0, x: -36 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 1100, duration: 700 } }"
          class="font-heading text-h1 leading-hero-copy text-navy mb-2 lg:mb-4"
          >
          Drift through your workday
          </h1>
          
          <p
          v-motion
          :initial="{ opacity: 0, x: -36 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 1250, duration: 700 } }"
          class="font-body text-h5 leading-hero-copy text-navy/80"
          >
          The smooth, low-friction time tracker for teams who want to get back to work.
          </p>
          
          <p
          v-motion
          :initial="{ opacity: 0, x: -36 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 1350, duration: 700 } }"
          class="font-body text-h5 leading-hero-copy text-slateBlue"
          >
          Essential features. No bloat. Start free.
          </p>
          
          <div
          v-motion
          :initial="{ opacity: 0, x: -36 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 1500, duration: 700 } }"
          class="flex flex-col items-center gap-3 pt-4 lg:items-start"
          >
            <router-link
                to="/signup"
                class="inline-block rounded-xl bg-navy px-10 py-4 font-body text-base text-whiteBase shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-slateBlue"
            >
                Get started
            </router-link>

            <p class="font-body text-sm text-navy/60">
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
              :enter="{ opacity: 1, scale: 1, transition: { delay: 0, duration: 1100 } }"
              :src="Logo" 
              alt="DriftCore" 
              class="h-20 w-auto sm:h-28 lg:h-36" 
              />
          </div>

          <!-- CARDS: Appear with logo (small delay for nice overlap) -->
          <div 
          v-motion
          :initial="{ opacity: 0, x: -28 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 1700, duration: 800 } }"
          class="flex flex-wrap items-center justify-center gap-2 sm:gap-4 lg:gap-10"
          >
                <article class="card-drift -rotate-1 flex min-h-[3.5rem] flex-col items-center justify-center gap-1 rounded-lg bg-navy px-6 py-4 text-whiteBase shadow-xl ring-1 ring-brightBlue sm:min-h-[5rem] sm:gap-2 sm:p-3 lg:min-h-[10rem] lg:gap-3 lg:rounded-xl lg:p-4">
                    <img :src="HeroHours" alt="" aria-hidden="true" class="h-6 w-6 shrink-0 sm:h-10 sm:w-10 lg:h-16 lg:w-16" />
                    <div class="hidden flex-col items-center gap-1 text-center sm:flex">
                        <p class="font-heading text-h5 leading-tight">6h tracked</p>
                        <p class="text-xs leading-tight">Synced & ready</p>
                    </div>
                </article>
                
                <article class="card-drift rotate-2 flex min-h-[3.5rem] flex-col items-center justify-center gap-1 rounded-lg bg-navy px-6 py-4 text-whiteBase shadow-xl ring-1 ring-brightBlue sm:min-h-[5rem] sm:gap-2 sm:p-3 lg:min-h-[10rem] lg:gap-3 lg:rounded-xl lg:p-4">
                    <img :src="HeroApprovals" alt="" aria-hidden="true" class="h-6 w-6 shrink-0 sm:h-10 sm:w-10 lg:h-16 lg:w-16" />
                    <div class="hidden flex-col items-center gap-1 text-center sm:flex">
                        <p class="font-heading text-h5 leading-tight">Week approved</p>
                        <p class="text-xs leading-tight">March 11-17</p>
                    </div>
                </article>
                
                <article class="card-drift -rotate-2 flex min-h-[3.5rem] flex-col items-center justify-center gap-1 rounded-lg bg-navy px-6 py-4 text-whiteBase shadow-xl ring-1 ring-brightBlue sm:min-h-[5rem] sm:gap-2 sm:p-3 lg:min-h-[10rem] lg:gap-3 lg:rounded-xl lg:p-4">
                    <img :src="HeroProject" alt="" aria-hidden="true" class="h-6 w-6 shrink-0 sm:h-10 sm:w-10 lg:h-16 lg:w-16" />
                    <div class="hidden flex-col items-center gap-1 text-center sm:flex">
                        <p class="font-heading text-h5 leading-tight">4 projects</p>
                        <p class="text-xs leading-tight">38h tracked</p>
                    </div>
                </article>
            </div>
        </div>

    </div>
  </section>
</template>

<script setup>
import HeroHours from '../../assets/graphics/hero-hours.svg'
import HeroApprovals from '../../assets/graphics/hero-approvals.svg'
import HeroProject from '../../assets/graphics/hero-project.svg'
import Logo from '/logo-driftcore.svg'
</script>

<style scoped>
/* ONLY animations*/

/* Animated brightBlue border glow */
.card-drift {
  animation: border-glow 3s ease-in-out infinite;
}

@keyframes border-glow {
  0%, 100% {
    box-shadow: 0 0 0 rgba(84, 201, 235, 0),
                0 18px 38px rgba(33, 51, 69, 0.14);
  }
  50% {
    box-shadow: 0 0 12px rgba(84, 201, 235, 0.6),
                0 18px 38px rgba(33, 51, 69, 0.14);
  }
}

/* Desktop only: drift animations */
@media (min-width: 1024px) {
  .ambient-orb-one {
    animation: orb-drift 18s ease-in-out infinite, orb-color-pulse-1 12s ease-in-out infinite;
  }

  .ambient-orb-two {
    animation: orb-drift-alt 20s ease-in-out infinite, orb-color-pulse-2 14s ease-in-out infinite;
  }

  .card-drift:nth-child(1) {
    animation: card-float-1 7s ease-in-out infinite, border-glow 3s ease-in-out infinite;
  }

  .card-drift:nth-child(2) {
    animation: card-float-2 8s ease-in-out infinite, border-glow 3s ease-in-out infinite;
  }

  .card-drift:nth-child(3) {
    animation: card-float-3 9s ease-in-out infinite, border-glow 3s ease-in-out infinite;
  }

  .card-drift:nth-child(4) {
    animation: card-float-4 7.5s ease-in-out infinite, border-glow 3s ease-in-out infinite;
  }

  .card-drift:nth-child(5) {
    animation: card-float-5 8.5s ease-in-out infinite, border-glow 3s ease-in-out infinite;
  }
}

@keyframes card-float-1 {
  0%, 100% { transform: rotate(-1deg) translateY(0); }
  50% { transform: rotate(-1deg) translateY(-8px); }
}

@keyframes card-float-2 {
  0%, 100% { transform: rotate(2deg) translateY(0); }
  50% { transform: rotate(2deg) translateY(-8px); }
}

@keyframes card-float-3 {
  0%, 100% { transform: rotate(-2deg) translateY(0); }
  50% { transform: rotate(-2deg) translateY(-8px); }
}

@keyframes card-float-4 {
  0%, 100% { transform: rotate(1deg) translateY(0); }
  50% { transform: rotate(1deg) translateY(-8px); }
}

@keyframes card-float-5 {
  0%, 100% { transform: rotate(-1deg) translateY(0); }
  50% { transform: rotate(-1deg) translateY(-8px); }
}

@media (prefers-reduced-motion: reduce) {
  .card-drift,
  .ambient-orb-one,
  .ambient-orb-two,
  .logo-float {
    animation: none !important;
  }
}

/* Logo float animation */
@media (min-width: 1024px) {
  .logo-float {
    animation: logo-drift 6s ease-in-out infinite;
  }
}

@keyframes logo-drift {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
</style>