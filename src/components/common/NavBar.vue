<template>
  <Disclosure 
    as="nav" 
    :class="[
      'sticky top-0 z-50 transition-all duration-300',
      scrolled 
        ? 'bg-whiteBase/95 shadow-md' 
        : 'bg-whiteBase shadow-sm'
    ]"
  >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <!-- Logo (left) -->
            <div class="flex-shrink-0">
            <router-link to="/" class="flex items-center">
                <img 
                src="/logo-driftcore.svg" 
                alt="DriftCore Logo" 
                class="h-14 w-auto"
                />
            </router-link>
            </div>

            <!-- Desktop nav links (center) -->
            <div class="hidden lg:flex flex-1 justify-center">
            <div class="flex space-x-8">
                <router-link
                v-for="link in navigation"
                :key="link.name"
                :to="link.href"
                class="font-body text-navy px-3 py-2 text-base relative group"
                >
                {{ link.name }}
                <!-- Animated underline on hover -->
                <span class="absolute bottom-1 left-0 w-0 h-0.5 bg-navy transition-all duration-300 group-hover:w-full"></span>
                </router-link>
            </div>
            </div>

            <!-- Desktop Log in button (right) -->
            <div class="hidden lg:block">
            <router-link
                to="/login"
                class="font-body font-semibold text-navy px-6 py-2 text-base border-slateBlue border-2 rounded-xl hover:bg-navy hover:text-whiteBase hover:border-navy transition duration-300"
            >
                Log in
            </router-link>
            </div>

            <!-- Mobile menu button (hamburger) -->
            <div class="lg:hidden">
            <DisclosureButton
                @click="toggleMenu"
                class="inline-flex items-center justify-center p-2 rounded-md text-navy focus:outline-none focus:ring-2 focus:ring-inset focus:ring-navy transition-colors"
                :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
            >
                <!-- Hamburger icon -->
                <svg
                v-if="!isMenuOpen"
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <!-- X icon -->
                <svg
                v-else
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </DisclosureButton>
            </div>
        </div>
        </div>
  </Disclosure>

  <!-- OUTSIDE Disclosure, after the closing </Disclosure> tag -->
    <Teleport to="body">
    <!-- Overlay -->
    <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div
        v-if="isMenuOpen"
        @click="closeMenu"
        class="fixed inset-0 bg-paleBlue/60 backdrop-blur-sm z-40 lg:hidden cursor-pointer"
        />
    </Transition>

    <!-- Panel -->
    <Transition
        enter-active-class="transition-transform duration-300 ease-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-300 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
    >
        <div
        v-if="isMenuOpen"
        class="fixed top-0 right-0 h-full w-3/4 md:w-1/3 max-w-sm bg-whiteBase shadow-2xl z-50 lg:hidden"
        >
        <div class="flex flex-col h-full">
            <!-- Close button -->
            <div class="flex justify-end p-1">
            <button
                @click="closeMenu"
                class="p-2 rounded-md text-navy hover:bg-paleBlue transition-colors"
                aria-label="Close menu"
            >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            </div>

            <!-- Nav links -->
            <div class="px-6 pt-6 pb-3 flex flex-col items-center space-y-2">
            <router-link
                v-for="link in navigation"
                :key="link.name"
                :to="link.href"
                @click="closeMenu"
                class="w-full px-4 py-3 rounded-md text-base font-body text-navy hover:bg-paleBlue transition-colors text-center"
            >
                {{ link.name }}
            </router-link>

            <router-link
                to="/login"
                @click="closeMenu"
                class="w-full px-6 py-3 rounded-xl text-center text-base font-body font-semibold text-whiteBase bg-slateBlue"
            >
                Log in
            </router-link>
            </div>

            <!-- Logo -->
            <div class="flex justify-center mt-auto mb-6">
            <img src="/logo-driftcore.svg" alt="DriftCore Logo" class="h-14 w-auto" />
            </div>
        </div>
        </div>
    </Transition>
    </Teleport>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ref, onMounted, onUnmounted, watch } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() { isMenuOpen.value = !isMenuOpen.value }
function closeMenu()  { isMenuOpen.value = false }

watch(isMenuOpen, (val) => {
  document.body.classList.toggle('overflow-hidden', val)
})

// safety cleanup if component unmounts while menu is open
onUnmounted(() => {
  document.body.classList.remove('overflow-hidden')
})

const navigation = [
  { name: 'Home',     href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

// Scroll state for transparency effect
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>