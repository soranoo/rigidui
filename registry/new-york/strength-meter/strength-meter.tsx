"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Eye, EyeOff, Check, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cva, type VariantProps } from "class-variance-authority"

const strengthMeterVariants = cva(
  "transition-all w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 mt-1 flex gap-1",
  {
    variants: {
      size: {
        default: "h-2",
        sm: "h-1.5",
        lg: "h-3",
      },
      animated: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      size: "default",
      animated: true,
    },
  }
)

const strengthBarSegmentVariants = cva(
  "h-full rounded-full transition-all duration-300 ease-in-out",
  {
    variants: {
      strength: {
        empty: "bg-transparent",
        weak: "bg-red-500",
        fair: "bg-orange-500",
        good: "bg-yellow-500",
        strong: "bg-green-500",
      },
      animated: {
        true: "animate-pulse",
        false: "",
      },
    },
    defaultVariants: {
      strength: "empty",
      animated: false,
    },
  }
)

export type StrengthLevel = "empty" | "weak" | "fair" | "good" | "strong"

export interface PasswordStrengthRequirement {
  label: string
  validator: (password: string) => boolean
}

export interface PasswordStrengthMeterProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof strengthMeterVariants> {
  value?: string
  onValueChange?: (value: string) => void
  showText?: boolean
  showRequirements?: boolean
  segments?: number
  strengthThresholds?: Record<StrengthLevel, number>
  requirements?: PasswordStrengthRequirement[]
  customCalculateStrength?: (password: string) => number
  showPasswordToggle?: boolean
  strengthLabels?: Record<StrengthLevel, string>
  className?: string
  meterClassName?: string
  inputClassName?: string
  placeholder?: string
}

const defaultRequirements: PasswordStrengthRequirement[] = [
  {
    label: "At least 8 characters",
    validator: (password) => password.length >= 8,
  },
  {
    label: "At least one lowercase letter",
    validator: (password) => /[a-z]/.test(password),
  },
  {
    label: "At least one uppercase letter",
    validator: (password) => /[A-Z]/.test(password),
  },
  {
    label: "At least one number",
    validator: (password) => /\d/.test(password),
  },
  {
    label: "At least one special character",
    validator: (password) => /[!@#$%^&*(),.?":{}|<>]/.test(password),
  },
]

const defaultStrengthLabels = {
  empty: "Empty",
  weak: "Weak",
  fair: "Fair",
  good: "Good",
  strong: "Strong",
}

const defaultStrengthThresholds = {
  empty: 0,
  weak: 1,
  fair: 40,
  good: 70,
  strong: 90,
}

export function PasswordStrengthMeter({
  value = "",
  onValueChange,
  showText = true,
  showRequirements = true,
  segments = 4,
  strengthThresholds = defaultStrengthThresholds,
  requirements = defaultRequirements,
  customCalculateStrength,
  showPasswordToggle = true,
  strengthLabels = defaultStrengthLabels,
  className,
  meterClassName,
  inputClassName,
  placeholder = "Enter password",
  size,
  animated = true,
  ...props
}: PasswordStrengthMeterProps) {
  const [password, setPassword] = React.useState(value)
  const [showPassword, setShowPassword] = React.useState(false)

  React.useEffect(() => {
    setPassword(value)
  }, [value])

  const calculateBaseStrength = (password: string): number => {
    if (!password) return 0

    let score = 0
    let passedRequirements = 0

    requirements.forEach((requirement) => {
      if (requirement.validator(password)) {
        passedRequirements++
      }
    })

    score = (passedRequirements / requirements.length) * 100

    if (password.length > 12) score += 10
    if (password.length > 16) score += 10
    if (/[!@#$%^&*(),.?":{}|<>]{2,}/.test(password)) score += 10

    return Math.min(score, 100)
  }

  const calculateStrength = customCalculateStrength || calculateBaseStrength
  const strengthScore = calculateStrength(password)

  const getStrengthLevel = (): StrengthLevel => {
    if (strengthScore >= strengthThresholds.strong) return "strong"
    if (strengthScore >= strengthThresholds.good) return "good"
    if (strengthScore >= strengthThresholds.fair) return "fair"
    if (strengthScore >= strengthThresholds.weak) return "weak"
    return "empty"
  }

  const strengthLevel = getStrengthLevel()

  const getSegmentStrength = (index: number): StrengthLevel => {
    const segmentThreshold = (index + 1) * (100 / segments)

    if (strengthScore >= segmentThreshold) {
      if (strengthLevel === "strong") return "strong"
      if (strengthLevel === "good") return "good"
      if (strengthLevel === "fair") return "fair"
      if (strengthLevel === "weak") return "weak"
    }

    return "empty"
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setPassword(newValue)
    onValueChange?.(newValue)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const getPassedRequirements = (): PasswordStrengthRequirement[] => {
    return requirements.filter((requirement) => requirement.validator(password))
  }

  const getStrengthColor = (): string => {
    switch (strengthLevel) {
      case "strong":
        return "text-green-500"
      case "good":
        return "text-yellow-500"
      case "fair":
        return "text-orange-500"
      case "weak":
        return "text-red-500"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className={cn("space-y-2", className)} {...props}>
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handleChange}
          className={cn("pr-10", inputClassName)}
          placeholder={placeholder}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 "
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        )}
      </div>

      <div
        className={cn(
          strengthMeterVariants({ size, animated }),
          meterClassName
        )}
      >
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            className={cn(
              strengthBarSegmentVariants({
                strength: getSegmentStrength(i),
                animated: animated && getSegmentStrength(i) !== "empty" && strengthLevel !== "strong",
              }),
              "flex-1"
            )}
            style={{
              transitionDelay: `${i * 75}ms`,
            }}
          />
        ))}
      </div>

      {showText && password && (
        <div className="flex items-center">
          <span className={cn("text-sm font-medium", getStrengthColor())}>
            {strengthLabels[strengthLevel]}
          </span>
          <span className="ml-auto text-xs text-gray-500 dark:text-gray-400">
            {getPassedRequirements().length} of {requirements.length} requirements met
          </span>
        </div>
      )}

      {showRequirements && (
        <ul className="mt-3 space-y-1.5">
          {requirements.map((requirement, index) => {
            const passed = requirement.validator(password)
            return (
              <li
                key={index}
                className={cn(
                  "flex items-center gap-2 text-sm",
                  passed
                    ? "text-green-600 dark:text-green-500"
                    : "text-gray-500 dark:text-gray-400"
                )}
              >
                {passed ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <X className="h-4 w-4 text-gray-400" />
                )}
                {requirement.label}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export function PasswordInput({
  value,
  onChange,
  className,
  showToggle = true,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  showToggle?: boolean
}) {
  const [showPassword, setShowPassword] = React.useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className={cn("pr-10", className)}
        value={value}
        onChange={onChange}
        {...props}
      />
      {showToggle && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 "
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      )}
    </div>
  )
}