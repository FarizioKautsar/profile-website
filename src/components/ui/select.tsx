// components/Select.tsx
import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { motion } from "framer-motion";

interface SelectProps {
  label: string;
  id: string;
  options: { value: string; label: string }[];
  register: UseFormRegisterReturn;
  error?: FieldError;
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  id,
  options,
  register,
  error,
  placeholder,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-6"
    >
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-300 dark:text-gray-400"
      >
        {label}
      </label>
      <div className="relative mt-2">
        <select
          id={id}
          {...register}
          className={`block w-full transition-all rounded-md bg-transparent text-gray-300 focus:outline-none border-yellow-600 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 appearance-none ${
            error
              ? "!border-red-500 focus:border-red-500 focus:ring-red-500"
              : ""
          }`}
        >
          <option value="" disabled hidden>
            {placeholder || "Select an option"}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* Custom Chevron */}
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {error && <p className="mt-1 text-sm text-red-400">{error.message}</p>}
    </motion.div>
  );
};

export default Select;
