import { notFound } from "next/navigation";
import { OrdaDetailPage } from "@/components/pages/orda-detail-page";
import { getOrda, ordas } from "@/lib/ordas";

export function generateStaticParams() {
  return ordas.map(({ slug }) => ({ slug }));
}

export default async function Page({ params }: PageProps<"/ordas/[slug]">) {
  const { slug } = await params;
  const orda = getOrda(slug);

  if (!orda) notFound();

  return <OrdaDetailPage lang="kk" orda={orda} />;
}