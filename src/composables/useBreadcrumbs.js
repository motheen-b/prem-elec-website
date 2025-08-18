import { computed } from 'vue'
import { useRoute } from 'vue-router'

export function useBreadcrumbs() {
  const route = useRoute()

  const breadcrumbs = computed(() => {
    const pathSegments = route.path.split('/').filter(segment => segment)
    const breadcrumbItems = [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://theliquidation.group/'
      }
    ]

    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const position = index + 2
      
      let name = ''
      switch (segment) {
        case 'inventory':
          name = 'Inventory'
          break
        case 'about':
          name = 'About'
          break
        case 'contact':
          name = 'Contact'
          break
        case 'faq':
          name = 'FAQ'
          break
        default:
          name = segment.charAt(0).toUpperCase() + segment.slice(1)
      }

      breadcrumbItems.push({
        '@type': 'ListItem',
        'position': position,
        'name': name,
        'item': `https://theliquidation.group${currentPath}`
      })
    })

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbItems
    }
  })

  const addBreadcrumbsToHead = () => {
    // Remove existing breadcrumb structured data
    const existingScript = document.querySelector('script[data-breadcrumbs]')
    if (existingScript) {
      existingScript.remove()
    }

    // Add new breadcrumb structured data
    const script = document.createElement('script')
    script.setAttribute('type', 'application/ld+json')
    script.setAttribute('data-breadcrumbs', 'true')
    script.textContent = JSON.stringify(breadcrumbs.value)
    document.head.appendChild(script)
  }

  return {
    breadcrumbs,
    addBreadcrumbsToHead
  }
}
