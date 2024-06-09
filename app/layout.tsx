import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";


export const metadata: Metadata = {
  title: "Flavor-Fusion",
  description: "App that generate recipe according to ingredients",
};
const customAppearance = {
  variables: {
    colorPrimary: '#4A90E2',
    colorBackground: '#ffffff',
    colorText: '#333333',
    colorInputBackground: '#ffffff',
    borderRadius: '8px',
  },
  elements: {
    card: 'shadow-lg border rounded-md',
    formButtonPrimary: 'custom-continue-button',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={customAppearance}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
