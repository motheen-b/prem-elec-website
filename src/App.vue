<template>
  <Navbar />
  <div class="main-container">
    <header>
      <!-- <InfoHeader /> -->
      <!-- <Navbar /> -->
    </header>
    <main>
      <router-view />
    </main>
    <!-- <Footer /> -->
  </div>
  <InfoFooter />
</template>

<script setup>
import InfoHeader from './components/InfoHeader.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Foot.vue';
import InfoFooter from './components/InfoFooter.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
</style>