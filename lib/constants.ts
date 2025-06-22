import { NavigationItem } from "./types";

export const navigationItems: NavigationItem[] = [

  {
    title: 'Getting Started',
    href: '/docs/getting-started',
  },
  {
    title: 'Components',
    href: '/docs/components',
    isCollapsed: false,
    items: [
      { title: 'Currency Manager', href: '/docs/components/currency-manager' },
      { title: 'Draggable Dashboard', href: '/docs/components/draggable-dashboard' },
      { title: 'File Explorer', href: '/docs/components/file-explorer' },
      { title: 'File Uploader', href: '/docs/components/file-uploader' },
      { title: 'Image Loader', href: '/docs/components/image-loader' },
      { title: 'Infinite Scroll', href: '/docs/components/infinite-scroll' },
      { title: 'Location Picker', href: '/docs/components/location-picker' },
      { title: 'Multi-Step Form Wrapper', href: '/docs/components/multi-step-form-wrapper' },
      { title: 'Notification Center', href: '/docs/components/notification-center' },
      { title: 'Password Strength Meter', href: '/docs/components/strength-meter' },
      { title: 'Smart Form', href: '/docs/components/smart-form' },
      { title: 'Smart Search', href: '/docs/components/smart-search' },
    ]
  },
  {
    title: 'Hooks',
    href: '/docs/hooks',
    items: [
      { title: 'useLocation', href: '/docs/hooks/use-location' },
    ]
  }
]