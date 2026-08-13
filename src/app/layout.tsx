import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IQanat Guide",
  description: "Stylish interactive guide for the IQanat school community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kk">
      <body>{children}</body>
    </html>
  );
}