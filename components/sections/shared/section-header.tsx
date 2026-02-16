interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export default function SectionHeader({ title, description, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 lg:mb-20 ${className}`}>
      <h2 className="text-3xl lg:text-5xl font-bold font-poppins text-foreground mb-3 tracking-tight">
        {title}
      </h2>
      <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6" />
      <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
