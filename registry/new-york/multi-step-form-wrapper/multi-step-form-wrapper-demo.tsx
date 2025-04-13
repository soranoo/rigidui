"use client"

import * as React from "react"
import { useState } from "react"
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

// Combined schema for the entire form
const formSchema = z.object({
  ...basicInfoSchema.shape,
  ...messageSchema.shape,
})

type FormValues = z.infer<typeof formSchema>

export function MultiStepFormDemo() {
  const [result, setResult] = useState<FormValues | null>(null)

  const handleComplete = (data: FormValues) => {
    setResult(data)
    toast.success("Form submitted!")
  }

  return (
    <div className="max-w-sm mx-auto">
      {result ? (
        <div className="p-4 border rounded-md">
          <h2 className="font-medium mb-2">Form Submitted</h2>
          <pre className="text-xs bg-gray-100 p-2 rounded dark:bg-gray-800">
            {JSON.stringify(result, null, 2)}
          </pre>
          <button
            onClick={() => setResult(null)}
            className="mt-2 text-sm bg-primary text-white px-3 py-1 rounded"
          >
            Reset
          </button>
        </div>
      ) : (
        <MultiStepFormWrapper<FormValues>
          onComplete={handleComplete}
          completeButtonText="Submit"
          className="border rounded p-4"
          schema={formSchema}
        >
          <Step<FormValues>
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
      )}
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
