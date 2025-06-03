import { PasswordStrengthMeter } from "@/registry/new-york/strength-meter/strength-meter";
import { useState } from "react";

export const advancedUsageExamples = [
  {
    title: "Basic Password Strength Meter",
    description:
      "Simple password strength meter with default settings. Perfect for most use cases with standard security requirements.",
    code: `import { PasswordStrengthMeter } from "@/components/ui/password-strength-meter"

export default function BasicExample() {
  return (
    <PasswordStrengthMeter
      placeholder="Enter your password"
      className="max-w-md"
    />
  )
}`,
    component: (
      <PasswordStrengthMeter
        placeholder="Enter your password"
        className="max-w-md"
      />
    ),
  },
  {
    title: "Custom Segments and Size",
    description:
      "Customize the number of segments and size of the strength meter for different visual presentations.",
    code: `import { PasswordStrengthMeter } from "@/components/ui/password-strength-meter"

export default function CustomSegmentsExample() {
  return (
    <PasswordStrengthMeter
      segments={5}
      size="lg"
      placeholder="Password with 5 segments"
      className="max-w-md"
    />
  )
}`,
    component: (
      <PasswordStrengthMeter
        segments={5}
        size="lg"
        placeholder="Password with 5 segments"
        className="max-w-md"
      />
    ),
  },
  {
    title: "Custom Strength Labels",
    description:
      "Personalize the strength level labels to match your application's tone and brand voice.",
    code: `import { PasswordStrengthMeter } from "@/components/ui/password-strength-meter"

export default function CustomLabelsExample() {
  return (
    <PasswordStrengthMeter
      placeholder="Type a secure password..."
      strengthLabels={{
        empty: "Start typing",
        weak: "Needs work",
        fair: "Getting better",
        good: "Almost there",
        strong: "Perfect!"
      }}
      className="max-w-md"
    />
  )
}`,
    component: (
      <PasswordStrengthMeter
        placeholder="Type a secure password..."
        strengthLabels={{
          empty: "Start typing",
          weak: "Needs work",
          fair: "Getting better",
          good: "Almost there",
          strong: "Perfect!"
        }}
        className="max-w-md"
      />
    ),
  },
  {
    title: "Custom Requirements",
    description:
      "Define your own password requirements with custom validators to meet specific security policies.",
    code: `import { PasswordStrengthMeter } from "@/components/ui/password-strength-meter"

export default function CustomRequirementsExample() {
  return (
    <PasswordStrengthMeter
      placeholder="Enterprise-grade password"
      requirements={[
        {
          label: "At least 12 characters",
          validator: (password) => password.length >= 12,
        },
        {
          label: "Contains uppercase and lowercase",
          validator: (password) =>
            /[A-Z]/.test(password) && /[a-z]/.test(password),
        },
        {
          label: "Contains numbers",
          validator: (password) => /\d/.test(password),
        },
        {
          label: "Contains special characters (!@#$%^&*)",
          validator: (password) =>
            /[!@#$%^&*(),.?":{}|<>]/.test(password),
        },
        {
          label: "No common patterns (123, abc, etc.)",
          validator: (password) =>
            !/(123|abc|password|qwerty)/i.test(password),
        },
      ]}
      className="max-w-md"
    />
  )
}`,
    component: (
      <PasswordStrengthMeter
        placeholder="Enterprise-grade password"
        requirements={[
          {
            label: "At least 12 characters",
            validator: (password) => password.length >= 12,
          },
          {
            label: "Contains uppercase and lowercase",
            validator: (password) =>
              /[A-Z]/.test(password) && /[a-z]/.test(password),
          },
          {
            label: "Contains numbers",
            validator: (password) => /\d/.test(password),
          },
          {
            label: "Contains special characters (!@#$%^&*)",
            validator: (password) =>
              /[!@#$%^&*(),.?":{}|<>]/.test(password),
          },
          {
            label: "No common patterns (123, abc, etc.)",
            validator: (password) =>
              !/(123|abc|password|qwerty)/i.test(password),
          },
        ]}
        className="max-w-md"
      />
    ),
  },
  {
    title: "Custom Strength Thresholds",
    description:
      "Adjust the score thresholds for different strength levels to make the meter more or less strict.",
    code: `import { PasswordStrengthMeter } from "@/components/ui/password-strength-meter"

export default function CustomThresholdsExample() {
  return (
    <PasswordStrengthMeter
      placeholder="Strict security requirements"
      strengthThresholds={{
        empty: 0,
        weak: 1,
        fair: 60,
        good: 85,
        strong: 95,
      }}
      strengthLabels={{
        empty: "Empty",
        weak: "Very Weak",
        fair: "Moderate",
        good: "Strong",
        strong: "Ultra Strong"
      }}
      className="max-w-md"
    />
  )
}`,
    component: (
      <PasswordStrengthMeter
        placeholder="Strict security requirements"
        strengthThresholds={{
          empty: 0,
          weak: 1,
          fair: 60,
          good: 85,
          strong: 95,
        }}
        strengthLabels={{
          empty: "Empty",
          weak: "Very Weak",
          fair: "Moderate",
          good: "Strong",
          strong: "Ultra Strong"
        }}
        className="max-w-md"
      />
    ),
  },
  {
    title: "Without Requirements List",
    description:
      "Hide the requirements checklist for a cleaner interface when space is limited.",
    code: `import { PasswordStrengthMeter } from "@/components/ui/password-strength-meter"

export default function NoRequirementsExample() {
  return (
    <PasswordStrengthMeter
      placeholder="Clean interface"
      showRequirements={false}
      showText={true}
      className="max-w-md"
    />
  )
}`,
    component: (
      <PasswordStrengthMeter
        placeholder="Clean interface"
        showRequirements={false}
        showText={true}
        className="max-w-md"
      />
    ),
  },
  {
    title: "With Form Integration",
    description:
      "Integrate with form state management to handle password changes and validation.",
    code: `import { PasswordStrengthMeter } from "@/components/ui/password-strength-meter"
import { useState } from "react"

export default function FormIntegrationExample() {
  const [password, setPassword] = useState("")
  const [isValid, setIsValid] = useState(false)

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword)
    // Custom validation logic
    setIsValid(newPassword.length >= 8 && /[A-Z]/.test(newPassword))
  }

  return (
    <div className="space-y-4 max-w-md">
      <PasswordStrengthMeter
        value={password}
        onValueChange={handlePasswordChange}
        placeholder="Form-integrated password"
      />
      <div className="text-sm">
        <p className={\`font-medium \${isValid ? 'text-green-600' : 'text-red-600'}\`}>
          Password is {isValid ? 'valid' : 'invalid'}
        </p>
        <p className="text-muted-foreground">
          Length: {password.length} characters
        </p>
      </div>
    </div>
  )
}`,
    component: (() => {
      const FormIntegrationComponent = () => {
        const [password, setPassword] = useState("")
        const [isValid, setIsValid] = useState(false)

        const handlePasswordChange = (newPassword: string) => {
          setPassword(newPassword)
          setIsValid(newPassword.length >= 8 && /[A-Z]/.test(newPassword))
        }

        return (
          <div className="space-y-4 max-w-md">
            <PasswordStrengthMeter
              value={password}
              onValueChange={handlePasswordChange}
              placeholder="Form-integrated password"
            />
            <div className="text-sm">
              <p className={`font-medium ${isValid ? 'text-green-600' : 'text-red-600'}`}>
                Password is {isValid ? 'valid' : 'invalid'}
              </p>
              <p className="text-muted-foreground">
                Length: {password.length} characters
              </p>
            </div>
          </div>
        )
      }
      return <FormIntegrationComponent />
    })(),
  },
  {
    title: "Custom Calculation Function",
    description:
      "Implement your own strength calculation algorithm for specialized security requirements.",
    code: `import { PasswordStrengthMeter } from "@/components/ui/password-strength-meter"

export default function CustomCalculationExample() {
  const customStrengthCalculator = (password: string): number => {
    if (!password) return 0

    let score = 0

    // Length scoring (0-40 points)
    if (password.length >= 8) score += 20
    if (password.length >= 12) score += 10
    if (password.length >= 16) score += 10

    // Character variety (0-40 points)
    if (/[a-z]/.test(password)) score += 10
    if (/[A-Z]/.test(password)) score += 10
    if (/\\d/.test(password)) score += 10
    if (/[^A-Za-z0-9]/.test(password)) score += 10

    // Pattern penalties (-20 points each)
    if (/(.)\\1{2,}/.test(password)) score -= 20 // Repeated characters
    if (/(123|abc|qwe)/i.test(password)) score -= 20 // Common sequences

    return Math.max(0, Math.min(100, score))
  }

  return (
    <PasswordStrengthMeter
      placeholder="Custom algorithm"
      customCalculateStrength={customStrengthCalculator}
      strengthLabels={{
        empty: "Empty",
        weak: "Weak (0-30)",
        fair: "Fair (31-60)",
        good: "Good (61-80)",
        strong: "Strong (81-100)"
      }}
      className="max-w-md"
    />
  )
}`,
    component: (
      <PasswordStrengthMeter
        placeholder="Custom algorithm"
        customCalculateStrength={(password: string): number => {
          if (!password) return 0

          let score = 0

          // Length scoring (0-40 points)
          if (password.length >= 8) score += 20
          if (password.length >= 12) score += 10
          if (password.length >= 16) score += 10

          // Character variety (0-40 points)
          if (/[a-z]/.test(password)) score += 10
          if (/[A-Z]/.test(password)) score += 10
          if (/\d/.test(password)) score += 10
          if (/[^A-Za-z0-9]/.test(password)) score += 10

          // Pattern penalties (-20 points each)
          if (/(.)\\1{2,}/.test(password)) score -= 20 // Repeated characters
          if (/(123|abc|qwe)/i.test(password)) score -= 20 // Common sequences

          return Math.max(0, Math.min(100, score))
        }}
        strengthLabels={{
          empty: "Empty",
          weak: "Weak (0-30)",
          fair: "Fair (31-60)",
          good: "Good (61-80)",
          strong: "Strong (81-100)"
        }}
        className="max-w-md"
      />
    ),
  },
];
