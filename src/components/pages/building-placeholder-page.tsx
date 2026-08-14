import { ArrowLeft, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { campusMapCopy, type Building } from "@/lib/campus-map-data";
import { languagePath, type Lang } from "@/lib/i18n";

export function BuildingPlaceholderPage({ building, lang }: { building: Building; lang: Lang }) {
  const t = campusMapCopy[lang];
  const content = building.copy[lang];

  return (
    <main className="dark-ornament min-h-screen overflow-hidden bg-[#234633] text-white">
      <SiteHeader lang={lang} path={`/map/${building.slug}`} />
      <section className="relative mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl items-end px-5 pb-14 pt-12 sm:px-8 sm:pb-20 lg:px-10">
<Image
          alt=""
          className="object-cover opacity-35"
          fill
          priority
          sizes="100vw"
          src="/campus-map-clean.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#234633] via-[#234633]/60 to-[#234633]/15" />
        <div className="relative z-10 max-w-4xl">
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#f1ddb2] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b568] focus-visible:ring-offset-2 focus-visible:ring-offset-[#234633]"
            href={languagePath(lang, "/map")}
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backToMap}
          </Link>
          <div className="mt-10 flex items-center gap-3 text-[#f1ddb2]">
            <Building2 className="h-5 w-5" />
            <p className="text-sm font-semibold uppercase">{content.type}</p>
          </div>
          <h1 className="mt-4 text-5xl font-semibold leading-none sm:text-7xl lg:text-8xl">{content.name}</h1>
          <h2 className="mt-7 text-xl font-semibold sm:text-2xl">{t.comingSoon}</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{t.comingSoonText}</p>
        </div>
      </section>
    </main>
  );
}
