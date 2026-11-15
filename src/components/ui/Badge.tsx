import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "blue" | "slate" | "green";
  className?: string;
}

export function Badge({ children, variant = "slate", className }: BadgeProps) {
  const variants = {
    cyan: "bg-[#e1f6fd] text-[#087aa5] border border-cyan-brand/20",
    blue: "bg-blue-light text-blue-brand border border-blue-brand/20",
    slate: "bg-[#f0f5fa] text-[#52708f]",
    green: "bg-[#d9f7ed] text-[#07966d]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold rounded-full transition-colors",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
