"use client"

import { useEffect, useMemo } from 'react'

interface OrganizationSchema {
  "@context": "https://schema.org"
  "@type": "Organization"
  name: string
  url: string
  logo: string
  description: string
  address: {
    "@type": "PostalAddress"
    addressCountry: string
    addressRegion: string
  }
  contactPoint: {
    "@type": "ContactPoint"
    email: string
    contactType: string
    areaServed: string
    availableLanguage: string[]
  }
  sameAs: string[]
  foundingDate: string
  numberOfEmployees: string
  industry: string[]
}

interface WebsiteSchema {
  "@context": "https://schema.org"
  "@type": "WebSite"
  name: string
  url: string
  description: string
  publisher: {
    "@type": "Organization"
    name: string
  }
  potentialAction: {
    "@type": "SearchAction"
    target: string
    "query-input": string
  }
}

export function OrganizationStructuredData() {
  const organizationSchema: OrganizationSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HIKARI Tech",
    "url": "https://hikaricr.tech",
    "logo": "https://hikaricr.tech/icons/logo.svg",
    "description": "Empresa costarricense especializada en soluciones tecnológicas para empresas. Desarrollo web, aplicaciones móviles y automatización de procesos.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Costa Rica",
      "addressRegion": "San José"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@hikaricr.tech",
      "contactType": "customer service",
      "areaServed": "Costa Rica",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      "https://linkedin.com/company/hikari-tech",
      "https://github.com/hikari-tech"
    ],
    "foundingDate": "2024",
    "numberOfEmployees": "2-10",
    "industry": [
      "Software Development",
      "Web Development", 
      "Mobile App Development",
      "IT Consulting",
      "Process Automation"
    ]
  }), [])

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(organizationSchema)
    script.id = 'organization-schema'
    
    // Remove existing script if any
    const existing = document.getElementById('organization-schema')
    if (existing) {
      existing.remove()
    }
    
    document.head.appendChild(script)
    
    return () => {
      const scriptElement = document.getElementById('organization-schema')
      if (scriptElement) {
        scriptElement.remove()
      }
    }
  }, [organizationSchema])

  return null
}

export function WebsiteStructuredData() {
  const websiteSchema: WebsiteSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "HIKARI Tech",
    "url": "https://hikaricr.tech",
    "description": "Soluciones tecnológicas para empresas costarricenses",
    "publisher": {
      "@type": "Organization",
      "name": "HIKARI Tech"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://hikaricr.tech/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }), [])

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(websiteSchema)
    script.id = 'website-schema'
    
    const existing = document.getElementById('website-schema')
    if (existing) {
      existing.remove()
    }
    
    document.head.appendChild(script)
    
    return () => {
      const scriptElement = document.getElementById('website-schema')
      if (scriptElement) {
        scriptElement.remove()
      }
    }
  }, [websiteSchema])

  return null
}

export function ServiceStructuredData() {
  const services = useMemo(() => [
    {
      name: "Desarrollo Web",
      description: "Desarrollo de sitios web profesionales y aplicaciones web modernas con tecnologías actuales"
    },
    {
      name: "Aplicaciones Móviles", 
      description: "Desarrollo de aplicaciones móviles nativas e híbridas para iOS y Android"
    },
    {
      name: "Automatización de Procesos",
      description: "Automatización de procesos empresariales para mejorar la eficiencia y reducir costos"
    },
    {
      name: "Consultoría IT",
      description: "Consultoría especializada en tecnología para la transformación digital empresarial"
    }
  ], [])

  useEffect(() => {
    const servicesSchema = services.map(service => ({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.name,
      "description": service.description,
      "provider": {
        "@type": "Organization",
        "name": "HIKARI Tech",
        "url": "https://hikaricr.tech"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Costa Rica"
      },
      "serviceType": ["Technology Consulting", "Software Development"],
      "category": "Information Technology"
    }))

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(servicesSchema)
    script.id = 'services-schema'
    
    const existing = document.getElementById('services-schema')
    if (existing) {
      existing.remove()
    }
    
    document.head.appendChild(script)
    
    return () => {
      const scriptElement = document.getElementById('services-schema')
      if (scriptElement) {
        scriptElement.remove()
      }
    }
  }, [services])

  return null
}
