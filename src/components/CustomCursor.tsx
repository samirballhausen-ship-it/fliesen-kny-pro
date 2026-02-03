import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(true)

  useEffect(() => {
    // Check if touch device
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 1024
      )
    }

    checkTouch()
    window.addEventListener('resize', checkTouch)

    if (isTouchDevice) return

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        !!target.closest('a') ||
        !!target.closest('button') ||
        getComputedStyle(target).cursor === 'pointer'

      setIsHovering(!!isClickable)
    }

    const onMouseEnter = () => setIsVisible(true)
    const onMouseLeave = () => setIsVisible(false)

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', checkTouch)
    }
  }, [isTouchDevice])

  if (isTouchDevice) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: position.x - (isHovering ? 20 : 6),
        y: position.y - (isHovering ? 20 : 6),
        width: isHovering ? 40 : 12,
        height: isHovering ? 40 : 12,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
      style={{
        backgroundColor: '#C9942E',
        borderRadius: '50%',
      }}
    />
  )
}

export default CustomCursor
