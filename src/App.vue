<template>
  <Navbar />
  <div class="main-container">
    <header>
    </header>
    <main>
      <router-view />
    </main>
  </div>
  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
</style>