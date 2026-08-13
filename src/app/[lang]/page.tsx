import { notFound } from "next/navigation";
import { HomePage } from "@/components/pages/home-page";
import { isLang, languages } from "@/lib/i18n";

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!isLang(lang)) {
    notFound();
  }

  return <HomePage lang={lang} />;
}