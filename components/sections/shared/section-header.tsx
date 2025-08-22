interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export default function SectionHeader({ title, description, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-foreground mb-4">
        {title}
      </h2>
      <p className="text-lg font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
