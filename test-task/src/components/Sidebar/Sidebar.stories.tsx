import type { Meta, StoryObj } from "@storybook/react-vite";
import Sidebar from "./Sidebar";
import { useState } from "react";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      description: 'Whether the sidebar is open or closed'
    },
    position: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Position of the sidebar (left or right)'
    },
    width: {
      control: { type: 'text' },
      description: 'Width of the sidebar'
    },
    title: {
      control: { type: 'text' },
      description: 'Title displayed in the sidebar header'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample menu items with nested structure
const sampleMenuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '📊',
    onClick: () => console.log('Dashboard clicked')
  },
  {
    id: 'users',
    label: 'Users',
    icon: '👥',
    children: [
      {
        id: 'user-list',
        label: 'User List',
        onClick: () => console.log('User List clicked')
      },
      {
        id: 'user-groups',
        label: 'User Groups',
        children: [
          {
            id: 'admin-group',
            label: 'Administrators',
            onClick: () => console.log('Admin group clicked')
          },
          {
            id: 'user-group',
            label: 'Regular Users',
            onClick: () => console.log('Regular users clicked')
          }
        ]
      },
      {
        id: 'user-permissions',
        label: 'Permissions',
        onClick: () => console.log('Permissions clicked')
      }
    ]
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: '⚙️',
    children: [
      {
        id: 'general-settings',
        label: 'General',
        onClick: () => console.log('General settings clicked')
      },
      {
        id: 'security-settings',
        label: 'Security',
        onClick: () => console.log('Security settings clicked')
      }
    ]
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: '📈',
    onClick: () => console.log('Reports clicked')
  }
];

const SidebarWithState = ({ args }: { args: any }) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);
  
  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <button 
        onClick={() => setIsOpen(true)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Open Sidebar
      </button>
      
      <Sidebar
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={sampleMenuItems}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <SidebarWithState args={args} />,
  args: {
    isOpen: false,
    position: 'right',
    width: '300px',
    title: 'Navigation Menu'
  }
};

export const LeftPosition: Story = {
  render: (args) => <SidebarWithState args={args} />,
  args: {
    isOpen: false,
    position: 'left',
    width: '280px',
    title: 'Left Sidebar'
  }
};

export const WideSidebar: Story = {
  render: (args) => <SidebarWithState args={args} />,
  args: {
    isOpen: false,
    position: 'right',
    width: '400px',
    title: 'Wide Sidebar'
  }
};

export const CustomTitle: Story = {
  render: (args) => <SidebarWithState args={args} />,
  args: {
    isOpen: false,
    position: 'right',
    width: '300px',
    title: 'My Custom App'
  }
};