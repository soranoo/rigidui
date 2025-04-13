import React from 'react'
import ComponentDocTemplate from '../../_components/ComponentDocTemplate'
import { MultiStepFormDemo } from '@/registry/new-york/multi-step-form-wrapper/multi-step-form-wrapper-demo'

export default function MultiStepFormWrapperPage() {
  const propsData = [
    {
      name: 'children',
      type: 'React.ReactNode',
      defaultValue: '-',
      description: 'Step components to render within the form',
    },
    {
      name: 'className',
      type: 'string',
      defaultValue: "''",
      description: 'Additional class names for styling',
    },
    {
      name: 'onComplete',
      type: '(data: FormData) => void',
      defaultValue: 'undefined',
      description: 'Callback function called when the form is completed',
    },
    {
      name: 'initialData',
      type: 'Record<string, unknown>',
      defaultValue: '{}',
      description: 'Initial data for the form',
    },
    {
      name: 'showStepIndicator',
      type: 'boolean',
      defaultValue: 'true',
      description: 'Whether to show the step indicator',
    },
    {
      name: 'showStepTitle',
      type: 'boolean',
      defaultValue: 'true',
      description: 'Whether to show the step title and description',
    },
    {
      name: 'allowSkipSteps',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Whether to allow skipping to other steps',
    },
    {
      name: 'navigationPosition',
      type: "'bottom' | 'top'",
      defaultValue: "'bottom'",
      description: 'Position of the navigation buttons',
    },
    {
      name: 'nextButtonText',
      type: 'string',
      defaultValue: '"Next"',
      description: 'Text for the next button',
    },
    {
      name: 'prevButtonText',
      type: 'string',
      defaultValue: '"Back"',
      description: 'Text for the previous button',
    },
    {
      name: 'completeButtonText',
      type: 'string',
      defaultValue: '"Complete"',
      description: 'Text for the complete button',
    },
    {
      name: 'onStepChange',
      type: '(prevStep: number, nextStep: number) => void',
      defaultValue: 'undefined',
      description: 'Callback function called when the step changes',
    },
  ]

  const features = [
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Step-by-Step Form Flow",
      description: "Guide users through complex forms with a clear step-by-step interface."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Step Validation",
      description: "Validate data at each step before allowing users to proceed to the next step."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Progressive Data Collection",
      description: "Collect and store data progressively as users move through each step of the form."
    }
  ]

  const bestPractices = [
    {
      type: 'do' as const,
      items: [
        'Break complex forms into logical step groups',
        'Provide clear titles and descriptions for each step',
        'Show progress indication to help users understand where they are',
        'Validate data before proceeding to next steps',
      ]
    },
    {
      type: 'dont' as const,
      items: [
        'Create too many steps that might overwhelm users',
        'Put unrelated fields in the same step',
        'Hide important information about the form flow',
        'Force users to complete steps they might not need',
      ]
    }
  ]

  const usageCode = `import { MultiStepFormWrapper, Step } from "@/components/ui/multi-step-form-wrapper"

export default function MyForm() {
  return (
    <MultiStepFormWrapper
      onComplete={(data) => console.log("Form completed with:", data)}
    >
      <Step title="Personal Information" description="Enter your personal details">
        <div className="space-y-4">
          {/* Step 1 form fields */}
          <input type="text" placeholder="Full Name" />
        </div>
      </Step>
      <Step title="Contact Information" description="How can we reach you?">
        <div className="space-y-4">
          {/* Step 2 form fields */}
          <input type="email" placeholder="Email Address" />
        </div>
      </Step>
      <Step title="Confirmation" description="Review and submit">
        <div>
          {/* Step 3 confirmation content */}
          <p>Please review your information before submitting.</p>
        </div>
      </Step>
    </MultiStepFormWrapper>
  )
}`

  const FormPreview = () => (
    // <MultiStepFormWrapper className="w-full" >
    //   <Step title="Personal Details" description="Enter your personal information">
    //     <div className="space-y-4">
    //       <div>
    //         <label className="block text-sm font-medium mb-1">Full Name</label>
    //         <input
    //           type="text"
    //           className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
    //           placeholder="John Doe"
    //         />
    //       </div>
    //     </div>
    //   </Step>
    //   <Step title="Contact" description="How can we reach you?">
    //     <div className="space-y-4">
    //       <div>
    //         <label className="block text-sm font-medium mb-1">Email Address</label>
    //         <input
    //           type="email"
    //           className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
    //           placeholder="john@example.com"
    //         />
    //       </div>
    //     </div>
    //   </Step>
    //   <Step title="Finish" description="Complete your submission">
    //     <div className="py-4">
    //       <p>Thank you for your information! Click Complete to submit.</p>
    //     </div>
    //   </Step>
    // </MultiStepFormWrapper>
    <MultiStepFormDemo  />
  )

  return (
    <ComponentDocTemplate
      title="Multi-Step Form Wrapper"
      description="A multi-step form wrapper component that breaks complex forms into manageable steps."
      previewComponent={<FormPreview />}
      githubPath="registry/new-york/multi-step-form-wrapper/multi-step-form-wrapper.tsx"
      usageCode={usageCode}
      usageDescription="The Multi-Step Form Wrapper component simplifies the creation of step-by-step forms with validation and progress tracking."
      propsData={propsData}
      features={features}
      bestPractices={bestPractices}
      componentName="https://rigidui.vercel.app/registry/multi-step-form-wrapper"
    />
  )
}
