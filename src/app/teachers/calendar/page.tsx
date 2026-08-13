import {
  AlertTriangle,
  CalendarClock,
  CheckCircle2,
  CircleDot,
  ClipboardList,
  GraduationCap,
  Landmark,
  NotebookTabs,
  School,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const timeline = [
  {
    label: "Orientation weeks",
    kz: "17–28 тамыз 2026",
    ru: "17–28 августа 2026",
    details: "Mandatory pre-year orientation for all students.",
    tone: "bg-[#172119] text-white border-[#172119]",
    icon: CheckCircle2,
  },
  {
    label: "I тоқсан / I четверть",
    kz: "1 қыркүйек – 23 қазан 2026",
    ru: "1 сентября – 23 октября 2026",
    details: "Start of lessons, routines, diagnostics, first academic checkpoints.",
    tone: "bg-white/80 text-[#172119] border-black/10",
    icon: NotebookTabs,
  },
  {
    label: "II тоқсан / II четверть",
    kz: "27 қазан – 25 желтоқсан 2026",
    ru: "27 октября – 25 декабря 2026",
    details: "Progress reports, project rhythm, parent communication windows.",
    tone: "bg-[#eef6f1] text-[#172119] border-[#b8d7c4]",
    icon: NotebookTabs,
  },
  {
    label: "III тоқсан / III четверть",
    kz: "11 қаңтар – 19 наурыз 2027",
    ru: "11 января – 19 марта 2027",
    details: "Deep academic term, olympiad season, assessment preparation.",
    tone: "bg-white/80 text-[#172119] border-black/10",
    icon: NotebookTabs,
  },
  {
    label: "IV тоқсан / IV четверть, Grade 11",
    kz: "24 наурыз – 25 мамыр 2027",
    ru: "24 марта – 25 мая 2027",
    details: "Final sprint for Grade 11: exams, closing tasks, graduation readiness.",
    tone: "bg-[#fff7df] text-[#172119] border-[#ead48f]",
    icon: GraduationCap,
  },
  {
    label: "IV тоқсан / IV четверть, Grades 9–10",
    kz: "29 наурыз – 25 мамыр 2027",
    ru: "29 марта – 25 мая 2027",
    details: "Final academic quarter for Grades 9–10 with reporting and transitions.",
    tone: "bg-[#f0f3ff] text-[#172119] border-[#c7d0f2]",
    icon: GraduationCap,
  },
  {
    label: "Summer school & state exams",
    kz: "26 мамыр – 11 маусым 2027",
    ru: "26 мая – 11 июня 2027",
    details: "Summer school, state examinations, end-of-year academic closure.",
    tone: "bg-[#172119] text-white border-[#172119]",
    icon: School,
  },
];

const teacherNeeds = [
  "Mark assessment and report deadlines by subject department.",
  "Add parent meeting windows and advisor check-in weeks.",
  "Show duty schedule links for Teachers House and Students Residence.",
  "Keep a visible change note when dates are updated by administration.",
];

const monthMarkers = [
  "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
];

export default function AcademicCalendarPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#172119]">
      <SiteHeader />

      <section className="mx-auto w-full max-w-6xl px-5 pb-8 pt-10 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3f6d4e]">
              Teacher handbook
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.95] sm:text-7xl">
              Academic calendar
            </h1>
          </div>
          <div className="rounded-[1.75rem] border border-white/60 bg-white/55 p-5 shadow-[0_18px_60px_rgba(23,33,25,0.1)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <CalendarClock className="h-6 w-6 text-[#3f6d4e]" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3f6d4e]">
                Current academic year
              </span>
            </div>
            <p className="mt-4 text-6xl font-semibold leading-none sm:text-7xl">
              2026–2027
            </p>
            <p className="mt-4 text-sm leading-6 text-[#586158]">
              Structured for teachers: planning, lessons, reporting, student
              support, parent communication, summer school, and state exams.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 lg:px-10">
        <div className="rounded-[1.75rem] border border-black/10 bg-[#172119] p-4 text-white shadow-[0_24px_80px_rgba(23,33,25,0.16)] sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c7d8a7]">
                Year map
              </p>
              <h2 className="mt-2 text-2xl font-semibold">August to June</h2>
            </div>
            <Landmark className="h-7 w-7 text-[#c7d8a7]" />
          </div>
          <div className="grid grid-cols-11 overflow-hidden rounded-2xl border border-white/12 text-center text-[11px] font-semibold uppercase tracking-wide text-white/70">
            {monthMarkers.map((month) => (
              <div className="border-r border-white/10 px-2 py-3 last:border-r-0" key={month}>
                {month}
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-11 gap-1">
            <div className="col-span-1 h-2 rounded-full bg-[#c7d8a7]" />
            <div className="col-span-2 h-2 rounded-full bg-white" />
            <div className="col-span-2 h-2 rounded-full bg-[#9ecab0]" />
            <div className="col-span-3 h-2 rounded-full bg-white" />
            <div className="col-span-2 h-2 rounded-full bg-[#f1d879]" />
            <div className="col-span-1 h-2 rounded-full bg-[#c7d8a7]" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-5 pb-10 sm:px-8 lg:px-10">
        {timeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              className={`relative rounded-[1.5rem] border p-5 shadow-sm ${item.tone}`}
              key={item.label}
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-black/10 text-current">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] opacity-70">
                      <CircleDot className="h-3.5 w-3.5" />
                      Step {index + 1}
                    </div>
                    <h2 className="mt-2 text-2xl font-semibold leading-tight">
                      {item.label}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 opacity-75">
                      {item.details}
                    </p>
                  </div>
                </div>
                <div className="min-w-full rounded-2xl bg-white/45 p-4 text-sm leading-6 text-[#172119] sm:min-w-72">
                  <p className="font-semibold">{item.kz}</p>
                  <p className="mt-1 text-[#586158]">{item.ru}</p>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="border-y border-black/10 bg-white/55">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-10 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3f6d4e]">
              For teachers
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight">
              What this page should help with
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {teacherNeeds.map((need) => (
              <div className="rounded-xl border border-black/10 bg-[#fdfbf7] p-5" key={need}>
                <ClipboardList className="h-5 w-5 text-[#3f6d4e]" />
                <p className="mt-4 text-sm leading-6 text-[#586158]">{need}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="flex gap-4 rounded-[1.5rem] border border-[#ead48f] bg-[#fff7df] p-5 text-[#172119]">
          <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-[#8a6a13]" />
          <div>
            <h2 className="text-lg font-semibold">Change notice</h2>
            <p className="mt-2 text-sm leading-6 text-[#5d553f]">
              Dates may be updated by the school administration. When changes
              happen, this page should show the updated date, short reason, and
              who confirmed it, so teachers can plan lessons and communication
              calmly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}