<template>
  <section class="bg-cream px-6 py-14 lg:py-20">
    <div class="mx-auto max-w-7xl rounded-xl bg-blue-light px-8 py-14 lg:py-20">
      <div class="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">

        <!-- Left: heading + paragraph -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -24 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="text-center lg:text-left lg:w-1/2"
        >
          <h2 class="font-heading text-h2 leading-tight text-navy">Reach us directly</h2>
          <p class="mt-4 font-body text-body text-navy">
            Whether you have a question, need a custom feature, or just want to say hello —
            our team is available and happy to help.
          </p>
        </div>

        <!-- Right: contact details -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 24 }"
          :visible-once="{ opacity: 1, x: 0, transition: { delay: 150, duration: 600 } }"
          class="flex flex-col gap-6 lg:w-1/2"
        >
          <div class="flex items-center gap-4 justify-center lg:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 shrink-0 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
            </svg>
            <span class="font-body text-h4 text-navy">hello@driftcore.dk</span>
          </div>

          <div class="flex items-center gap-4 justify-center lg:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 shrink-0 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span class="font-body text-h4 text-navy">Esbjerg, Denmark</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>