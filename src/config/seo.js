// SEO Configuration for The Liquidation Group
export const seoConfig = {
  // Site information
  site: {
    name: 'The Liquidation Group',
    url: 'https://theliquidation.group',
    description: 'Wholesale liquidation pallets and bulk electronics from major retailers',
    logo: 'https://theliquidation.group/logo.png',
    favicon: '/favicon.ico',
    themeColor: '#032C50',
    language: 'en',
    locale: 'en_US'
  },

  // Default meta tags
  defaultMeta: {
    title: 'The Liquidation Group - Wholesale Liquidation Pallets & Bulk Electronics',
    description: 'Buy wholesale liquidation pallets from Amazon, Best Buy, Home Depot, Walmart, Target, Costco & more. Electronics, appliances, tools & more at liquidation prices. Local pickup & delivery available.',
    keywords: 'liquidation pallets, wholesale electronics, Amazon returns, bulk electronics, liquidation warehouse, wholesale liquidation, Amazon LPN, Amazon HCE, Amazon FC, Amazon Med, Best Buy liquidation, Home Depot liquidation, Walmart liquidation, Target liquidation, Costco liquidation',
    image: 'https://theliquidation.group/og-image.jpg',
    type: 'website'
  },

  // Page-specific SEO data
  pages: {
    home: {
      title: 'The Liquidation Group - Wholesale Liquidation Pallets & Bulk Electronics',
      description: 'Buy wholesale liquidation pallets from Amazon, Best Buy, Home Depot, Walmart, Target, Costco & more. Electronics, appliances, tools & more at liquidation prices. Local pickup & delivery available.',
      keywords: 'liquidation pallets, wholesale electronics, Amazon returns, bulk electronics, liquidation warehouse, wholesale liquidation',
      image: 'https://theliquidation.group/og-image.jpg',
      url: 'https://theliquidation.group/',
      type: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'The Liquidation Group',
        'url': 'https://theliquidation.group',
        'logo': 'https://theliquidation.group/logo.png',
        'description': 'Wholesale liquidation pallets and bulk electronics from major retailers',
                                   'sameAs': [
            'https://www.facebook.com/electronics.liquidation',
            'https://www.instagram.com/theliquidation.group'
          ]
      }
    },
    
    inventory: {
      title: 'Liquidation Inventory - Wholesale Pallets & Bulk Electronics | The Liquidation Group',
      description: 'Browse our current liquidation inventory including Amazon returns, electronics, appliances, tools and more. Wholesale prices on bulk liquidation pallets.',
      keywords: 'liquidation inventory, wholesale pallets, Amazon returns, bulk electronics, liquidation warehouse inventory, Amazon LPN, Amazon HCE, Amazon FC',
      image: 'https://theliquidation.group/inventory-og.jpg',
      url: 'https://theliquidation.group/inventory',
      type: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Liquidation Inventory',
        'description': 'Wholesale liquidation pallets and bulk electronics',
        'url': 'https://theliquidation.group/inventory',
        'itemListElement': [
          {
            '@type': 'Product',
            'name': 'Amazon Liquidation Pallets',
            'description': 'Amazon returns and overstock liquidation pallets'
          },
          {
            '@type': 'Product',
            'name': 'Electronics Liquidation Pallets',
            'description': 'Bulk electronics liquidation pallets'
          }
        ]
      }
    },
    
    about: {
      title: 'About The Liquidation Group - Wholesale Liquidation Warehouse',
      description: 'Learn about The Liquidation Group - your trusted source for wholesale liquidation pallets from major retailers. Quality products at liquidation prices.',
      keywords: 'about liquidation group, wholesale liquidation warehouse, liquidation company, Amazon liquidation, Best Buy liquidation, Home Depot liquidation',
      image: 'https://theliquidation.group/about-og.jpg',
      url: 'https://theliquidation.group/about',
      type: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'The Liquidation Group',
        'description': 'Wholesale liquidation pallets and bulk electronics from major retailers',
        'url': 'https://theliquidation.group',
                 'telephone': '+1-647-901-7565',
         'address': {
           '@type': 'PostalAddress',
           'streetAddress': '724 Caledonia Rd',
           'addressLocality': 'North York',
           'addressRegion': 'Ontario',
           'postalCode': 'M6B 3X7',
           'addressCountry': 'CA'
         },
                 'openingHours': 'Available by appointment from 9 AM to 6 PM',
        'priceRange': '$$'
      }
    },
    
    contact: {
      title: 'Contact The Liquidation Group - Wholesale Liquidation Warehouse',
      description: 'Contact The Liquidation Group for wholesale liquidation pallets. Visit our warehouse or call us for bulk electronics, appliances and more at liquidation prices.',
      keywords: 'contact liquidation group, liquidation warehouse contact, wholesale liquidation contact, bulk electronics contact',
      image: 'https://theliquidation.group/contact-og.jpg',
      url: 'https://theliquidation.group/contact',
      type: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'name': 'Contact The Liquidation Group',
        'description': 'Contact information for wholesale liquidation pallets',
        'url': 'https://theliquidation.group/contact',
                 'mainEntity': {
           '@type': 'Organization',
           'name': 'The Liquidation Group',
           'telephone': '+1-647-901-7565',
           'email': 'contact@premiumelectronics.ca'
         }
      }
    },
    
    faq: {
      title: 'FAQ - Frequently Asked Questions | The Liquidation Group',
      description: 'Find answers to frequently asked questions about wholesale liquidation pallets, bulk electronics, Amazon returns and more from The Liquidation Group.',
      keywords: 'liquidation FAQ, wholesale liquidation questions, bulk electronics FAQ, Amazon returns FAQ',
      image: 'https://theliquidation.group/faq-og.jpg',
      url: 'https://theliquidation.group/faq',
      type: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What types of liquidation pallets do you offer?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We offer Amazon LPN, Amazon HCE, Amazon FC, Amazon Med, and liquidation pallets from Best Buy, Home Depot, Walmart, Target, Costco and other major retailers.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Do you offer delivery?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, we offer both local pickup and delivery services for our liquidation pallets.'
            }
          }
        ]
      }
    }
  },

     // Social media configuration
   social: {
     facebook: {
       appId: 'YOUR_FACEBOOK_APP_ID',
       pageId: 'YOUR_FACEBOOK_PAGE_ID',
       url: 'https://www.facebook.com/electronics.liquidation'
     },
     twitter: {
       handle: '@theliquidationgroup',
       site: '@theliquidationgroup'
     },
           instagram: {
        handle: '@theliquidation.group',
        url: 'https://www.instagram.com/theliquidation.group'
      }
   },

  // Analytics configuration
  analytics: {
    googleAnalytics: {
      id: 'G-XXXXXXXXXX' // Replace with your GA4 ID
    },
    googleTagManager: {
      id: 'GTM-XXXXXXX' // Replace with your GTM ID
    }
  }
}

// Helper function to get SEO data for a specific page
export function getSEOData(pageName) {
  return seoConfig.pages[pageName] || seoConfig.defaultMeta
}

// Helper function to get structured data for a specific page
export function getStructuredData(pageName) {
  const pageData = seoConfig.pages[pageName]
  return pageData?.structuredData || null
}
