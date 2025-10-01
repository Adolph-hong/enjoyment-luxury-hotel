import { forwardRef } from "react";

const Select = forwardRef(function Select({ options = [], className, ...rest }, ref) {
  return (
    <div className={`relative ${className}`}>
      <select
        ref={ref}
        className="w-full h-full appearance-none cursor-pointer bg-transparent pl-4 pr-12"
        {...rest}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <svg className="w-4 h-4 text-[#4B4B4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
});

export default Select;