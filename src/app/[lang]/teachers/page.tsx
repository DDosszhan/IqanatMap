import { notFound } from "next/navigation";
import { TeachersPage } from "@/components/pages/teachers-page";
import { isLang, languages } from "@/lib/i18n";

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Page({ params }: PageProps<"/[lang]/teachers">) {
  const { lang } = await params;

  if (!isLang(lang)) {
    notFound();
  }

  return <TeachersPage lang={lang} />;
}