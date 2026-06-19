import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ListRowProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function ListRow({ icon: Icon, title, description, className = "" }: ListRowProps) {
  return (
    <div className={cn("group py-8 first:pt-0 last:pb-0 flex items-start gap-5 sm:gap-6", className)}>
      <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-muted flex items-center justify-center">
        <Icon className="w-5 h-5 text-muted-foreground" />
      </div>

      <div className="flex-1 space-y-1.5">
        <h3 className="text-lg font-semibold font-poppins text-foreground tracking-tight">{title}</h3>
        <p className="text-muted-foreground font-inter leading-relaxed text-[0.938rem] max-w-md">{description}</p>
      </div>
    </div>
  );
}
