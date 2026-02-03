import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'white' | 'text'
  onClick?: () => void
  className?: string
  icon?: boolean
  href?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  icon = false,
  href,
  type = 'button'
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-10 py-4 font-sans text-xs md:text-sm uppercase tracking-[0.2em] font-medium transition-all duration-500 ease-out group overflow-hidden"

  const variants = {
    primary: "bg-brand-red text-white hover:bg-neutral-dark",
    outline: "border border-neutral-dark/20 text-neutral-dark hover:border-brand-red hover:text-brand-red bg-transparent",
    white: "bg-white text-neutral-dark hover:bg-neutral-100 shadow-xl shadow-black/5",
    text: "px-0 py-2 text-neutral-dark hover:text-brand-red border-b border-transparent hover:border-brand-red"
  }

  const content = (
    <span className="relative z-10 flex items-center gap-3">
      {children}
      {icon && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </span>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        onClick={onClick}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {content}
    </motion.button>
  )
}

export default Button
