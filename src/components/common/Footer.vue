<template>
  <footer class="relative overflow-hidden bg-blue-light text-navy">
    <img
    :src="CyanGraphic"
    alt=""
    aria-hidden="true"
    class="pointer-events-none absolute -translate-x-1/4 left-2 top-8 z-0 w-10 rotate-[120deg] opacity-70 sm:left-4 sm:top-10 sm:w-24 md:left-6 md:top-12 md:w-20 lg:w-24"
    />

    <img
    :src="MutedBlueGraphic"
    alt=""
    aria-hidden="true"
    class="pointer-events-none absolute translate-x-1/4 bottom-2 right-2 z-0 w-24 rotate-[-70deg] opacity-70 sm:bottom-4 sm:right-4 sm:w-32 md:bottom-6 md:right-6 md:w-40 lg:w-48"
    />

    <div class="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-10 pb-4 text-center md:py-16">
      <div class="flex max-w-2xl flex-col items-center gap-4">
        <p class="text-body text-navy">
          The time tracking tool designed for focus and simplicity. No bloat, just performance.
        </p>
      </div>

      <div class="mt-10 grid w-full grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
        <nav aria-label="Explore" class="flex flex-col items-center gap-3">
          <h2 class="font-heading text-h5 text-navy">
            Explore
          </h2>

          <ul class="flex flex-col items-center gap-3">
            <li>
              <router-link
                to="/features"
                class="relative inline-block font-body text-base text-navy transition-colors duration-200 hover:text-blue-muted focus-visible:text-blue-muted focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-blue-muted after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100"
              >
                Features
              </router-link>
            </li>

            <li>
              <router-link
                to="/pricing"
                class="relative inline-block font-body text-base text-navy transition-colors duration-200 hover:text-blue-muted focus-visible:text-blue-muted focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-blue-muted after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100"
              >
                Pricing
              </router-link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Company" class="flex flex-col items-center gap-3">
          <h2 class="font-heading text-h5 text-navy">
            Company
          </h2>

          <ul class="flex flex-col items-center gap-3">
            <li>
              <router-link
                to="/about"
                class="relative inline-block font-body text-base text-navy transition-colors duration-200 hover:text-blue-muted focus-visible:text-blue-muted focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-blue-muted after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100"
              >
                About
              </router-link>
            </li>

            <li>
              <router-link
                to="/contact"
                class="relative inline-block font-body text-base text-navy transition-colors duration-200 hover:text-blue-muted focus-visible:text-blue-muted focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-blue-muted after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </nav>

        <div class="flex flex-col items-center gap-3">
          <h2 class="font-heading text-h5 text-navy">
            Built By Sharks
          </h2>

          <div class="flex flex-col items-center justify-center gap-4">
            <a
              href="https://your-company-site.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Sharks website"
              class="relative inline-block font-body text-base text-navy transition-colors duration-200 hover:text-blue-muted focus-visible:text-blue-muted focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-blue-muted after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100"
            >
              Website
            </a>

            <a
              href="https://www.linkedin.com/company/your-company-name"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Sharks on LinkedIn"
              class="relative inline-block font-body text-base text-navy transition-colors duration-200 hover:text-blue-muted focus-visible:text-blue-muted focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-blue-muted after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>


    <div class="relative z-10 flex flex-col items-center gap-4 px-6 pt-2 pb-8 text-center">
      <p class="text-sm text-navy">
        © 2026 DriftCore. All rights reserved.
      </p>

      <nav
        aria-label="Legal"
        class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
      >
        <a
          href="#"
          aria-label="Read Privacy Policy"
          class="inline-block text-xs text-navy transition-transform duration-200 hover:text-blue-muted focus-visible:text-blue-muted focus-visible:outline-none"
        >
          Privacy Policy
        </a>

        <a
          href="#"
          aria-label="Read Cookies Policy"
          class="inline-block text-xs text-navy transition-transform duration-200 hover:text-blue-muted focus-visible:text-blue-muted focus-visible:outline-none"
        >
          Cookies
        </a>

        <a
          href="#"
          aria-label="Read Terms of Service"
          class="inline-block text-xs text-navy transition-transform duration-200 hover:text-blue-muted focus-visible:text-blue-muted focus-visible:outline-none"
        >
          Terms of Service
        </a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import CyanGraphic from '../../assets/graphics/cyan-graphic.svg'
import MutedBlueGraphic from '../../assets/graphics/muted-blue-graphic.svg'
</script>