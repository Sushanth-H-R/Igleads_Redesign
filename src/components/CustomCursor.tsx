'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useTheme } from 'next-themes'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  const isDark = !mounted || theme === 'dark'

  const dotColor = isDark ? '#ffffff' : '#0F0E17'

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfig = { stiffness: 150, damping: 18, mass: 0.5 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Check if target or any parent has data-cursor="hover"
      if (target.closest('[data-cursor="hover"]')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY, isVisible])

  if (!isVisible && typeof window !== 'undefined' && window.innerWidth > 768) {
    return null
  }

  return (
    <motion.div
      className="hidden md:block pointer-events-none fixed z-[9999]"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        width: isHovering ? 36 : 10,
        height: isHovering ? 36 : 10,
        background: isHovering ? 'transparent' : dotColor,
        border: isHovering ? '1.5px solid #8B5CF6' : 'none',
        boxShadow: isHovering ? '0 0 10px rgba(139,92,246,0.4)' : 'none',
        borderRadius: '50%',
      }}
      animate={{
        width: isHovering ? 36 : 10,
        height: isHovering ? 36 : 10,
        background: isHovering ? 'transparent' : dotColor,
        border: isHovering ? '1.5px solid #8B5CF6' : 'none',
        boxShadow: isHovering ? '0 0 10px rgba(139,92,246,0.4)' : 'none',
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    />
  )
}
