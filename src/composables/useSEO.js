import { watch } from 'vue'
import { useRoute } from 'vue-router'

export function useSEO() {
  const route = useRoute()

  const updateMetaTags = (metaData) => {
    const {
      title,
      description,
      keywords,
      image,
      url,
      type = 'website'
    } = metaData

    // Update document title
    if (title) {
      document.title = title
    }

    // Update meta tags
    updateMetaTag('name', 'description', description)
    updateMetaTag('name', 'keywords', keywords)
    updateMetaTag('property', 'og:title', title)
    updateMetaTag('property', 'og:description', description)
    updateMetaTag('property', 'og:image', image)
    updateMetaTag('property', 'og:url', url)
    updateMetaTag('property', 'og:type', type)
    updateMetaTag('property', 'twitter:title', title)
    updateMetaTag('property', 'twitter:description', description)
    updateMetaTag('property', 'twitter:image', image)
    updateMetaTag('property', 'twitter:url', url)
  }

  const updateMetaTag = (attribute, name, content) => {
    if (!content) return

    let element = document.querySelector(`meta[${attribute}="${name}"]`)
    
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attribute, name)
      document.head.appendChild(element)
    }
    
    element.setAttribute('content', content)
  }

  const setCanonicalUrl = (url) => {
    let canonical = document.querySelector('link[rel="canonical"]')
    
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    
    canonical.setAttribute('href', url)
  }

  const addStructuredData = (data) => {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    // Add new structured data
    const script = document.createElement('script')
    script.setAttribute('type', 'application/ld+json')
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
  }

  return {
    updateMetaTags,
    setCanonicalUrl,
    addStructuredData
  }
}

// Default SEO data for each route
export const defaultSEOData = {
  home: {
    title: 'The Liquidation Group - Wholesale Liquidation Pallets & Bulk Electronics',
    description: 'Buy wholesale liquidation pallets from Amazon, Best Buy, Home Depot, Walmart, Target, Costco & more. Electronics, appliances, tools & more at liquidation prices. Local pickup & delivery available.',
    keywords: 'liquidation pallets, wholesale electronics, Amazon returns, bulk electronics, liquidation warehouse, wholesale liquidation',
    image: 'https://theliquidation.group/og-image.jpg',
    url: 'https://theliquidation.group/',
    type: 'website'
  },
  inventory: {
    title: 'Liquidation Inventory - Wholesale Pallets & Bulk Electronics | The Liquidation Group',
    description: 'Browse our current liquidation inventory including Amazon returns, electronics, appliances, tools and more. Wholesale prices on bulk liquidation pallets.',
    keywords: 'liquidation inventory, wholesale pallets, Amazon returns, bulk electronics, liquidation warehouse inventory',
    image: 'https://theliquidation.group/inventory-og.jpg',
    url: 'https://theliquidation.group/inventory',
    type: 'website'
  },
  about: {
    title: 'About The Liquidation Group - Wholesale Liquidation Warehouse',
    description: 'Learn about The Liquidation Group - your trusted source for wholesale liquidation pallets from major retailers. Quality products at liquidation prices.',
    keywords: 'about liquidation group, wholesale liquidation warehouse, liquidation company, Amazon liquidation, Best Buy liquidation',
    image: 'https://theliquidation.group/about-og.jpg',
    url: 'https://theliquidation.group/about',
    type: 'website'
  },
  contact: {
    title: 'Contact The Liquidation Group - Wholesale Liquidation Warehouse',
    description: 'Contact The Liquidation Group for wholesale liquidation pallets. Visit our warehouse or call us for bulk electronics, appliances and more at liquidation prices.',
    keywords: 'contact liquidation group, liquidation warehouse contact, wholesale liquidation contact, bulk electronics contact',
    image: 'https://theliquidation.group/contact-og.jpg',
    url: 'https://theliquidation.group/contact',
    type: 'website'
  },
  faq: {
    title: 'FAQ - Frequently Asked Questions | The Liquidation Group',
    description: 'Find answers to frequently asked questions about wholesale liquidation pallets, bulk electronics, Amazon returns and more from The Liquidation Group.',
    keywords: 'liquidation FAQ, wholesale liquidation questions, bulk electronics FAQ, Amazon returns FAQ',
    image: 'https://theliquidation.group/faq-og.jpg',
    url: 'https://theliquidation.group/faq',
    type: 'website'
  }
}
