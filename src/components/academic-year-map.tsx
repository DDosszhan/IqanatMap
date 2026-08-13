"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { calendarCopy } from "@/lib/calendar-i18n";
import type { Lang } from "@/lib/i18n";

const segmentTone = {
  orientation: "bg-[#c7d8a7] text-[#172119]",
  term: "bg-white text-[#172119]",
  break: "bg-[#f1d879] text-[#172119]",
  summer: "bg-[#9ecab0] text-[#172119]",
};

type CalendarContent = (typeof calendarCopy)[Lang];
type TooltipContent = {
  key: string;
  label: string;
  date: string;
  details: string;
  left: number;
  top: number;
  placement: "above" | "below";
};

const tooltipWidth = 224;
const viewportGutter = 12;

export function AcademicYearMap({ t }: { t: CalendarContent }) {
  const [tooltip, setTooltip] = useState<TooltipContent | null>(null);

  useEffect(() => {
    if (!tooltip) return;

    const hideTooltip = () => setTooltip(null);
    window.addEventListener("resize", hideTooltip);
    window.addEventListener("scroll", hideTooltip, true);

    return () => {
      window.removeEventListener("resize", hideTooltip);
      window.removeEventListener("scroll", hideTooltip, true);
    };
  }, [tooltip]);

  function showTooltip(
    key: string,
    segment: { label: string; date: string; details: string },
    target: HTMLDivElement,
  ) {
    const rect = target.getBoundingClientRect();
    const halfWidth = tooltipWidth / 2;
    const left = Math.min(
      window.innerWidth - halfWidth - viewportGutter,
      Math.max(halfWidth + viewportGutter, rect.left + rect.width / 2),
    );
    const placement = rect.top < 160 ? "below" : "above";

    setTooltip({
      key,
      label: segment.label,
      date: segment.date,
      details: segment.details,
      left,
      top: placement === "above" ? rect.top - 8 : rect.bottom + 8,
      placement,
    });
  }

  return (
    <>
      <div className="overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="min-w-[980px] space-y-3">
          <div className="grid grid-cols-[104px_1fr] items-stretch gap-3">
            <div />
            <div className="grid grid-cols-[repeat(299,minmax(0,1fr))] overflow-hidden rounded-2xl border border-white/12 text-center text-[11px] font-semibold uppercase tracking-wide text-white/70">
              {t.months.map((month) => (
                <div
                  className="border-r border-white/10 px-2 py-3 last:border-r-0"
                  key={month.label}
                  style={{ gridColumn: `span ${month.days} / span ${month.days}` }}
                >
                  {month.label}
                </div>
              ))}
            </div>
          </div>

          {t.rows.map((row) => (
            <div className="grid grid-cols-[104px_1fr] items-center gap-3" key={row.label}>
              <div className="text-sm font-semibold text-white/70">{row.label}</div>
              <div className="grid h-14 grid-cols-[repeat(299,minmax(0,1fr))] rounded-2xl bg-white/8 p-1">
                {row.segments.map((segment) => {
                  const showLabel = segment.days >= 24;
                  const segmentKey = `${row.label}-${segment.label}-${segment.date}`;

                  return (
                    <div
                      aria-describedby={tooltip?.key === segmentKey ? "calendar-segment-tooltip" : undefined}
                      aria-label={`${segment.label}: ${segment.date}. ${segment.details}`}
                      className={`relative mx-0.5 flex min-w-0 items-center justify-center rounded-xl text-[11px] font-semibold shadow-sm transition hover:z-20 hover:scale-[1.03] ${segmentTone[segment.tone]}`}
                      key={segmentKey}
                      onBlur={() => setTooltip(null)}
                      onFocus={(event) => showTooltip(segmentKey, segment, event.currentTarget)}
                      onMouseEnter={(event) => showTooltip(segmentKey, segment, event.currentTarget)}
                      onMouseLeave={() => setTooltip(null)}
                      style={{ gridColumn: `span ${segment.days} / span ${segment.days}` }}
                      tabIndex={0}
                      title={`${segment.label}: ${segment.date}. ${segment.details}`}
                    >
                      {showLabel ? (
                        <span className="truncate px-2">{segment.label}</span>
                      ) : (
                        <span className="h-2 w-2 rounded-full bg-current/75" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {tooltip && typeof document !== "undefined"
        ? createPortal(
            <span
              className="pointer-events-none fixed z-[100] w-56 rounded-xl bg-white px-3 py-2 text-left text-xs font-medium leading-5 text-[#172119] shadow-xl ring-1 ring-black/10"
              id="calendar-segment-tooltip"
              role="tooltip"
              style={{
                left: tooltip.left,
                top: tooltip.top,
                transform: tooltip.placement === "above" ? "translate(-50%, -100%)" : "translateX(-50%)",
              }}
            >
              <strong className="block">{tooltip.label}</strong>
              <span className="block text-[#3f6d4e]">{tooltip.date}</span>
              <span className="block text-[#586158]">{tooltip.details}</span>
            </span>,
            document.body,
          )
        : null}
    </>
  );
}
