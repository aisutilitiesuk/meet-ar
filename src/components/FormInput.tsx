import { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function FormInput({ label, error, className = '', ...props }: FormInputProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-[#213b5b] mb-2">
        {label}
        {props.required && <span className="text-[#c32c28] ml-1">*</span>}
      </label>
      <input
        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#c32c28] focus:border-transparent transition-all ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-[#c32c28]">{error}</p>}
    </div>
  );
}
