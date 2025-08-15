import React, { useEffect, useState } from 'react';
import './Toast.css';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
  showCloseButton?: boolean;
  onClose: (id: string) => void;
  className?: string;
}

const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  showCloseButton = true,
  onClose,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    const dismissTimer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => {
      clearTimeout(timer);
      clearTimeout(dismissTimer);
    };
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose(id);
    }, 300);
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      default:
        return 'ℹ️';
    }
  };

  const getTypeClass = () => {
    return `toast-${type}`;
  };

  return (
    <div
      className={`toast ${getTypeClass()} ${isVisible ? 'visible' : ''} ${isExiting ? 'exiting' : ''} ${className}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-content">
        <div className="toast-icon">
          {getIcon()}
        </div>
        
        <div className="toast-body">
          <div className="toast-title">{title}</div>
          {message && <div className="toast-message">{message}</div>}
        </div>
        
        {showCloseButton && (
          <button
            className="toast-close-btn"
            onClick={handleClose}
            aria-label="Close notification"
            type="button"
          >
            ×
          </button>
        )}
      </div>
      
      <div className="toast-progress">
        <div 
          className="toast-progress-bar"
          style={{ animationDuration: `${duration}ms` }}
        />
      </div>
    </div>
  );
};

export default Toast;
