import {
  CalendarDays,
  Car,
  CigaretteOff,
  HeartHandshake,
  Images,
  Map,
  PawPrint,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Users,
  VolumeX,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CampusMap } from "@/components/campus-map";
import { SiteHeader } from "@/components/site-header";
import { campusMapCopy } from "@/lib/campus-map-data";
import { copy, languagePath, type Lang } from "@/lib/i18n";
import { teacherHouseCopy } from "@/lib/teacher-house-i18n";

const pageIcons = [CalendarDays, Images];
const ruleIcons = {
  internet: ShieldCheck,
  quiet: VolumeX,
  clean: Sparkles,
  community: HeartHandshake,
  smoking: CigaretteOff,
  guests: Users,
  pets: PawPrint,
  parking: Car,
  repairs: Wrench,
} as const;

export function HomePage({ lang }: { lang: Lang }) {
  const t = copy[lang].home;
  const housing = teacherHouseCopy[lang];
  const campus = campusMapCopy[lang];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ee] text-[#172119]">
      <SiteHeader lang={lang} path="/" />

      <section className="relative mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-6xl flex-col justify-center px-5 pb-16 pt-12 sm:px-8 lg:px-10">
        <div className="absolute inset-x-5 top-8 h-px bg-black/10" />
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#3f6d4e]">
              {t.eyebrow}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] sm:text-8xl lg:text-9xl">
              {t.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#465047] sm:text-xl sm:leading-9">
              {t.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white"
                href="#sections"
              >
                {housing.jump}
              </Link>
            </div>
          </div>

          <div className="relative min-h-[430px] rounded-[2rem] border border-white/60 bg-white/45 p-4 shadow-[0_24px_80px_rgba(23,33,25,0.14)] backdrop-blur-xl">
            <div className="grid h-full gap-3">
              <div className="rounded-[1.5rem] bg-[#172119] p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7d8a7]">
                  {t.quick}
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight">
                  {t.quickTitle}
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/72">
                  {t.quickText}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {t.pages.filter(([href]) => href !== "/teachers").map(([href, title, text], index) => {
                  const Icon = pageIcons[index];

                  return (
                    <Link
                      className="group rounded-[1.35rem] border border-black/10 bg-[#fdfbf7] p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
                      href={languagePath(lang, href)}
                      key={href}
                    >
                      <Icon className="h-5 w-5 text-[#3f6d4e]" />
                      <h3 className="mt-5 text-base font-semibold">{title}</h3>
                      <p className="mt-2 text-xs leading-5 text-[#586158]">{text}</p>
                    </Link>
                  );
                })}
                <Link
                  className="group rounded-[1.35rem] border border-black/10 bg-[#eef1e6] p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
                  href={languagePath(lang, "/map")}
                >
                  <Map className="h-5 w-5 text-[#3f6d4e]" />
                  <h3 className="mt-5 text-base font-semibold">{campus.navTitle}</h3>
                  <p className="mt-2 text-xs leading-5 text-[#586158]">{campus.intro}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#172119] px-5 py-12 text-white sm:px-8 lg:px-10" id="sections">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 shadow-[0_24px_80px_rgba(23,33,25,0.22)]">
            <div className="relative aspect-[16/10] min-h-72">
              <Image
                alt={housing.photoLabel}
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                src="/teachers-house-guide.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172119]/72 via-[#172119]/8 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c7d8a7]">
                  {housing.photoLabel}
                </p>
                <p className="mt-2 max-w-md text-2xl font-semibold leading-tight">
                  {housing.photoText}
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c7d8a7]">
              {housing.eyebrow}
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
              {housing.title}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
              {housing.intro}
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 w-full max-w-6xl">
          <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c7d8a7]">
                {housing.rulesEyebrow}
              </p>
              <h3 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
                {housing.rulesTitle}
              </h3>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#c7d8a7]/30 bg-white/8 px-4 py-2 text-sm font-semibold text-[#dfe8c7]">
              <HeartHandshake className="h-4 w-4" />
              {housing.mainRuleTitle}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <article className="rounded-2xl border border-[#c7d8a7]/25 bg-[#f7f4ee] p-5 text-[#172119] shadow-[0_18px_50px_rgba(0,0,0,0.14)] md:col-span-2 xl:col-span-1">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#172119] text-[#c7d8a7]">
                  <ReceiptText className="h-5 w-5" />
                </div>
                <h4 className="text-xl font-semibold">{housing.costsTitle}</h4>
              </div>
              <div className="mt-5 divide-y divide-black/10 rounded-xl border border-black/10 bg-white/70">
                {housing.costs.map(([label, price]) => (
                  <div className="flex items-center justify-between gap-4 px-4 py-3" key={label}>
                    <span className="text-sm font-medium text-[#465047]">{label}</span>
                    <span className="whitespace-nowrap text-lg font-semibold">{price}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-[#586158]">{housing.costsNote}</p>
            </article>

            {housing.rules.map((rule) => {
              const Icon = ruleIcons[rule.key as keyof typeof ruleIcons] ?? ShieldCheck;

              return (
                <article className="rounded-2xl border border-white/10 bg-white/8 p-5" key={rule.key}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c7d8a7]/14 text-[#c7d8a7]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold">{rule.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-white/68">{rule.text}</p>
                </article>
              );
            })}

            <article className="rounded-2xl border border-[#c7d8a7]/25 bg-[#c7d8a7]/12 p-5 md:col-span-2 xl:col-span-3">
              <div className="flex items-center gap-3 text-[#f7f4ee]">
                <HeartHandshake className="h-5 w-5 text-[#c7d8a7]" />
                <p className="text-lg font-semibold">{housing.mainRuleTitle}</p>
              </div>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-white/72">{housing.mainRuleText}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8" id="campus">
        <p className="text-sm font-semibold uppercase text-[#3f6d4e]">{campus.eyebrow}</p>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">{campus.title}</h2>
          <p className="max-w-xl text-base leading-7 text-[#586158]">{campus.intro}</p>
        </div>
        <CampusMap lang={lang} />
      </section>
    </main>
  );
}
