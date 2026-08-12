import Link from "next/link";

const navItems = [
  { href: "/", label: "Guide" },
  { href: "/teachers", label: "Teachers" },
  { href: "/teachers/calendar", label: "Calendar" },
  { href: "/teachers/faculty", label: "Faculty" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-black/10 bg-[#f7f4ee]/95">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
        <Link
          className="text-sm font-semibold uppercase tracking-[0.18em]"
          href="/"
        >
          IQanat Guide
        </Link>
        <nav className="flex items-center gap-1 overflow-x-auto text-sm font-medium text-[#465047]">
          {navItems.map((item) => (
            <Link
              className="whitespace-nowrap rounded-md px-3 py-2 transition hover:bg-black/5 hover:text-[#172119]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}