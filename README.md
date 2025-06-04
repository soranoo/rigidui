# RigidUI

<p align="center">
  <img src="/public/logo.png" alt="RigidUI Logo" width="300" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/rigidui"><img src="https://img.shields.io/npm/v/rigidui?style=flat&colorA=18181B&colorB=28CF8D" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/rigidui"><img src="https://img.shields.io/npm/dm/rigidui.svg?style=flat&colorA=18181B&colorB=28CF8D" alt="npm downloads"></a>
  <a href="https://github.com/FgrReloaded/rigidui/blob/main/LICENSE"><img src="https://img.shields.io/github/license/FgrReloaded/rigidui?style=flat&colorA=18181B&colorB=28CF8D" alt="license"></a>
</p>

<p align="center">
  A collection of enterprise-grade UI components for React and Next.js applications, built on top of shadcn/ui.
</p>

## Features

- 🧩 **Enterprise-ready components** - Complex components for real-world applications
- 🔌 **Powered by shadcn/ui** - Built on the shadcn/ui methodology
- 📦 **Registry-based** - Install only what you need
- 🎨 **Customizable** - Tailwind CSS for styling flexibility
- 🌓 **Dark mode support** - Beautiful in light and dark
- ⚡ **Fast development** - Speed up your workflow with pre-built complex components
- 📱 **Responsive** - Mobile-first design approach
- ♿ **Accessible** - Built with accessibility in mind

## Components

RigidUI extends shadcn/ui with additional enterprise-grade components:

- **File Explorer** - Hierarchical file system browser with syntax highlighting
- **Currency Manager** - Multi-currency conversion and display system
- **Location Picker** - Geographic location selection with search functionality
- **Infinite Scroll** - Efficiently load large datasets with infinite scrolling
- **Multi-Step Form Wrapper** - Guided step-by-step form interfaces
- **Password Strength Meter** - Visual password strength evaluation component
- **File Uploader** - Drag and drop file upload with previews and validation

## Installation

1. **Set up a Next.js project with Tailwind CSS:**

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
cd my-app
```

2. **Install shadcn CLI and initialize:**

```bash
npm install -g shadcn
npx shadcn init
```

3. **Configure your project to use RigidUI:**

When asked for a custom registry URL during initialization, use:

```
https://rigidui.vercel.app
```

4. **Install components:**

```bash
npx shadcn add button
npx shadcn add location-picker
npx shadcn add currency-manager
# Add more components as needed
```

## Usage

Here's an example of using the Currency Manager component:

```tsx
import {
  CurrencyDisplay,
  CurrencyProvider,
  CurrencySelector,
} from "@/components/ui/currency-manager";

export default function App() {
  return (
    <CurrencyProvider>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Product Pricing</h1>

        <div className="flex items-center justify-between mb-6">
          <p>Select your preferred currency:</p>
          <CurrencySelector className="w-40" />
        </div>

        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h2 className="font-medium">Premium Package</h2>
            <p className="text-gray-600 mb-2">Enterprise-grade solution</p>
            <div className="text-xl font-bold">
              <CurrencyDisplay value={199.99} sourceCurrency="USD" />
            </div>
          </div>
        </div>
      </div>
    </CurrencyProvider>
  );
}
```

## Documentation

Visit our documentation site for detailed usage examples and API references:

[RigidUI Documentation](https://rigidui.vercel.app/docs)

## Development

To set up the development environment:

```bash
# Clone the repository
git clone https://github.com/FgrReloaded/rigidui.git
cd rigidui

# Install dependencies
npm install

# Start development server
npm run dev
```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](./CONTRIBUTING.md) for details on how to submit components, report issues, and more.

## License

RigidUI is licensed under the [MIT License](./LICENSE).
