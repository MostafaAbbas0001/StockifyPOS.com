import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  overline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = ({
  overline,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {overline && (
        <p className="text-overline mb-3 text-info">{overline}</p>
      )}
      <h2 className="mb-4 text-display-sm text-heading md:text-display">{title}</h2>
      {description && (
        <p className="text-lg text-body">{description}</p>
      )}
    </div>
  );
};

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  badgeVariant?: "success" | "warning" | "info" | "danger";
  className?: string;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  badge,
  badgeVariant = "info",
  className,
}: FeatureCardProps) => {
  const badgeClasses = {
    success: "bg-success-soft text-success",
    warning: "bg-warning-soft text-warning",
    info: "bg-primary text-primary-foreground shadow-sm",
    danger: "bg-danger-soft text-danger",
  };

  return (
    <div
      className={cn(
        "card-feature group interactive-lift",
        className
      )}
    >
      <div className="mb-4 icon-container-light group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-heading">{title}</h3>
      <p className="mb-3 text-sm text-body">{description}</p>
      {badge && (
        <span
          className={cn(
            "inline-block rounded-full px-3 py-1 text-xs font-medium",
            badgeClasses[badgeVariant]
          )}
        >
          {badge}
        </span>
      )}
    </div>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export const StatCard = ({ value, label, className }: StatCardProps) => {
  return (
    <div className={cn("text-center", className)}>
      <div className="mb-1 text-3xl font-bold text-heading md:text-4xl">
        {value}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

interface StatusBadgeProps {
  status: "success" | "warning" | "info" | "danger" | "pending";
  children: React.ReactNode;
  className?: string;
}

export const StatusBadge = ({ status, children, className }: StatusBadgeProps) => {
  const statusClasses = {
    success: "bg-success-soft text-success",
    warning: "bg-warning-soft text-warning",
    info: "bg-info-soft text-info",
    danger: "bg-danger-soft text-danger",
    pending: "bg-secondary text-muted-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        statusClasses[status],
        className
      )}
    >
      {children}
    </span>
  );
};
