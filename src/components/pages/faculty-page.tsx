"use client";

import { Mail, Phone, Search, UserRound, X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { copy, type Lang } from "@/lib/i18n";

type Teacher = {
  name: string;
  role: Record<Lang, string>;
  email: string;
  phone: string;
  photo?: string;
  photoAlt?: string;
};

const teachers: Teacher[] = [
  {
    name: "Жанибек ұстаз",
    role: { kk: "Мектеп директоры", ru: "Директор школы", en: "School Director" },
    email: "zhanibek.zhankulov@iqhs.edu.kz",
    phone: "+7 707 299 9965",
    photo: "/teachers/zhanibek-zhankulov-cutout-final.png",
    photoAlt: "Жанибек ұстаз",
  },
  {
    name: "Арайлым ұстаз",
    role: {
      kk: "Академиялық бөлім бойынша директордың орынбасары",
      ru: "Заместитель директора по академической части",
      en: "Deputy Director for Academics",
    },
    email: "ArailymAibekova@iqhs.edu.kz",
    phone: "+7 705 611 2603",
    photo: "/teachers/arailym-aibekova-cutout-final.png",
    photoAlt: "Арайлым ұстаз",
  },
  {
    name: "Алмас ұстаз",
    role: {
      kk: "Менеджер - мұғалімдер үйінің меңгерушісі",
      ru: "Менеджер - заведующий учительским домом",
      en: "Manager - Head of Teachers House",
    },
    email: "almasnesipbay@iqhs.edu.kz",
    phone: "+7 707 441 4195",
    photo: "/teachers/almas-nesipbay-cutout-final.png",
    photoAlt: "Алмас ұстаз",
  },
  {
    name: "Айғаным ұстаз",
    role: { kk: "Әдіскер", ru: "Методист", en: "Methodologist" },
    email: "aiganym.ibrahimova@iqhs.edu.kz",
    phone: "+7 747 569 1593",
    photo: "/teachers/aiganym-ibrahimova-cutout-final.png",
    photoAlt: "Айғаным ұстаз",
  },
  {
    name: "Жанна ұстаз",
    role: { kk: "Сатылым менеджері", ru: "Менеджер по продажам", en: "Sales Manager" },
    email: "JannaEsilbaeva@iqhs.edu.kz",
    phone: "+7 705 250 74 77",
    photo: "/teachers/janna-esilbaeva-cutout-final.png",
    photoAlt: "Жанна ұстаз",
  },
  {
    name: "Бекжан ұстаз",
    role: { kk: "Ақылды адам", ru: "Умный чел", en: "Smart Guy" },
    email: "BekzhanSerikkaliyev@iqhs.edu.kz",
    phone: "+7 776 995 0299",
    photo: "/teachers/bekzhan-serikkaliyev-cutout-final.png",
    photoAlt: "Бекжан ұстаз",
  },
];

const clearLabels: Record<Lang, string> = {
  kk: "Іздеуді тазарту",
  ru: "Очистить поиск",
  en: "Clear search",
};

function phoneHref(phone: string) {
  const normalized = phone.replace(/[^+\d]/g, "");
  return `tel:${normalized}`;
}

function teacherSearchText(teacher: Teacher) {
  return [teacher.name, ...Object.values(teacher.role), teacher.email, teacher.phone].join(" ");
}

export function FacultyPage({ lang }: { lang: Lang }) {
  const [query, setQuery] = useState("");
  const t = copy[lang].faculty;
  const locale = lang === "kk" ? "kk-KZ" : lang === "ru" ? "ru-RU" : "en-US";
  const filteredTeachers = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase(locale);
    if (!normalizedQuery) return teachers;

    return teachers.filter((teacher) =>
      teacherSearchText(teacher).toLocaleLowerCase(locale).includes(normalizedQuery),
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
        className="mx-auto grid w-full max-w-6xl gap-x-5 gap-y-28 px-5 pb-12 pt-24 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:px-10"
      >
        {filteredTeachers.length ? (
          filteredTeachers.map((teacher) => (
            <article
              className="relative mt-28 w-full max-w-[20rem] justify-self-center rounded-lg border border-[#d7cdbd] bg-[#fbfaf6]/95 px-5 pb-5 pt-32 shadow-[0_22px_46px_rgba(35,70,51,0.14)]"
              key={teacher.email}
            >
              <div className="pointer-events-none absolute -top-52 left-1/2 z-20 h-[19rem] w-[74%] max-w-[15.5rem] -translate-x-1/2">
                {teacher.photo ? (
                  <Image
                    alt={teacher.photoAlt ?? teacher.name}
                    className="object-contain object-bottom drop-shadow-[0_22px_22px_rgba(24,45,33,0.22)]"
                    fill
                    priority={false}
                    sizes="(min-width: 1024px) 248px, (min-width: 768px) 34vw, 74vw"
                    src={teacher.photo}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center rounded-lg bg-[#dfe7d2]">
                    <UserRound className="h-16 w-16 text-[#3f7654]" />
                  </div>
                )}
                <div className="absolute bottom-0 left-1/2 z-30 h-[2px] w-[92%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#b9aa93] to-transparent" />
                <div className="absolute -bottom-1 left-1/2 z-20 h-3 w-[58%] -translate-x-1/2 rounded-full bg-[#234633]/18 blur-sm" />
              </div>
              <div className="absolute inset-x-12 top-12 h-14 rounded-full bg-[#234633]/12 blur-2xl" />
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold leading-tight">{teacher.name}</h2>
                <p className="mt-1 text-xs font-semibold uppercase leading-relaxed tracking-[0.08em] text-[#3f7654]">
                  {teacher.role[lang]}
                </p>
                <div className="mt-5 grid gap-3 text-sm text-[#627267]">
                  <a className="flex items-center gap-2 transition hover:text-[#234633]" href={`mailto:${teacher.email}`}>
                    <Mail className="h-4 w-4 shrink-0" />
                    <span className="break-all">{teacher.email}</span>
                  </a>
                  <a className="flex items-center gap-2 transition hover:text-[#234633]" href={phoneHref(teacher.phone)}>
                    <Phone className="h-4 w-4 shrink-0" />
                    <span>{teacher.phone}</span>
                  </a>
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

