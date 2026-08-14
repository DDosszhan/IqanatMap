import { notFound } from "next/navigation";
import { OrdasPage } from "@/components/pages/ordas-page";
import { isLang, languages } from "@/lib/i18n";

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Page({ params }: PageProps<"/[lang]/ordas">) {
  const { lang } = await params;

  if (!isLang(lang)) {
    notFound();
  }

  return <OrdasPage lang={lang} />;
}
