/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useContext, createContext, useCallback, useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronLeft, ChevronRight, LoaderCircle, Circle } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useForm, UseFormReturn, DefaultValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

type FormData = Record<string, unknown>

interface MultiStepFormContextType<T extends FormData = FormData> {
  currentStep: number
  totalSteps: number
  formData: T
  updateFormData: (stepData: Partial<T>) => void
  goToNextStep: () => Promise<void>
  goToPrevStep: () => void
  goToStep: (step: number) => void
  isFirstStep: boolean
  isLastStep: boolean
  isComplete: boolean
  form: UseFormReturn<T>
}

const MultiStepFormContext = createContext<MultiStepFormContextType<any> | undefined>(undefined)

export function useMultiStepForm<T extends FormData = FormData>() {
  const context = useContext(MultiStepFormContext) as MultiStepFormContextType<T>
  if (!context) {
    throw new Error("useMultiStepForm must be used within a MultiStepFormWrapper")
  }
  return context
}

export interface StepProps<T extends FormData = FormData> {
  children: React.ReactNode
  title?: string
  description?: string
  validate?: (data: T) => Promise<boolean> | boolean
  schema?: z.ZodObject<any>
}

export interface MultiStepFormWrapperProps<T extends FormData = FormData> {
  children: React.ReactNode
  className?: string
  onComplete?: (data: T) => void
  initialData?: Partial<T>
  showStepIndicator?: boolean
  showStepTitle?: boolean
  allowSkipSteps?: boolean
  navigationPosition?: 'bottom' | 'top'
  nextButtonText?: string
  prevButtonText?: string
  completeButtonText?: string
  onStepChange?: (prevStep: number, nextStep: number) => void
  schema?: z.ZodType<T>
}

export function Step<T extends FormData = FormData>({ children }: StepProps<T>): React.ReactNode {
  return <>{children}</>
}

export function MultiStepFormWrapper<T extends FormData = FormData>({
  children,
  className,
  onComplete,
  initialData = {} as Partial<T>,
  showStepIndicator = true,
  showStepTitle = true,
  allowSkipSteps = false,
  navigationPosition = 'bottom',
  nextButtonText = "Next",
  prevButtonText = "Back",
  completeButtonText = "Complete",
  onStepChange,
  schema,
}: MultiStepFormWrapperProps<T>): React.ReactNode {

  const steps = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === Step
  ) as React.ReactElement<StepProps<T>>[]

  const [currentStep, setCurrentStep] = useState<number>(0)
  const [formData, setFormData] = useState<T>(initialData as T)
  const [isValidating, setIsValidating] = useState<boolean>(false)
  const [isComplete, setIsComplete] = useState<boolean>(false)

  const form = useForm<T>({
    defaultValues: prepareDefaultValues(initialData, schema),
    resolver: schema ? zodResolver(schema) : undefined,
    mode: "onChange"
  })

  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === steps.length - 1
  const CurrentStepComponent = steps[currentStep]
  const { title, description, schema: stepSchema } = CurrentStepComponent?.props || {}

  React.useEffect(() => {
    if (stepSchema) {
      form.clearErrors()
      const firstFieldName = Object.keys(stepSchema.shape)[0] as keyof T;
      if (firstFieldName) {
        form.setFocus(firstFieldName as any);
      }
    }
  }, [currentStep, form, stepSchema])

  const updateFormData = useCallback((stepData: Partial<T>): void => {
    setFormData((prev) => ({ ...prev, ...stepData }));

    Object.entries(stepData).forEach(([key, value]) => {
      form.setValue(key as keyof T as any, value === undefined ? '' : value);
    });
  }, [form])

  const goToNextStep = useCallback(async (): Promise<void> => {
    const validate = CurrentStepComponent?.props.validate
    const stepSchema = CurrentStepComponent?.props.schema

    if (stepSchema) {
      setIsValidating(true)
      try {
        const stepFields = Object.keys(stepSchema.shape)
        const result = await form.trigger(stepFields as any[])
        if (!result) return
      } catch (error) {
        console.error("Step schema validation error:", error)
        return
      } finally {
        setIsValidating(false)
      }
    } else if (validate) {
      setIsValidating(true)
      try {
        const isValid = await validate(formData)
        if (!isValid) return
      } catch (error) {
        console.error("Validation error:", error)
        return
      } finally {
        setIsValidating(false)
      }
    }

    if (isLastStep) {
      if (schema) {
        const isValid = await form.trigger()
        if (!isValid) return
      }

      setIsComplete(true)
      onComplete?.(formData)
      return
    }

    const prevStep = currentStep
    const nextStep = currentStep + 1
    setCurrentStep(nextStep)
    onStepChange?.(prevStep, nextStep)
  }, [currentStep, formData, isLastStep, CurrentStepComponent?.props, form, onComplete, onStepChange, schema])

  const goToPrevStep = useCallback((): void => {
    if (isFirstStep) return

    const prevStep = currentStep
    const nextStep = currentStep - 1
    setCurrentStep(nextStep)
    onStepChange?.(prevStep, nextStep)
  }, [currentStep, isFirstStep, onStepChange])

  const goToStep = useCallback((step: number): void => {
    if (step < 0 || step >= steps.length || (!allowSkipSteps && step > currentStep)) return

    const prevStep = currentStep
    setCurrentStep(step)
    onStepChange?.(prevStep, step)
  }, [allowSkipSteps, currentStep, steps.length, onStepChange])

  const renderNavigation = (): React.ReactNode => (
    <div className="flex justify-between items-center mt-6">
      <Button
        variant="ghost"
        onClick={goToPrevStep}
        disabled={isFirstStep || isValidating}
        className={cn("gap-1", isFirstStep && "invisible")}
      >
        <ChevronLeft size={16} />
        {prevButtonText}
      </Button>

      <Button
        onClick={() => void goToNextStep()}
        disabled={isValidating}
        className="gap-1"
      >
        {isValidating ? (
          <LoaderCircle size={16} className="animate-spin mr-2" />
        ) : isLastStep ? (
          completeButtonText
        ) : (
          <>
            {nextButtonText}
            <ChevronRight size={16} />
          </>
        )}
      </Button>
    </div>
  )

  const renderStepIndicators = (): React.ReactNode => (
    <div className="flex justify-center items-center mb-6">
      {steps.map((_, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <div
              className={cn(
                "h-[2px] w-8 mx-1 transition-colors",
                index <= currentStep ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
              )}
            />
          )}
          <div
            className={cn(
              "flex items-center justify-center transition-all",
              allowSkipSteps && "cursor-pointer hover:scale-110"
            )}
            onClick={() => allowSkipSteps && goToStep(index)}
            role={allowSkipSteps ? "button" : undefined}
            tabIndex={allowSkipSteps ? 0 : undefined}
            aria-label={allowSkipSteps ? `Go to step ${index + 1}` : undefined}
          >
            {index < currentStep ? (
              <CheckCircle2 size={24} className="text-primary fill-primary/10" />
            ) : index === currentStep ? (
              <div className="rounded-full border-2 border-primary p-1 w-6 h-6 flex items-center justify-center">
                <span className="text-xs font-medium">{index + 1}</span>
              </div>
            ) : (
              <Circle size={24} className="text-gray-300 dark:text-gray-700" />
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  )

  function prepareDefaultValues(initialData: Partial<T>, schema?: z.ZodType<T>): DefaultValues<T> {
    const defaultValues = { ...initialData } as Record<string, any>;

    if (schema && 'shape' in schema) {
      const shapes = (schema as any).shape;
      Object.keys(shapes).forEach(key => {
        if (defaultValues[key] === undefined) {
          defaultValues[key] = '';
        }
      });
    }

    return defaultValues as DefaultValues<T>;
  }

  return (
    <div className={cn("max-w-2xl mx-auto", className)}>
      <MultiStepFormContext.Provider
        value={{
          currentStep,
          totalSteps: steps.length,
          formData,
          updateFormData,
          goToNextStep,
          goToPrevStep,
          goToStep,
          isFirstStep,
          isLastStep,
          isComplete,
          form,
        }}
      >
        {showStepIndicator && renderStepIndicators()}

        {showStepTitle && (title || description) && (
          <div className="mb-6">
            {title && <h2 className="text-2xl font-bold dark:text-white">{title}</h2>}
            {description && <p className="text-gray-500 dark:text-gray-400 mt-1">{description}</p>}
          </div>
        )}

        {navigationPosition === 'top' && renderNavigation()}

        <div className="mt-4 mb-4">
          {CurrentStepComponent}
        </div>

        {navigationPosition === 'bottom' && renderNavigation()}
      </MultiStepFormContext.Provider>
    </div>
  )
}
