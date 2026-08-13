import Link from "next/link";
import { CalendarDays, GraduationCap, Images, LayoutGrid, Map, UsersRound } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: GraduationCap },
  { href: "/teachers", label: "Teachers", icon: UsersRound },
  { href: "/teachers/calendar", label: "Calendar", icon: CalendarDays },
  { href: "/teachers/faculty", label: "Faculty", icon: Images },
  { href: "/#sections", label: "Sections", icon: LayoutGrid },
  { href: "/#campus", label: "Map", icon: Map },
];

export function SiteHeader() {
  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border border-white/55 bg-white/55 px-3 py-2 shadow-[0_18px_60px_rgba(23,33,25,0.12)] backdrop-blur-2xl sm:px-4">
        <Link
          className="flex min-w-fit items-center gap-2 rounded-full bg-[#172119] px-4 py-2 text-sm font-semibold text-white shadow-sm"
          href="/"
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-[#c7d8a7] text-xs font-bold text-[#172119]">
            IQ
          </span>
          IQanat
        </Link>

        <nav className="flex min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto px-1 text-sm font-medium text-[#465047]">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                className="group flex min-w-fit items-center gap-2 rounded-full px-3 py-2 transition hover:bg-[#172119] hover:text-white"
                href={item.href}
                key={item.href}
              >
                <Icon className="h-4 w-4 text-[#3f6d4e] transition group-hover:text-[#c7d8a7]" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <span className="hidden min-w-fit rounded-full border border-black/10 bg-[#f7f4ee]/80 px-3 py-2 text-xs font-semibold text-[#3f6d4e] sm:block">
          RU / KZ / EN
        </span>
      </div>
    </header>
  );
}