import './Badge.css'

/**
 * Badge komponen status
 * variant: 'draft' | 'pending' | 'fix' | 'verified' | 'accepted' | 'rejected' | 'info' | 'sage'
 */
export default function Badge({ children, variant = 'draft', size = 'md', dot = false }) {
  return (
    <span className={`badge badge-${variant} badge-${size}`}>
      {dot && <span className="badge-dot" aria-hidden="true" />}
      {children}
    </span>
  )
}
