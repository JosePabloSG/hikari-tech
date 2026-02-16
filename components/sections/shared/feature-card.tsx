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
      className={`group relative bg-card rounded-xl p-8 transition-all duration-300 border border-border ${hoverEffect ? "hover:border-primary/30" : ""
        } ${className}`}
    >
      {/* Luminous left accent — visible on hover */}
      {hoverEffect && (
        <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-primary/0 group-hover:bg-primary rounded-full transition-colors duration-300" />
      )}
      <div
        className={`w-11 h-11 ${iconBgColor} rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${hoverEffect ? "group-hover:bg-primary/10" : ""
          }`}
      >
        <Icon
          className={`w-5 h-5 ${iconColor} transition-colors duration-300 ${hoverEffect ? "group-hover:text-primary" : ""
            }`}
        />
      </div>
      <h3 className="text-lg font-semibold font-poppins text-foreground mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-muted-foreground font-inter leading-relaxed text-[0.938rem]">
        {description}
      </p>
    </div>
  );
}
