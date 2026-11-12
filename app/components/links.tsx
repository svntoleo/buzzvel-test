import type { LinkItem } from "./content";

type LinkButtonProps = LinkItem & {
  variant?: "primary" | "outline" | "yellow";
  className?: string;
  onClick?: () => void;
};

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className={`logo${light ? " logo-light" : ""}`} href="#top" aria-label="Luma home">
      luma<span>.</span>
    </a>
  );
}

export function LinkButton({
  href,
  label,
  variant = "primary",
  className = "",
  onClick,
}: LinkButtonProps) {
  return (
    <a
      className={`button button-${variant}${className ? ` ${className}` : ""}`}
      href={href}
      onClick={onClick}
    >
      {label}
    </a>
  );
}
