import React, { useState, useEffect, useRef } from 'react';
import './Sidebar.css';

export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  onClick?: () => void;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  title?: string;
  width?: string;
  position?: 'left' | 'right';
  className?: string;
}

const getIcon = (icon: React.ReactNode | string) => {
  if (typeof icon === 'string') {
    return <span className="sidebar-item-icon-text">{icon}</span>;
  }
  return icon;
};

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  items,
  title = 'Menu',
  width = '300px',
  position = 'right',
  className = ''
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [focusedItem, setFocusedItem] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        const firstButton = sidebarRef.current?.querySelector('button');
        if (firstButton) {
          (firstButton as HTMLElement).focus();
        }
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, item: MenuItem) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        handleItemClick(item);
        break;
      case 'ArrowRight':
        if (item.children && item.children.length > 0 && !expandedItems.has(item.id)) {
          e.preventDefault();
          setExpandedItems(prev => new Set([...prev, item.id]));
        }
        break;
      case 'ArrowLeft':
        if (expandedItems.has(item.id)) {
          e.preventDefault();
          setExpandedItems(prev => {
            const newSet = new Set(prev);
            newSet.delete(item.id);
            return newSet;
          });
        }
        break;
    }
  };


  const handleItemClick = (item: MenuItem) => {
    if (item.children && item.children.length > 0) {
      setExpandedItems(prev => {
        const newSet = new Set(prev);
        if (newSet.has(item.id)) {
          newSet.delete(item.id);
        } else {
          newSet.add(item.id);
        }
        return newSet;
      });
    } else if (item.onClick) {
      item.onClick();
      onClose();
    }
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);
    const isClickable = !hasChildren || item.onClick;

    return (
      <div key={item.id} className={`sidebar-item sidebar-item-level-${level}`}>
        <div
          className={`sidebar-item-content ${hasChildren ? 'has-children' : ''} ${isClickable ? 'clickable' : ''}`}
          onClick={() => handleItemClick(item)}
          onKeyDown={(e) => handleKeyDown(e, item)}
          onFocus={() => setFocusedItem(item.id)}
          onBlur={() => setFocusedItem(null)}
          tabIndex={0}
          role="menuitem"
          aria-expanded={hasChildren ? isExpanded : undefined}
          aria-haspopup={hasChildren ? 'true' : undefined}
        >
          {item.icon && <span className="sidebar-item-icon">{getIcon(item.icon)}</span>}
          <span className="sidebar-item-label">{item.label}</span>
          {hasChildren && (
            <span className={`sidebar-item-arrow ${isExpanded ? 'expanded' : ''}`}>
              ▼
            </span>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div 
            className="sidebar-submenu"
            role="menu"
            aria-label={`${item.label} submenu`}
          >
            {item.children!.map(child => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div
        ref={backdropRef}
        className={`sidebar-backdrop ${isOpen ? 'active' : ''}`}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />
      
      <div
        ref={sidebarRef}
        className={`sidebar ${position === 'right' ? 'sidebar-right' : 'sidebar-left'} ${isOpen ? 'open' : ''} ${className}`}
        style={{ width }}
        role="navigation"
        aria-label={title}
      >
        <div className="sidebar-header">
          <h3 className="sidebar-title">{title}</h3>
          <button 
            className="sidebar-close-btn" 
            onClick={onClose}
            aria-label="Close sidebar"
          >
            ×
          </button>
        </div>
  
        <div 
          className="sidebar-content"
          role="menu"
        >
          {items.map(item => renderMenuItem(item))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
