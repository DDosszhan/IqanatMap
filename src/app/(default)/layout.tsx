import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "IQanat Guide",
  description: "IQanat мектеп қауымдастығына арналған интерактивті анықтамалық.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="kk">
      <body>{children}</body>
    </html>
  );
}