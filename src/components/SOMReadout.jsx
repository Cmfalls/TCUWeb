import { useEffect, useState } from "react";

const C = {
  bg: "#f5f4ee",
  card: "#ffffff",
  text: "#1a1a12",
  textSec: "#4c4c3c",
  textMuted: "#7a7a6a",
  border: "rgba(0,0,0,0.08)",
  borderGreen: "rgba(106,157,42,0.35)",
  green: "#5a8c1e",
  greenBright: "#6a9d2a",
  red: "#c0392b",
};

const stages = [
  {
    id: "stage-1-degraded",
    label: "Degraded",
    min: 0.5,
    max: 1.1,
    anchor: 0.5,
    accent: "#a1482a",
    subtitle: "Dusty, compacted, low life",
    image: "/images/evidence/soil-stages/stage-1-degraded.webp",
    highlights: ["Compacted surface", "Weak biology", "Fast runoff risk"],
  },
  {
    id: "stage-2-typical",
    label: "Typical farm",
    min: 1.2,
    max: 2,
    anchor: 2,
    accent: "#8b5e3c",
    subtitle: "Some residue, shallow roots",
    image: "/images/evidence/soil-stages/stage-2-typical.webp",
    highlights: ["Some residue", "Moderate structure", "Average holding power"],
  },
  {
    id: "stage-3-recovering",
    label: "Recovering",
    min: 2.1,
    max: 3.2,
    anchor: 3.2,
    accent: "#537d24",
    subtitle: "Roots spreading, structure returning",
    image: "/images/evidence/soil-stages/stage-3-recovering.webp",
    highlights: ["More aggregation", "Better infiltration", "Biology returning"],
  },
  {
    id: "stage-4-regenerative",
    label: "Regenerative",
    min: 3.3,
    max: 4.7,
    anchor: 4.5,
    accent: "#356e0f",
    subtitle: "Dark aggregates, pores, active life",
    image: "/images/evidence/soil-stages/stage-4-regenerative.webp",
    highlights: ["Stable pores", "High infiltration", "Carbon sponge forming"],
  },
  {
    id: "stage-5-prairie",
    label: "Virgin prairie",
    min: 4.8,
    max: 6,
    anchor: 6,
    accent: "#6a9d2a",
    subtitle: "Dense roots, rich carbon sponge",
    image: "/images/evidence/soil-stages/stage-5-prairie.webp",
    highlights: ["Peak water buffering", "Dense root web", "Rich carbon storage"],
  },
];

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function hexToRgba(hex, alpha) {
  const normalized = hex.replace("#", "");
  const value =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => char + char)
          .join("")
      : normalized;
  const int = Number.parseInt(value, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getCurrentStage(som) {
  return stages.find((stage) => som >= stage.min && som <= stage.max) ?? stages[0];
}

function getBlend(som) {
  if (som <= stages[0].anchor) {
    return [{ ...stages[0], opacity: 1 }];
  }

  if (som >= stages[stages.length - 1].anchor) {
    return [{ ...stages[stages.length - 1], opacity: 1 }];
  }

  for (let index = 0; index < stages.length - 1; index += 1) {
    const current = stages[index];
    const next = stages[index + 1];

    if (som >= current.anchor && som <= next.anchor) {
      const progress = clamp((som - current.anchor) / (next.anchor - current.anchor), 0, 1);
      return [
        { ...current, opacity: 1 - progress },
        { ...next, opacity: progress },
      ];
    }
  }

  return [{ ...stages[0], opacity: 1 }];
}

function SoilArtifact({ som, compact = false }) {
  const currentStage = getCurrentStage(som);
  const layers = getBlend(som);

  return (
    <div
      className="som-soil-artifact"
      style={{
        position: "relative",
        width: "100%",
        minHeight: compact ? 360 : 468,
        borderRadius: 8,
        overflow: "hidden",
        background: "linear-gradient(145deg, rgba(252,253,247,0.96) 0%, rgba(234,243,213,0.98) 100%)",
        border: "1px solid rgba(106,157,42,0.22)",
        boxShadow: "0 22px 40px rgba(76, 98, 23, 0.12)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 78% 18%, rgba(106,157,42,0.18) 0%, rgba(106,157,42,0) 30%), radial-gradient(circle at 18% 78%, rgba(182,73,51,0.11) 0%, rgba(182,73,51,0) 26%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "16%",
          right: "12%",
          bottom: 62,
          height: 42,
          background: "radial-gradient(circle, rgba(74,88,24,0.2) 0%, rgba(74,88,24,0.06) 42%, rgba(74,88,24,0) 78%)",
          filter: "blur(18px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 20,
          left: 22,
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontSize: 10,
            letterSpacing: 2.4,
            textTransform: "uppercase",
            color: C.textMuted,
          }}
        >
          Soil Profile
        </div>
        <div
          style={{
            padding: "6px 12px",
            borderRadius: 999,
            border: `1px solid ${C.border}`,
            background: "rgba(255,255,255,0.72)",
            fontSize: 11,
            color: C.textMuted,
            whiteSpace: "nowrap",
          }}
        >
          {currentStage.min.toFixed(1)}-{currentStage.max.toFixed(1)}% SOM
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          inset: "10% 5% 8%",
          borderRadius: 8,
          overflow: "hidden",
          background:
            "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.95) 0%, rgba(239,243,225,0.96) 52%, rgba(229,238,208,0.95) 100%)",
          border: "1px solid rgba(106,157,42,0.16)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.82), 0 14px 32px rgba(76,98,23,0.12)",
        }}
      />

      {layers.map((layer) => (
        <img
          key={layer.id}
          src={layer.image}
          alt={`${layer.label} soil stage`}
          style={{
            position: "absolute",
            inset: "2% -3% 5%",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: layer.opacity,
            transition: "opacity 240ms ease-out",
            pointerEvents: "none",
            filter: "drop-shadow(0 20px 32px rgba(72,56,35,0.16))",
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          left: 22,
          right: 22,
          bottom: 18,
          display: "grid",
          gridTemplateColumns: compact ? "1fr" : "minmax(0, 1fr) auto",
          gap: compact ? 10 : 12,
          alignItems: compact ? "start" : "end",
          zIndex: 2,
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontFamily: "'Bebas Neue', Arial, sans-serif",
              fontSize: "clamp(30px, 4.2vw, 46px)",
              lineHeight: 0.92,
              color: currentStage.accent,
              marginBottom: 8,
              textTransform: "uppercase",
            }}
          >
            Soil
            <br />
            Condition
          </div>
          <div
            style={{
              fontSize: 14,
              color: C.textSec,
              lineHeight: 1.6,
              maxWidth: compact ? "100%" : 360,
            }}
          >
            {currentStage.subtitle}.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: compact ? "flex-start" : "flex-end",
          }}
        >
          {currentStage.highlights.map((highlight) => (
            <div
              key={highlight}
              style={{
                padding: "7px 10px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.82)",
                fontSize: 11,
                color: C.textSec,
                boxShadow: "0 6px 14px rgba(38, 52, 12, 0.08)",
                whiteSpace: "nowrap",
              }}
            >
              {highlight}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SOMReadout({ intro = null }) {
  const [som, setSom] = useState(1);
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window === "undefined" ? 1280 : window.innerWidth,
  );

  useEffect(() => {
    const syncViewportWidth = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", syncViewportWidth);

    return () => {
      window.removeEventListener("resize", syncViewportWidth);
    };
  }, []);

  const isNarrow = viewportWidth <= 960;
  const isPhone = viewportWidth <= 560;

  const currentStage = getCurrentStage(som);
  const waterGal = som * 20000;
  const carbonTons = som * 5.8;
  const co2eTons = carbonTons * 3.67;
  const infiltration = 100 + (som - 1) * 35;
  const microbialBiomass = 100 + (som - 1) * 30;

  const snapshots = [
    {
      label: "Water buffered",
      value: `${(waterGal / 1000).toFixed(0)}K gal`,
      note: "per acre at this SOM level",
      color: "#5a8c1e",
    },
    {
      label: "Carbon stored",
      value: `${carbonTons.toFixed(1)} tons C`,
      note: "living belowground capital",
      color: "#8B5E3C",
    },
    {
      label: "Climate impact",
      value: `${co2eTons.toFixed(1)} tons CO2e`,
      note: "atmospheric drawdown equivalent",
      color: "#c0392b",
    },
  ];

  const summaryStats = [
    { label: "Water", value: `${(waterGal / 1000).toFixed(0)}K`, sub: "held per acre", borderColor: "#5a8c1e" },
    { label: "Carbon", value: carbonTons.toFixed(0), sub: "tons C per acre", borderColor: "#8B5E3C" },
    { label: "Drawdown", value: co2eTons.toFixed(0), sub: "tons CO2e per acre", borderColor: "#c0392b" },
  ];

  const baselineCards = [
    {
      label: "Infiltration Rate",
      value: `${infiltration.toFixed(0)}%`,
      sub: "of degraded baseline",
      accent: "linear-gradient(90deg, #8B5E3C 0%, #5a8c1e 100%)",
    },
    {
      label: "Microbial Biomass",
      value: `~${microbialBiomass.toFixed(0)}%`,
      sub: "of degraded baseline",
      accent: "linear-gradient(90deg, #5a8c1e 0%, #6a9d2a 100%)",
    },
  ];

  return (
    <section className={`section section-evidence som-section${intro ? " som-section-with-intro" : ""}`}>
      <div className="container">
        {intro ? (
          <div className="som-section-intro">
            <span className="eyebrow">{intro.eyebrow}</span>
            <h2>{intro.title}</h2>
            <p>{intro.text}</p>
          </div>
        ) : null}

        <div
          className="som-readout-shell"
          style={{
            maxWidth: 1260,
            margin: "0 auto",
            padding: 22,
            background:
              "linear-gradient(145deg, rgba(8,35,29,0.98) 0%, rgba(15,54,45,0.96) 55%, rgba(8,29,25,0.98) 100%)",
            borderRadius: 8,
            border: "1px solid rgba(153,204,51,0.22)",
            boxShadow: "0 24px 70px rgba(7, 17, 15, 0.3)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="som-readout-header"
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 18,
              flexWrap: "wrap",
              marginBottom: 16,
            }}
          >
            <div style={{ flex: "1 1 520px" }}>
              <div
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: 3,
                  color: "#9ccc33",
                  marginBottom: 10,
                }}
              >
                Interactive Climate Readout
              </div>
              <div
                style={{
                  fontFamily: "'Bebas Neue', Arial, sans-serif",
                  fontSize: "clamp(44px, 5.6vw, 76px)",
                  lineHeight: 0.94,
                  color: "#fffdf8",
                  marginBottom: 8,
                  textShadow: "0 1px 0 rgba(0,0,0,0.18)",
                  maxWidth: 760,
                }}
              >
                Use the Slider.
                <br />
                <span style={{ color: C.green }}>Watch the System Shift.</span>
              </div>
              <div
                style={{
                  maxWidth: 640,
                  fontSize: 15,
                  color: "rgba(248,243,234,0.78)",
                  lineHeight: 1.65,
                }}
              >
                Drag upward to see how rebuilding soil carbon changes water buffering, infiltration, microbial life,
                and atmospheric drawdown in one live readout.
              </div>
            </div>

            <div
              className="som-impact-live"
              style={{
                padding: "11px 15px",
                borderRadius: 999,
                background: "rgba(255,253,247,0.08)",
                border: "1px solid rgba(153,204,51,0.25)",
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#dcedc2",
                whiteSpace: "nowrap",
                boxShadow: "0 10px 18px rgba(0, 0, 0, 0.12)",
              }}
            >
              Live readout
            </div>
          </div>

          <div
            className="som-readout-snapshots"
            style={{
              display: "grid",
              gridTemplateColumns: isNarrow ? "1fr" : "repeat(3, minmax(0, 1fr))",
              gap: 12,
              marginBottom: 18,
            }}
          >
            {snapshots.map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "14px 16px",
                  borderRadius: 8,
                  background: "linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(247,249,239,0.96) 100%)",
                  border: `1px solid ${hexToRgba(item.color, 0.18)}`,
                  boxShadow: "0 10px 20px rgba(45, 58, 16, 0.06)",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: 2.2,
                    color: item.color,
                    marginBottom: 8,
                    fontWeight: 700,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', Arial, sans-serif",
                    fontSize: "clamp(28px, 4vw, 40px)",
                    lineHeight: 0.95,
                    color: C.text,
                    marginBottom: 4,
                  }}
                >
                  {item.value}
                </div>
                <div style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.45 }}>{item.note}</div>
              </div>
            ))}
          </div>

          <div
            className="som-slider-wrap-live"
            style={{
              padding: "14px 16px 12px",
              marginBottom: 18,
              background: "linear-gradient(180deg, rgba(255,253,247,0.92) 0%, rgba(237,245,215,0.92) 100%)",
              border: "1px solid rgba(153,204,51,0.18)",
              borderRadius: 8,
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.72)",
            }}
          >
            <input
              aria-label="Soil organic matter slider"
              className="som-slider"
              type="range"
              min={0.5}
              max={6}
              step={0.1}
              value={som}
              onChange={(event) => setSom(Number(event.target.value))}
              style={{
                width: "100%",
                height: 10,
                appearance: "none",
                background: "linear-gradient(90deg, #c0392b 0%, #8B5E3C 22%, #567d22 52%, #6a9d2a 100%)",
                borderRadius: 999,
                outline: "none",
                cursor: "pointer",
                boxShadow: "inset 0 2px 6px rgba(0,0,0,0.08)",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: 10,
                color: C.textMuted,
                marginTop: 8,
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <span>0.5% (degraded)</span>
              <span>2% (typical farm)</span>
              <span>4%+ (regenerative)</span>
              <span>6% (virgin prairie)</span>
            </div>
          </div>

          <div
            className="som-readout-body"
            style={{
              display: "grid",
              gridTemplateColumns: isNarrow ? "1fr" : "minmax(0, 1.28fr) minmax(380px, 0.82fr)",
              gap: 20,
              alignItems: "stretch",
              marginBottom: 16,
            }}
          >
            <div style={{ minWidth: 0 }}>
              <SoilArtifact som={som} compact={isPhone} />
            </div>

            <div
              style={{
                minWidth: 0,
                padding: "20px 16px 16px",
                borderRadius: 8,
                background: "linear-gradient(160deg, rgba(255,255,255,0.88) 0%, rgba(241,247,227,0.96) 100%)",
                border: "1px solid rgba(106,157,42,0.18)",
                boxShadow: "0 16px 32px rgba(64, 88, 19, 0.1)",
                display: "flex",
                flexDirection: "column",
                minHeight: isPhone ? 360 : 468,
                boxSizing: "border-box",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(circle at 86% 12%, rgba(106,157,42,0.12) 0%, rgba(106,157,42,0) 34%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "relative",
                  fontSize: 10,
                  letterSpacing: 2.2,
                  textTransform: "uppercase",
                  color: C.textMuted,
                  marginBottom: 14,
                }}
              >
                Climate Impact Snapshot
              </div>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  minHeight: 154,
                  marginBottom: 6,
                  paddingLeft: 8,
                  paddingTop: 8,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    fontFamily: "'Bebas Neue', Arial, sans-serif",
                    fontSize: "clamp(84px, 12vw, 150px)",
                    lineHeight: 0.84,
                    background: "linear-gradient(135deg, #8B5E3C 0%, #3a7010 40%, #6a9d2a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: 4,
                    transform: "translate(-4px, 4px)",
                  }}
                >
                  {som.toFixed(1)}%
                </div>
                <div style={{ position: "relative", fontSize: 15, color: C.textSec, marginBottom: 2 }}>
                  Soil Organic Matter
                </div>
                <div
                  style={{
                    position: "relative",
                    fontSize: 12.5,
                    color: C.textSec,
                    lineHeight: 1.5,
                    maxWidth: 300,
                  }}
                >
                  More SOM means more stored carbon, more water buffering, and a stronger on-farm climate defense.
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: isPhone ? "1fr" : `repeat(${summaryStats.length}, minmax(0, 1fr))`,
                  gap: 10,
                  marginTop: "auto",
                  alignItems: "stretch",
                }}
              >
                {summaryStats.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: "16px 10px 14px",
                      borderRadius: 8,
                      background: "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(250,251,245,0.9) 100%)",
                      border: "1px solid rgba(106,157,42,0.08)",
                      boxShadow: "0 12px 18px rgba(32, 45, 12, 0.05)",
                      position: "relative",
                      overflow: "hidden",
                      minHeight: 132,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: 4,
                        background: item.borderColor,
                      }}
                    />
                    <div
                      style={{
                        fontSize: 10,
                        textTransform: "uppercase",
                        letterSpacing: 1.8,
                        color: C.textMuted,
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Bebas Neue', Arial, sans-serif",
                        fontSize: "clamp(38px, 4.4vw, 50px)",
                        color: C.green,
                        lineHeight: 0.92,
                      }}
                    >
                      {item.value}
                    </div>
                    <div
                      style={{
                        fontSize: 11.5,
                        color: C.textMuted,
                        lineHeight: 1.3,
                        maxWidth: 96,
                        minHeight: 28,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="som-readout-baselines"
            style={{
              display: "grid",
              gridTemplateColumns: isPhone ? "1fr" : "repeat(2, minmax(0, 1fr))",
              gap: 12,
            }}
          >
            {baselineCards.map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "18px 18px 16px",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(249,251,243,0.96) 100%)",
                  borderRadius: 8,
                  border: `1px solid ${C.border}`,
                  boxShadow: "0 12px 18px rgba(32, 45, 12, 0.05)",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: 4,
                    background: item.accent,
                  }}
                />
                <div
                  style={{
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: 2.2,
                    color: C.textMuted,
                    marginBottom: 10,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', Arial, sans-serif",
                    fontSize: 38,
                    lineHeight: 0.92,
                    color: C.green,
                    marginBottom: 4,
                  }}
                >
                  {item.value}
                </div>
                <div style={{ fontSize: 12, color: C.textMuted }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SOMReadout;
