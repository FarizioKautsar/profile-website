// components/Textarea.tsx
import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { motion } from "framer-motion";

interface TextareaProps {
  label: string;
  id: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  rows?: number;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  id,
  placeholder,
  register,
  error,
  rows = 4,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-6"
    >
      <label htmlFor={id} className="block text-sm font-medium text-gray-300 dark:text-gray-400">
        {label}
      </label>
      <textarea
        id={id}
        {...register}
        rows={rows}
        placeholder={placeholder}
        className={`mt-2 px-4 py-2 transition-all block w-full rounded-md bg-transparent text-gray-300 focus:outline-none border-yellow-400 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
          error ? "!border-red-500 focus:border-red-500 focus:ring-red-500" : ""
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-400">{error.message}</p>}
    </motion.div>
  );
};

export default Textarea;
