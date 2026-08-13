"use client";

import { ArrowUpRight, Hand, MousePointer2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { buildings, campusMapCopy, type Building } from "@/lib/campus-map-data";
import { buildingGeometry, campusMapSize, pierGeometry } from "@/lib/campus-map-geometry";
import { languagePath, type Lang } from "@/lib/i18n";

const pierCopy: Record<Lang, { name: string; type: string; description: string; quote: string }> = {
  kk: {
    name: "Пирс",
    type: "Көл жағасындағы орын",
    description: "Судың жанындағы тыныштыққа тоқтап, табиғатты сезінуге арналған орын.",
    quote: "Табиғаттың сұлулығы жанды тыныштандырып, күш беретін шипалы мекен.",
  },
  ru: {
    name: "Пирс",
    type: "Место у озера",
    description: "Тихое место у воды, где можно остановиться и почувствовать природу.",
    quote: "Здесь красота природы возвращает тишину внутри и помогает восстановить силы.",
  },
  en: {
    name: "Pier",
    type: "By the lake",
    description: "A quiet place by the water to pause and reconnect with nature.",
    quote: "A healing place where the beauty of nature quiets the mind and restores your strength.",
  },
};

function BuildingCard({ building, lang }: { building: Building; lang: Lang }) {
  const t = campusMapCopy[lang];
  const content = building.copy[lang];

  return (
    <div className="rounded-lg border border-white/45 bg-[#fdfbf7]/95 p-4 text-[#172119] shadow-[0_18px_55px_rgba(0,0,0,0.24)] backdrop-blur-xl">
      <p className="text-xs font-semibold uppercase text-[#3f6d4e]">{content.type}</p>
      <h3 className="mt-1 text-xl font-semibold">{content.name}</h3>
      <p className="mt-2 text-sm leading-6 text-[#586158]">{content.description}</p>
      <Link
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2f5c3d] transition hover:text-[#172119] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3f6d4e] focus-visible:ring-offset-2"
        href={languagePath(lang, `/map/${building.slug}`)}
      >
        {t.viewBuilding}
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function PierCard({ lang }: { lang: Lang }) {
  const content = pierCopy[lang];

  return (
    <div className="rounded-lg border border-white/45 bg-[#fdfbf7]/95 p-4 text-[#172119] shadow-[0_18px_55px_rgba(0,0,0,0.24)] backdrop-blur-xl">
      <p className="text-xs font-semibold uppercase text-[#3f6d4e]">{content.type}</p>
      <h3 className="mt-1 text-xl font-semibold">{content.name}</h3>
      <p className="mt-2 text-sm leading-6 text-[#586158]">{content.description}</p>
      <blockquote className="mt-4 border-l-2 border-[#9bb27b] pl-3 text-sm italic leading-6 text-[#31523b]">
        “{content.quote}”
      </blockquote>
    </div>
  );
}

export function CampusMap({ lang }: { lang: Lang }) {
  const router = useRouter();
  const t = campusMapCopy[lang];
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredPier, setHoveredPier] = useState(false);
  const [selectedPier, setSelectedPier] = useState(false);
  const pointerType = useRef<string | null>(null);
  const activePier = hoveredPier || selectedPier;
  const activeId = activePier ? null : hoveredId ?? selectedId;
  const activeBuilding = buildings.find((building) => building.id === activeId) ?? null;

  function focusBuilding(buildingId: string) {
    setSelectedPier(false);
    setHoveredPier(false);
    setHoveredId(buildingId);
  }

  function selectBuilding(buildingId: string) {
    setSelectedPier(false);
    setSelectedId(buildingId);
  }

  function selectPier() {
    setSelectedPier(true);
    setSelectedId(null);
    setHoveredId(null);
  }

  function openBuilding(building: Building) {
    setSelectedPier(false);
    router.push(languagePath(lang, `/map/${building.slug}`));
  }

  function handleBuildingClick(event: React.MouseEvent<SVGPathElement>, building: Building) {
    setSelectedPier(false);
    if (pointerType.current === "touch" && selectedId !== building.id) {
      event.preventDefault();
      setSelectedId(building.id);
      return;
    }

    openBuilding(building);
  }

  return (
    <div className="mt-7">
      <div
        className="relative aspect-[1672/941] w-full overflow-hidden rounded-lg bg-[#172119] shadow-[0_28px_80px_rgba(23,33,25,0.2)]"
        onMouseLeave={() => {
          setHoveredId(null);
          setHoveredPier(false);
        }}
      >
        <Image
          alt={t.imageAlt}
          className="block h-auto w-full select-none"
          draggable={false}
          height={campusMapSize.height}
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          src="/campus-map-clean.png"
          width={campusMapSize.width}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent" />

        <div className="pointer-events-none absolute left-3 top-3 z-20 hidden items-center gap-2 rounded-full border border-white/25 bg-[#172119]/72 px-3 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md sm:flex">
          <MousePointer2 className="h-4 w-4 text-[#dfe8c7]" />
          {t.desktopHint}
        </div>

        <div className="pointer-events-none absolute left-3 top-3 z-20 flex items-center gap-2 rounded-full border border-white/25 bg-[#172119]/72 px-3 py-2 text-[11px] font-semibold text-white shadow-lg backdrop-blur-md sm:hidden">
          <Hand className="h-4 w-4 text-[#dfe8c7]" />
          {t.mobileHint}
        </div>

        <svg
          aria-label={t.title}
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          role="group"
          shapeRendering="geometricPrecision"
          viewBox={`0 0 ${campusMapSize.width} ${campusMapSize.height}`}
        >
          {buildingGeometry.map((geometry) => {
            const building = buildings.find((item) => item.id === geometry.id);

            if (!building) return null;

            const content = building.copy[lang];
            const isActive = activeId === building.id;
            const buildingNumber = buildings.findIndex((item) => item.id === building.id) + 1;

            return (
              <g key={building.id}>
                <path
                  aria-label={`${content.name}. ${content.type}`}
                  className="cursor-pointer transition-[fill,stroke,filter] duration-200 focus:outline-none"
                  clipRule={geometry.fillRule ?? "nonzero"}
                  d={geometry.path}
                  fill={isActive ? "rgba(199,216,167,0.35)" : "rgba(255,255,255,0.001)"}
                  fillRule={geometry.fillRule ?? "nonzero"}
                  onClick={(event) => handleBuildingClick(event, building)}
                  onFocus={() => focusBuilding(building.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openBuilding(building);
                    }
                  }}
                  onMouseEnter={() => focusBuilding(building.id)}
                  onPointerDown={(event) => {
                    pointerType.current = event.pointerType;
                  }}
                  role="link"
                  stroke={isActive ? "rgba(247,244,238,0.95)" : "transparent"}
                  strokeLinejoin="round"
                  strokeWidth={isActive ? 3 : 0}
                  style={{ filter: isActive ? "drop-shadow(0 8px 14px rgba(0,0,0,0.3))" : "none" }}
                  tabIndex={0}
                  vectorEffect="non-scaling-stroke"
                />
                <g aria-hidden="true" className="pointer-events-none">
                  <circle
                    cx={geometry.marker.x}
                    cy={geometry.marker.y}
                    fill={isActive ? "#c7d8a7" : "rgba(23,33,25,0.82)"}
                    r={isActive ? 25 : 21}
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                  <text
                    dominantBaseline="central"
                    fill={isActive ? "#172119" : "white"}
                    fontSize="18"
                    fontWeight="700"
                    textAnchor="middle"
                    x={geometry.marker.x}
                    y={geometry.marker.y + 1}
                  >
                    {String(buildingNumber).padStart(2, "0")}
                  </text>
                </g>
              </g>
            );
          })}

          <path
            aria-label={pierCopy[lang].name}
            aria-pressed={activePier}
            className="cursor-pointer transition-[fill,stroke,filter] duration-200 focus:outline-none"
            d={pierGeometry.path}
            fill={activePier ? "rgba(199,216,167,0.38)" : "rgba(255,255,255,0.001)"}
            onBlur={() => setHoveredPier(false)}
            onClick={selectPier}
            onFocus={() => {
              setHoveredPier(true);
              setHoveredId(null);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                selectPier();
              }
            }}
            onMouseEnter={() => {
              setHoveredPier(true);
              setHoveredId(null);
            }}
            onMouseLeave={() => setHoveredPier(false)}
            role="button"
            stroke={activePier ? "rgba(247,244,238,0.95)" : "transparent"}
            strokeLinejoin="round"
            strokeWidth={activePier ? 3 : 0}
            style={{ filter: activePier ? "drop-shadow(0 8px 14px rgba(0,0,0,0.3))" : "none" }}
            tabIndex={0}
            transform={pierGeometry.transform}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {activePier || activeBuilding ? (
          <div aria-live="polite" className="absolute bottom-4 left-4 z-20 hidden w-[min(23rem,calc(100%-2rem))] md:block">
            {activePier ? <PierCard lang={lang} /> : activeBuilding ? <BuildingCard building={activeBuilding} lang={lang} /> : null}
          </div>
        ) : null}
      </div>

      <div className="mt-3 md:hidden" aria-live="polite">
        {activePier ? (
          <PierCard lang={lang} />
        ) : activeBuilding ? (
          <BuildingCard building={activeBuilding} lang={lang} />
        ) : (
          <p className="rounded-lg border border-black/10 bg-white/65 px-4 py-3 text-sm leading-6 text-[#586158]">
            {t.mobileHint}
          </p>
        )}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-4">
        {buildings.map((building, index) => {
          const content = building.copy[lang];
          const isActive = activeId === building.id;

          return (
            <button
              aria-pressed={isActive}
              className={`flex min-h-14 items-center gap-3 rounded-lg border px-3 py-2 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3f6d4e] focus-visible:ring-offset-2 ${
                isActive
                  ? "border-[#3f6d4e] bg-[#172119] text-white shadow-md"
                  : "border-black/10 bg-white/65 text-[#172119] hover:bg-white"
              }`}
              key={building.id}
              onBlur={() => setHoveredId(null)}
              onClick={() => selectBuilding(building.id)}
              onFocus={() => focusBuilding(building.id)}
              onMouseEnter={() => focusBuilding(building.id)}
              onMouseLeave={() => setHoveredId(null)}
              type="button"
            >
              <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold ${isActive ? "bg-[#c7d8a7] text-[#172119]" : "bg-[#e5ead8] text-[#31523b]"}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold leading-4">{content.name}</span>
                <span className={`mt-1 hidden text-xs leading-4 sm:block ${isActive ? "text-white/65" : "text-[#6a736b]"}`}>
                  {content.type}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
