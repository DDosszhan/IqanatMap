import { notFound } from "next/navigation";
import { BuildingPlaceholderPage } from "@/components/pages/building-placeholder-page";
import { buildings, getBuilding } from "@/lib/campus-map-data";

export function generateStaticParams() {
  return buildings.map(({ slug }) => ({ slug }));
}

export default async function Page({ params }: PageProps<"/map/[slug]">) {
  const { slug } = await params;
  const building = getBuilding(slug);

  if (!building) notFound();

  return <BuildingPlaceholderPage building={building} lang="kk" />;
}
