import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "low" | "default" | "high";
  accentColor?: "primary" | "secondary" | "error" | "warning";
}

export function Card({ children, className = "", variant = "default", accentColor }: CardProps) {
  const bgClasses = {
    low: "bg-surface-container-low",
    default: "bg-surface-container",
    high: "bg-surface-container-high",
  };

  const accentClasses = {
    primary: "border-t border-t-primary border-t-2",
    secondary: "border-t border-t-secondary border-t-2",
    error: "border-t border-t-error border-t-2",
    warning: "border-t border-t-warning border-t-2",
  };

  return (
    <div className={`rounded-lg p-6 ${bgClasses[variant]} ${accentColor ? accentClasses[accentColor] : ""} ${className}`}>
      {children}
    </div>
  );
}
