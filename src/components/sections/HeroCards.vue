<template>
  <div
    v-motion
    :initial="{ opacity: 0, x: -28 }"
    :enter="{ opacity: 1, x: 0, transition: { delay: 1450, duration: 700 } }"
    class="flex flex-wrap items-center justify-center gap-2 sm:gap-4 lg:gap-10"
  >
    <div class="lg:transition-transform lg:duration-300 lg:hover:scale-105">
      <article class="card-drift -rotate-1 flex min-h-[3.5rem] flex-col items-center justify-center gap-1 rounded-lg bg-navy px-6 py-4 text-whiteBase shadow-xl ring-1 ring-brightBlue sm:min-h-[5rem] sm:gap-2 sm:p-3 lg:min-h-[10rem] lg:gap-3 lg:rounded-xl lg:p-4">
        <img :src="HeroHours" alt="" aria-hidden="true" class="h-6 w-6 shrink-0 sm:h-10 sm:w-10 lg:h-16 lg:w-16" />
        <div class="hidden flex-col items-center gap-1 text-center sm:flex">
          <p class="font-heading text-h5 leading-tight">6h tracked</p>
          <p class="text-xs leading-tight">Synced & ready</p>
        </div>
      </article>
    </div>

    <div class="lg:transition-transform lg:duration-300 lg:hover:scale-105">
      <article class="card-drift rotate-2 flex min-h-[3.5rem] flex-col items-center justify-center gap-1 rounded-lg bg-navy px-6 py-4 text-whiteBase shadow-xl ring-1 ring-brightBlue sm:min-h-[5rem] sm:gap-2 sm:p-3 lg:min-h-[10rem] lg:gap-3 lg:rounded-xl lg:p-4">
        <img :src="HeroApprovals" alt="" aria-hidden="true" class="h-6 w-6 shrink-0 sm:h-10 sm:w-10 lg:h-16 lg:w-16" />
        <div class="hidden flex-col items-center gap-1 text-center sm:flex">
          <p class="font-heading text-h5 leading-tight">Week approved</p>
          <p class="text-xs leading-tight">March 11-17</p>
        </div>
      </article>
    </div>

    <div class="lg:transition-transform lg:duration-300 lg:hover:scale-105">
      <article class="card-drift -rotate-2 flex min-h-[3.5rem] flex-col items-center justify-center gap-1 rounded-lg bg-navy px-6 py-4 text-whiteBase shadow-xl ring-1 ring-brightBlue sm:min-h-[5rem] sm:gap-2 sm:p-3 lg:min-h-[10rem] lg:gap-3 lg:rounded-xl lg:p-4">
        <img :src="HeroProject" alt="" aria-hidden="true" class="h-6 w-6 shrink-0 sm:h-10 sm:w-10 lg:h-16 lg:w-16" />
        <div class="hidden flex-col items-center gap-1 text-center sm:flex">
          <p class="font-heading text-h5 leading-tight">4 projects</p>
          <p class="text-xs leading-tight">38h tracked</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import HeroHours     from '../../assets/graphics/hero-hours.svg'
import HeroApprovals from '../../assets/graphics/hero-approvals.svg'
import HeroProject   from '../../assets/graphics/hero-project.svg'
</script>

<style scoped>
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

/* Desktop only: card float animations */
@media (min-width: 1024px) {
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
  .card-drift { animation: none !important; }
}
</style>
