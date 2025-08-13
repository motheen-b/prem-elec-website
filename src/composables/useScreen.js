import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useScreen(breakpoint = 768) {
  const width = ref(window.innerWidth)

  const updateSize = () => {
    width.value = window.innerWidth
  }

  const isMobile = computed(() => width.value < breakpoint)

  onMounted(() => {
    window.addEventListener('resize', updateSize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateSize)
  })

  return { width, isMobile }
}
