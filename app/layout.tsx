import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Flavor-Fusion",
  description: "App that generate recipe according to ingredients",
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
