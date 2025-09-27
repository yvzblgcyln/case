import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-6 w-6",
  md: "h-10 w-10",
  lg: "h-16 w-16",
};

export function LoadingSpinner(props: Readonly<LoadingSpinnerProps>) {
  const { size = "md", className = "" } = props;
  return (
    <div className={`flex justify-center mb-2 ${className}`}>
      <div
        className={`animate-spin rounded-full border-4 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}
      />
    </div>
  );
}
