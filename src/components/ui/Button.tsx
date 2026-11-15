import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "cyan" | "blue" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "cyan",
  size = "md",
  href,
  isExternal,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-bold tracking-tight rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

  const sizeClasses = {
    sm: "px-3.5 py-2 text-xs gap-1.5",
    md: "px-5 py-3 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5",
  };

  const variantClasses = {
    cyan: "bg-cyan-brand text-navy-950 hover:bg-cyan-hover shadow-sm hover:-translate-y-0.5",
    blue: "bg-blue-brand text-white hover:bg-navy-900 shadow-sm hover:-translate-y-0.5",
    outline: "bg-white border border-[#cbdced] text-navy-900 hover:bg-slate-50 hover:border-slate-300",
    white: "bg-white text-navy-900 hover:bg-slate-100 shadow-sm hover:-translate-y-0.5",
    ghost: "bg-transparent text-navy-900 hover:bg-slate-100",
  };

  const combinedClassName = cn(baseClasses, sizeClasses[size], variantClasses[variant], className);

  if (href) {
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClassName}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
