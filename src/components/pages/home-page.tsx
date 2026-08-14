import {
  BookOpenCheck,
  CalendarDays,
  Car,
  CigaretteOff,
  HandHeart,
  HeartHandshake,
  Images,
  Map,
  PawPrint,
  ReceiptText,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
  Trophy,
  VolumeX,
  Wrench,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CampusMap } from "@/components/campus-map";
import { SiteHeader } from "@/components/site-header";
import { campusMapCopy } from "@/lib/campus-map-data";
import { copy, languagePath, type Lang } from "@/lib/i18n";
import { teacherHouseCopy } from "@/lib/teacher-house-i18n";

const pageIcons = [CalendarDays, Images];
const valueIcons = [Scale, HandHeart, BookOpenCheck, Trophy];
const ruleIcons = {
  internet: ShieldCheck,
  electricity: Zap,
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
    <main className="ornamented-page min-h-screen overflow-hidden bg-[#f7f4ee] text-[#234633]">
      <SiteHeader lang={lang} path="/" />

      <section className="relative mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-6xl flex-col justify-center px-5 pb-16 pt-12 sm:px-8 lg:px-10">
        <div className="absolute inset-x-5 top-8 h-px bg-black/10" />
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#3f7654]">
              {t.eyebrow}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] sm:text-8xl lg:text-9xl">
              {t.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#506255] sm:text-xl sm:leading-9">
              {t.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-[#d6b568]/45 bg-white/80 px-5 py-3 text-sm font-semibold text-[#234633] shadow-sm backdrop-blur transition hover:border-[#d6b568] hover:bg-white"
                href="#sections"
              >
                {housing.jump}
              </Link>
            </div>
          </div>

          <div className="gold-wash relative min-h-[430px] rounded-[2rem] border border-white/70 p-4 shadow-[0_24px_80px_rgba(35,70,51,0.14)] backdrop-blur-xl">
            <div className="grid h-full gap-3">
              <div className="rounded-[1.5rem] bg-[#234633] p-5 text-white shadow-[inset_0_1px_0_rgba(214,181,104,0.25)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6b568]">
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
                {t.pages.map(([href, title, text], index) => {
                  const Icon = pageIcons[index];

                  return (
                    <Link
                      className="group rounded-[1.35rem] border border-black/10 bg-[#fdfbf7] p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
                      href={languagePath(lang, href)}
                      key={href}
                    >
                      <Icon className="h-5 w-5 text-[#3f7654]" />
                      <h3 className="mt-5 text-base font-semibold">{title}</h3>
                      <p className="mt-2 text-xs leading-5 text-[#627267]">{text}</p>
                    </Link>
                  );
                })}
                <Link
                  className="group rounded-[1.35rem] border border-black/10 bg-[#fff6df] p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
                  href={languagePath(lang, "/map")}
                >
                  <Map className="h-5 w-5 text-[#3f7654]" />
                  <h3 className="mt-5 text-base font-semibold">{campus.navTitle}</h3>
                  <p className="mt-2 text-xs leading-5 text-[#627267]">{campus.intro}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 lg:px-10" aria-labelledby="values-title">
        <div className="mb-7 grid gap-4 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3f7654]">
              {t.values.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl" id="values-title">
              {t.values.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#627267] lg:justify-self-end">
            {t.values.intro}
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {t.values.items.map(([title, text], index) => {
            const Icon = valueIcons[index];

            return (
              <article
                className="group relative min-h-64 overflow-hidden rounded-2xl border border-[#d6b568]/28 bg-white/76 p-5 shadow-[0_20px_70px_rgba(35,70,51,0.1)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#d6b568]/55 hover:bg-white"
                key={title}
              >
                <div className="absolute right-4 top-3 text-6xl font-semibold leading-none text-[#d6b568]/18">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#234633] text-[#d6b568] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-7 text-xl font-semibold leading-tight text-[#234633]">
                  {title}
                </h3>
                <p className="relative mt-4 text-sm leading-6 text-[#627267]">
                  {text}
                </p>
                <div className="absolute inset-x-5 bottom-0 h-1 rounded-t-full bg-[#d6b568]/70 transition group-hover:bg-[#d6b568]" />
              </article>
            );
          })}
        </div>
      </section>
      <section className="dark-ornament bg-[#234633] px-5 py-12 text-white sm:px-8 lg:px-10" id="sections">
        <div className="mx-auto grid w-full max-w-7xl gap-7 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 shadow-[0_28px_90px_rgba(16,33,24,0.28)] lg:-ml-6">
            <div className="relative aspect-[16/9] min-h-80 lg:min-h-[520px]">
              <Image
                alt={housing.photoLabel}
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 860px"
                src="/teachers-house-night.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#234633]/78 via-[#234633]/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6b568]">
                  {housing.photoLabel}
                </p>
                <p className="mt-2 max-w-md text-2xl font-semibold leading-tight">
                  {housing.photoText}
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6b568]">
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6b568]">
                {housing.rulesEyebrow}
              </p>
              <h3 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
                {housing.rulesTitle}
              </h3>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#d6b568]/30 bg-white/8 px-4 py-2 text-sm font-semibold text-[#f1ddb2]">
              <HeartHandshake className="h-4 w-4" />
              {housing.mainRuleTitle}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <article className="rounded-2xl border border-[#d6b568]/25 bg-[#f7f4ee] p-5 text-[#234633] shadow-[0_18px_50px_rgba(0,0,0,0.14)] md:col-span-2 xl:col-span-1">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#234633] text-[#d6b568]">
                  <ReceiptText className="h-5 w-5" />
                </div>
                <h4 className="text-xl font-semibold">{housing.costsTitle}</h4>
              </div>
              <div className="mt-5 divide-y divide-black/10 rounded-xl border border-black/10 bg-white/70">
                {housing.costs.map(([label, price]) => (
                  <div className="flex items-center justify-between gap-4 px-4 py-3" key={label}>
                    <span className="text-sm font-medium text-[#506255]">{label}</span>
                    <span className="whitespace-nowrap text-lg font-semibold">{price}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-[#627267]">{housing.costsNote}</p>
            </article>

            {housing.rules.map((rule) => {
              const Icon = ruleIcons[rule.key as keyof typeof ruleIcons] ?? ShieldCheck;

              return (
                <article className="rounded-2xl border border-white/10 bg-white/8 p-5" key={rule.key}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d6b568]/14 text-[#d6b568]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold">{rule.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-white/68">{rule.text}</p>
                </article>
              );
            })}

            <article className="rounded-2xl border border-[#d6b568]/25 bg-[#d6b568]/12 p-5 md:col-span-2 xl:col-span-3">
              <div className="flex items-center gap-3 text-[#f7f4ee]">
                <HeartHandshake className="h-5 w-5 text-[#d6b568]" />
                <p className="text-lg font-semibold">{housing.mainRuleTitle}</p>
              </div>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-white/72">{housing.mainRuleText}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8" id="campus">
        <p className="text-sm font-semibold uppercase text-[#3f7654]">{campus.eyebrow}</p>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">{campus.title}</h2>
          <p className="max-w-xl text-base leading-7 text-[#627267]">{campus.intro}</p>
        </div>
        <CampusMap lang={lang} />
      </section>
    </main>
  );
}
