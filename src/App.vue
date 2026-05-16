<template>
  <div id="app" class="flex flex-col min-h-screen">
    <NavBar />

     <main class="flex-grow">
      <router-view />
    </main>

    <Footer />

  </div>
</template>


<script setup>

import NavBar from './components/common/NavBar.vue'
import Footer from './components/common/Footer.vue'

</script>