import { notFound } from "next/navigation";
import { AcademicCalendarPage } from "@/components/pages/academic-calendar-page";
import { isLang, languages } from "@/lib/i18n";

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Page({ params }: PageProps<"/[lang]/teachers/calendar">) {
  const { lang } = await params;

  if (!isLang(lang)) {
    notFound();
  }

  return <AcademicCalendarPage lang={lang} />;
}