import {
  ArrowUpRight,
  BedDouble,
  BookOpen,
  Building2,
  CalendarDays,
  Coffee,
  GraduationCap,
  Home,
  Images,
  KeyRound,
  Map,
  MessageCircleQuestion,
  Moon,
  ShieldCheck,
  Sparkles,
  Users,
  Wifi,
} from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { copy, languagePath, type Lang } from "@/lib/i18n";

const pageIcons = [Users, CalendarDays, Images];
const buildings = ["Main School", "Freedom House", "Teachers House", "Students Residence"];

const housingGuide = {
  kk: {
    jump: "Мұғалімдер үйі",
    eyebrow: "Мұғалімдер үйі бойынша нұсқаулық",
    title: "Мұғалімдер үйі: тыныш жұмыс пен демалыс кеңістігі",
    intro:
      "Кампус ішіндегі мұғалімдерге арналған үй. Бұл бөлімде орналасу, күнделікті тәртіп, тыныш уақыт, ортақ кеңістіктер және кімге жүгіну керегі жинақталады.",
    photoLabel: "Teachers House",
    photoText: "Мұғалімдерге арналған тұрғын және жұмыс кеңістігі",
    cards: [
      ["Орналасу", "Кілт, бөлме, сақтау орны және алғашқы қабылдау тәртібі."],
      ["Тыныш уақыт", "Демалыс пен дайындыққа кедергі келтірмейтін ортақ ережелер."],
      ["Ортақ аймақтар", "Асүй, демалыс аймағы, кір жуатын орын және жұмыс бұрыштары."],
      ["Көмек керек болса", "Тұрмыстық сұрақтар, жөндеу, қауіпсіздік және кезекшілік байланыстары."],
    ],
    checklistTitle: "Жылдам тізім",
    checklist: ["Wi-Fi және кіру рұқсатын алу", "Бөлме мен кілтті қабылдау", "Тыныш уақыт ережесін білу", "Ортақ кеңістіктерді таза қалдыру"],
  },
  ru: {
    jump: "Дом учителей",
    eyebrow: "Гайд по Teachers House",
    title: "Дом учителей: пространство для спокойной работы и отдыха",
    intro:
      "Жилое и рабочее пространство для учителей внутри кампуса. Здесь будут правила заселения, тихие часы, общие зоны, бытовые вопросы и контакты, к кому обращаться.",
    photoLabel: "Teachers House",
    photoText: "Жилое и рабочее пространство для учителей",
    cards: [
      ["Заселение", "Ключ, комната, место хранения и понятный порядок первого заселения."],
      ["Тихие часы", "Правила, чтобы дом оставался местом отдыха и подготовки к урокам."],
      ["Общие зоны", "Кухня, зона отдыха, прачечная и рабочие уголки для подготовки."],
      ["Если нужна помощь", "Бытовые вопросы, ремонт, безопасность и контакты дежурных."],
    ],
    checklistTitle: "Быстрый список",
    checklist: ["Получить Wi-Fi и доступ", "Принять комнату и ключ", "Запомнить тихие часы", "Оставлять общие зоны чистыми"],
  },
  en: {
    jump: "Teachers House",
    eyebrow: "Мұғалімдер үйі бойынша нұсқаулық",
    title: "Teachers House: a calm space for work and rest",
    intro:
      "A residential and work space for teachers on campus. This guide will collect move-in steps, quiet hours, shared areas, everyday support, and key contacts.",
    photoLabel: "Teachers House",
    photoText: "Residential and work space for teachers",
    cards: [
      ["Move-in", "Key, room, storage, and a clear first check-in flow."],
      ["Quiet hours", "Shared rules that protect rest and lesson preparation."],
      ["Shared areas", "Kitchen, lounge, laundry, and focused work corners."],
      ["Need help", "Household questions, repairs, safety, and duty contacts."],
    ],
    checklistTitle: "Quick checklist",
    checklist: ["Get Wi-Fi and access", "Receive room and key", "Remember quiet hours", "Keep shared areas clean"],
  },
} as const;

const guideIcons = [KeyRound, Moon, Coffee, ShieldCheck];

export function HomePage({ lang }: { lang: Lang }) {
  const t = copy[lang].home;
  const housing = housingGuide[lang];

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
                className="inline-flex items-center gap-2 rounded-full bg-[#172119] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(23,33,25,0.18)] transition hover:bg-[#26372b]"
                href={languagePath(lang, "/teachers")}
              >
                {t.primary}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
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
                {t.pages.map(([href, title, text], index) => {
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
                <div className="rounded-[1.35rem] border border-dashed border-black/20 bg-[#eef1e6] p-4">
                  <Map className="h-5 w-5 text-[#3f6d4e]" />
                  <h3 className="mt-5 text-base font-semibold">Campus map</h3>
                  <p className="mt-2 text-xs leading-5 text-[#586158]">
                    {lang === "ru" ? "Дальше: кликабельные здания и навигация по этажам." : lang === "en" ? "Next: clickable buildings and floor-level navigation." : "Келесі: clickable buildings және қабат бойынша navigation."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#172119] px-5 py-12 text-white sm:px-8 lg:px-10" id="sections">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 shadow-[0_24px_80px_rgba(23,33,25,0.22)]">
            <div className="relative aspect-[16/10] min-h-72">
              <img
                alt={housing.photoLabel}
                className="h-full w-full object-cover"
                src="/teachers-house-guide.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172119]/70 via-transparent to-transparent" />
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

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {housing.cards.map(([title, text], index) => {
                const Icon = guideIcons[index];

                return (
                  <article className="rounded-xl border border-white/10 bg-white/8 p-4" key={title}>
                    <Icon className="h-5 w-5 text-[#c7d8a7]" />
                    <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/68">{text}</p>
                  </article>
                );
              })}
            </div>

            <div className="mt-5 rounded-xl border border-[#c7d8a7]/25 bg-[#c7d8a7]/10 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#c7d8a7]">
                <Sparkles className="h-4 w-4" />
                {housing.checklistTitle}
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {housing.checklist.map((item) => (
                  <div className="flex items-center gap-2 text-sm text-white/76" key={item}>
                    <Wifi className="h-4 w-4 text-[#c7d8a7]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:px-10" id="campus">
        <div className="rounded-[2rem] border border-black/10 bg-[#172119] p-6 text-white sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c7d8a7]">{t.mapIdea}</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">{t.mapTitle}</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {buildings.map((building) => (
              <div className="rounded-xl border border-white/10 bg-white/8 p-4" key={building}>
                <Building2 className="h-5 w-5 text-[#c7d8a7]" />
                <p className="mt-4 text-sm font-semibold">{building}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}