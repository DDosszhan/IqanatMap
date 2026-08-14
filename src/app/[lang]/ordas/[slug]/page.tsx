import { notFound } from "next/navigation";
import { OrdaDetailPage } from "@/components/pages/orda-detail-page";
import { isLang, languages } from "@/lib/i18n";
import { getOrda, ordas } from "@/lib/ordas";

export function generateStaticParams() {
  return languages.flatMap((lang) => ordas.map(({ slug }) => ({ lang, slug })));
}

export default async function Page({ params }: PageProps<"/[lang]/ordas/[slug]">) {
  const { lang, slug } = await params;
  const orda = getOrda(slug);

  if (!isLang(lang) || !orda) notFound();

  return <OrdaDetailPage lang={lang} orda={orda} />;
}