import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full border border-border-primary bg-background-primary px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-black ${className}`}
      {...props}
    />
  );
}
