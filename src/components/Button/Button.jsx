import './Button.css'
import { IconSpinner } from '../icons'

/**
 * Button komponen dasar
 * variant: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'accent'
 * size: 'sm' | 'md' | 'lg'
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon = null,
  rightIcon = null,
  type = 'button',
  onClick,
  className = '',
  ...props
}) {
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth ? 'btn-full' : '',
    loading ? 'btn-loading' : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <IconSpinner size={size === 'sm' ? 14 : 16} />
      ) : leftIcon ? (
        <span className="btn-icon-left">{leftIcon}</span>
      ) : null}
      <span className="btn-label">{children}</span>
      {!loading && rightIcon && (
        <span className="btn-icon-right">{rightIcon}</span>
      )}
    </button>
  )
}
