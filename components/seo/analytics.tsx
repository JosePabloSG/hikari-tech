"use client"

import { useEffect } from 'react'
import Image from 'next/image'

interface AnalyticsConfig {
  googleAnalyticsId?: string
  googleTagManagerId?: string
  facebookPixelId?: string
  enableWebVitals?: boolean
}

// Define types for analytics functions
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    dataLayer?: Record<string, unknown>[]
  }
}

export function Analytics({
  googleAnalyticsId,
  googleTagManagerId, 
  facebookPixelId,
  enableWebVitals = true
}: AnalyticsConfig) {
  useEffect(() => {
    // Google Analytics 4
    if (googleAnalyticsId) {
      const script1 = document.createElement('script')
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`
      script1.async = true
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${googleAnalyticsId}', {
          page_title: document.title,
          page_location: window.location.href,
        });
      `
      document.head.appendChild(script2)
    }

    // Google Tag Manager
    if (googleTagManagerId) {
      const script = document.createElement('script')
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${googleTagManagerId}');
      `
      document.head.appendChild(script)
    }

    // Facebook Pixel
    if (facebookPixelId) {
      const script = document.createElement('script')
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${facebookPixelId}');
        fbq('track', 'PageView');
      `
      document.head.appendChild(script)
    }

    // Web Vitals reporting
    if (enableWebVitals) {
      import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS(console.log)
        onINP(console.log)
        onFCP(console.log)
        onLCP(console.log)
        onTTFB(console.log)
      })
    }
  }, [googleAnalyticsId, googleTagManagerId, facebookPixelId, enableWebVitals])

  return (
    <>
      {/* Google Tag Manager NoScript */}
      {googleTagManagerId && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      )}
      
      {/* Facebook Pixel NoScript */}
      {facebookPixelId && (
        <noscript>
          <Image
            src={`https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1`}
            alt=""
            width={1}
            height={1}
            style={{ display: 'none' }}
          />
        </noscript>
      )}
    </>
  )
}

// Hook for tracking custom events
export function useAnalytics() {
  const trackEvent = (eventName: string, parameters?: Record<string, string | number | boolean>) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters)
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, parameters)
    }

    // Google Tag Manager
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...parameters
      })
    }
  }

  const trackPageView = (url: string, title?: string) => {
    trackEvent('page_view', {
      page_title: title || document.title,
      page_location: url
    })
  }

  return { trackEvent, trackPageView }
}
