import {
  CalendarCheck,
  ClipboardList,
  FileClock,
  Flag,
  GraduationCap,
  Users,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const terms = [
  {
    period: "Term 1",
    focus: "Orientation, diagnostics, classroom routines",
    dates: "August - October",
  },
  {
    period: "Term 2",
    focus: "Project work, parent touchpoints, progress checks",
    dates: "November - December",
  },
  {
    period: "Term 3",
    focus: "Olympiad season, deep work, reporting",
    dates: "January - March",
  },
  {
    period: "Term 4",
    focus: "Final assessments, reflection, transition planning",
    dates: "April - June",
  },
];

const calendarBlocks = [
  { title: "Assessment windows", icon: ClipboardList },
  { title: "Report deadlines", icon: FileClock },
  { title: "Parent meetings", icon: Users },
  { title: "School events", icon: Flag },
  { title: "Exam preparation", icon: GraduationCap },
  { title: "Teacher planning days", icon: CalendarCheck },
];

export default function AcademicCalendarPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#172119]">
      <SiteHeader />

      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3f6d4e]">
          Academic calendar
        </p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.96] sm:text-7xl">
            The school year at a glance
          </h1>
          <p className="max-w-xl text-lg leading-8 text-[#465047]">
            This page can become the single source of truth for term dates,
            assessments, teacher deadlines, events, parent meetings, and
            important reminders.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-5 pb-10 sm:px-8 md:grid-cols-2 lg:px-10">
        {terms.map((term) => (
          <article
            className="rounded-lg border border-black/10 bg-white/70 p-6"
            key={term.period}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-2xl font-semibold">{term.period}</h2>
              <span className="rounded-md bg-[#e8eedb] px-3 py-1 text-xs font-semibold text-[#31563d]">
                {term.dates}
              </span>
            </div>
            <p className="mt-5 text-sm leading-6 text-[#586158]">
              {term.focus}
            </p>
          </article>
        ))}
      </section>

      <section className="border-y border-black/10 bg-white/55">
        <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-semibold">Calendar should include</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {calendarBlocks.map((block) => {
              const Icon = block.icon;

              return (
                <article
                  className="rounded-lg border border-black/10 bg-[#fdfbf7] p-5"
                  key={block.title}
                >
                  <Icon className="h-5 w-5 text-[#3f6d4e]" />
                  <h3 className="mt-4 text-lg font-semibold">{block.title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}