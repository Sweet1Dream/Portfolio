import type { Metadata, Viewport } from "next";
import "./global.css";

// ИСПРАВЛЕНО: Добавили const перед metadata
export const metadata: Metadata = {
  title: "Vladislav Dev | Portfolio",
  description: "Middle Frontend Developer Portfolio",
};

// ИСПРАВЛЕНО: Добавили const перед viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
