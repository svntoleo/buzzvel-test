import Image from "next/image";
import type { ReactNode } from "react";
import { avatarPhotos } from "./content";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  centered?: boolean;
  light?: boolean;
};

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="arrow-icon">
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
    </svg>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`eyebrow${light ? " eyebrow-light" : ""}`}>{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "center-intro" : "section-intro"}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {description && <p className="body-copy">{description}</p>}
    </div>
  );
}

export function AvatarStack({ count = 3 }: { count?: number }) {
  return (
    <div className="avatar-stack" aria-label="Luma learners">
      {avatarPhotos.slice(0, count).map((src) => (
        <Image
          key={src.src}
          src={src}
          alt=""
          width={30}
          height={30}
          className="avatar"
        />
      ))}
    </div>
  );
}

export function TrustedBy() {
  return (
    <div className="trusted">
      <AvatarStack />
      <span><strong>Trusted by 24,000+</strong> learners</span>
    </div>
  );
}
