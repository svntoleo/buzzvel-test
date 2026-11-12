import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luma — Practical learning for curious people",
  description:
    "Build skills that actually move you forward with practical, expert-led courses from Luma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
