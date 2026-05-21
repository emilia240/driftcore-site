<template>
  <footer class="border-t border-navy/10 bg-whiteBase z-20">
    <div class="mx-auto max-w-6xl px-6 py-12 lg:py-16">

      <!-- 3-column grid -->
      <div class="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

        <!-- Col 1: Left DriftCore brand -->
        <div class="flex flex-col gap-4 md:max-w-xs">
          <p class="font-heading text-h3 text-navy">DriftCore</p>
          <p class="font-body text-sm text-navy/90 max-w-xs">
            The time tracking tool designed for focus and simplicity. No bloat, just performance.
          </p>
        </div>

        <!-- Right: All links -->
        <div class="flex flex-wrap gap-10 md:gap-12">
          <!-- Explore links -->
          <nav aria-label="Explore" class="flex flex-col gap-3">
            <h2 class="font-heading text-h5 text-navy">Explore</h2>
            <ul class="flex flex-col gap-2">
              <li v-for="link in exploreLinks" :key="link.name">
                <router-link :to="link.href" class="font-body text-sm text-navy hover:underline">
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </nav>

          <!-- Company links -->
          <nav aria-label="Company" class="flex flex-col gap-3">
            <h2 class="font-heading text-h5 text-navy">Company</h2>
            <ul class="flex flex-col gap-2">
              <li v-for="link in companyLinks" :key="link.name">
                <router-link :to="link.href" class="font-body text-sm text-navy hover:underline">
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </nav>

          <!-- Built by Sharkware -->
          <div class="flex items-stretch gap-6">
            <!-- Left column: heading + links -->
            <div class="flex flex-col gap-4">
              <h2 class="font-heading text-h5 text-navy">Built by</h2>
              <div class="flex flex-col gap-2">
                <a
                  href="https://sharkware.dk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 font-body text-sm text-navy hover:underline"
                >
                  <!-- Globe icon -->
                  <svg class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
                  </svg>
                  sharkware.dk
                </a>
                <a
                  href="https://www.linkedin.com/company/sharkwaredk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 font-body text-sm text-navy hover:underline"
                >
                  <!-- LinkedIn icon -->
                  <svg class="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
            <!-- Logo, stretches to full height of the left column -->
            <img :src="SharkwareLogo" alt="Sharkware logo" class="h-24 w-auto object-contain" />
          </div>

        </div>


      </div>
    </div>

    <!-- Legal bottom bar -->
    <div class="border-t border-navy/10 px-6 py-5">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <p class="font-body text-xs text-navy/90">© 2026 DriftCore. All rights reserved.</p>
        <nav aria-label="Legal" class="flex gap-4">
          <a href="/privacy" class="font-body text-xs text-slateBlue hover:underline">Privacy Policy</a>
          <a href="/cookies" class="font-body text-xs text-slateBlue hover:underline">Cookies</a>
          <a href="/terms"   class="font-body text-xs text-slateBlue hover:underline">Terms of Service</a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SharkwareLogo from '../../assets/images/sharkware-logo.png'  // ← rename to match your file

const exploreLinks = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing',  href: '/pricing'  },
]
const companyLinks = [
  { name: 'About',   href: '/about'   },
  { name: 'Contact', href: '/contact' },
]
</script>