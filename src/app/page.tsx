import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  Map,
  MessageCircleQuestion,
  School,
  Users,
} from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

const sections = [
  { title: "Campus", text: "Interactive territory map and key places.", icon: Map },
  { title: "School", text: "Classrooms, library, canteen, medical point.", icon: School },
  { title: "Dormitory", text: "How the dorm works and what to remember.", icon: BookOpen },
  { title: "People", text: "Who to ask when you need help.", icon: Users },
  { title: "Lifehacks", text: "What students wish they knew on day one.", icon: GraduationCap },
  { title: "FAQ", text: "Short answers for common newcomer questions.", icon: MessageCircleQuestion },
];

const teacherLinks = [
  { href: "/teachers", label: "Teacher hub", icon: School },
  { href: "/teachers/calendar", label: "Academic calendar", icon: CalendarDays },
  { href: "/teachers/faculty", label: "Teacher photos", icon: Users },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#172119]">
      <SiteHeader />
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3f6d4e]">
              Digital handbook
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] sm:text-7xl">
              Welcome to IQanat
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#465047]">
              A mobile-first guide for newcomers: maps, school life, first-day
              checklist, contacts, tips, and quick navigation in one place.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {teacherLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white/70 px-4 py-3 text-sm font-semibold transition hover:bg-white"
                    href={item.href}
                    key={item.href}
                  >
                    <Icon className="h-4 w-4 text-[#3f6d4e]" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  className="rounded-lg border border-black/10 bg-white/70 p-5 shadow-sm"
                  key={section.title}
                >
                  <Icon className="mb-5 h-6 w-6 text-[#3f6d4e]" />
                  <h2 className="text-lg font-semibold">{section.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#586158]">
                    {section.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}