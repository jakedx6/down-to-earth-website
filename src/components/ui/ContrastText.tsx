import { ReactNode } from 'react'

interface ContrastTextProps {
  children: ReactNode
  variant: 'heading' | 'body' | 'caption' | 'link'
  background: 'light' | 'dark' | 'image'
  className?: string
}

const contrastClasses = {
  heading: {
    light: 'text-contrast-high-light font-bold',
    dark: 'text-contrast-high-dark font-bold',
    image: 'text-white font-bold drop-shadow-lg'
  },
  body: {
    light: 'text-contrast-medium-light',
    dark: 'text-contrast-medium-dark',
    image: 'text-contrast-medium-dark drop-shadow-md'
  },
  caption: {
    light: 'text-contrast-low-light text-sm',
    dark: 'text-contrast-low-dark text-sm',
    image: 'text-contrast-low-dark text-sm drop-shadow-md'
  },
  link: {
    light: 'text-forest-700 hover:text-forest-800 transition-colors duration-200',
    dark: 'text-brand-light-green hover:text-green-300 transition-colors duration-200',
    image: 'text-brand-light-green hover:text-green-300 transition-colors duration-200 drop-shadow-md'
  }
}

export default function ContrastText({ 
  children, 
  variant, 
  background, 
  className = '' 
}: ContrastTextProps) {
  const baseClasses = contrastClasses[variant][background]
  
  return (
    <span className={`${baseClasses} ${className}`}>
      {children}
    </span>
  )
}

// Utility components for common use cases
export function HeroHeading({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <h1 className={`text-4xl md:text-6xl font-bold text-white drop-shadow-lg ${className}`}>
      {children}
    </h1>
  )
}

export function SectionHeading({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold text-contrast-high-light ${className}`}>
      {children}
    </h2>
  )
}

export function BodyText({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <p className={`text-contrast-medium-light leading-relaxed ${className}`}>
      {children}
    </p>
  )
}