import { brandIcons, type BrandIconKey } from "@/lib/brand-icons";

export function BrandIconGlyph({
  icon,
  size = 20,
  className = "",
}: {
  icon: BrandIconKey;
  size?: number;
  className?: string;
}) {
  const data = brandIcons[icon];
  if (!data) return null;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d={data.path} />
    </svg>
  );
}
