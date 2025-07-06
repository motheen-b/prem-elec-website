<template>
  <div class="main-container">
    <header>
      <InfoHeader />
      <Navbar />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import InfoHeader from './components/InfoHeader.vue';
import Navbar from './components/Navbar.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
</style>