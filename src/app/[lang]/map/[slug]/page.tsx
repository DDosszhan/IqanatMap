import { notFound } from "next/navigation";
import { BuildingPlaceholderPage } from "@/components/pages/building-placeholder-page";
import { buildings, getBuilding } from "@/lib/campus-map-data";
import { isLang, languages } from "@/lib/i18n";

export function generateStaticParams() {
  return languages.flatMap((lang) => buildings.map(({ slug }) => ({ lang, slug })));
}

export default async function Page({ params }: PageProps<"/[lang]/map/[slug]">) {
  const { lang, slug } = await params;
  const building = getBuilding(slug);

  if (!isLang(lang) || !building) notFound();

  return <BuildingPlaceholderPage building={building} lang={lang} />;
}
