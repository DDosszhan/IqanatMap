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

const buildings = [
  {
    name: "Main School",
    purpose: "Lessons, administration, library, medical point, key meetings.",
    note: "Needs room directory, bell schedule, printer points, office contacts.",
    icon: Building2,
  },
  {
    name: "Freedom House",
    purpose: "Events, student initiatives, clubs, guest sessions.",
    note: "Needs booking rules, event checklist, AV equipment notes.",
    icon: DoorOpen,
  },
  {
    name: "Teachers House",
    purpose: "Teacher workspace, rest area, coordination and prep time.",
    note: "Needs workspace etiquette, storage, meeting rooms, quiet hours.",
    icon: Home,
  },
  {
    name: "Students Residence",
    purpose: "Dormitory life, evening supervision, pastoral care.",
    note: "Needs duty schedule, escalation rules, residence contacts.",
    icon: UsersRound,
  },
];

const essentials = [
  {
    title: "First week checklist",
    text: "Badge, Wi-Fi, platform access, timetable, room keys, duty rota.",
    icon: ClipboardCheck,
  },
  {
    title: "Academic rhythm",
    text: "Terms, assessments, reporting weeks, exams, parent meetings.",
    icon: CalendarDays,
  },
  {
    title: "Classroom logistics",
    text: "Room booking, projector setup, printing, supplies, lab rules.",
    icon: BookMarked,
  },
  {
    title: "Student support",
    text: "Advisors, house mentors, counselor, medical point, escalation path.",
    icon: ShieldCheck,
  },
  {
    title: "Communication",
    text: "Where announcements live, parent communication norms, templates.",
    icon: MessageSquareText,
  },
  {
    title: "Daily utilities",
    text: "Wi-Fi, meals, transport, arrivals, visitor process, lost-and-found.",
    icon: Wifi,
  },
];

export default function TeachersPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#172119]">
      <SiteHeader />

      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3f6d4e]">
              Teacher onboarding
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.96] sm:text-7xl">
              Everything a teacher needs on campus
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[#465047]">
            A practical hub for new and returning teachers: buildings, routines,
            academic dates, people, classroom logistics, and fast answers before
            the first lesson starts.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="rounded-md bg-[#172119] px-4 py-3 text-sm font-semibold text-white"
            href="/teachers/calendar"
          >
            Academic calendar
          </Link>
          <Link
            className="rounded-md border border-black/10 bg-white/70 px-4 py-3 text-sm font-semibold"
            href="/teachers/faculty"
          >
            Teacher photos
          </Link>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/55">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 py-8 sm:px-8 md:grid-cols-4 lg:px-10">
          {buildings.map((building) => {
            const Icon = building.icon;

            return (
              <article
                className="rounded-lg border border-black/10 bg-[#fdfbf7] p-5"
                key={building.name}
              >
                <Icon className="h-6 w-6 text-[#3f6d4e]" />
                <h2 className="mt-5 text-xl font-semibold">{building.name}</h2>
                <p className="mt-3 text-sm leading-6 text-[#465047]">
                  {building.purpose}
                </p>
                <p className="mt-4 border-t border-black/10 pt-4 text-xs leading-5 text-[#697168]">
                  {building.note}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="mb-5 flex items-end justify-between gap-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3f6d4e]">
              What to include
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Useful blocks for teachers
            </h2>
          </div>
          <BellRing className="hidden h-8 w-8 text-[#3f6d4e] sm:block" />
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {essentials.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="rounded-lg border border-black/10 bg-white/70 p-5"
                key={item.title}
              >
                <Icon className="h-5 w-5 text-[#3f6d4e]" />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#586158]">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-12 sm:px-8 lg:px-10">
        <div className="grid gap-4 rounded-lg border border-black/10 bg-[#172119] p-6 text-white md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <MapPin className="h-6 w-6 text-[#c7d8a7]" />
            <h2 className="mt-4 text-2xl font-semibold">Next feature idea</h2>
          </div>
          <p className="text-sm leading-7 text-white/75">
            Add a clickable campus map: choose a building, then see floors,
            rooms, teacher areas, student routes, emergency points, and “why you
            would go here” notes. This will make the guide feel like a real
            school tool, not a static brochure.
          </p>
        </div>
      </section>
    </main>
  );
}