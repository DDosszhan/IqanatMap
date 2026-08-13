import {
  ArrowUpRight,
  BookOpen,
  Building2,
  CalendarDays,
  GraduationCap,
  Images,
  Map,
  MessageCircleQuestion,
  School,
  Users,
} from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

const pages = [
  {
    href: "/teachers",
    title: "Teachers hub",
    text: "Buildings, routines, first-week setup, contacts, and everyday school logistics.",
    icon: Users,
  },
  {
    href: "/teachers/calendar",
    title: "Academic calendar",
    text: "Terms, deadlines, assessments, school events, parent meetings, planning days.",
    icon: CalendarDays,
  },
  {
    href: "/teachers/faculty",
    title: "Faculty photos",
    text: "A visual teacher directory with subjects, rooms, buildings, and contact slots.",
    icon: Images,
  },
];

const futureSections = [
  { title: "Campus map", text: "Four buildings, floors, rooms, routes, and useful notes.", icon: Map },
  { title: "Main School", text: "Classrooms, library, canteen, medical point, offices.", icon: School },
  { title: "Freedom House", text: "Events, clubs, project rooms, guest sessions, booking rules.", icon: Building2 },
  { title: "Residence", text: "Dorm routines, evening duty, student support, escalation path.", icon: BookOpen },
  { title: "Life at IQanat", text: "Clubs, traditions, student tips, assemblies, school culture.", icon: GraduationCap },
  { title: "FAQ", text: "Fast answers for teachers, students, parents, and guests.", icon: MessageCircleQuestion },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ee] text-[#172119]">
      <SiteHeader />

      <section className="relative mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-6xl flex-col justify-center px-5 pb-16 pt-12 sm:px-8 lg:px-10">
        <div className="absolute inset-x-5 top-8 h-px bg-black/10" />
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#3f6d4e]">
              IQanat digital guide
            </p>
            <h1 className="max-w-4xl text-6xl font-semibold leading-[0.9] sm:text-8xl lg:text-9xl">
              Бізді қосқан IQanat!
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#465047] sm:text-xl sm:leading-9">
              A stylish school guide that can grow into pages, sections, maps,
              photo directories, calendars, and role-based onboarding for the
              whole IQanat community.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-[#172119] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(23,33,25,0.18)] transition hover:bg-[#26372b]"
                href="/teachers"
              >
                Open teachers page
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white"
                href="#sections"
              >
                View sections
              </Link>
            </div>
          </div>

          <div className="relative min-h-[430px] rounded-[2rem] border border-white/60 bg-white/45 p-4 shadow-[0_24px_80px_rgba(23,33,25,0.14)] backdrop-blur-xl">
            <div className="grid h-full gap-3">
              <div className="rounded-[1.5rem] bg-[#172119] p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7d8a7]">
                  Quick entry
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight">
                  One guide, many paths
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/72">
                  Teachers, students, parents, and guests can each get the exact
                  route, schedule, person, and place they need.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {pages.map((page) => {
                  const Icon = page.icon;

                  return (
                    <Link
                      className="group rounded-[1.35rem] border border-black/10 bg-[#fdfbf7] p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
                      href={page.href}
                      key={page.href}
                    >
                      <Icon className="h-5 w-5 text-[#3f6d4e]" />
                      <h3 className="mt-5 text-base font-semibold">{page.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-[#586158]">{page.text}</p>
                    </Link>
                  );
                })}
                <div className="rounded-[1.35rem] border border-dashed border-black/20 bg-[#eef1e6] p-4">
                  <Map className="h-5 w-5 text-[#3f6d4e]" />
                  <h3 className="mt-5 text-base font-semibold">Campus map</h3>
                  <p className="mt-2 text-xs leading-5 text-[#586158]">
                    Next: clickable buildings and floor-level navigation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-y border-black/10 bg-white/55 px-5 py-12 sm:px-8 lg:px-10"
        id="sections"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3f6d4e]">
                Buildable structure
              </p>
              <h2 className="mt-3 text-4xl font-semibold">Pages we can add next</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#586158]">
              This is the menu skeleton for future sections: each card can become
              a full page, filtered guide, or interactive tool.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {futureSections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  className="rounded-xl border border-black/10 bg-[#fdfbf7] p-5"
                  key={section.title}
                >
                  <Icon className="h-6 w-6 text-[#3f6d4e]" />
                  <h3 className="mt-5 text-xl font-semibold">{section.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#586158]">
                    {section.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:px-10" id="campus">
        <div className="rounded-[2rem] border border-black/10 bg-[#172119] p-6 text-white sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c7d8a7]">
            Map idea
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">
            Four buildings as the main navigation model
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {["Main School", "Freedom House", "Teachers House", "Students Residence"].map((building) => (
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