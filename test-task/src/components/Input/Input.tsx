import React, { forwardRef, useState } from 'react';
import './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?: 'text' | 'password' | 'number';
  clearable?: boolean;
  onClear?: () => void;
  className?: string;
  error?: boolean;
}
const Input = forwardRef<HTMLInputElement, InputProps>(({
  type = 'text',
  clearable = false, 
  onClear,
  className = '',
  error = false,
  value,
  onChange,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(e);
  };

  const handleClear = () => {
    setInputValue('');
    onClear?.();
    const syntheticEvent = {
      target: {
        value: '', name: props.name || ''
      }
    } as React.ChangeEvent<HTMLInputElement>;
    onChange?.(syntheticEvent);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const inputType = type === 'password' && showPassword ? 'text' : type;
  const hasValue = inputValue !== undefined && inputValue !== '';

  return (
    <div className={`input-container ${className}`}>
      <div className={`input-wrapper ${error ? 'error' : ''}`}>
        <input 
          ref={ref}
          type={inputType}
          value={inputValue}
          onChange={handleInputChange}
          className="input-field"
          {...props}
        />
        {type === 'password' && (
          <button
            type="button"
            className="input-icon password-toggle"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            )}
          </button>
        )}
        {clearable && hasValue && (
          <button
           type="button"
           className='input-icon clear-button'
           onClick={handleClear}
           aria-label='Clear input'
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
});

Input.displayName = 'Input';

export default Input;

