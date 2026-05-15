<template>
  <div id="app" class="flex flex-col min-h-screen">
    <NavBar />

     <main class="flex-grow">
      <router-view />
    </main>

    <router-view />
  </div>
</template>


<script setup>

import NavBar from './components/common/NavBar.vue'

</script>