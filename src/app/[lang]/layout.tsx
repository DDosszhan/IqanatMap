import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { isLang, languages } from "@/lib/i18n";

const descriptions = {
  kk: "IQanat мектеп қауымдастығының құндылықтары, күнтізбесі және кампус картасы.",
  ru: "Ценности, календарь и карта кампуса школьного сообщества IQanat.",
  en: "Values, calendar, and campus map for the IQanat school community.",
} as const;

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;

  return {
    title: "IQanat Guide",
    description: isLang(lang) ? descriptions[lang] : descriptions.kk,
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!isLang(lang)) notFound();

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}