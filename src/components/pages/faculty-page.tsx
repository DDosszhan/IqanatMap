"use client";

import { Mail, MapPin, Search, UserRound, X } from "lucide-react";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { copy, type Lang } from "@/lib/i18n";

const teachers = [
  ["Teacher Name", "Mathematics", "Main School", "Room 204"],
  ["Teacher Name", "English", "Main School", "Room 118"],
  ["Teacher Name", "Science", "Freedom House", "Lab 2"],
  ["Teacher Name", "House Mentor", "Students Residence", "Residence desk"],
  ["Teacher Name", "Academic Coordinator", "Teachers House", "Office 3"],
  ["Teacher Name", "Clubs Coordinator", "Freedom House", "Project room"],
] as const;

const clearLabels: Record<Lang, string> = {
  kk: "Іздеуді тазарту",
  ru: "Очистить поиск",
  en: "Clear search",
};

export function FacultyPage({ lang }: { lang: Lang }) {
  const [query, setQuery] = useState("");
  const t = copy[lang].faculty;
  const locale = lang === "kk" ? "kk-KZ" : lang === "ru" ? "ru-RU" : "en-US";
  const filteredTeachers = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase(locale);
    if (!normalizedQuery) return teachers;

    return teachers.filter((teacher) =>
      teacher.some((value) => value.toLocaleLowerCase(locale).includes(normalizedQuery)),
    );
  }, [locale, query]);

  return (
    <main className="ornamented-page min-h-screen bg-[#f7f4ee] text-[#234633]">
      <SiteHeader lang={lang} path="/teachers/faculty" />
      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase text-[#3f7654]">{t.eyebrow}</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.96] sm:text-7xl">{t.title}</h1>
          <label className="relative block rounded-lg border border-black/10 bg-white/70 p-2" htmlFor="faculty-search">
            <span className="sr-only">{t.search}</span>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#697168]"
            />
            <input
              autoComplete="off"
              className="h-12 w-full rounded-md bg-[#f7f4ee] pl-11 pr-11 text-sm text-[#234633] outline-none ring-[#3f7654] placeholder:text-[#697168] focus:ring-2"
              id="faculty-search"
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.search}
              type="search"
              value={query}
            />
            {query ? (
              <button
                aria-label={clearLabels[lang]}
                className="absolute right-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-[#627267] transition hover:bg-black/5 hover:text-[#234633]"
                onClick={() => setQuery("")}
                title={clearLabels[lang]}
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </label>
        </div>
      </section>

      <section
        aria-live="polite"
        className="mx-auto grid w-full max-w-6xl gap-4 px-5 pb-12 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:px-10"
      >
        {filteredTeachers.length ? (
          filteredTeachers.map(([name, role, building, room], index) => (
            <article className="overflow-hidden rounded-lg border border-black/10 bg-white/75" key={`${role}-${index}`}>
              <div className="flex aspect-[4/3] items-center justify-center bg-[#dfe7d2]">
                <UserRound className="h-16 w-16 text-[#3f7654]" />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="mt-1 text-sm font-medium text-[#3f7654]">{role}</p>
                <div className="mt-5 grid gap-3 text-sm text-[#627267]">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {building}, {room}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {t.email}
                  </p>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="py-16 text-center md:col-span-2 lg:col-span-3">
            <Search className="mx-auto h-8 w-8 text-[#8a938a]" />
            <p className="mt-4 text-base font-semibold text-[#506255]">{t.noResults}</p>
          </div>
        )}
      </section>
    </main>
  );
}