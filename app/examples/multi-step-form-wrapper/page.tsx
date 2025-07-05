"use client"

import ExampleTemplate from "@/components/example-template"
import { MultiStepFormWrapper, Step } from "@/registry/new-york/multi-step-form-wrapper/multi-step-form-wrapper"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface DemoFormData extends Record<string, unknown> {
  name: string
  email: string
  message: string
}

function MultiStepFormDemo() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <MultiStepFormWrapper<DemoFormData>
        initialData={{ name: "", email: "", message: "" }}
        showStepIndicator={true}
        showStepTitle={true}
        nextButtonText="Next Step"
        prevButtonText="Previous"
        completeButtonText="Complete"
      >
        <Step>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                className="w-full"
              />
            </div>
          </div>
        </Step>

        <Step>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Details</h3>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
            </div>
          </div>
        </Step>

        <Step>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Message</h3>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                rows={4}
                className="w-full"
              />
            </div>
          </div>
        </Step>
      </MultiStepFormWrapper>
    </div>
  )
}

export default function MultiStepFormExample() {
  return (
    <ExampleTemplate
      title="Multi-Step Form Wrapper"
      description="A comprehensive form wrapper that handles multi-step forms with validation, progress tracking, and state management."
      component={MultiStepFormDemo}
      badges={["React", "TypeScript", "Form Validation", "Progress Tracking"]}
    />
  )
}