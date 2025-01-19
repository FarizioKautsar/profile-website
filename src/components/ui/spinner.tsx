import React from "react";
import { cn } from "@/lib/utils"; // Assuming you have this utility for conditional classnames

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = "md", color = "text-blue-700" }) => {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-4",
    lg: "h-10 w-10 border-4",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-t-transparent",
        sizeClasses[size],
        color
      )}
    />
  );
};

export default Spinner;
