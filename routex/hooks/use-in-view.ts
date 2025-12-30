'use client'

import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
    threshold?: number
    triggerOnce?: boolean
    rootMargin?: string
}

export function useInView(options: UseInViewOptions = {}) {
    const { threshold = 0.1, triggerOnce = true, rootMargin = '0px' } = options
    const ref = useRef<HTMLElement>(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                const inView = entry.isIntersecting
                setIsInView(inView)

                // If triggerOnce is true and element is in view, stop observing
                if (inView && triggerOnce) {
                    observer.unobserve(element)
                }
            },
            {
                threshold,
                rootMargin,
            }
        )

        observer.observe(element)

        return () => {
            observer.unobserve(element)
        }
    }, [threshold, triggerOnce, rootMargin])

    return { ref, isInView }
}
