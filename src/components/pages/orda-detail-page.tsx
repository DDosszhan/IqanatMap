import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { copy, languagePath, type Lang } from "@/lib/i18n";
import type { Orda } from "@/lib/ordas";

function ordasPath(lang: Lang) {
  return lang === "kk" ? "/ordas" : languagePath(lang, "/ordas");
}

export function OrdaDetailPage({ lang, orda }: { lang: Lang; orda: Orda }) {
  const t = copy[lang].ordas;

  return (
    <main className="ornamented-page min-h-screen bg-[#f7f4ee] text-[#234633]">
      <SiteHeader lang={lang} path="/ordas" />

      <section className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-10">
        <div className="order-2 lg:order-1">
          <Link
            href={ordasPath(lang)}
            className="inline-flex items-center gap-2 rounded-full border border-[#d8cdb7] bg-white/70 px-4 py-2 text-sm font-semibold text-[#31513c] shadow-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b568]"
          >
            <ArrowLeft className="h-4 w-4" />
            {copy[lang].nav.ordas}
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#3f7654]">{t.eyebrow}</p>
          <h1 className="mt-4 text-6xl font-semibold leading-[0.92] sm:text-8xl">{orda.name}</h1>
          <div className="mt-6 flex items-center gap-2 text-base font-semibold text-[#627267]">
            <Sparkles className={`h-5 w-5 rounded-full ${orda.mark} p-0.5 text-[#234633]`} />
            {t.membersLabel}
          </div>
        </div>

        <div className={`order-1 overflow-hidden rounded-2xl border ${orda.ring} bg-gradient-to-br ${orda.colors} p-6 shadow-[0_28px_90px_rgba(35,70,51,0.18)] lg:order-2`}>
          <div className="grid min-h-[min(72vh,680px)] place-items-center rounded-xl bg-white/92 p-5 sm:p-8">
            <Image
              src={orda.logo}
              alt={`${orda.name} Orda`}
              width={orda.logoWidth}
              height={orda.logoHeight}
              sizes="(max-width: 1024px) 92vw, 52vw"
              className="max-h-[min(62vh,620px)] w-auto max-w-full object-contain"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </main>
  );
}