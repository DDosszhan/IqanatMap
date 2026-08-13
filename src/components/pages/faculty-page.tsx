import { Mail, MapPin, Search, UserRound } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { copy, type Lang } from "@/lib/i18n";

const teachers = [
  ["Teacher Name", "Mathematics", "Main School", "Room 204"],
  ["Teacher Name", "English", "Main School", "Room 118"],
  ["Teacher Name", "Science", "Freedom House", "Lab 2"],
  ["Teacher Name", "House Mentor", "Students Residence", "Residence desk"],
  ["Teacher Name", "Academic Coordinator", "Teachers House", "Office 3"],
  ["Teacher Name", "Clubs Coordinator", "Freedom House", "Project room"],
];

export function FacultyPage({ lang }: { lang: Lang }) {
  const t = copy[lang].faculty;

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#172119]">
      <SiteHeader lang={lang} path="/teachers/faculty" />
      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3f6d4e]">{t.eyebrow}</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.96] sm:text-7xl">{t.title}</h1>
          <div className="rounded-lg border border-black/10 bg-white/70 p-4"><div className="flex items-center gap-3 rounded-md bg-[#f7f4ee] px-3 py-3 text-sm text-[#697168]"><Search className="h-4 w-4" />{t.search}</div></div>
        </div>
      </section>
      <section className="mx-auto grid w-full max-w-6xl gap-4 px-5 pb-12 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
        {teachers.map(([name, role, building, room], index) => (
          <article className="overflow-hidden rounded-lg border border-black/10 bg-white/75" key={`${role}-${index}`}>
            <div className="flex aspect-[4/3] items-center justify-center bg-[#dfe7d2]"><UserRound className="h-16 w-16 text-[#3f6d4e]" /></div>
            <div className="p-5"><h2 className="text-xl font-semibold">{name}</h2><p className="mt-1 text-sm font-medium text-[#3f6d4e]">{role}</p><div className="mt-5 grid gap-3 text-sm text-[#586158]"><p className="flex items-center gap-2"><MapPin className="h-4 w-4" />{building}, {room}</p><p className="flex items-center gap-2"><Mail className="h-4 w-4" />{t.email}</p></div></div>
          </article>
        ))}
      </section>
    </main>
  );
}