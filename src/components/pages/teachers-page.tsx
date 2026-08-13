import Link from "next/link";
import {
  BellRing,
  BookMarked,
  Building2,
  CalendarDays,
  ClipboardCheck,
  DoorOpen,
  Home,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  UsersRound,
  Wifi,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { copy, languagePath, type Lang } from "@/lib/i18n";

const buildingIcons = [Building2, DoorOpen, Home, UsersRound];
const essentialIcons = [ClipboardCheck, CalendarDays, BookMarked, ShieldCheck, MessageSquareText, Wifi];

export function TeachersPage({ lang }: { lang: Lang }) {
  const t = copy[lang].teachers;

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#172119]">
      <SiteHeader lang={lang} path="/teachers" />
      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3f6d4e]">{t.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.96] sm:text-7xl">{t.title}</h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[#465047]">{t.intro}</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="rounded-md bg-[#172119] px-4 py-3 text-sm font-semibold text-white" href={languagePath(lang, "/teachers/calendar")}>{t.calendar}</Link>
          <Link className="rounded-md border border-black/10 bg-white/70 px-4 py-3 text-sm font-semibold" href={languagePath(lang, "/teachers/faculty")}>{t.faculty}</Link>
        </div>
      </section>
      <section className="border-y border-black/10 bg-white/55">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 py-8 sm:px-8 md:grid-cols-4 lg:px-10">
          {t.buildings.map(([name, purpose, note], index) => {
            const Icon = buildingIcons[index];
            return (
              <article className="rounded-lg border border-black/10 bg-[#fdfbf7] p-5" key={name}>
                <Icon className="h-6 w-6 text-[#3f6d4e]" />
                <h2 className="mt-5 text-xl font-semibold">{name}</h2>
                <p className="mt-3 text-sm leading-6 text-[#465047]">{purpose}</p>
                <p className="mt-4 border-t border-black/10 pt-4 text-xs leading-5 text-[#697168]">{note}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="mb-5 flex items-end justify-between gap-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3f6d4e]">{t.include}</p>
            <h2 className="mt-3 text-3xl font-semibold">{t.includeTitle}</h2>
          </div>
          <BellRing className="hidden h-8 w-8 text-[#3f6d4e] sm:block" />
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {t.essentials.map(([title, text], index) => {
            const Icon = essentialIcons[index];
            return (
              <article className="rounded-lg border border-black/10 bg-white/70 p-5" key={title}>
                <Icon className="h-5 w-5 text-[#3f6d4e]" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#586158]">{text}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-5 pb-12 sm:px-8 lg:px-10">
        <div className="grid gap-4 rounded-lg border border-black/10 bg-[#172119] p-6 text-white md:grid-cols-[0.8fr_1.2fr]">
          <div><MapPin className="h-6 w-6 text-[#c7d8a7]" /><h2 className="mt-4 text-2xl font-semibold">{t.nextIdea}</h2></div>
          <p className="text-sm leading-7 text-white/75">{t.nextText}</p>
        </div>
      </section>
    </main>
  );
}