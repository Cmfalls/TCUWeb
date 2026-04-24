import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const pillarMeta = [
  { unit: "Carbon in motion", factor: 0.95 },
  { unit: "Water retention", factor: 1 },
  { unit: "Evidence strength", factor: 0.9 },
];

const clampPercent = (value) => Math.max(0, Math.min(100, value));

function DegradedLandscape() {
  return (
    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="degraded-sky" cx="50%" cy="100%" r="100%">
          <stop offset="0%" stopColor="#3a2a18" />
          <stop offset="100%" stopColor="#0f0d0a" />
        </radialGradient>
        <radialGradient id="sun-haze" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c87a20" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#c87a20" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="degraded-soil-grad" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#5c3d1a" />
          <stop offset="100%" stopColor="#2a1a08" />
        </radialGradient>
      </defs>

      {/* Sky */}
      <rect width="800" height="170" fill="url(#degraded-sky)" />

      {/* Haze layer at horizon */}
      <rect x="0" y="130" width="800" height="40" fill="#5c3820" opacity="0.3" />

      {/* Sun — dim, orange, low */}
      <circle cx="620" cy="90" r="55" fill="#c87a20" opacity="0.08" />
      <circle cx="620" cy="90" r="38" fill="#c87a20" opacity="0.12" />
      <circle cx="620" cy="90" r="22" fill="#d4882a" opacity="0.55" />
      <circle cx="620" cy="90" r="14" fill="#e09a30" opacity="0.7" />

      {/* Dust particles */}
      {[[80,60],[160,45],[250,80],[400,55],[520,70],[700,40],[140,100],[350,95],[600,105]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r={i%3===0?2:1} fill="#9a7040" opacity="0.4" />
      ))}

      {/* Dead stumps / bare sticks */}
      <line x1="90" y1="170" x2="88" y2="125" stroke="#3a2a12" strokeWidth="6" strokeLinecap="round" />
      <line x1="88" y1="125" x2="72" y2="108" stroke="#3a2a12" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="88" y1="135" x2="104" y2="118" stroke="#3a2a12" strokeWidth="3" strokeLinecap="round" />

      <line x1="320" y1="170" x2="318" y2="138" stroke="#3a2a12" strokeWidth="5" strokeLinecap="round" />
      <line x1="318" y1="138" x2="300" y2="120" stroke="#3a2a12" strokeWidth="3" strokeLinecap="round" />
      <line x1="318" y1="148" x2="334" y2="132" stroke="#3a2a12" strokeWidth="2.5" strokeLinecap="round" />

      <line x1="560" y1="170" x2="558" y2="118" stroke="#3a2a12" strokeWidth="6.5" strokeLinecap="round" />
      <line x1="558" y1="118" x2="538" y2="98" stroke="#3a2a12" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="558" y1="130" x2="578" y2="112" stroke="#3a2a12" strokeWidth="3" strokeLinecap="round" />
      <line x1="558" y1="118" x2="572" y2="102" stroke="#3a2a12" strokeWidth="2" strokeLinecap="round" />

      <line x1="720" y1="170" x2="718" y2="145" stroke="#3a2a12" strokeWidth="4" strokeLinecap="round" />
      <line x1="718" y1="145" x2="706" y2="132" stroke="#3a2a12" strokeWidth="2.5" strokeLinecap="round" />

      {/* Ground */}
      <rect x="0" y="170" width="800" height="230" fill="url(#degraded-soil-grad)" />

      {/* Surface texture band */}
      <rect x="0" y="170" width="800" height="12" fill="#6b4520" opacity="0.6" />

      {/* Erosion channels */}
      <path d="M 0 185 Q 100 182 200 188 Q 300 192 400 187 Q 500 183 600 189 Q 700 193 800 186" stroke="#1e1008" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M 0 220 Q 120 216 240 222 Q 360 228 480 221 Q 600 215 720 223 Q 760 226 800 222" stroke="#1e1008" strokeWidth="1.5" fill="none" opacity="0.4" />

      {/* Main crack network */}
      <g stroke="#1a0c04" strokeWidth="2" fill="none" opacity="0.9">
        <path d="M 30 185 L 55 205 L 45 235 L 70 265 L 55 300" />
        <path d="M 55 205 L 80 198" />
        <path d="M 45 235 L 20 248" />

        <path d="M 180 178 L 200 200 L 190 228 L 215 258 L 200 295" />
        <path d="M 200 200 L 230 192" />
        <path d="M 190 228 L 162 240" />
        <path d="M 215 258 L 238 248" />

        <path d="M 360 182 L 380 206 L 368 238 L 392 270" />
        <path d="M 380 206 L 408 197" />
        <path d="M 368 238 L 342 252" />

        <path d="M 490 175 L 512 198 L 498 232 L 525 262 L 510 300" />
        <path d="M 512 198 L 542 188" />
        <path d="M 498 232 L 470 245" />
        <path d="M 525 262 L 550 252" />

        <path d="M 640 185 L 658 208 L 645 240" />
        <path d="M 658 208 L 685 198" />
        <path d="M 645 240 L 618 254" />

        <path d="M 740 178 L 760 202 L 748 235 L 772 268" />
        <path d="M 760 202 L 788 192" />
      </g>

      {/* Lighter crack highlights */}
      <g stroke="#7a5030" strokeWidth="0.8" fill="none" opacity="0.35">
        <path d="M 100 195 L 118 215 L 108 245" />
        <path d="M 270 188 L 290 210 L 278 242 L 302 272" />
        <path d="M 430 195 L 448 218 L 436 250" />
        <path d="M 590 188 L 610 212 L 598 245 L 622 278" />
        <path d="M 690 230 L 710 252 L 698 282" />
      </g>

      {/* Dry rock/clod shapes */}
      <ellipse cx="150" cy="173" rx="18" ry="5" fill="#4a2e10" opacity="0.7" />
      <ellipse cx="420" cy="172" rx="22" ry="5" fill="#4a2e10" opacity="0.6" />
      <ellipse cx="670" cy="174" rx="14" ry="4" fill="#4a2e10" opacity="0.65" />
    </svg>
  );
}

function LivingLandscape() {
  const grass = useMemo(
    () =>
      Array.from({ length: 52 }, (_, i) => {
        const x = 8 + i * 15.2;
        const heights = [138, 132, 128, 134, 125, 130, 122, 136, 128, 133, 126, 130];
        return { x, y2: heights[i % heights.length], lean: (i % 3 === 0 ? 3 : i % 3 === 1 ? -2 : 1) };
      }),
    [],
  );

  return (
    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="living-sky" cx="30%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#0d3d2e" />
          <stop offset="100%" stopColor="#061a12" />
        </radialGradient>
        <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c8f040" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#c8f040" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="soil-living" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#2a4a1a" />
          <stop offset="60%" stopColor="#1a3010" />
          <stop offset="100%" stopColor="#0d1e08" />
        </radialGradient>
        <radialGradient id="moisture-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5aff80" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#5aff80" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sky */}
      <rect width="800" height="170" fill="url(#living-sky)" />

      {/* Sun glow halo */}
      <circle cx="680" cy="72" r="72" fill="url(#sun-glow)" />
      {/* Sun rays */}
      <g stroke="#b8e040" strokeWidth="1.5" opacity="0.3" strokeLinecap="round">
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg) => {
          const r = Math.PI * deg / 180;
          return <line key={deg} x1={680 + Math.cos(r)*28} y1={72 + Math.sin(r)*28} x2={680 + Math.cos(r)*50} y2={72 + Math.sin(r)*50} />;
        })}
      </g>
      <circle cx="680" cy="72" r="22" fill="#b8e655" opacity="0.9" />
      <circle cx="680" cy="72" r="16" fill="#ccf060" opacity="1" />

      {/* Birds */}
      <g stroke="#6aaa30" strokeWidth="1.2" fill="none" opacity="0.6" strokeLinecap="round">
        <path d="M 160 55 Q 168 49 176 55" />
        <path d="M 178 60 Q 186 54 194 60" />
        <path d="M 220 42 Q 228 36 236 42" />
        <path d="M 440 65 Q 448 59 456 65" />
        <path d="M 460 58 Q 468 52 476 58" />
      </g>

      {/* Tall tree — left */}
      <line x1="110" y1="170" x2="110" y2="60" stroke="#1c3a10" strokeWidth="9" strokeLinecap="round" />
      <ellipse cx="110" cy="85" rx="38" ry="42" fill="#2a5c18" />
      <ellipse cx="110" cy="72" rx="30" ry="34" fill="#3a7020" />
      <ellipse cx="110" cy="62" rx="20" ry="24" fill="#4a8228" />
      <ellipse cx="105" cy="58" rx="14" ry="17" fill="#5a9a30" />

      {/* Medium tree — center-left */}
      <line x1="295" y1="170" x2="295" y2="90" stroke="#1c3a10" strokeWidth="7" strokeLinecap="round" />
      <ellipse cx="295" cy="112" rx="30" ry="34" fill="#255218" />
      <ellipse cx="295" cy="100" rx="24" ry="28" fill="#336620" />
      <ellipse cx="295" cy="92" rx="17" ry="20" fill="#448030" />

      {/* Tall tree — center-right */}
      <line x1="490" y1="170" x2="490" y2="45" stroke="#1c3a10" strokeWidth="11" strokeLinecap="round" />
      <ellipse cx="490" cy="75" rx="46" ry="50" fill="#285818" />
      <ellipse cx="490" cy="60" rx="37" ry="40" fill="#366a20" />
      <ellipse cx="490" cy="48" rx="26" ry="30" fill="#468030" />
      <ellipse cx="488" cy="40" rx="18" ry="22" fill="#58963a" />

      {/* Small shrub — right */}
      <line x1="660" y1="170" x2="660" y2="130" stroke="#1c3a10" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="660" cy="142" rx="22" ry="20" fill="#2a5218" />
      <ellipse cx="660" cy="134" rx="17" ry="15" fill="#3a6824" />

      {/* Ground + topsoil band */}
      <rect x="0" y="170" width="800" height="230" fill="url(#soil-living)" />
      <rect x="0" y="170" width="800" height="18" fill="#3a6020" opacity="0.9" />

      {/* Dense grass */}
      <g stroke="#7acc30" strokeWidth="1.4" fill="none" strokeLinecap="round">
        {grass.map((blade) => (
          <line key={blade.x} x1={blade.x} y1="170" x2={blade.x + blade.lean} y2={blade.y2} />
        ))}
      </g>
      {/* Brighter grass tips */}
      <g stroke="#a0e040" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6">
        {grass.filter((_, i) => i % 3 === 0).map((blade) => (
          <line key={blade.x} x1={blade.x} y1="170" x2={blade.x + blade.lean + 1} y2={blade.y2 - 4} />
        ))}
      </g>

      {/* Root networks */}
      <g stroke="#5aaa28" strokeWidth="1.2" fill="none" opacity="0.45" strokeLinecap="round">
        {/* Tree 1 roots */}
        <path d="M 110 170 Q 100 195 78 215 Q 60 235 45 260" />
        <path d="M 110 170 Q 120 200 138 225 Q 155 248 165 278" />
        <path d="M 110 175 Q 90 210 75 240" />
        <path d="M 110 175 Q 130 215 148 248" />
        <path d="M 78 215 Q 60 225 42 220" />
        <path d="M 138 225 Q 160 235 178 228" />

        {/* Tree 2 roots */}
        <path d="M 295 170 Q 278 198 255 222 Q 238 242 220 268" />
        <path d="M 295 170 Q 312 200 332 228 Q 348 252 360 280" />
        <path d="M 295 175 Q 272 215 250 245" />
        <path d="M 295 175 Q 318 218 340 252" />

        {/* Tree 3 roots */}
        <path d="M 490 170 Q 468 200 440 228 Q 415 255 398 285" />
        <path d="M 490 170 Q 515 202 540 232 Q 562 258 578 290" />
        <path d="M 490 175 Q 460 218 435 255" />
        <path d="M 490 175 Q 522 220 548 258" />
        <path d="M 440 228 Q 415 240 395 235" />
        <path d="M 540 232 Q 565 245 585 238" />
        <path d="M 490 195 Q 470 235 448 268 Q 430 298 420 325" />
        <path d="M 490 195 Q 510 238 530 272 Q 548 302 558 330" />
      </g>

      {/* Moisture dots through soil */}
      <g fill="#6adb50" opacity="0.5">
        {[[70,210],[130,240],[190,265],[250,295],[310,225],[370,255],[430,285],[500,215],[550,248],[610,278],[670,222],[730,258],[80,310],[200,330],[340,318],[460,338],[590,322],[720,308]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r={i%4===0?2.5:1.5} />
        ))}
      </g>

      {/* Moisture glow pockets */}
      <circle cx="200" cy="280" r="40" fill="url(#moisture-glow)" />
      <circle cx="490" cy="310" r="55" fill="url(#moisture-glow)" />
      <circle cx="720" cy="270" r="35" fill="url(#moisture-glow)" />

      {/* Soil organic layer line */}
      <path d="M 0 230 Q 80 226 160 232 Q 240 238 320 230 Q 400 222 480 230 Q 560 238 640 228 Q 720 220 800 228" stroke="#4a8a20" strokeWidth="1.5" fill="none" opacity="0.35" strokeDasharray="6 4" />
    </svg>
  );
}

function LivingSystemsInteractive({ items }) {
  const compareRef = useRef(null);
  const draggingRef = useRef(false);
  const interactedRef = useRef(false);
  const rafRef = useRef(null);
  const timerRef = useRef(null);
  const [position, setPosition] = useState(50);

  const livingScore = 100 - position;
  const lit = livingScore > 55;

  const updatePosition = useCallback((pct) => {
    setPosition(clampPercent(pct));
  }, []);

  const updateFromClientX = useCallback(
    (clientX) => {
      const rect = compareRef.current?.getBoundingClientRect();
      if (!rect?.width) return;
      updatePosition(((clientX - rect.left) / rect.width) * 100);
    },
    [updatePosition],
  );

  const stopDemo = useCallback(() => {
    interactedRef.current = true;
    if (timerRef.current) window.clearTimeout(timerRef.current);
    if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
  }, []);

  const handlePointerDown = useCallback(
    (event) => {
      stopDemo();
      draggingRef.current = true;
      event.currentTarget.setPointerCapture?.(event.pointerId);
      updateFromClientX(event.clientX);
    },
    [stopDemo, updateFromClientX],
  );

  const handlePointerMove = useCallback(
    (event) => {
      if (draggingRef.current) updateFromClientX(event.clientX);
    },
    [updateFromClientX],
  );

  const handlePointerUp = useCallback((event) => {
    draggingRef.current = false;
    event.currentTarget.releasePointerCapture?.(event.pointerId);
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      const step = event.shiftKey ? 10 : 5;
      if (event.key === "ArrowLeft") {
        stopDemo();
        event.preventDefault();
        updatePosition(position - step);
      }
      if (event.key === "ArrowRight") {
        stopDemo();
        event.preventDefault();
        updatePosition(position + step);
      }
      if (event.key === "Home") {
        stopDemo();
        event.preventDefault();
        updatePosition(0);
      }
      if (event.key === "End") {
        stopDemo();
        event.preventDefault();
        updatePosition(100);
      }
    },
    [position, stopDemo, updatePosition],
  );

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    timerRef.current = window.setTimeout(() => {
      if (interactedRef.current) return;
      const start = performance.now();

      const animate = (now) => {
        if (interactedRef.current) return;
        const progress = Math.min((now - start) / 3000, 1);
        let pct;

        if (progress < 0.33) pct = 50 + (progress / 0.33) * 35;
        else if (progress < 0.66) pct = 85 - ((progress - 0.33) / 0.33) * 70;
        else pct = 15 + ((progress - 0.66) / 0.34) * 35;

        updatePosition(progress >= 1 ? 50 : pct);
        if (progress < 1) rafRef.current = window.requestAnimationFrame(animate);
      };

      rafRef.current = window.requestAnimationFrame(animate);
    }, 600);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [updatePosition]);

  return (
    <section className="living-systems-interactive-section" aria-labelledby="living-systems-title">
      <div className="container living-systems-shell">
        <div className="living-systems-heading">
          <span className="eyebrow">Living systems</span>
          <h2 id="living-systems-title">Biological repair changes water, resilience, and land behavior along with carbon.</h2>
          <p>
            Repair matters because living systems do more than draw down carbon. They change how land holds water, how farms absorb stress,
            and whether regenerative claims hold up under real scrutiny.
          </p>
        </div>

        <div
          ref={compareRef}
          className="living-compare"
          role="slider"
          tabIndex={0}
          aria-label="Compare degraded and living landscapes"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(livingScore)} percent living system view`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
        >
          <div className="living-compare-side living-compare-left">
            <DegradedLandscape />
          </div>
          <div className="living-compare-side living-compare-right" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
            <LivingLandscape />
          </div>

          <div className="living-compare-label left">Degraded</div>
          <div className="living-compare-label right">Living</div>
          <div className="living-compare-line" style={{ left: `${position}%` }} />
          <div className="living-compare-handle" style={{ left: `${position}%` }} />
        </div>

        <div className="living-compare-hint">Drag to compare</div>

        <div className="living-system-pillars">
          {items.map((item, index) => {
            const meta = pillarMeta[index] || pillarMeta[0];
            const value = Math.round(livingScore * meta.factor);

            return (
              <article key={item.title} className={`living-system-pillar${lit ? " lit" : ""}`}>
                <div className="living-pillar-meter">
                  <span className="living-pillar-num">{value}%</span>
                  <span className="living-pillar-unit">{meta.unit}</span>
                </div>
                <div className="living-pillar-bar" aria-hidden="true">
                  <div className="living-pillar-bar-fill" style={{ transform: `scaleX(${value / 100})` }} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LivingSystemsInteractive;
