import { TextareaHTMLAttributes } from 'react';

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export default function FormTextarea({ label, error, className = '', ...props }: FormTextareaProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-[#213b5b] mb-2">
        {label}
        {props.required && <span className="text-[#c32c28] ml-1">*</span>}
      </label>
      <textarea
        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#c32c28] focus:border-transparent transition-all ${className}`}
        rows={4}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-[#c32c28]">{error}</p>}
    </div>
  );
}
