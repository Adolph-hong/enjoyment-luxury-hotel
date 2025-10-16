import React, { forwardRef } from 'react'

export type Option = { label: string; value: string }

type SelectProps = {
  options?: Option[]
  className?: string
  placeholder?: string
  value?: string
  defaultValue?: string
} & React.SelectHTMLAttributes<HTMLSelectElement>

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { options = [], className = '', placeholder, value, defaultValue, ...rest },
  ref,
) {
  const finalOptions = placeholder
    ? [{ label: placeholder, value: '' }, ...options]
    : options

  // 受控 / 非受控 二擇一（配合 RHF）
  const controlledProps = value !== undefined ? { value } : { defaultValue }
  return (
    <div className={`relative ${className}`}>
      <select
        ref={ref}
        {...controlledProps}
        className="w-full h-full appearance-none cursor-pointer bg-transparent pl-4 pr-10 max-sm:text-[14px]"
        {...rest}
      >
        {finalOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <svg
          className="w-4 h-4 text-[#4B4B4B]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  )
})

export default Select
