import { notFound } from "next/navigation";
import { CampusMapPage } from "@/components/pages/campus-map-page";
import { isLang, languages } from "@/lib/i18n";

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Page({ params }: PageProps<"/[lang]/map">) {
  const { lang } = await params;

  if (!isLang(lang)) notFound();

  return <CampusMapPage lang={lang} />;
}
