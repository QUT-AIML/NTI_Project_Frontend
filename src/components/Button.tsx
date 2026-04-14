import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  children: ReactNode;
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-sans transition-all duration-200 active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-b from-primary to-[#cc7700] text-surface rounded-lg px-4 py-2 font-medium",
    secondary: "bg-transparent border border-outline-variant/20 text-on-surface rounded-lg px-4 py-2",
    tertiary: "bg-transparent text-primary font-mono text-sm underline-offset-4 hover:underline px-2 py-1",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
