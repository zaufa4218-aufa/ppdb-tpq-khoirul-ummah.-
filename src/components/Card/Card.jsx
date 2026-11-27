import './Card.css'

/**
 * Card komponen kontainer
 * variant: 'default' | 'elevated' | 'outlined' | 'soft'
 */
export default function Card({ children, variant = 'default', className = '', padding = 'md', ...props }) {
  return (
    <div className={`card card-${variant} card-pad-${padding} ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }) {
  return <div className={`card-header ${className}`}>{children}</div>
}

export function CardBody({ children, className = '' }) {
  return <div className={`card-body ${className}`}>{children}</div>
}

export function CardFooter({ children, className = '' }) {
  return <div className={`card-footer ${className}`}>{children}</div>
}
