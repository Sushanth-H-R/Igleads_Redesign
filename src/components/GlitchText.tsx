import { useEffect, useState } from 'react'
import './GlitchText.css'

interface GlitchTextProps {
  children: React.ReactNode
  speed?: number
  enableShadows?: boolean
  className?: string
  intervalMs?: number
  durationMs?: number
}

const GlitchText = ({
  children,
  speed = 1,
  enableShadows = true,
  className = '',
  intervalMs = 4000,
  durationMs = 600,
}: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true)
      setTimeout(() => {
        setIsGlitching(false)
      }, durationMs)
    }

    // Initial trigger
    const initialTimer = setTimeout(() => {
      triggerGlitch()
    }, intervalMs)

    const intervalId = setInterval(() => {
      triggerGlitch()
    }, intervalMs)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(intervalId)
    }
  }, [intervalMs, durationMs])

  const inlineStyles = {
    '--after-duration': `${speed * 3}s`,
    '--before-duration': `${speed * 2}s`,
    '--after-shadow': enableShadows ? '-5px 0 #00E5C0' : 'none',
    '--before-shadow': enableShadows ? '5px 0 #6366F1' : 'none',
  } as React.CSSProperties

  const glitchStateClass = isGlitching ? 'is-glitching' : ''

  return (
    <span
      className={`glitch ${glitchStateClass} ${className}`}
      style={inlineStyles}
      data-text={children}
    >
      {children}
    </span>
  )
}

export default GlitchText
