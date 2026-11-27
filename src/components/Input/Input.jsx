import { useState } from 'react'
import './Input.css'

/**
 * Input komponen form
 */
export default function Input({
  id,
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error = '',
  hint = '',
  required = false,
  disabled = false,
  leftIcon = null,
  rightElement = null,
  className = '',
  ...props
}) {
  return (
    <div className={`input-field ${error ? 'input-field--error' : ''} ${className}`}>
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
          {required && <span className="input-required" aria-hidden="true"> *</span>}
        </label>
      )}
      <div className="input-wrapper">
        {leftIcon && <span className="input-icon input-icon-left">{leftIcon}</span>}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={`input-control ${leftIcon ? 'has-left-icon' : ''} ${rightElement ? 'has-right-element' : ''}`}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          aria-invalid={!!error}
          {...props}
        />
        {rightElement && <span className="input-icon input-icon-right">{rightElement}</span>}
      </div>
      {hint && !error && <p id={`${id}-hint`} className="input-hint">{hint}</p>}
      {error && <p id={`${id}-error`} className="input-error" role="alert">{error}</p>}
    </div>
  )
}

export function Textarea({ id, label, placeholder, value, onChange, error, hint, required, disabled, rows = 4, className = '', ...props }) {
  return (
    <div className={`input-field ${error ? 'input-field--error' : ''} ${className}`}>
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
          {required && <span className="input-required" aria-hidden="true"> *</span>}
        </label>
      )}
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        rows={rows}
        className="input-control textarea-control"
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        aria-invalid={!!error}
        {...props}
      />
      {hint && !error && <p id={`${id}-hint`} className="input-hint">{hint}</p>}
      {error && <p id={`${id}-error`} className="input-error" role="alert">{error}</p>}
    </div>
  )
}

export function Select({ id, label, value, onChange, options = [], error, hint, required, disabled, placeholder, className = '', ...props }) {
  return (
    <div className={`input-field ${error ? 'input-field--error' : ''} ${className}`}>
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
          {required && <span className="input-required" aria-hidden="true"> *</span>}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className="input-control select-control"
        aria-invalid={!!error}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {hint && !error && <p id={`${id}-hint`} className="input-hint">{hint}</p>}
      {error && <p id={`${id}-error`} className="input-error" role="alert">{error}</p>}
    </div>
  )
}
