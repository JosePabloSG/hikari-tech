import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor?: string;
  iconColor?: string;
  hoverEffect?: boolean;
  className?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  iconBgColor = "bg-muted",
  iconColor = "text-muted-foreground",
  hoverEffect = true,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`group bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border ${hoverEffect ? "hover:-translate-y-2 hover:border-primary/20" : ""
        } ${className}`}
    >
      <div
        className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mb-6 transition-all ${hoverEffect ? "group-hover:bg-muted/80" : ""
          }`}
      >
        <Icon
          className={`w-6 h-6 ${iconColor} ${hoverEffect ? "group-hover:text-foreground" : ""
            }`}
        />
      </div>
      <h3 className="text-xl font-bold font-poppins text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground font-inter leading-relaxed">
        {description}
      </p>
    </div>
  );
}
