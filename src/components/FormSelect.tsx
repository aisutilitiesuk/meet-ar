import { SelectHTMLAttributes } from 'react';

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}

export default function FormSelect({ label, options, error, className = '', ...props }: FormSelectProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-[#213b5b] mb-2">
        {label}
        {props.required && <span className="text-[#c32c28] ml-1">*</span>}
      </label>
      <select
        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#c32c28] focus:border-transparent transition-all ${className}`}
        {...props}
      >
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-[#c32c28]">{error}</p>}
    </div>
  );
}
