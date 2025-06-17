"use client"

import { z } from 'zod'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConditionalField, FormSection, SmartForm, SmartFormField } from '@/registry/new-york/smart-form/smart-form'

// Create a client instance outside the component to avoid recreating on every render
const queryClient = new QueryClient()

// Define the form schema with Zod
const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  age: z.number().min(18, "Must be at least 18 years old"),
  bio: z.string().optional(),
  role: z.enum(["admin", "user", "moderator"]),
  notifications: z.boolean(),
  theme: z.enum(["light", "dark"]).optional(),
  favoriteColor: z.string().optional()
})

type UserFormData = z.infer<typeof userSchema>

// Mock API function
const createUser = async (data: UserFormData) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  console.log('Creating user:', data)
  return { id: Math.random(), ...data }
}

const roleOptions = [
  { value: "admin", label: "Administrator" },
  { value: "user", label: "User" },
  { value: "moderator", label: "Moderator" }
]

const themeOptions = [
  { value: "light", label: "Light Theme" },
  { value: "dark", label: "Dark Theme" }
]

export default function DemoPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto py-10 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Smart Form Demo</h1>
          <p className="text-muted-foreground mt-2">
            A simplified form component built with React Hook Form, Zod, and shadcn/ui
          </p>
        </div>

        <SmartForm
          schema={userSchema}
          mutationFn={createUser}
          queryKey={['users']}
          mode="create"
          onSuccess={(data) => {
            console.log('User created successfully:', data)
          }}
          onError={(error) => {
            console.error('Error creating user:', error)
          }}
        >
          {(form) => (
            <>
              <FormSection
                title="Personal Information"
                description="Basic details about the user"
              >
                <SmartFormField
                  form={form}
                  name="name"
                  type="text"
                  label="Full Name"
                  placeholder="Enter your full name"
                  description="This will be your display name"
                />

                <SmartFormField
                  form={form}
                  name="email"
                  type="email"
                  label="Email Address"
                  placeholder="Enter your email"
                />

                <SmartFormField
                  form={form}
                  name="age"
                  type="number"
                  label="Age"
                  placeholder="Enter your age"
                />

                <SmartFormField
                  form={form}
                  name="bio"
                  type="textarea"
                  label="Bio"
                  placeholder="Tell us about yourself"
                  description="Optional: A brief description about yourself"
                />
              </FormSection>

              <FormSection
                title="Account Settings"
                description="Configure your account preferences"
              >
                <SmartFormField
                  form={form}
                  name="role"
                  type="select"
                  label="Role"
                  placeholder="Select your role"
                  options={roleOptions}
                />

                <SmartFormField
                  form={form}
                  name="notifications"
                  type="checkbox"
                  label="Enable email notifications"
                  description="Receive updates and notifications via email"
                />

                <ConditionalField form={form} when="notifications" equals={true}>
                  <SmartFormField
                    form={form}
                    name="theme"
                    type="radio"
                    label="Preferred Theme"
                    options={themeOptions}
                  />
                </ConditionalField>

                <SmartFormField
                  form={form}
                  name="favoriteColor"
                  type="color"
                  label="Favorite Color"
                  description="Pick your favorite color"
                />
              </FormSection>
            </>
          )}
        </SmartForm>
      </div>
    </QueryClientProvider>
  )
}