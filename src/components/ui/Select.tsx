import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { RxChevronDown } from "react-icons/rx";

interface SelectContextType {
  value: string;
  onValueChange: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SelectContext = createContext<SelectContextType | null>(null);

interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

export function Select({ value = "", onValueChange, children }: SelectProps) {
  const [internalValue, setInternalValue] = useState(value);
  const [open, setOpen] = useState(false);

  const handleValueChange = (newValue: string) => {
    setInternalValue(newValue);
    onValueChange?.(newValue);
    setOpen(false);
  };

  return (
    <SelectContext.Provider
      value={{
        value: internalValue,
        onValueChange: handleValueChange,
        open,
        setOpen,
      }}
    >
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
}

interface SelectTriggerProps {
  className?: string;
  children?: React.ReactNode;
}

export function SelectTrigger({ className = "", children }: SelectTriggerProps) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectTrigger must be used within Select");

  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.parentElement?.contains(event.target as Node)) {
        context.setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [context]);

  return (
    <button
      ref={ref}
      className={`flex items-center justify-between gap-2 border border-border-primary bg-white px-4 py-2 text-left ${className}`}
      onClick={() => context.setOpen(!context.open)}
    >
      {children}
      <RxChevronDown
        className={`size-4 transition-transform ${context.open ? "rotate-180" : ""}`}
      />
    </button>
  );
}

interface SelectContentProps {
  className?: string;
  children: React.ReactNode;
}

export function SelectContent({ className = "", children }: SelectContentProps) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectContent must be used within Select");

  if (!context.open) return null;

  return (
    <div
      className={`absolute z-50 mt-1 w-full border border-border-primary bg-white shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

interface SelectItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export function SelectItem({ value, className = "", children }: SelectItemProps) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectItem must be used within Select");

  const isSelected = context.value === value;

  return (
    <button
      className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
        isSelected ? "bg-gray-50 font-medium" : ""
      } ${className}`}
      onClick={() => context.onValueChange(value)}
    >
      {children}
    </button>
  );
}

interface SelectValueProps {
  placeholder?: string;
}

export function SelectValue({ placeholder = "" }: SelectValueProps) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectValue must be used within Select");

  return <span>{context.value || placeholder}</span>;
}
