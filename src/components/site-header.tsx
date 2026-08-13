"use client";

import {
  CalendarDays,
  GraduationCap,
  Home,
  Images,
  Map,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { copy, languagePath, languages, type Lang } from "@/lib/i18n";

const housingLabels: Record<Lang, string> = {
  kk: "Мұғалімдер үйі",
  ru: "Дом учителей",
  en: "Teachers House",
};

const menuLabels: Record<Lang, { open: string; close: string }> = {
  kk: { open: "Мәзірді ашу", close: "Мәзірді жабу" },
  ru: { open: "Открыть меню", close: "Закрыть меню" },
  en: { open: "Open menu", close: "Close menu" },
};

export function SiteHeader({ lang, path = "/" }: { lang: Lang; path?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang].nav;
  const navItems = [
    { href: languagePath(lang), label: t.home, icon: GraduationCap, active: path === "/" },
    {
      href: languagePath(lang, "/teachers/calendar"),
      label: t.calendar,
      icon: CalendarDays,
      active: path === "/teachers/calendar",
    },
    {
      href: languagePath(lang, "/teachers/faculty"),
      label: t.faculty,
      icon: Images,
      active: path === "/teachers/faculty",
    },
    {
      href: `${languagePath(lang)}#sections`,
      label: housingLabels[lang],
      icon: Home,
      active: false,
    },
    {
      href: languagePath(lang, "/map"),
      label: t.map,
      icon: Map,
      active: path === "/map" || path.startsWith("/map/"),
    },
  ];

  const languagePicker = (
    <div className="flex min-w-fit items-center gap-0.5 rounded-full border border-black/10 bg-[#f7f4ee]/85 p-1 text-[11px] font-semibold text-[#3f6d4e] sm:gap-1 sm:text-xs">
      {languages.map((code) => (
        <Link
          aria-current={code === lang ? "page" : undefined}
          aria-label={`${t.language}: ${code.toUpperCase()}`}
          className={`rounded-full px-2 py-1.5 transition sm:px-2.5 ${
            code === lang ? "bg-[#172119] text-white" : "hover:bg-black/5"
          }`}
          href={languagePath(code, path)}
          key={code}
        >
          {code.toUpperCase()}
        </Link>
      ))}
    </div>
  );

  return (
    <header className="sticky top-3 z-50 px-3 sm:px-4">
      <div className="mx-auto w-full max-w-5xl rounded-2xl border border-white/60 bg-white/65 px-3 py-2 shadow-[0_18px_60px_rgba(23,33,25,0.12)] backdrop-blur-2xl md:rounded-full md:px-4">
        <div className="flex items-center justify-between gap-2">
          <Link
            className="flex min-w-fit items-center gap-2 rounded-full bg-[#172119] px-3 py-2 text-sm font-semibold text-white shadow-sm sm:px-4"
            href={languagePath(lang)}
            onClick={() => setMenuOpen(false)}
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#c7d8a7] text-xs font-bold text-[#172119]">
              IQ
            </span>
            <span className="hidden sm:inline">IQanat</span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 px-1 text-sm font-medium text-[#465047] md:flex">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  aria-current={item.active ? "page" : undefined}
                  className={`group flex min-w-fit items-center gap-2 rounded-full px-3 py-2 transition ${
                    item.active
                      ? "bg-[#172119] text-white shadow-sm"
                      : "hover:bg-[#172119] hover:text-white"
                  }`}
                  href={item.href}
                  key={item.href}
                >
                  <Icon
                    className={`h-4 w-4 transition ${
                      item.active ? "text-[#c7d8a7]" : "text-[#3f6d4e] group-hover:text-[#c7d8a7]"
                    }`}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {languagePicker}
            <button
              aria-expanded={menuOpen}
              aria-label={menuOpen ? menuLabels[lang].close : menuLabels[lang].open}
              className="grid h-10 w-10 place-items-center rounded-full text-[#172119] transition hover:bg-black/5 md:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              title={menuOpen ? menuLabels[lang].close : menuLabels[lang].open}
              type="button"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav className="mt-2 grid grid-cols-2 gap-1 border-t border-black/8 pt-2 md:hidden">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  aria-current={item.active ? "page" : undefined}
                  className={`flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                    item.active
                      ? "bg-[#172119] text-white"
                      : "text-[#465047] hover:bg-black/5 hover:text-[#172119]"
                  }`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${item.active ? "text-[#c7d8a7]" : "text-[#3f6d4e]"}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        ) : null}
      </div>
    </header>
  );
}