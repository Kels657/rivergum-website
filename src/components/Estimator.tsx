"use client";

import { useState } from "react";

// ── Types ──────────────────────────────────────────────────────────────────
type Service = "windows" | "solar" | "gutters" | "pressure";
type WindowSides = "both" | "outside";
type SolarAccess = "easy" | "difficult";
type GutterLength = "small" | "medium" | "large";
type PressureArea = "driveway" | "pathways" | "deck" | "facade" | "fence";
type PressureSize = "small" | "medium" | "large";

type StepId =
  | "property-type"
  | "services"
  | "window-panes"
  | "window-storeys"
  | "window-builders"
  | "window-sides"
  | "solar-count"
  | "solar-access"
  | "gutter-storeys"
  | "gutter-length"
  | "pressure-areas"
  | "pressure-size"
  | "results";

const ALL_STEPS: StepId[] = [
  "property-type",
  "services",
  "window-panes",
  "window-storeys",
  "window-builders",
  "window-sides",
  "solar-count",
  "solar-access",
  "gutter-storeys",
  "gutter-length",
  "pressure-areas",
  "pressure-size",
  "results",
];

interface FormState {
  propertyType: "residential" | "apartment" | "commercial" | null;
  services: Set<Service>;
  windowPanes: number;
  windowStoreys: 1 | 2 | 3 | null;
  buildersClean: boolean | null;
  windowSides: WindowSides | null;
  solarPanels: number;
  solarAccess: SolarAccess | null;
  gutterStoreys: 1 | 2 | null;
  gutterLength: GutterLength | null;
  pressureAreas: Set<PressureArea>;
  pressureSize: PressureSize | null;
}

const INITIAL: FormState = {
  propertyType: null,
  services: new Set(),
  windowPanes: 20,
  windowStoreys: null,
  buildersClean: null,
  windowSides: null,
  solarPanels: 20,
  solarAccess: null,
  gutterStoreys: null,
  gutterLength: null,
  pressureAreas: new Set(),
  pressureSize: null,
};

// ── Step filtering ─────────────────────────────────────────────────────────
function getActiveSteps(s: FormState): StepId[] {
  return ALL_STEPS.filter((id) => {
    if (["window-panes", "window-storeys", "window-builders", "window-sides"].includes(id))
      return s.services.has("windows");
    if (["solar-count", "solar-access"].includes(id)) return s.services.has("solar");
    if (["gutter-storeys", "gutter-length"].includes(id)) return s.services.has("gutters");
    if (["pressure-areas", "pressure-size"].includes(id)) return s.services.has("pressure");
    return true;
  });
}

// ── Calculations ───────────────────────────────────────────────────────────
function r5(n: number) { return Math.round(n / 5) * 5; }
function fmt(n: number) { return `$${n.toLocaleString()}`; }

function windowCalc(s: FormState): [number, number] | null {
  if (!s.windowStoreys || s.buildersClean === null || !s.windowSides) return null;
  let rate = s.windowSides === "both" ? 10 : 7.5;
  if (s.windowStoreys >= 2) rate += 4;
  if (s.windowStoreys >= 3) rate += 6;
  let total = rate * s.windowPanes;
  if (s.buildersClean) total *= 2;
  return [r5(Math.max(total, 100)), r5(Math.max(total, 100) * 1.2)];
}

function solarCalc(s: FormState): [number, number] | null {
  if (!s.solarAccess) return null;
  const total = Math.max((s.solarAccess === "easy" ? 5 : 7.5) * s.solarPanels, 80);
  return [r5(total), r5(total * 1.15)];
}

const GUTTER_PRICES: Record<string, [number, number]> = {
  "1-small": [150, 200], "1-medium": [200, 280], "1-large": [280, 350],
  "2-small": [200, 280], "2-medium": [280, 350], "2-large": [350, 450],
};
function gutterCalc(s: FormState): [number, number] | null {
  if (!s.gutterStoreys || !s.gutterLength) return null;
  return GUTTER_PRICES[`${s.gutterStoreys}-${s.gutterLength}`] ?? null;
}

const PRESSURE_PRICES: Record<PressureSize, [number, number]> = {
  small: [150, 250], medium: [250, 450], large: [450, 700],
};
function pressureCalc(s: FormState): [number, number] | null {
  return s.pressureSize ? PRESSURE_PRICES[s.pressureSize] : null;
}

// ── Reusable UI pieces ─────────────────────────────────────────────────────
function OptionCard({
  selected, onClick, children,
}: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left border-2 p-5 transition-all duration-150 ${
        selected
          ? "border-[#8da59b] bg-[#8da59b]/10"
          : "border-gray-200 bg-white hover:border-[#8da59b]/50"
      }`}
    >
      {children}
    </button>
  );
}

function Stepper({ value, onChange, min = 1, max }: {
  value: number; onChange: (v: number) => void; min?: number; max: number;
}) {
  return (
    <div className="flex items-center gap-5 mt-6">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="w-12 h-12 border border-gray-200 text-[#1b1b1b] text-2xl hover:border-[#8da59b] hover:text-[#8da59b] transition-colors disabled:opacity-30"
        aria-label="Decrease"
      >
        −
      </button>
      <span className="font-serif text-[#1b1b1b] text-5xl font-light min-w-[3.5rem] text-center tabular-nums">
        {value}
      </span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="w-12 h-12 border border-gray-200 text-[#1b1b1b] text-2xl hover:border-[#8da59b] hover:text-[#8da59b] transition-colors disabled:opacity-30"
        aria-label="Increase"
      >
        +
      </button>
    </div>
  );
}

function StepShell({
  question, helper, onBack, onNext, nextLabel = "Next", children,
}: {
  question: string; helper?: string;
  onBack?: () => void; onNext?: () => void; nextLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif font-light text-[#1b1b1b] text-2xl md:text-3xl leading-snug">
          {question}
        </h2>
        {helper && (
          <p className="font-sans text-gray-400 text-sm font-light mt-2 leading-relaxed">{helper}</p>
        )}
      </div>
      {children}
      <div className="flex items-center justify-between pt-2">
        {onBack ? (
          <button
            onClick={onBack}
            className="font-sans text-sm text-[#8da59b] hover:text-[#7d978d] transition-colors"
          >
            ← Back
          </button>
        ) : (
          <span />
        )}
        {onNext && (
          <button
            onClick={onNext}
            className="bg-[#c9a35b] text-[#1b1b1b] font-sans font-medium text-sm px-8 py-3 hover:bg-[#b8923f] transition-colors tracking-wide"
          >
            {nextLabel} →
          </button>
        )}
      </div>
    </div>
  );
}

// ── Icons ──────────────────────────────────────────────────────────────────
function IconHome({ on }: { on: boolean }) {
  return (
    <svg aria-hidden="true" className={`w-6 h-6 flex-shrink-0 ${on ? "text-[#8da59b]" : "text-gray-300"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.092 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}
function IconApt({ on }: { on: boolean }) {
  return (
    <svg aria-hidden="true" className={`w-6 h-6 flex-shrink-0 ${on ? "text-[#8da59b]" : "text-gray-300"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}
function IconOffice({ on }: { on: boolean }) {
  return (
    <svg aria-hidden="true" className={`w-6 h-6 flex-shrink-0 ${on ? "text-[#8da59b]" : "text-gray-300"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}
function IconWindow({ on }: { on: boolean }) {
  return (
    <svg aria-hidden="true" className={`w-6 h-6 flex-shrink-0 ${on ? "text-[#8da59b]" : "text-gray-300"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg>
  );
}
function IconSun({ on }: { on: boolean }) {
  return (
    <svg aria-hidden="true" className={`w-6 h-6 flex-shrink-0 ${on ? "text-[#8da59b]" : "text-gray-300"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  );
}
function IconGutter({ on }: { on: boolean }) {
  return (
    <svg aria-hidden="true" className={`w-6 h-6 flex-shrink-0 ${on ? "text-[#8da59b]" : "text-gray-300"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6h19.5m-19.5 0a2.25 2.25 0 00-2.25 2.25v1.5a2.25 2.25 0 002.25 2.25h1.5m16.5-6a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25h-1.5M6 6v9.75m12-9.75v9.75M9 21l3-6 3 6" />
    </svg>
  );
}
function IconSpray({ on }: { on: boolean }) {
  return (
    <svg aria-hidden="true" className={`w-6 h-6 flex-shrink-0 ${on ? "text-[#8da59b]" : "text-gray-300"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15m-14.8-.5l5 5m0 0l5-5m-5 5v-3" />
    </svg>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function Estimator() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [stepId, setStepId] = useState<StepId>("property-type");
  const [visible, setVisible] = useState(true);

  const activeSteps = getActiveSteps(form);
  const idx = activeSteps.indexOf(stepId);
  // Progress: fill to 100% on last question step before results
  const totalQ = activeSteps.length - 1; // exclude "results"
  const pct = totalQ > 0 ? Math.min(100, Math.round(((idx + 1) / totalQ) * 100)) : 0;

  function go(next: StepId) {
    setVisible(false);
    setTimeout(() => { setStepId(next); setVisible(true); }, 160);
  }
  function goNext() { const n = activeSteps[idx + 1]; if (n) go(n); }
  function goBack() { const p = activeSteps[idx - 1]; if (p) go(p); }
  function reset() {
    setVisible(false);
    setTimeout(() => { setForm(INITIAL); setStepId("property-type"); setVisible(true); }, 160);
  }
  function patch(p: Partial<FormState>) { setForm((f) => ({ ...f, ...p })); }

  function toggleService(s: Service) {
    const next = new Set(form.services);
    next.has(s) ? next.delete(s) : next.add(s);
    patch({ services: next });
  }
  function togglePressureArea(a: PressureArea) {
    const next = new Set(form.pressureAreas);
    next.has(a) ? next.delete(a) : next.add(a);
    patch({ pressureAreas: next });
  }

  // Calculations for results
  const winResult = form.services.has("windows") ? windowCalc(form) : null;
  const solResult = form.services.has("solar") ? solarCalc(form) : null;
  const gutResult = form.services.has("gutters") ? gutterCalc(form) : null;
  const preResult = form.services.has("pressure") ? pressureCalc(form) : null;
  const allResults = [
    { label: "Window Cleaning", range: winResult },
    { label: "Solar Panel Cleaning", range: solResult },
    { label: "Gutter Cleaning", range: gutResult },
    { label: "Pressure Washing", range: preResult },
  ].filter((r) => r.range !== null) as { label: string; range: [number, number] }[];
  const totalLow = allResults.reduce((s, r) => s + r.range[0], 0);
  const totalHigh = allResults.reduce((s, r) => s + r.range[1], 0);

  // ── Step renderers ────────────────────────────────────────────────────────
  function renderStep() {
    switch (stepId) {
      case "property-type":
        return (
          <StepShell question="What type of property is it?">
            <div className="space-y-3">
              {([
                { v: "residential", label: "Residential Home", Icon: IconHome },
                { v: "apartment", label: "Apartment / Unit", Icon: IconApt },
                { v: "commercial", label: "Commercial Property", Icon: IconOffice },
              ] as const).map(({ v, label, Icon }) => (
                <OptionCard key={v} selected={form.propertyType === v} onClick={() => { patch({ propertyType: v }); setTimeout(goNext, 120); }}>
                  <div className="flex items-center gap-4">
                    <Icon on={form.propertyType === v} />
                    <span className="font-serif font-light text-[#1b1b1b] text-lg">{label}</span>
                  </div>
                </OptionCard>
              ))}
            </div>
          </StepShell>
        );

      case "services":
        return (
          <StepShell
            question="What services are you interested in?"
            helper="Select all that apply."
            onBack={goBack}
            onNext={form.services.size > 0 ? goNext : undefined}
            nextLabel="Continue"
          >
            <div className="space-y-3">
              {([
                { v: "windows", label: "Window Cleaning", Icon: IconWindow },
                { v: "solar", label: "Solar Panel Cleaning", Icon: IconSun },
                { v: "gutters", label: "Gutter Cleaning", Icon: IconGutter },
                { v: "pressure", label: "Pressure Washing", Icon: IconSpray },
              ] as const).map(({ v, label, Icon }) => (
                <OptionCard key={v} selected={form.services.has(v)} onClick={() => toggleService(v)}>
                  <div className="flex items-center gap-4">
                    <Icon on={form.services.has(v)} />
                    <span className="font-serif font-light text-[#1b1b1b] text-lg">{label}</span>
                  </div>
                </OptionCard>
              ))}
            </div>
          </StepShell>
        );

      case "window-panes":
        return (
          <StepShell
            question="How many panes of glass do you have?"
            helper="Count each large single pane as 1. For smaller divided windows (like French doors or heritage-style windows), count every 2 small panes as 1."
            onBack={goBack}
            onNext={goNext}
          >
            <Stepper value={form.windowPanes} onChange={(v) => patch({ windowPanes: v })} max={200} />
          </StepShell>
        );

      case "window-storeys":
        return (
          <StepShell question="How many storeys is your property?" onBack={goBack}>
            <div className="space-y-3">
              {([1, 2, 3] as const).map((n) => (
                <OptionCard key={n} selected={form.windowStoreys === n} onClick={() => { patch({ windowStoreys: n }); setTimeout(goNext, 120); }}>
                  <span className="font-serif font-light text-[#1b1b1b] text-lg">{n} {n === 1 ? "storey" : "storeys"}</span>
                </OptionCard>
              ))}
            </div>
          </StepShell>
        );

      case "window-builders":
        return (
          <StepShell
            question="Is this a builders clean or post-renovation clean?"
            helper="Builders cleans are charged at double the standard rate due to the extra time and product required."
            onBack={goBack}
          >
            <div className="space-y-3">
              {([{ v: true, label: "Yes" }, { v: false, label: "No" }] as const).map(({ v, label }) => (
                <OptionCard key={label} selected={form.buildersClean === v} onClick={() => { patch({ buildersClean: v }); setTimeout(goNext, 120); }}>
                  <span className="font-serif font-light text-[#1b1b1b] text-lg">{label}</span>
                </OptionCard>
              ))}
            </div>
          </StepShell>
        );

      case "window-sides":
        return (
          <StepShell question="Would you like inside and outside cleaned, or outside only?" onBack={goBack}>
            <div className="space-y-3">
              {([
                { v: "both" as const, label: "Inside & Outside" },
                { v: "outside" as const, label: "Outside Only" },
              ]).map(({ v, label }) => (
                <OptionCard key={v} selected={form.windowSides === v} onClick={() => { patch({ windowSides: v }); setTimeout(goNext, 120); }}>
                  <span className="font-serif font-light text-[#1b1b1b] text-lg">{label}</span>
                </OptionCard>
              ))}
            </div>
          </StepShell>
        );

      case "solar-count":
        return (
          <StepShell question="How many solar panels do you have?" onBack={goBack} onNext={goNext}>
            <Stepper value={form.solarPanels} onChange={(v) => patch({ solarPanels: v })} max={100} />
          </StepShell>
        );

      case "solar-access":
        return (
          <StepShell question="How would you describe the access to your panels?" onBack={goBack}>
            <div className="space-y-3">
              {([
                { v: "easy" as const, label: "Easy access", sub: "Standard roof" },
                { v: "difficult" as const, label: "Difficult access", sub: "Steep pitch, obstacles or multi-storey" },
              ]).map(({ v, label, sub }) => (
                <OptionCard key={v} selected={form.solarAccess === v} onClick={() => { patch({ solarAccess: v }); setTimeout(goNext, 120); }}>
                  <p className="font-serif font-light text-[#1b1b1b] text-lg">{label}</p>
                  <p className="font-sans text-gray-400 text-sm mt-0.5">{sub}</p>
                </OptionCard>
              ))}
            </div>
          </StepShell>
        );

      case "gutter-storeys":
        return (
          <StepShell question="How many storeys is your property?" onBack={goBack}>
            <div className="space-y-3">
              {([1, 2] as const).map((n) => (
                <OptionCard key={n} selected={form.gutterStoreys === n} onClick={() => { patch({ gutterStoreys: n }); setTimeout(goNext, 120); }}>
                  <span className="font-serif font-light text-[#1b1b1b] text-lg">{n} {n === 1 ? "storey" : "storeys"}</span>
                </OptionCard>
              ))}
            </div>
          </StepShell>
        );

      case "gutter-length":
        return (
          <StepShell question="How would you describe the length of your guttering?" onBack={goBack}>
            <div className="space-y-3">
              {([
                { v: "small" as const, label: "Small", sub: "Up to 15 metres" },
                { v: "medium" as const, label: "Medium", sub: "15–30 metres" },
                { v: "large" as const, label: "Large", sub: "30+ metres" },
              ]).map(({ v, label, sub }) => (
                <OptionCard key={v} selected={form.gutterLength === v} onClick={() => { patch({ gutterLength: v }); setTimeout(goNext, 120); }}>
                  <p className="font-serif font-light text-[#1b1b1b] text-lg">{label}</p>
                  <p className="font-sans text-gray-400 text-sm mt-0.5">{sub}</p>
                </OptionCard>
              ))}
            </div>
          </StepShell>
        );

      case "pressure-areas":
        return (
          <StepShell
            question="What areas need pressure washing?"
            helper="Select all that apply."
            onBack={goBack}
            onNext={form.pressureAreas.size > 0 ? goNext : undefined}
            nextLabel="Continue"
          >
            <div className="space-y-3">
              {([
                { v: "driveway" as const, label: "Driveway" },
                { v: "pathways" as const, label: "Pathways" },
                { v: "deck" as const, label: "Deck / Patio" },
                { v: "facade" as const, label: "Building Facade" },
                { v: "fence" as const, label: "Fence" },
              ]).map(({ v, label }) => (
                <OptionCard key={v} selected={form.pressureAreas.has(v)} onClick={() => togglePressureArea(v)}>
                  <span className="font-serif font-light text-[#1b1b1b] text-lg">{label}</span>
                </OptionCard>
              ))}
            </div>
          </StepShell>
        );

      case "pressure-size":
        return (
          <StepShell question="How would you estimate the total area?" onBack={goBack}>
            <div className="space-y-3">
              {([
                { v: "small" as const, label: "Small", sub: "Under 30 sqm" },
                { v: "medium" as const, label: "Medium", sub: "30–80 sqm" },
                { v: "large" as const, label: "Large", sub: "80 sqm+" },
              ]).map(({ v, label, sub }) => (
                <OptionCard key={v} selected={form.pressureSize === v} onClick={() => { patch({ pressureSize: v }); setTimeout(goNext, 120); }}>
                  <p className="font-serif font-light text-[#1b1b1b] text-lg">{label}</p>
                  <p className="font-sans text-gray-400 text-sm mt-0.5">{sub}</p>
                </OptionCard>
              ))}
            </div>
          </StepShell>
        );

      case "results":
        return (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-6 h-px bg-[#c9a35b]" />
                <span className="font-sans text-[#8da59b] text-xs font-semibold uppercase tracking-[0.22em]">
                  Your Estimate
                </span>
              </div>
              <h2 className="font-serif font-light text-[#1b1b1b] text-3xl md:text-4xl leading-tight">
                Here&apos;s what we estimate
              </h2>
            </div>

            {/* Service cards */}
            <div className="space-y-3">
              {allResults.map(({ label, range }) => (
                <div key={label} className="border border-gray-100 bg-white p-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-serif font-light text-[#1b1b1b] text-lg">{label}</p>
                    <p className="font-sans font-semibold text-[#1b1b1b] text-lg whitespace-nowrap">
                      {fmt(range[0])} – {fmt(range[1])}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            {allResults.length > 1 && (
              <div className="border-2 border-[#c9a35b] bg-[#c9a35b]/5 p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-serif text-[#1b1b1b] text-xl font-medium">Total Estimate</p>
                  <p className="font-sans font-bold text-[#1b1b1b] text-xl whitespace-nowrap">
                    {fmt(totalLow)} – {fmt(totalHigh)}
                  </p>
                </div>
              </div>
            )}

            {/* Disclaimer */}
            <p className="font-sans text-gray-400 text-xs leading-relaxed border-t border-gray-100 pt-4">
              This estimate is a guide only. Final pricing is confirmed after a free on-site or photo assessment. Factors such as window condition, access difficulty and property layout may affect the final price.
            </p>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <a
                href="/#contact"
                className="block text-center bg-[#c9a35b] text-[#1b1b1b] font-sans font-medium text-sm px-10 py-4 hover:bg-[#b8923f] transition-colors tracking-wide"
              >
                Get Your Exact Quote — It&apos;s Free
              </a>
              <button
                onClick={reset}
                className="block w-full text-center border border-gray-200 text-[#1b1b1b]/60 font-sans text-sm px-10 py-3.5 hover:border-[#8da59b] hover:text-[#1b1b1b] transition-colors"
              >
                Start Over
              </button>
            </div>

            <button
              onClick={goBack}
              className="font-sans text-sm text-[#8da59b] hover:text-[#7d978d] transition-colors"
            >
              ← Back
            </button>
          </div>
        );
    }
  }

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress bar (hidden on results) */}
      {stepId !== "results" && (
        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <span className="font-sans text-xs text-gray-400 uppercase tracking-wide">
              Step {idx + 1} of {totalQ}
            </span>
            <span className="font-sans text-xs text-[#c9a35b] font-medium">{pct}%</span>
          </div>
          <div className="h-0.5 bg-gray-200 overflow-hidden">
            <div
              className="h-full bg-[#c9a35b] transition-all duration-500 ease-out"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      )}

      {/* Animated step content */}
      <div
        style={{
          transition: "opacity 0.16s ease, transform 0.16s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(10px)",
        }}
      >
        {renderStep()}
      </div>
    </div>
  );
}
