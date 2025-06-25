"use client"
import React from 'react'
import ComponentDocTemplate from '../../_components/ComponentDocTemplate'
import GuidedTourDemo from './_components/GuidedTourDemo'

export default function GuidedTourPage() {
  const propsData = [
    {
      name: 'children',
      type: 'ReactNode',
      defaultValue: 'undefined',
      description: 'The content to be wrapped by the tour provider',
      required: true,
    },
    {
      name: 'autoStart',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Whether to automatically start the tour when the component mounts',
    },
    {
      name: 'persistent',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Whether to persist tour state in localStorage across sessions',
    },
    {
      name: 'onTourComplete',
      type: '() => void',
      defaultValue: 'undefined',
      description: 'Callback function called when the tour is completed',
    },
    {
      name: 'onTourSkip',
      type: '() => void',
      defaultValue: 'undefined',
      description: 'Callback function called when the tour is skipped',
    },
  ]

  const tourStepPropsData = [
    {
      name: 'id',
      type: 'string',
      defaultValue: 'undefined',
      description: 'Unique identifier for the tour step',
      required: true,
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: 'undefined',
      description: 'Title displayed in the tour step popover',
      required: true,
    },
    {
      name: 'content',
      type: 'string',
      defaultValue: 'undefined',
      description: 'Content/description text for the tour step',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 'undefined',
      description: 'The order in which this step should appear in the tour sequence',
      required: true,
    },
    {
      name: 'position',
      type: "'top' | 'bottom' | 'left' | 'right'",
      defaultValue: "'bottom'",
      description: 'Preferred position for the popover relative to the target element',
    },
    {
      name: 'children',
      type: 'ReactNode',
      defaultValue: 'undefined',
      description: 'The element(s) to be highlighted and explained in this tour step',
      required: true,
    },
  ]

  const tourTriggerPropsData = [
    {
      name: 'children',
      type: 'ReactNode',
      defaultValue: 'undefined',
      description: 'The content to be rendered as the tour trigger button',
      required: true,
    },
    {
      name: 'className',
      type: 'string',
      defaultValue: "''",
      description: 'Additional CSS classes for styling the trigger',
    },
    {
      name: 'hideAfterComplete',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Whether to hide the trigger button after the tour is completed',
    },
  ]

  const features = [
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Interactive Guidance",
      description: "Highlight specific elements on your interface and provide contextual explanations to guide users through complex workflows."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Smart Positioning",
      description: "Automatically calculates optimal popover positioning based on viewport space, ensuring tours work perfectly on any screen size."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Persistent State",
      description: "Optional state persistence allows users to resume tours where they left off, even after closing the browser."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011 1v8a1 1 0 01-1 1M7 4V1a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 01-1 1M7 4H5a1 1 0 00-1 1v4a1 1 0 001 1h2M7 4h10M5 9h14" />
        </svg>
      ),
      title: "Progress Tracking",
      description: "Built-in progress indicator shows users how many steps remain, with smooth transitions between tour steps."
    }
  ]

  const subComponents = [
    {
      name: 'TourProvider',
      description: 'The main provider component that manages tour state and provides context to child components.',
      propsData: propsData
    },
    {
      name: 'TourStep',
      description: 'Wraps any element to make it part of the guided tour sequence with highlighted content and explanatory popovers.',
      propsData: tourStepPropsData
    },
    {
      name: 'TourTrigger',
      description: 'A trigger component that starts the guided tour when clicked.',
      propsData: tourTriggerPropsData
    }
  ]

  const usageCode = `import { TourProvider, TourStep, TourTrigger } from "@/components/guided-tour"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MyComponent() {
  return (
    <TourProvider
      autoStart={false}
      persistent={true}
      onTourComplete={() => console.log('Tour completed!')}
    >
      <div className="space-y-6">
        {/* Trigger to start the tour */}
        <TourTrigger>
          <Button>Start Tour</Button>
        </TourTrigger>

        {/* First step of the tour */}
        <TourStep
          id="welcome-card"
          title="Welcome!"
          content="This is your dashboard where you can manage all your activities."
          order={1}
          position="bottom"
        >
          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              Welcome to your dashboard!
            </CardContent>
          </Card>
        </TourStep>

        {/* Second step of the tour */}
        <TourStep
          id="settings-section"
          title="Settings"
          content="Click here to access your account settings and preferences."
          order={2}
          position="top"
        >
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent>
              Manage your preferences here.
            </CardContent>
          </Card>
        </TourStep>
      </div>
    </TourProvider>
  )
}`

  return (
    <ComponentDocTemplate
      title="Guided Tour"
      description="A comprehensive guided tour component that helps users understand your interface through interactive step-by-step walkthroughs."
      previewComponent={<GuidedTourDemo />}
      githubPath="registry/new-york/guided-tour/guided-tour.tsx"
      usageCode={usageCode}
      usageDescription="The Guided Tour component provides an interactive way to onboard users and showcase features. It highlights specific elements, provides contextual information, and guides users through complex workflows with smooth transitions and smart positioning."
      propsData={propsData}
      features={features}
      subComponents={subComponents}
      componentName="https://rigidui.com/registry/guided-tour"
    />
  )
}