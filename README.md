# RigidUI Examples

Interactive examples showcase for RigidUI components - a collection of complex, customizable UI components built with shadcn/ui and React.

## 🌟 Overview

This repository contains interactive examples and demonstrations of all RigidUI components. It's designed to be deployed as a subdomain (`examples.rigidui.com`) to provide developers with hands-on experience with each component.

## 🚀 Features

- **Interactive Examples**: Live demonstrations of all RigidUI components
- **Modern Stack**: Built with Next.js 15, React 19, and TypeScript
- **Beautiful Design**: Consistent with RigidUI's design system
- **Responsive**: Works perfectly on all devices
- **Dark Mode**: Full dark mode support

## 🧩 Components Showcased

### Core Components

- **Currency Manager** - Currency conversion and management
- **Location Picker** - Interactive location selection
- **Multi-Step Form Wrapper** - Form with progress tracking
- **File Uploader** - Drag & drop file uploads with image cropping
- **Strength Meter** - Password strength validation
- **Infinite Scroll** - Efficient large dataset handling
- **Notification Center** - Real-time notifications
- **Smart Form** - Intelligent form with validation
- **Smart Search** - Advanced search with autocomplete
- **Draggable Dashboard** - Customizable dashboard widgets
- **Image Loader** - Advanced image loading with effects
- **File Explorer** - File system navigation
- **Guided Tour** - Interactive user onboarding

### Custom Hooks

- **useLocation** - Location management
- **useCurrency** - Currency operations

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/fgrrelaoded/rigidui.git
cd rigidui

# Switch to examples branch
git checkout examples

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the examples.

## 🏗️ Project Structure

```
├── app/
│   ├── examples/           # Individual component examples
│   │   ├── currency-manager/
│   │   ├── location-picker/
│   │   └── ...
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Examples homepage
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── example-template.tsx # Example page template
├── registry/
│   └── new-york/           # RigidUI components
└── ...
```

## 🎨 Tech Stack

- **Framework**: Next.js 15
- **React**: React 19
- **TypeScript**: Full type safety
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + RigidUI
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📱 Deployment

This project is designed to be deployed as `examples.rigidui.com`. The deployment process:

1. Build the project: `pnpm build`
2. Deploy to your hosting platform
3. Configure subdomain DNS settings

## 🤝 Contributing

This is an examples showcase branch. For component contributions or issues, please refer to the main RigidUI repository.

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Main RigidUI Site](https://rigidui.com)
- [GitHub Repository](https://github.com/fgrreloaded/rigidui)
- [Documentation](https://rigidui.com/docs)

---

Built with ❤️ by [Nitish Singh](https://devxnitish.me)
