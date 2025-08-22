interface GridPatternProps {
  className?: string;
  size?: number;
  opacity?: number;
}

export default function GridPattern({
  className = "",
  size = 40,
  opacity = 0.35
}: GridPatternProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(156, 163, 175, ${opacity}) 1px, transparent 1px),
          linear-gradient(90deg, rgba(156, 163, 175, ${opacity}) 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`
      }}
    />
  );
}
