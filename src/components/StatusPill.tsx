import { ReactNode } from "react";

interface StatusPillProps {
  status: "success" | "warning" | "error" | "neutral";
  children: ReactNode;
  className?: string;
}

export function StatusPill({ status, children, className = "" }: StatusPillProps) {
  const variants = {
    success: "bg-secondary/20 text-secondary border border-secondary/20",
    warning: "bg-warning/20 text-warning border border-warning/20",
    error: "bg-error/20 text-error border border-error/20",
    neutral: "bg-surface-bright text-on-surface-variant border border-on-surface-variant/20",
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium ${variants[status]} ${className}`}>
      {children}
    </span>
  );
}
