import * as React from "react"
import { cn } from "@/lib/utils"

export interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const FloatingLabelInput = React.forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  ({ label, className, id, value, onChange, onBlur, type = "text", ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const hasValue = typeof value === 'string' ? value.length > 0 : !!value
    return (
      <div className="relative w-full mb-7">
        <input
          id={id}
          ref={ref}
          type={type}
          className={cn(
            "block w-full appearance-none rounded-md border border-input bg-background px-4 py-3 text-sm shadow-sm transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className,
            (isFocused && !hasValue && props.placeholder) ? "placeholder-gray-400" : "placeholder-transparent"
          )}
          value={value}
          onChange={onChange}
          onBlur={e => {
            setIsFocused(false)
            onBlur && onBlur(e)
          }}
          onFocus={() => setIsFocused(true)}
          placeholder={(isFocused && !hasValue && props.placeholder) ? props.placeholder : ""}
          {...props}
        />
        <label
          htmlFor={id}
          className={cn(
            "absolute left-5 transition-all duration-200 pointer-events-none select-none text-[15px]",
            (isFocused || hasValue)
              ? "-top-5 text-teal-700 text-[13px] font-semibold bg-transparent"
              : "top-1/2 -translate-y-1/2 text-gray-400"
          )}
          style={{background: 'transparent', padding: '0 2px'}}
        >
          {label}
        </label>
      </div>
    )
  }
)
FloatingLabelInput.displayName = "FloatingLabelInput"
