export type OrdaSlug =
  | "aq"
  | "qonyr"
  | "kuren"
  | "kok"
  | "kumis"
  | "jasyl"
  | "sary"
  | "qyzgylt"
  | "qara"
  | "sur"
  | "altyn"
  | "qola"
  | "kulgin"
  | "qyzyl";

export type Orda = {
  slug: OrdaSlug;
  name: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  colors: string;
  ring: string;
  mark: string;
};

export const ordas = [
  { slug: "aq", name: "AQ", logo: "/ordas/logos/aq.webp", logoWidth: 1400, logoHeight: 1400, colors: "from-[#234633] to-[#3f7654]", ring: "border-[#d6b568]/45", mark: "bg-[#d6b568]" },
  { slug: "qonyr", name: "QONYR", logo: "/ordas/logos/qonyr.webp", logoWidth: 1400, logoHeight: 1400, colors: "from-[#6b3f16] to-[#9a6a2e]", ring: "border-[#d8b176]/55", mark: "bg-[#d8b176]" },
  { slug: "kuren", name: "KUREN", logo: "/ordas/logos/kuren.webp", logoWidth: 1400, logoHeight: 1400, colors: "from-[#671f17] to-[#9d3428]", ring: "border-[#d08372]/55", mark: "bg-[#d08372]" },
  { slug: "kok", name: "KOK", logo: "/ordas/logos/kok.webp", logoWidth: 1400, logoHeight: 1400, colors: "from-[#2f318f] to-[#5a61c8]", ring: "border-[#b9bef8]/60", mark: "bg-[#b9bef8]" },
  { slug: "kumis", name: "KUMIS", logo: "/ordas/logos/kumis.webp", logoWidth: 1400, logoHeight: 1400, colors: "from-[#58616a] to-[#9ba6ae]", ring: "border-[#dbe1e5]/60", mark: "bg-[#dbe1e5]" },
  { slug: "jasyl", name: "JASYL", logo: "/ordas/logos/jasyl.webp", logoWidth: 1400, logoHeight: 1400, colors: "from-[#1f6d45] to-[#54a36b]", ring: "border-[#bce3bc]/55", mark: "bg-[#bce3bc]" },
  { slug: "sary", name: "SARY", logo: "/ordas/logos/sary.webp", logoWidth: 1400, logoHeight: 1400, colors: "from-[#8f6d13] to-[#d7b337]", ring: "border-[#f3e39a]/60", mark: "bg-[#f3e39a]" },
  { slug: "qyzgylt", name: "QYZGYLT", logo: "/ordas/logos/qyzgylt.webp", logoWidth: 1400, logoHeight: 1400, colors: "from-[#9a3f75] to-[#d976ac]", ring: "border-[#f1c3dc]/55", mark: "bg-[#f1c3dc]" },
  { slug: "qara", name: "QARA", logo: "/ordas/logos/qara.webp", logoWidth: 1400, logoHeight: 1400, colors: "from-[#171717] to-[#4a4a4a]", ring: "border-[#c8c8c8]/55", mark: "bg-[#c8c8c8]" },
  { slug: "sur", name: "SUR", logo: "/ordas/logos/sur.webp", logoWidth: 1400, logoHeight: 1400, colors: "from-[#4d565c] to-[#88949a]", ring: "border-[#d5dde0]/55", mark: "bg-[#d5dde0]" },
  { slug: "altyn", name: "ALTYN", logo: "/ordas/logos/altyn.webp", logoWidth: 1400, logoHeight: 1400, colors: "from-[#8a6518] to-[#d2a83a]", ring: "border-[#efd68b]/60", mark: "bg-[#efd68b]" },
  { slug: "qola", name: "QOLA", logo: "/ordas/logos/qola.webp", logoWidth: 1400, logoHeight: 1400, colors: "from-[#7a4a22] to-[#b9824a]", ring: "border-[#ecc49a]/55", mark: "bg-[#ecc49a]" },
  { slug: "kulgin", name: "KULGIN", logo: "/ordas/logos/kulgin.webp", logoWidth: 1400, logoHeight: 1400, colors: "from-[#4b3156] to-[#9a6cae]", ring: "border-[#e3c2ee]/55", mark: "bg-[#e3c2ee]" },
  { slug: "qyzyl", name: "QYZYL", logo: "/ordas/logos/qyzyl.webp", logoWidth: 1400, logoHeight: 1400, colors: "from-[#7a171b] to-[#c73b42]", ring: "border-[#ef9fa4]/55", mark: "bg-[#ef9fa4]" },
] as const satisfies readonly Orda[];

export function getOrda(slug: string) {
  return ordas.find((orda) => orda.slug === slug);
}