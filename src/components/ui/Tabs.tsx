import React, { createContext, useContext, useState } from "react";

interface TabsContextType {
  value: string;
  setValue: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | null>(null);

interface TabsProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}

export function Tabs({ defaultValue, className = "", children }: TabsProps) {
  const [value, setValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

interface TabsListProps {
  className?: string;
  children: React.ReactNode;
}

export function TabsList({ className = "", children }: TabsListProps) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-lg bg-gray-100 p-1 ${className}`}
    >
      {children}
    </div>
  );
}

interface TabsTriggerProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export function TabsTrigger({
  value,
  className = "",
  children,
}: TabsTriggerProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsTrigger must be used within Tabs");

  const isActive = context.value === value;

  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-all ${
        isActive
          ? "bg-white text-black shadow-sm"
          : "text-gray-600 hover:text-black"
      } ${className}`}
      onClick={() => context.setValue(value)}
      data-state={isActive ? "active" : "inactive"}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export function TabsContent({
  value,
  className = "",
  children,
}: TabsContentProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsContent must be used within Tabs");

  if (context.value !== value) return null;

  return (
    <div className={className} data-state="active">
      {children}
    </div>
  );
}
