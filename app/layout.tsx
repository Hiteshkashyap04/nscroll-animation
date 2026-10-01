import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scroll-Driven Hero Animation",
  description:
    "A scroll-driven hero animation built with Next.js, GSAP and Tailwind CSS.",
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