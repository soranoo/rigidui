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

  const usageCode = `"use client"

import React, { useState } from "react"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  MultiStepFormWrapper,
  Step,
  useMultiStepForm
} from "./multi-step-form-wrapper"

const basicInfoSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
})

const messageSchema = z.object({
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(5, { message: "Message is too short" }),
})

const formSchema = z.object({
  ...basicInfoSchema.shape,
  ...messageSchema.shape,
})

type FormValues = z.infer<typeof formSchema>

export function MultiStepFormDemo() {
  const [result, setResult] = useState<FormValues | null>(null)

  const initialValues: Partial<FormValues> = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  const handleComplete = (data: FormValues) => {
    setResult(data)
    toast.success("Form submitted!")
  }

  return (
    <div className="max-w-sm mx-auto">
      <MultiStepFormWrapper
        onComplete={handleComplete}
        completeButtonText="Submit"
        className="border rounded p-4"
        schema={formSchema}
        initialData={initialValues}
      >
        <Step
          title="Basic Info"
          schema={basicInfoSchema}
        >
          <BasicInfoStep />
        </Step>
        <Step<FormValues>
          title="Message"
          schema={messageSchema}
        >
          <MessageStep />
        </Step>
      </MultiStepFormWrapper>
    </div>
  );
}

function BasicInfoStep() {
  const { form } = useMultiStepForm<FormValues>()

  return (
    <Form {...form}>
      <div className="space-y-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter your name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="Enter your email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </Form>
  )
}

function MessageStep() {
  const { form } = useMultiStepForm<FormValues>()

  return (
    <Form {...form}>
      <div className="space-y-3">
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Message subject"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <textarea
                  {...field}
                  placeholder="Type your message here"
                  className="w-full p-2 text-sm border rounded min-h-[80px] dark:bg-gray-800"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </Form>
  )
}
  `


  return (
    <ComponentDocTemplate
      title="Multi-Step Form Wrapper"
      description="A multi-step form wrapper component that breaks complex forms into manageable steps."
      previewComponent={<MultiStepFormDemo />}
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
