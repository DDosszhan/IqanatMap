import { notFound } from "next/navigation";
import { FacultyPage } from "@/components/pages/faculty-page";
import { isLang, languages } from "@/lib/i18n";

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Page({ params }: PageProps<"/[lang]/teachers/faculty">) {
  const { lang } = await params;

  if (!isLang(lang)) {
    notFound();
  }

  return <FacultyPage lang={lang} />;
}