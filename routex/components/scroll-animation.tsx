'use client'

import { useInView } from '@/hooks/use-in-view'
import type { HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'fade'

interface ScrollAnimationProps extends Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'transition'> {
    children: React.ReactNode
    animation?: AnimationType
    delay?: number
    duration?: number
    threshold?: number
    className?: string
}

const animationVariants = {
    'fade-up': {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
    },
    'fade-down': {
        hidden: { opacity: 0, y: -60 },
        visible: { opacity: 1, y: 0 },
    },
    'fade-left': {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
    },
    'fade-right': {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
    fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
}

export function ScrollAnimation({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 0.6,
    threshold = 0.1,
    className,
    ...props
}: ScrollAnimationProps) {
    const { ref, isInView } = useInView({ threshold, triggerOnce: true })

    const variants = animationVariants[animation]

    return (
        <motion.div
            ref={ref as any}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1], // Custom cubic-bezier for smooth animation
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}

// Stagger children animation wrapper
interface StaggerContainerProps extends Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'transition'> {
    children: React.ReactNode
    staggerDelay?: number
    threshold?: number
    className?: string
}

export function StaggerContainer({
    children,
    staggerDelay = 0.1,
    threshold = 0.1,
    className,
    ...props
}: StaggerContainerProps) {
    const { ref, isInView } = useInView({ threshold, triggerOnce: true })

    return (
        <motion.div
            ref={ref as any}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}

// Individual stagger item
interface StaggerItemProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
    children: React.ReactNode
    animation?: AnimationType
    className?: string
}

export function StaggerItem({ children, animation = 'fade-up', className, ...props }: StaggerItemProps) {
    const variants = animationVariants[animation]

    return (
        <motion.div
            variants={variants}
            transition={{
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}
