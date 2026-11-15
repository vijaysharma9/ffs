import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl mb-10",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {kicker && (
        <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-blue-brand mb-2.5">
          {kicker}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-display font-extrabold text-navy-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-ink-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
