import React, { useState } from 'react'

export const useLazyLoading = (entryCallback, target = '[data-src]', config = { threshold: 1.0 }) => {
  const [initialized, setInitialized] = useState(false)
  const [observer, setObserver] = useState()

  const lazyLoad = () => {
    setInitialized(true)
  }

  React.useEffect(() => {
    if (!observer) {
      if ('IntersectionObserver' in window) {
        const intersectionObserver = new IntersectionObserver((entries, self) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const target = entry.target
              entryCallback && entryCallback(target)
              self.unobserve(entry.target)
            }
          })
        }, config)
        setObserver(intersectionObserver)
      }
    }
  }, [initialized])

  const scrollHandler = () => {
    const images = document.querySelectorAll(target)
    if (observer && images.length > 0) {
      images.forEach(image => {
        observer.observe(image)
      })
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  })

  React.useEffect(() => {
    if (initialized && observer) {
      scrollHandler()
    }
  }, [initialized, observer])

  return {
    lazyLoad,
    scrollHandler
  }
}
