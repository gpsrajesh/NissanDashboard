'use client'
import { useEffect } from 'react'

function TawkToWidget() {
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        const chatDiv = (mutation.target as HTMLElement).querySelector(
          '.widget-visible iframe'
        ) as HTMLElement

        if (chatDiv) {
          chatDiv.style.removeProperty('margin')
          observer.disconnect()
        }
      }
    })

    const target = document.body
    observer.observe(target, { childList: true })

    const script = document.createElement('script')
    script.src = 'https://embed.tawk.to/65c508428d261e1b5f5de8fa/1hm4qghdg'
    script.async = true
    script.crossOrigin = '*'
    document.body.appendChild(script)

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}

export default TawkToWidget
