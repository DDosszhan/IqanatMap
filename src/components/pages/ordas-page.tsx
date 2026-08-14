import { CircleDot, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { copy, type Lang } from "@/lib/i18n";

const ordas = [
  { name: "Орда 01", colors: "from-[#234633] to-[#3f7654]", ring: "border-[#d6b568]/45", mark: "bg-[#d6b568]" },
  { name: "Орда 02", colors: "from-[#6c1f2e] to-[#b54a55]", ring: "border-[#e7b8a6]/55", mark: "bg-[#e7b8a6]" },
  { name: "Орда 03", colors: "from-[#173e63] to-[#3475a4]", ring: "border-[#9fc7df]/55", mark: "bg-[#9fc7df]" },
  { name: "Орда 04", colors: "from-[#6f4a14] to-[#d6a440]", ring: "border-[#f1ddb2]/60", mark: "bg-[#f1ddb2]" },
  { name: "Орда 05", colors: "from-[#3c285f] to-[#7d62ae]", ring: "border-[#d7c7f2]/55", mark: "bg-[#d7c7f2]" },
  { name: "Орда 06", colors: "from-[#1f5c5c] to-[#52a6a0]", ring: "border-[#b5e1d8]/55", mark: "bg-[#b5e1d8]" },
  { name: "Орда 07", colors: "from-[#74390f] to-[#c66d2f]", ring: "border-[#efc094]/55", mark: "bg-[#efc094]" },
  { name: "Орда 08", colors: "from-[#263a78] to-[#637fd1]", ring: "border-[#c3d1ff]/55", mark: "bg-[#c3d1ff]" },
  { name: "Орда 09", colors: "from-[#31551f] to-[#7aa34d]", ring: "border-[#d2e7ae]/55", mark: "bg-[#d2e7ae]" },
  { name: "Орда 10", colors: "from-[#7a234f] to-[#c86191]", ring: "border-[#f0bfd6]/55", mark: "bg-[#f0bfd6]" },
  { name: "Орда 11", colors: "from-[#244c5a] to-[#5b9cb5]", ring: "border-[#bde2ef]/55", mark: "bg-[#bde2ef]" },
  { name: "Орда 12", colors: "from-[#5f5620] to-[#bbb057]", ring: "border-[#eee7a5]/55", mark: "bg-[#eee7a5]" },
  { name: "Орда 13", colors: "from-[#4b3156] to-[#9a6cae]", ring: "border-[#e3c2ee]/55", mark: "bg-[#e3c2ee]" },
  { name: "Орда 14", colors: "from-[#2c4b37] to-[#8a9d54]", ring: "border-[#d9df9d]/55", mark: "bg-[#d9df9d]" },
] as const;

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
          <article
            className={`group relative min-h-64 overflow-hidden rounded-2xl border ${orda.ring} bg-gradient-to-br ${orda.colors} p-5 text-white shadow-[0_22px_70px_rgba(35,70,51,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_28px_90px_rgba(35,70,51,0.2)]`}
            key={orda.name}
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />
            <div className="absolute bottom-0 right-0 h-28 w-28 rounded-tl-[4rem] bg-black/10" />
            <div className="relative flex items-start justify-between gap-4">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full border border-white/45 bg-white/18 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.24)] backdrop-blur">
                <div className="grid h-full w-full place-items-center rounded-full bg-white/90 text-[#234633]">
                  <CircleDot className="h-8 w-8" />
                </div>
              </div>
              <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-semibold text-white/86 backdrop-blur">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="relative mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/68">{t.logoPlaceholder}</p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight">{orda.name}</h2>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-white/78">
                <Sparkles className={`h-4 w-4 rounded-full ${orda.mark} p-0.5 text-[#234633]`} />
                {t.membersLabel}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}