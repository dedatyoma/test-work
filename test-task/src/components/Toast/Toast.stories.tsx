import type { Meta, StoryObj } from "@storybook/react-vite";
import Toast from "./Toast";
import { useState } from "react";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info'],
      description: 'The type of toast notification'
    },
    duration: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
      description: 'Duration in milliseconds before auto-dismiss'
    },
    showCloseButton: {
      control: { type: 'boolean' },
      description: 'Whether to show the manual close button'
    },
    title: {
      control: { type: 'text' },
      description: 'Main title of the toast'
    },
    message: {
      control: { type: 'text' },
      description: 'Optional message below the title'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

const ToastWithState = ({ args }: { args: any }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const handleClose = (id: string) => {
    setIsVisible(false);
  };
  
  return (
    <div style={{ height: '500px', position: 'relative' }}>
      <button 
        onClick={() => setIsVisible(true)}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          marginBottom: '20px',
          marginLeft:'90px'
        }}
      >
        Show Toast
      </button>
      
      {isVisible && (
        <Toast
          {...args}
          id="demo-toast"
          onClose={handleClose}
        />
      )}
      
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>Click the button above to show a toast notification</p>
        <p>It will auto-dismiss after {args.duration || 5000}ms</p>
      </div>
    </div>
  );
};

export const Success: Story = {
  render: (args) => <ToastWithState args={args} />,
  args: {
    type: 'success',
    title: 'Success!',
    message: 'Your action was completed successfully.',
    duration: 5000,
    showCloseButton: true
  }
};

export const Error: Story = {
  render: (args) => <ToastWithState args={args} />,
  args: {
    type: 'error',
    title: 'Error!',
    message: 'Something went wrong. Please try again.',
    duration: 7000,
    showCloseButton: true
  }
};

export const Warning: Story = {
  render: (args) => <ToastWithState args={args} />,
  args: {
    type: 'warning',
    title: 'Warning!',
    message: 'Please review your input before proceeding.',
    duration: 6000,
    showCloseButton: true
  }
};

export const Info: Story = {
  render: (args) => <ToastWithState args={args} />,
  args: {
    type: 'info',
    title: 'Information',
    message: 'Here is some useful information for you.',
    duration: 4000,
    showCloseButton: true
  }
};

export const ShortDuration: Story = {
  render: (args) => <ToastWithState args={args} />,
  args: {
    type: 'info',
    title: 'Quick Notice',
    message: 'This toast will disappear quickly.',
    duration: 2000,
    showCloseButton: true
  }
};

export const LongDuration: Story = {
  render: (args) => <ToastWithState args={args} />,
  args: {
    type: 'warning',
    title: 'Important Notice',
    message: 'This toast will stay visible longer for important information.',
    duration: 10000,
    showCloseButton: true
  }
};

export const NoCloseButton: Story = {
  render: (args) => <ToastWithState args={args} />,
  args: {
    type: 'success',
    title: 'Auto-dismiss Only',
    message: 'This toast will close automatically without a close button.',
    duration: 5000,
    showCloseButton: false
  }
};

export const LongMessage: Story = {
  render: (args) => <ToastWithState args={args} />,
  args: {
    type: 'info',
    title: 'Detailed Information',
    message: 'This is a very long message that demonstrates how the toast handles longer content. It should wrap properly and maintain good readability.',
    duration: 8000,
    showCloseButton: true
  }
};

export const TitleOnly: Story = {
  render: (args) => <ToastWithState args={args} />,
  args: {
    type: 'success',
    title: 'Simple Success',
    duration: 4000,
    showCloseButton: true
  }
};

export const MobileStyle: Story = {
  render: (args) => <ToastWithState args={args} />,
  args: {
    type: 'info',
    title: 'Mobile Optimized',
    message: 'This toast is designed to work well on mobile devices.',
    duration: 5000,
    showCloseButton: true
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
};

export const AllTypes: Story = {
  render: () => {
    const [toasts, setToasts] = useState<string[]>([]);
    
    const addToast = (type: 'success' | 'error' | 'warning' | 'info') => {
      const id = `${type}-${Date.now()}`;
      setToasts(prev => [...prev, id]);
      
      setTimeout(() => {
        setToasts(prev => prev.filter(toastId => toastId !== id));
      }, 6000);
    };
    
    const removeToast = (id: string) => {
      setToasts(prev => prev.filter(toastId => toastId !== id));
    };
    
    const getToastProps = (id: string) => {
      const type = id.split('-')[0] as 'success' | 'error' | 'warning' | 'info';
      const titles = {
        success: 'Success!',
        error: 'Error!',
        warning: 'Warning!',
        info: 'Information'
      };
      const messages = {
        success: 'Operation completed successfully.',
        error: 'An error occurred.',
        warning: 'Please review your input.',
        info: 'Here is some information.'
      };
      
      return {
        type,
        title: titles[type],
        message: messages[type],
        duration: 6000,
        showCloseButton: true
      };
    };
    
    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button 
            onClick={() => addToast('success')}
            style={{
              padding: '8px 16px',
              margin: '4px',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Success
          </button>
          <button 
            onClick={() => addToast('error')}
            style={{
              padding: '8px 16px',
              margin: '4px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Error
          </button>
          <button 
            onClick={() => addToast('warning')}
            style={{
              padding: '8px 16px',
              margin: '4px',
              backgroundColor: '#f59e0b',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Warning
          </button>
          <button 
            onClick={() => addToast('info')}
            style={{
              padding: '8px 16px',
              margin: '4px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Info
          </button>
        </div>
        
        <p style={{ textAlign: 'center', color: '#666' }}>
          Click the buttons above to show different types of toast notifications
        </p>
      
             {toasts.map((id, index) => (
            <div key={id} style={{ position: 'fixed', bottom: '20px', right: '40px'}}>
              <Toast
                {...getToastProps(id)}
                id={id}
                onClose={removeToast}
              />
            </div>
          ))}
      </div>
    );
  }
};
