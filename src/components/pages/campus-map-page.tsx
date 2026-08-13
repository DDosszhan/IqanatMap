import { CampusMap } from "@/components/campus-map";
import { SiteHeader } from "@/components/site-header";
import { campusMapCopy } from "@/lib/campus-map-data";
import type { Lang } from "@/lib/i18n";

export function CampusMapPage({ lang }: { lang: Lang }) {
  const t = campusMapCopy[lang];

  return (
    <main className="min-h-screen bg-[#f7f4ee] pb-12 text-[#172119]">
      <SiteHeader lang={lang} path="/map" />
      <section className="mx-auto w-full max-w-7xl px-4 pb-4 pt-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase text-[#3f6d4e]">{t.eyebrow}</p>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">{t.title}</h1>
          <p className="max-w-xl text-base leading-7 text-[#586158] lg:pb-1">{t.intro}</p>
        </div>
        <CampusMap lang={lang} />
      </section>
    </main>
  );
}
