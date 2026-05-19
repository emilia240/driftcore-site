<template>
  <div id="app" class="relative flex min-h-screen flex-col overflow-hidden bg-cream">
    <!-- Global ambient background -->
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-light/30 via-cream to-blue-soft/20" aria-hidden="true" />
    <div class="ambient-orb ambient-orb-one" aria-hidden="true" />
    <div class="ambient-orb ambient-orb-two" aria-hidden="true" />
    
    <NavBar />
     <main class="relative z-10 flex-grow">
      <router-view />
    </main>
    <Footer />

  </div>
</template>


<script setup>

import NavBar from './components/common/NavBar.vue'
import Footer from './components/common/Footer.vue'

</script>

<style>
.ambient-orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(100px);
  pointer-events: none;
}
.ambient-orb-one {
  top: -6rem; 
  left: -4rem;
  width: 22rem; 
  height: 22rem;
  background: rgba(133, 147, 201, 0.18);
}
.ambient-orb-two {
  top: 45%;
  right: -4rem;
  width: 28rem;
  height: 28rem;
  background: rgba(84, 201, 235, 0.12);
}
@media (min-width: 1024px) {
  .ambient-orb-one {
    animation: orb-drift 18s ease-in-out infinite, orb-color-pulse-1 12s ease-in-out infinite;
  }
  .ambient-orb-two {
    animation: orb-drift-alt 20s ease-in-out infinite, orb-color-pulse-2 14s ease-in-out infinite;
  }
}
@keyframes orb-drift {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(24px, 18px, 0); }
}
@keyframes orb-drift-alt {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(-20px, 22px, 0); }
}
@keyframes orb-color-pulse-1 {
  0%, 100% { background: rgba(133, 147, 201, 0.18); }
  33%       { background: rgba(84, 201, 235, 0.15); }
  66%       { background: rgba(147, 133, 201, 0.16); }
}
@keyframes orb-color-pulse-2 {
  0%, 100% { background: rgba(84, 201, 235, 0.12); }
  50%       { background: rgba(133, 201, 201, 0.14); }
}
@media (prefers-reduced-motion: reduce) {
  .ambient-orb-one, .ambient-orb-two { animation: none !important; }
}
</style>