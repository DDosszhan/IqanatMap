import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IQanat Guide",
  description: "Interactive newcomer guide for IQanat school.",
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
