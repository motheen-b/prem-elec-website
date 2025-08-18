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
  <Toast />
</template>

<script setup>
import { watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Toast from './components/Toast.vue';
import { useSEO, defaultSEOData } from './composables/useSEO.js'
import { useBreadcrumbs } from './composables/useBreadcrumbs.js'

const route = useRoute()
const { updateMetaTags, setCanonicalUrl } = useSEO()
const { addBreadcrumbsToHead } = useBreadcrumbs()

// Function to update SEO based on route
const updateSEOForRoute = (routeName) => {
  const seoData = defaultSEOData[routeName]
  if (seoData) {
    updateMetaTags(seoData)
    setCanonicalUrl(seoData.url)
    addBreadcrumbsToHead()
  }
}

// Watch for route changes and update SEO
watch(() => route.name, (newRouteName) => {
  if (newRouteName) {
    updateSEOForRoute(newRouteName)
  }
}, { immediate: true })

// Initialize SEO on mount
onMounted(() => {
  const routeName = route.name
  if (routeName) {
    updateSEOForRoute(routeName)
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
</style>