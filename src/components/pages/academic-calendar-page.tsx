import {
  AlertTriangle,
  CalendarClock,
  CheckCircle2,
  CircleDot,
  GraduationCap,
  Landmark,
  NotebookTabs,
  School,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { copy, type Lang } from "@/lib/i18n";

const stepIcons = [CheckCircle2, NotebookTabs, NotebookTabs, NotebookTabs, GraduationCap, GraduationCap, School];
const tones = [
  "bg-[#172119] text-white border-[#172119]",
  "bg-white/80 text-[#172119] border-black/10",
  "bg-[#eef6f1] text-[#172119] border-[#b8d7c4]",
  "bg-white/80 text-[#172119] border-black/10",
  "bg-[#fff7df] text-[#172119] border-[#ead48f]",
  "bg-[#f0f3ff] text-[#172119] border-[#c7d0f2]",
  "bg-[#172119] text-white border-[#172119]",
];
const monthMarkers = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export function AcademicCalendarPage({ lang }: { lang: Lang }) {
  const t = copy[lang].calendar;

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#172119]">
      <SiteHeader lang={lang} path="/teachers/calendar" />
      <section className="mx-auto w-full max-w-6xl px-5 pb-8 pt-10 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3f6d4e]">{t.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.95] sm:text-7xl">{t.title}</h1>
          </div>
          <div className="rounded-[1.75rem] border border-white/60 bg-white/55 p-5 shadow-[0_18px_60px_rgba(23,33,25,0.1)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <CalendarClock className="h-6 w-6 text-[#3f6d4e]" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3f6d4e]">{t.current}</span>
            </div>
            <p className="mt-4 text-6xl font-semibold leading-none sm:text-7xl">2026–2027</p>
            <p className="mt-4 text-sm leading-6 text-[#586158]">{t.intro}</p>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 lg:px-10">
        <div className="rounded-[1.75rem] border border-black/10 bg-[#172119] p-4 text-white shadow-[0_24px_80px_rgba(23,33,25,0.16)] sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c7d8a7]">{t.yearMap}</p><h2 className="mt-2 text-2xl font-semibold">{t.augustJune}</h2></div>
            <Landmark className="h-7 w-7 text-[#c7d8a7]" />
          </div>
          <div className="grid grid-cols-11 overflow-hidden rounded-2xl border border-white/12 text-center text-[11px] font-semibold uppercase tracking-wide text-white/70">
            {monthMarkers.map((month) => <div className="border-r border-white/10 px-2 py-3 last:border-r-0" key={month}>{month}</div>)}
          </div>
          <div className="mt-3 grid grid-cols-11 gap-1"><div className="col-span-1 h-2 rounded-full bg-[#c7d8a7]" /><div className="col-span-2 h-2 rounded-full bg-white" /><div className="col-span-2 h-2 rounded-full bg-[#9ecab0]" /><div className="col-span-3 h-2 rounded-full bg-white" /><div className="col-span-2 h-2 rounded-full bg-[#f1d879]" /><div className="col-span-1 h-2 rounded-full bg-[#c7d8a7]" /></div>
        </div>
      </section>
      <section className="mx-auto grid w-full max-w-6xl gap-4 px-5 pb-10 sm:px-8 lg:px-10">
        {t.steps.map(([label, date, details], index) => {
          const Icon = stepIcons[index];
          return (
            <article className={`relative rounded-[1.5rem] border p-5 shadow-sm ${tones[index]}`} key={label}>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-black/10 text-current"><Icon className="h-5 w-5" /></div><div><div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] opacity-70"><CircleDot className="h-3.5 w-3.5" />Step {index + 1}</div><h2 className="mt-2 text-2xl font-semibold leading-tight">{label}</h2><p className="mt-3 max-w-2xl text-sm leading-6 opacity-75">{details}</p></div></div>
                <div className="min-w-full rounded-2xl bg-white/45 p-4 text-sm font-semibold leading-6 text-[#172119] sm:min-w-72">{date}</div>
              </div>
            </article>
          );
        })}
      </section>
      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10"><div className="flex gap-4 rounded-[1.5rem] border border-[#ead48f] bg-[#fff7df] p-5 text-[#172119]"><AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-[#8a6a13]" /><div><h2 className="text-lg font-semibold">{t.change}</h2><p className="mt-2 text-sm leading-6 text-[#5d553f]">{t.changeText}</p></div></div></section>
    </main>
  );
}