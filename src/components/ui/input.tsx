// components/Input.tsx
import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { motion } from "framer-motion";
import clsx from "clsx";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type = "text",
  placeholder,
  register,
  error,
}) => {
  const [focused, setFocused] = React.useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-6"
    >
      <label
        htmlFor={id}
        className={clsx(
          "block text-sm transition-all font-medium text-gray-300 dark:text-gray-400",
          focused && "!text-indigo-500"
        )}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`mt-2 px-4 py-2 transition-all block w-full rounded-md bg-transparent text-gray-300 focus:outline-none border-yellow-400 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
          error ? "!border-red-500 focus:border-red-500 focus:ring-red-500" : ""
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-400">{error.message}</p>}
    </motion.div>
  );
};

export default Input;
