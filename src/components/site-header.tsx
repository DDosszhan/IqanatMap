import Link from "next/link";
import {
  CalendarDays,
  GraduationCap,
  Home,
  Images,
  Map,
} from "lucide-react";
import { copy, languagePath, languages, type Lang } from "@/lib/i18n";

const housingLabels: Record<Lang, string> = {
  kk: "Мұғалімдер үйі",
  ru: "Дом учителей",
  en: "Teachers House",
};

export function SiteHeader({ lang, path = "/" }: { lang: Lang; path?: string }) {
  const t = copy[lang].nav;
  const navItems = [
    { href: languagePath(lang), label: t.home, icon: GraduationCap },
    { href: languagePath(lang, "/teachers/calendar"), label: t.calendar, icon: CalendarDays },
    { href: languagePath(lang, "/teachers/faculty"), label: t.faculty, icon: Images },
    { href: `${languagePath(lang)}#sections`, label: housingLabels[lang], icon: Home },
    { href: `${languagePath(lang)}#campus`, label: t.map, icon: Map },
  ];

  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border border-white/55 bg-white/55 px-3 py-2 shadow-[0_18px_60px_rgba(23,33,25,0.12)] backdrop-blur-2xl sm:px-4">
        <Link
          className="flex min-w-fit items-center gap-2 rounded-full bg-[#172119] px-4 py-2 text-sm font-semibold text-white shadow-sm"
          href={languagePath(lang)}
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-[#c7d8a7] text-xs font-bold text-[#172119]">
            IQ
          </span>
          IQanat
        </Link>

        <nav className="flex min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto px-1 text-sm font-medium text-[#465047]">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                className="group flex min-w-fit items-center gap-2 rounded-full px-3 py-2 transition hover:bg-[#172119] hover:text-white"
                href={item.href}
                key={item.href}
              >
                <Icon className="h-4 w-4 text-[#3f6d4e] transition group-hover:text-[#c7d8a7]" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex min-w-fit items-center gap-1 rounded-full border border-black/10 bg-[#f7f4ee]/80 p-1 text-xs font-semibold text-[#3f6d4e]">
          {languages.map((code) => (
            <Link
              aria-label={`${t.language}: ${code.toUpperCase()}`}
              className={`rounded-full px-2.5 py-1.5 transition ${
                code === lang ? "bg-[#172119] text-white" : "hover:bg-black/5"
              }`}
              href={languagePath(code, path)}
              key={code}
            >
              {code.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}