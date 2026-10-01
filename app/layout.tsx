import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welcome — Scroll Driven Hero",
  description: "A scroll-driven hero interaction built with Next.js, GSAP and Tailwind CSS.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
