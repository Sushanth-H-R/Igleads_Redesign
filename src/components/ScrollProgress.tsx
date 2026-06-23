'use client'

import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
        transformOrigin: '0% 50%',
        scaleX: scrollYProgress,
        zIndex: 9999,
      }}
    />
  )
}
