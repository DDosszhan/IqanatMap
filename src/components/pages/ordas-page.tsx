import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { copy, languagePath, type Lang } from "@/lib/i18n";
import { ordas } from "@/lib/ordas";

function ordaPath(lang: Lang, slug: string) {
  const path = `/ordas/${slug}`;
  return lang === "kk" ? path : languagePath(lang, path);
}

export function OrdasPage({ lang }: { lang: Lang }) {
  const t = copy[lang].ordas;

  return (
    <main className="ornamented-page min-h-screen bg-[#f7f4ee] text-[#234633]">
      <SiteHeader lang={lang} path="/ordas" />

      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3f7654]">{t.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.94] sm:text-7xl">{t.title}</h1>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#627267] lg:justify-self-end">{t.intro}</p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-5 pb-14 sm:px-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:px-10">
        {ordas.map((orda, index) => (
          <Link
            className={`group relative flex min-h-[28rem] flex-col overflow-hidden rounded-2xl border ${orda.ring} bg-gradient-to-br ${orda.colors} p-4 text-white shadow-[0_22px_70px_rgba(35,70,51,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_28px_90px_rgba(35,70,51,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b568] focus-visible:ring-offset-2`}
            href={ordaPath(lang, orda.slug)}
            key={orda.slug}
          >
            <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-white/12" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 rounded-tl-[4rem] bg-black/10" />

            <div className="relative flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/72">{t.logoPlaceholder}</p>
              <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="relative mt-4 aspect-square w-full overflow-hidden rounded-xl bg-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]">
              <Image
                src={orda.logo}
                alt={`${orda.name} Orda`}
                width={orda.logoWidth}
                height={orda.logoHeight}
                sizes="(max-width: 768px) 88vw, (max-width: 1280px) 30vw, 300px"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="relative mt-auto pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{orda.slug}</p>
              <h2 className="mt-2 text-3xl font-semibold leading-none text-white">{orda.name}</h2>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold leading-5 text-white/84">
                <Sparkles className={`h-4 w-4 shrink-0 rounded-full ${orda.mark} p-0.5 text-[#234633]`} />
                <span>{t.membersLabel}</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}