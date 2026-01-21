import React, { createContext, useContext, useState } from "react";

interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
  type: "single" | "multiple";
}

const AccordionContext = createContext<AccordionContextType | null>(null);

interface AccordionProps {
  type?: "single" | "multiple";
  className?: string;
  children: React.ReactNode;
  defaultValue?: string | string[];
}

export function Accordion({
  type = "single",
  className = "",
  children,
  defaultValue,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(() => {
    if (!defaultValue) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  });

  const toggleItem = (value: string) => {
    if (type === "single") {
      setOpenItems((prev) => (prev.includes(value) ? [] : [value]));
    } else {
      setOpenItems((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemContextType {
  value: string;
  isOpen: boolean;
}

const AccordionItemContext = createContext<AccordionItemContextType | null>(
  null
);

interface AccordionItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export function AccordionItem({
  value,
  className = "",
  children,
}: AccordionItemProps) {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("AccordionItem must be used within Accordion");

  const isOpen = context.openItems.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={className} data-state={isOpen ? "open" : "closed"}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

interface AccordionTriggerProps {
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function AccordionTrigger({
  className = "",
  children,
  icon,
}: AccordionTriggerProps) {
  const accordionContext = useContext(AccordionContext);
  const itemContext = useContext(AccordionItemContext);

  if (!accordionContext || !itemContext) {
    throw new Error("AccordionTrigger must be used within AccordionItem");
  }

  return (
    <button
      className={`flex w-full items-center justify-between py-4 text-left font-medium ${className}`}
      onClick={() => accordionContext.toggleItem(itemContext.value)}
      data-state={itemContext.isOpen ? "open" : "closed"}
    >
      {children}
      {icon}
    </button>
  );
}

interface AccordionContentProps {
  className?: string;
  children: React.ReactNode;
}

export function AccordionContent({
  className = "",
  children,
}: AccordionContentProps) {
  const itemContext = useContext(AccordionItemContext);

  if (!itemContext) {
    throw new Error("AccordionContent must be used within AccordionItem");
  }

  if (!itemContext.isOpen) return null;

  return <div className={`pb-4 ${className}`}>{children}</div>;
}
