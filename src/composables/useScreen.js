import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useScreen(breakpoint = 768) {
  const width = ref(window.innerWidth)

  const updateSize = () => {
    width.value = window.innerWidth
  }

  // const isMobile = computed(() => width.value < breakpoint)
  const isMobile = computed(() => {
    const uaMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const touchDevice = navigator.maxTouchPoints > 1
    return width.value < breakpoint || uaMobile || touchDevice
  })

  onMounted(() => {
    window.addEventListener('resize', updateSize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateSize)
  })

  return { width, isMobile }
}
