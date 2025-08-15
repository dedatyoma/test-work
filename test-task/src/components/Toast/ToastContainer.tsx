import React, { useState, useCallback } from 'react';
import Toast from './Toast';
import type { ToastType, ToastProps } from './Toast';

export interface ToastConfig {
  id?: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
  showCloseButton?: boolean;
}

export interface ToastContainerProps {
  className?: string;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ className = '' }) => {
  const [toasts, setToasts] = useState<Array<ToastConfig & { id: string }>>([]);

  const addToast = useCallback((config: ToastConfig) => {
    const id = config.id || `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    setToasts(prev => [...prev, { ...config, id }]);
    
    return id;
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const showSuccess = useCallback((title: string, message?: string, duration?: number) => {
    return addToast({ type: 'success', title, message, duration });
  }, [addToast]);

  const showError = useCallback((title: string, message?: string, duration?: number) => {
    return addToast({ type: 'error', title, message, duration });
  }, [addToast]);

  const showWarning = useCallback((title: string, message?: string, duration?: number) => {
    return addToast({ type: 'warning', title, message, duration });
  }, [addToast]);

  const showInfo = useCallback((title: string, message?: string, duration?: number) => {
    return addToast({ type: 'info', title, message, duration });
  }, [addToast]);

  React.useEffect(() => {
    (window as any).toast = {
      success: showSuccess,
      error: showError,
      warning: showWarning,
      info: showInfo,
      add: addToast,
      remove: removeToast
    };

    return () => {
      delete (window as any).toast;
    };
  }, [showSuccess, showError, showWarning, showInfo, addToast, removeToast]);

  return (
    <div className={`toast-container ${className}`}>
      {toasts.map((toast, index) => (
          <div 
            key={toast.id}
              style={{ 
               position: 'fixed', 
               bottom: `${20 + (index * 80)}px`,
               right: '20px', 
               zIndex: 10000
             }}
          >
          <Toast
            {...toast}
            onClose={removeToast}
          />
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
