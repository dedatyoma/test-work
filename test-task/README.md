# React Component Library with Storybook

A modern, accessible React component library built with TypeScript and Storybook. This project demonstrates three reusable UI components with different states, props, and interactive behaviors.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd test-task

# Install dependencies
npm install

# Start Storybook
npm run storybook
```

Storybook will open at `http://localhost:6006` where you can explore all components and their variations.

### Available Scripts

```bash
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run storybook    # Start Storybook
npm run build-storybook  # Build Storybook for production
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

## 🧩 Components Overview

### 1. Input Component

A smart, multi-type input component with advanced features like password visibility toggle and clearable functionality.

**Features:**

- Multiple input types (text, password, number)
- Password visibility toggle with eye icon
- Clearable input with X button
- Fully accessible with proper ARIA labels
- Customizable styling and themes

**Props:**

- `type`: Input type (text, password, number)
- `placeholder`: Placeholder text
- `clearable`: Show clear button
- `disabled`: Disable the input
- `onChange`: Change handler
- `value`: Controlled value

**Screenshots:**

#### Text Input (Default State)

![Text Input Default](screenshots/input-text-default.png)

#### Password Input (with visibility toggle)

![Password Input](screenshots/input-password.png)

#### Clearable Input (with X button)

![Clearable Input](screenshots/input-clearable.png)

---

### 2. Toast Component

A notification system that appears at the bottom-right with auto-dismiss functionality and smooth transitions.

**Features:**

- Multiple notification types (success, error, warning, info)
- Auto-dismiss after configurable duration
- Smooth fade/slide transitions
- Manual close button option
- Stacked notifications support

**Props:**

- `type`: Toast type (success, error, warning, info)
- `message`: Notification message
- `duration`: Auto-dismiss duration in ms
- `closable`: Show manual close button
- `onClose`: Close handler

**Screenshots:**

#### Success Toast

![Success Toast](screenshots/toast-success.png)

#### Error Toast

![Error Toast](screenshots/toast-error.png)

#### Multiple Toasts Stacked

![Multiple Toasts](screenshots/toast-multiple.png)

---

### 3. Sidebar Menu Component

A sliding sidebar navigation component with nested submenus and smooth animations.

**Features:**

- Slides in from the right side
- Nested submenu support (accordion style)
- Background click to close
- Smooth slide animations
- Responsive design

**Props:**

- `isOpen`: Control sidebar visibility
- `onClose`: Close handler
- `menuItems`: Array of menu items with nested structure
- `position`: Sidebar position (left/right)

**Screenshots:**

#### Sidebar Closed

![Sidebar Closed](screenshots/sidebar-closed.png)

#### Sidebar Open (1-level nesting)

![Sidebar Open 1-level](screenshots/sidebar-open-1level.png)

#### Sidebar Open (2-level nesting)

![Sidebar Open 2-level](screenshots/sidebar-open-2level.png)

---

## 🎨 Storybook Showcase

### Storybook Interface

![Storybook Main Interface](screenshots/storybook-main.png)

### Component Controls Panel

![Storybook Controls](screenshots/storybook-controls.png)

### Component Documentation

![Storybook Docs](screenshots/storybook-docs.png)

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Input/
│   │   ├── Input.tsx          # Main component
│   │   ├── Input.css          # Styles
│   │   └── Input.stories.tsx  # Storybook stories
│   ├── Toast/
│   │   ├── Toast.tsx
│   │   ├── Toast.css
│   │   └── Toast.stories.tsx
│   └── Sidebar/
│       ├── Sidebar.tsx
│       ├── Sidebar.css
│       └── Sidebar.stories.tsx
├── stories/                   # Additional stories
└── App.tsx                   # Main app component
```

## 🛠️ Technology Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Storybook 9** - Component development environment
- **Vite** - Fast build tool and dev server
- **CSS Modules** - Scoped styling
- **ESLint** - Code quality and consistency

## 🎯 Key Features

- **Accessibility First** - All components follow WCAG guidelines
- **TypeScript** - Full type safety and IntelliSense
- **Responsive Design** - Works on all screen sizes
- **Customizable** - Extensive prop system for flexibility
- **Performance** - Optimized with React best practices
- **Testing Ready** - Components designed for easy testing

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed description
3. Include browser version and steps to reproduce

---

**Note:** Screenshots above are placeholders. After running the project, please capture actual screenshots of each component in their various states and replace these placeholder references with actual image files.
