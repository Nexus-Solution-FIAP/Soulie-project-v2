import { useSoulie, type SoulieMood } from '../context/SoulieContext';
import { MOOD_ANIMATIONS, PLANT_FILTERS, SOULIE_MOOD_LABELS } from '../constants/soulie';

interface SoulieProps {
  size?: number;
  showMoodLabel?: boolean;
}

function Eyes({ mood, cx, cy, r }: { mood: SoulieMood; cx: number; cy: number; r: number }) {
  const leftX = cx - r * 0.35;
  const rightX = cx + r * 0.35;
  const eyeY = cy - r * 0.1;

  if (mood === 'wilted') {
    return (
      <g className="soulie-eyes">
        <line x1={leftX - 4} y1={eyeY} x2={leftX + 4} y2={eyeY} stroke="#5a4a3a" strokeWidth="2" strokeLinecap="round" />
        <line x1={rightX - 4} y1={eyeY} x2={rightX + 4} y2={eyeY} stroke="#5a4a3a" strokeWidth="2" strokeLinecap="round" />
      </g>
    );
  }

  if (mood === 'sad') {
    return (
      <g className="soulie-eyes">
        <ellipse cx={leftX} cy={eyeY} rx={3.5} ry={4.5} fill="#2d2215" />
        <ellipse cx={rightX} cy={eyeY} rx={3.5} ry={4.5} fill="#2d2215" />
        {/* Tear */}
        <ellipse cx={rightX + 4} cy={eyeY + 7} rx={2} ry={3} fill="#60a5fa" opacity={0.7} />
        {/* Sad eyebrows */}
        <line x1={leftX - 5} y1={eyeY - 7} x2={leftX + 3} y2={eyeY - 9} stroke="#2d2215" strokeWidth="1.5" strokeLinecap="round" />
        <line x1={rightX + 5} y1={eyeY - 7} x2={rightX - 3} y2={eyeY - 9} stroke="#2d2215" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    );
  }

  if (mood === 'excited') {
    return (
      <g className="soulie-eyes">
        <text x={leftX} y={eyeY + 4} textAnchor="middle" fontSize="12" fill="#fbbf24">★</text>
        <text x={rightX} y={eyeY + 4} textAnchor="middle" fontSize="12" fill="#fbbf24">★</text>
      </g>
    );
  }

  return (
    <g className="soulie-eyes">
      <circle cx={leftX} cy={eyeY} r={4} fill="#2d2215" />
      <circle cx={rightX} cy={eyeY} r={4} fill="#2d2215" />
      <circle cx={leftX + 1.5} cy={eyeY - 1.5} r={1.5} fill="white" opacity={0.9} />
      <circle cx={rightX + 1.5} cy={eyeY - 1.5} r={1.5} fill="white" opacity={0.9} />
    </g>
  );
}

function Mouth({ mood, cx, cy, r }: { mood: SoulieMood; cx: number; cy: number; r: number }) {
  const mouthY = cy + r * 0.25;

  if (mood === 'wilted') {
    return (
      <path
        d={`M ${cx - 5} ${mouthY + 3} Q ${cx} ${mouthY - 2} ${cx + 5} ${mouthY + 3}`}
        fill="none" stroke="#5a4a3a" strokeWidth="1.5" strokeLinecap="round"
      />
    );
  }

  if (mood === 'sad') {
    return (
      <path
        d={`M ${cx - 7} ${mouthY + 4} Q ${cx} ${mouthY - 3} ${cx + 7} ${mouthY + 4}`}
        fill="none" stroke="#2d2215" strokeWidth="2" strokeLinecap="round"
      />
    );
  }

  if (mood === 'excited') {
    return (
      <g>
        <path
          d={`M ${cx - 8} ${mouthY - 2} Q ${cx} ${mouthY + 12} ${cx + 8} ${mouthY - 2}`}
          fill="#2d2215" stroke="#2d2215" strokeWidth="1"
        />
        <ellipse cx={cx} cy={mouthY + 5} rx={4} ry={3} fill="#f87171" />
      </g>
    );
  }

  return (
    <path
      d={`M ${cx - 7} ${mouthY} Q ${cx} ${mouthY + 8} ${cx + 7} ${mouthY}`}
      fill="none" stroke="#2d2215" strokeWidth="2" strokeLinecap="round"
    />
  );
}

function Blush({ cx, cy, r, mood }: { cx: number; cy: number; r: number; mood: SoulieMood }) {
  if (mood === 'wilted' || mood === 'sad') return null;
  const leftX = cx - r * 0.55;
  const rightX = cx + r * 0.55;
  const blushY = cy + r * 0.1;

  return (
    <g>
      <ellipse cx={leftX} cy={blushY} rx={5} ry={3} fill="#f9a8d4" opacity={0.4} />
      <ellipse cx={rightX} cy={blushY} rx={5} ry={3} fill="#f9a8d4" opacity={0.4} />
    </g>
  );
}

function SeedStage({ mood, size }: { mood: SoulieMood; size: number }) {
  const cx = size / 2;
  const cy = size / 2 + 10;
  const r = size * 0.18;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <ellipse cx={cx} cy={cy + r + 8} rx={r * 1.8} ry={6} fill="#5c3d2e" opacity={0.6} />

      <ellipse cx={cx} cy={cy} rx={r} ry={r * 1.15} fill="#a0714f" />
      <ellipse cx={cx - 2} cy={cy - 2} rx={r * 0.7} ry={r * 0.85} fill="#c49b6a" opacity={0.5} />

      <path
        d={`M ${cx} ${cy - r * 1.1} Q ${cx + 6} ${cy - r * 1.8} ${cx + 2} ${cy - r * 2.2}`}
        fill="none" stroke="#6bbd6b" strokeWidth="2" strokeLinecap="round"
      />
      <ellipse cx={cx + 4} cy={cy - r * 2} rx={4} ry={3} fill="#6bbd6b" transform={`rotate(30 ${cx + 4} ${cy - r * 2})`} />

      <Eyes mood={mood} cx={cx} cy={cy} r={r} />
      <Mouth mood={mood} cx={cx} cy={cy} r={r} />
      <Blush cx={cx} cy={cy} r={r} mood={mood} />
    </svg>
  );
}

function SproutStage({ mood, size }: { mood: SoulieMood; size: number }) {
  const cx = size / 2;
  const baseY = size * 0.72;
  const headR = size * 0.16;
  const headY = size * 0.38;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <path d={`M ${cx - 28} ${baseY - 5} L ${cx - 22} ${baseY + 22} L ${cx + 22} ${baseY + 22} L ${cx + 28} ${baseY - 5} Z`} fill="#b45309" />
      <rect x={cx - 30} y={baseY - 10} width={60} height={8} rx={3} fill="#d97706" />

      <path
        d={`M ${cx} ${baseY - 5} Q ${cx - 3} ${headY + headR + 10} ${cx} ${headY + headR}`}
        fill="none" stroke="#4ade80" strokeWidth="4" strokeLinecap="round"
      />

      <path
        d={`M ${cx - 2} ${headY + headR + 20} Q ${cx - 25} ${headY + headR + 5} ${cx - 18} ${headY + headR + 25}`}
        fill="#22c55e" stroke="#16a34a" strokeWidth="1"
      />

      <path
        d={`M ${cx + 2} ${headY + headR + 30} Q ${cx + 25} ${headY + headR + 15} ${cx + 18} ${headY + headR + 35}`}
        fill="#22c55e" stroke="#16a34a" strokeWidth="1"
      />

      <circle cx={cx} cy={headY} r={headR} fill="#4ade80" />
      <circle cx={cx - 3} cy={headY - 3} r={headR * 0.7} fill="#86efac" opacity={0.4} />

      <Eyes mood={mood} cx={cx} cy={headY} r={headR} />
      <Mouth mood={mood} cx={cx} cy={headY} r={headR} />
      <Blush cx={cx} cy={headY} r={headR} mood={mood} />
    </svg>
  );
}

function SeedlingStage({ mood, size }: { mood: SoulieMood; size: number }) {
  const cx = size / 2;
  const baseY = size * 0.72;
  const headR = size * 0.17;
  const headY = size * 0.34;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <path d={`M ${cx - 30} ${baseY - 5} L ${cx - 24} ${baseY + 25} L ${cx + 24} ${baseY + 25} L ${cx + 30} ${baseY - 5} Z`} fill="#b45309" />
      <rect x={cx - 32} y={baseY - 10} width={64} height={8} rx={3} fill="#d97706" />
      <circle cx={cx} cy={baseY + 8} r={5} fill="none" stroke="#fbbf24" strokeWidth="1.5" opacity={0.5} />

      <path
        d={`M ${cx} ${baseY - 5} C ${cx - 4} ${baseY - 30} ${cx + 4} ${headY + headR + 20} ${cx} ${headY + headR}`}
        fill="none" stroke="#22c55e" strokeWidth="5" strokeLinecap="round"
      />

      <path d={`M ${cx - 3} ${headY + headR + 25} Q ${cx - 30} ${headY + headR + 5} ${cx - 22} ${headY + headR + 28}`} fill="#22c55e" stroke="#16a34a" strokeWidth="1" />
      <path d={`M ${cx + 3} ${headY + headR + 15} Q ${cx + 30} ${headY + headR - 5} ${cx + 22} ${headY + headR + 18}`} fill="#22c55e" stroke="#16a34a" strokeWidth="1" />
      <path d={`M ${cx - 2} ${headY + headR + 38} Q ${cx - 22} ${headY + headR + 30} ${cx - 16} ${headY + headR + 42}`} fill="#16a34a" stroke="#15803d" strokeWidth="1" />
      <path d={`M ${cx + 2} ${headY + headR + 35} Q ${cx + 22} ${headY + headR + 28} ${cx + 16} ${headY + headR + 40}`} fill="#16a34a" stroke="#15803d" strokeWidth="1" />

      <circle cx={cx} cy={headY} r={headR} fill="#22c55e" />
      <circle cx={cx - 4} cy={headY - 4} r={headR * 0.6} fill="#4ade80" opacity={0.4} />

      <ellipse cx={cx - 10} cy={headY - headR - 2} rx={8} ry={5} fill="#16a34a" transform={`rotate(-30 ${cx - 10} ${headY - headR - 2})`} />
      <ellipse cx={cx + 10} cy={headY - headR - 2} rx={8} ry={5} fill="#16a34a" transform={`rotate(30 ${cx + 10} ${headY - headR - 2})`} />

      <Eyes mood={mood} cx={cx} cy={headY} r={headR} />
      <Mouth mood={mood} cx={cx} cy={headY} r={headR} />
      <Blush cx={cx} cy={headY} r={headR} mood={mood} />
    </svg>
  );
}

function BushStage({ mood, size }: { mood: SoulieMood; size: number }) {
  const cx = size / 2;
  const baseY = size * 0.74;
  const headR = size * 0.18;
  const headY = size * 0.35;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <path d={`M ${cx - 32} ${baseY - 5} L ${cx - 26} ${baseY + 26} L ${cx + 26} ${baseY + 26} L ${cx + 32} ${baseY - 5} Z`} fill="#92400e" />
      <rect x={cx - 34} y={baseY - 10} width={68} height={9} rx={3} fill="#b45309" />
      <path d={`M ${cx - 12} ${baseY + 5} Q ${cx} ${baseY + 15} ${cx + 12} ${baseY + 5}`} fill="none" stroke="#d97706" strokeWidth="2" />

      <path
        d={`M ${cx} ${baseY - 5} C ${cx - 3} ${baseY - 25} ${cx + 3} ${headY + headR + 10} ${cx} ${headY + headR}`}
        fill="none" stroke="#15803d" strokeWidth="7" strokeLinecap="round"
      />

      <path d={`M ${cx - 3} ${headY + 30} C ${cx - 35} ${headY + 10} ${cx - 45} ${headY + 25} ${cx - 38} ${headY + 40}`} fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
      <path d={`M ${cx - 3} ${headY + 45} C ${cx - 30} ${headY + 35} ${cx - 38} ${headY + 45} ${cx - 30} ${headY + 55}`} fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />

      <path d={`M ${cx + 3} ${headY + 30} C ${cx + 35} ${headY + 10} ${cx + 45} ${headY + 25} ${cx + 38} ${headY + 40}`} fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
      <path d={`M ${cx + 3} ${headY + 45} C ${cx + 30} ${headY + 35} ${cx + 38} ${headY + 45} ${cx + 30} ${headY + 55}`} fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />

      {[-32, -26, -20].map((offset, i) => (
        <ellipse key={`lf${i}`} cx={cx + offset} cy={headY + 20 + i * 8} rx={4} ry={2.5} fill="#4ade80" transform={`rotate(-20 ${cx + offset} ${headY + 20 + i * 8})`} />
      ))}
      {[32, 26, 20].map((offset, i) => (
        <ellipse key={`rf${i}`} cx={cx + offset} cy={headY + 20 + i * 8} rx={4} ry={2.5} fill="#4ade80" transform={`rotate(20 ${cx + offset} ${headY + 20 + i * 8})`} />
      ))}

      <circle cx={cx} cy={headY} r={headR} fill="#16a34a" />
      <circle cx={cx - 4} cy={headY - 5} r={headR * 0.55} fill="#22c55e" opacity={0.4} />

      <ellipse cx={cx} cy={headY - headR - 4} rx={6} ry={9} fill="#15803d" />
      <ellipse cx={cx - 14} cy={headY - headR + 2} rx={5} ry={8} fill="#16a34a" transform={`rotate(-25 ${cx - 14} ${headY - headR + 2})`} />
      <ellipse cx={cx + 14} cy={headY - headR + 2} rx={5} ry={8} fill="#16a34a" transform={`rotate(25 ${cx + 14} ${headY - headR + 2})`} />

      <Eyes mood={mood} cx={cx} cy={headY} r={headR} />
      <Mouth mood={mood} cx={cx} cy={headY} r={headR} />
      <Blush cx={cx} cy={headY} r={headR} mood={mood} />
    </svg>
  );
}

// ─── STAGE 5: Pau-brasil ───
function PauBrasilStage({ mood, size }: { mood: SoulieMood; size: number }) {
  const cx = size / 2;
  const baseY = size * 0.78;
  const crownR = size * 0.26;
  const crownY = size * 0.3;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <ellipse cx={cx} cy={baseY + 5} rx={45} ry={8} fill="#15803d" opacity={0.3} />

      <path
        d={`M ${cx - 10} ${baseY} C ${cx - 12} ${baseY - 20} ${cx - 6} ${crownY + crownR} ${cx - 4} ${crownY + crownR - 5}
            L ${cx + 4} ${crownY + crownR - 5}
            C ${cx + 6} ${crownY + crownR} ${cx + 12} ${baseY - 20} ${cx + 10} ${baseY} Z`}
        fill="#7f1d1d"
      />
      <line x1={cx - 2} y1={crownY + crownR + 10} x2={cx - 3} y2={baseY - 10} stroke="#450a0a" strokeWidth="1" opacity={0.4} />
      <line x1={cx + 3} y1={crownY + crownR + 15} x2={cx + 2} y2={baseY - 5} stroke="#450a0a" strokeWidth="1" opacity={0.3} />

      <path d={`M ${cx - 10} ${baseY} Q ${cx - 20} ${baseY + 8} ${cx - 22} ${baseY + 4}`} fill="none" stroke="#7f1d1d" strokeWidth="4" strokeLinecap="round" />
      <path d={`M ${cx + 10} ${baseY} Q ${cx + 20} ${baseY + 8} ${cx + 22} ${baseY + 4}`} fill="none" stroke="#7f1d1d" strokeWidth="4" strokeLinecap="round" />

      <circle cx={cx - 20} cy={crownY + 8} r={crownR * 0.75} fill="#14532d" />
      <circle cx={cx + 20} cy={crownY + 8} r={crownR * 0.75} fill="#14532d" />
      <circle cx={cx} cy={crownY + 15} r={crownR * 0.8} fill="#166534" />
      <circle cx={cx} cy={crownY} r={crownR * 1.1} fill="#15803d" />
      <circle cx={cx - 15} cy={crownY - 10} r={crownR * 0.6} fill="#22c55e" opacity={0.4} />
      <circle cx={cx + 18} cy={crownY + 5} r={crownR * 0.4} fill="#4ade80" opacity={0.3} />
      <circle cx={cx - 18} cy={crownY - crownR * 0.5} r={crownR * 0.5} fill="#16a34a" />
      <circle cx={cx + 18} cy={crownY - crownR * 0.5} r={crownR * 0.5} fill="#16a34a" />
      <circle cx={cx} cy={crownY - crownR * 0.8} r={crownR * 0.45} fill="#22c55e" />

      <Eyes mood={mood} cx={cx} cy={crownY + 5} r={crownR * 0.6} />
      <Mouth mood={mood} cx={cx} cy={crownY + 5} r={crownR * 0.6} />
      <Blush cx={cx} cy={crownY + 5} r={crownR * 0.6} mood={mood} />
    </svg>
  );
}

// ─── STAGE 5: Samambaia ───
function SamambaiaStage({ mood, size }: { mood: SoulieMood; size: number }) {
  const cx = size / 2;
  const baseY = size * 0.8;
  const headR = size * 0.22;
  const headY = size * 0.45;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <ellipse cx={cx} cy={baseY + 5} rx={45} ry={8} fill="#15803d" opacity={0.3} />
      <path d={`M ${cx - 38} ${baseY - 5} L ${cx - 30} ${baseY + 28} L ${cx + 30} ${baseY + 28} L ${cx + 38} ${baseY - 5} Z`} fill="#78350f" />
      <rect x={cx - 40} y={baseY - 10} width={80} height={10} rx={4} fill="#92400e" />

      <path d={`M ${cx} ${baseY - 10} Q ${cx - 40} ${headY + 10} ${cx - 60} ${headY + 30}`} fill="none" stroke="#15803d" strokeWidth="6" strokeLinecap="round" />
      <path d={`M ${cx} ${baseY - 10} Q ${cx + 40} ${headY + 10} ${cx + 60} ${headY + 30}`} fill="none" stroke="#15803d" strokeWidth="6" strokeLinecap="round" />
      <path d={`M ${cx} ${baseY - 10} Q ${cx - 20} ${headY - 20} ${cx - 30} ${headY - 40}`} fill="none" stroke="#16a34a" strokeWidth="5" strokeLinecap="round" />
      <path d={`M ${cx} ${baseY - 10} Q ${cx + 20} ${headY - 20} ${cx + 30} ${headY - 40}`} fill="none" stroke="#16a34a" strokeWidth="5" strokeLinecap="round" />

      <circle cx={cx} cy={headY} r={headR * 1.2} fill="#22c55e" />
      <circle cx={cx - 10} cy={headY - 10} r={headR * 0.8} fill="#4ade80" opacity={0.4} />

      <circle cx={cx - 20} cy={headY + 15} r={headR * 0.6} fill="#16a34a" />
      <circle cx={cx + 20} cy={headY + 15} r={headR * 0.6} fill="#16a34a" />

      <Eyes mood={mood} cx={cx} cy={headY} r={headR} />
      <Mouth mood={mood} cx={cx} cy={headY} r={headR} />
      <Blush cx={cx} cy={headY} r={headR} mood={mood} />
    </svg>
  );
}

// ─── STAGE 5: Açaizeiro ───
function AcaizeiroStage({ mood, size }: { mood: SoulieMood; size: number }) {
  const cx = size / 2;
  const baseY = size * 0.8;
  const headY = size * 0.25;
  const headR = size * 0.2;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <ellipse cx={cx} cy={baseY + 5} rx={35} ry={6} fill="#15803d" opacity={0.3} />

      <path d={`M ${cx - 6} ${baseY} Q ${cx - 2} ${size * 0.5} ${cx - 4} ${headY} L ${cx + 4} ${headY} Q ${cx + 2} ${size * 0.5} ${cx + 6} ${baseY} Z`} fill="#a16207" />
      <path d={`M ${cx - 5} ${baseY} Q ${cx - 2} ${size * 0.5} ${cx - 3} ${headY}`} fill="none" stroke="#713f12" strokeWidth="1.5" />
      <path d={`M ${cx + 5} ${baseY} Q ${cx + 2} ${size * 0.5} ${cx + 3} ${headY}`} fill="none" stroke="#713f12" strokeWidth="1.5" />

      <path d={`M ${cx} ${headY + 10} Q ${cx - 40} ${headY - 10} ${cx - 50} ${headY + 30}`} fill="none" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
      <path d={`M ${cx} ${headY + 10} Q ${cx + 40} ${headY - 10} ${cx + 50} ${headY + 30}`} fill="none" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
      <path d={`M ${cx} ${headY + 10} Q ${cx - 30} ${headY - 30} ${cx - 40} ${headY - 10}`} fill="none" stroke="#16a34a" strokeWidth="5" strokeLinecap="round" />
      <path d={`M ${cx} ${headY + 10} Q ${cx + 30} ${headY - 30} ${cx + 40} ${headY - 10}`} fill="none" stroke="#16a34a" strokeWidth="5" strokeLinecap="round" />
      <path d={`M ${cx} ${headY + 10} Q ${cx} ${headY - 40} ${cx - 10} ${headY - 50}`} fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" />
      <path d={`M ${cx} ${headY + 10} Q ${cx} ${headY - 40} ${cx + 10} ${headY - 50}`} fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" />

      <circle cx={cx - 12} cy={headY + 25} r={3} fill="#4c1d95" />
      <circle cx={cx - 8} cy={headY + 28} r={3} fill="#3b0764" />
      <circle cx={cx - 15} cy={headY + 28} r={3} fill="#581c87" />
      <circle cx={cx - 10} cy={headY + 32} r={3} fill="#4c1d95" />

      <circle cx={cx + 12} cy={headY + 23} r={3} fill="#4c1d95" />
      <circle cx={cx + 8} cy={headY + 26} r={3} fill="#3b0764" />
      <circle cx={cx + 15} cy={headY + 26} r={3} fill="#581c87" />
      <circle cx={cx + 10} cy={headY + 30} r={3} fill="#4c1d95" />

      <circle cx={cx} cy={headY + 5} r={headR} fill="#22c55e" />

      <Eyes mood={mood} cx={cx} cy={headY + 5} r={headR} />
      <Mouth mood={mood} cx={cx} cy={headY + 5} r={headR} />
      <Blush cx={cx} cy={headY + 5} r={headR} mood={mood} />
    </svg>
  );
}

// ─── STAGE 5: Ipê-amarelo ───
function IpeAmareloStage({ mood, size }: { mood: SoulieMood; size: number }) {
  const cx = size / 2;
  const baseY = size * 0.78;
  const crownR = size * 0.28;
  const crownY = size * 0.28;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <ellipse cx={cx} cy={baseY + 5} rx={45} ry={8} fill="#15803d" opacity={0.3} />

      <ellipse cx={cx - 20} cy={baseY + 5} rx={6} ry={3} fill="#fde047" opacity={0.8} />
      <ellipse cx={cx + 25} cy={baseY + 7} rx={8} ry={4} fill="#eab308" opacity={0.8} />
      <ellipse cx={cx - 35} cy={baseY + 3} rx={4} ry={2} fill="#facc15" opacity={0.8} />

      <path
        d={`M ${cx - 6} ${baseY} C ${cx - 8} ${baseY - 20} ${cx - 4} ${crownY + crownR} ${cx - 3} ${crownY + crownR - 5}
            L ${cx + 3} ${crownY + crownR - 5}
            C ${cx + 4} ${crownY + crownR} ${cx + 8} ${baseY - 20} ${cx + 6} ${baseY} Z`}
        fill="#292524"
      />

      <circle cx={cx - 22} cy={crownY + 8} r={crownR * 0.75} fill="#ca8a04" />
      <circle cx={cx + 22} cy={crownY + 8} r={crownR * 0.75} fill="#ca8a04" />
      <circle cx={cx} cy={crownY + 15} r={crownR * 0.8} fill="#eab308" />
      <circle cx={cx} cy={crownY} r={crownR * 1.15} fill="#facc15" />

      <circle cx={cx - 15} cy={crownY - 12} r={crownR * 0.6} fill="#fef08a" opacity={0.6} />
      <circle cx={cx + 18} cy={crownY + 5} r={crownR * 0.4} fill="#fde047" opacity={0.5} />

      <circle cx={cx - 18} cy={crownY - crownR * 0.5} r={crownR * 0.5} fill="#fde047" />
      <circle cx={cx + 18} cy={crownY - crownR * 0.5} r={crownR * 0.5} fill="#fde047" />
      <circle cx={cx} cy={crownY - crownR * 0.8} r={crownR * 0.45} fill="#fef08a" />

      <circle cx={cx - 30} cy={crownY + 40} r={3} fill="#fde047" opacity={0.7} />
      <circle cx={cx + 35} cy={crownY + 30} r={2} fill="#eab308" opacity={0.7} />
      <circle cx={cx - 10} cy={crownY + 55} r={2.5} fill="#facc15" opacity={0.7} />

      <Eyes mood={mood} cx={cx} cy={crownY + 5} r={crownR * 0.6} />
      <Mouth mood={mood} cx={cx} cy={crownY + 5} r={crownR * 0.6} />
      <Blush cx={cx} cy={crownY + 5} r={crownR * 0.6} mood={mood} />
    </svg>
  );
}

// ─── STAGE 5: Mandacaru ───
function MandacaruStage({ mood, size }: { mood: SoulieMood; size: number }) {
  const cx = size / 2;
  const baseY = size * 0.8;
  const headR = size * 0.22;
  const headY = size * 0.35;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <ellipse cx={cx} cy={baseY + 5} rx={35} ry={6} fill="#15803d" opacity={0.3} />

      <rect x={cx - 12} y={headY} width={24} height={baseY - headY} rx={10} fill="#16a34a" />

      <path d={`M ${cx - 10} ${headY + 30} Q ${cx - 35} ${headY + 35} ${cx - 35} ${headY} L ${cx - 20} ${headY} Q ${cx - 20} ${headY + 20} ${cx - 10} ${headY + 15} Z`} fill="#15803d" />
      <rect x={cx - 35} y={headY - 20} width={15} height={25} rx={7} fill="#15803d" />

      <path d={`M ${cx + 10} ${headY + 45} Q ${cx + 38} ${headY + 50} ${cx + 38} ${headY + 10} L ${cx + 23} ${headY + 10} Q ${cx + 23} ${headY + 35} ${cx + 10} ${headY + 30} Z`} fill="#22c55e" />
      <rect x={cx + 23} y={headY - 15} width={15} height={30} rx={7} fill="#22c55e" />

      {[...Array(6)].map((_, i) => (
        <line key={`s1-${i}`} x1={cx - 12} y1={headY + 20 + i * 10} x2={cx - 18} y2={headY + 18 + i * 10} stroke="#4ade80" strokeWidth="1" />
      ))}
      {[...Array(6)].map((_, i) => (
        <line key={`s2-${i}`} x1={cx + 12} y1={headY + 25 + i * 10} x2={cx + 18} y2={headY + 23 + i * 10} stroke="#4ade80" strokeWidth="1" />
      ))}

      <circle cx={cx - 28} cy={headY - 22} r={6} fill="#ffffff" />
      <circle cx={cx - 25} cy={headY - 27} r={4} fill="#ffffff" />
      <circle cx={cx - 32} cy={headY - 26} r={4} fill="#ffffff" />
      <circle cx={cx - 28} cy={headY - 22} r={3} fill="#facc15" />

      <circle cx={cx} cy={headY} r={headR} fill="#16a34a" />
      <circle cx={cx - 5} cy={headY - 5} r={headR * 0.7} fill="#22c55e" opacity={0.4} />

      <Eyes mood={mood} cx={cx} cy={headY} r={headR} />
      <Mouth mood={mood} cx={cx} cy={headY} r={headR} />
      <Blush cx={cx} cy={headY} r={headR} mood={mood} />
    </svg>
  );
}

export function Soulie({ size = 180, showMoodLabel = false }: SoulieProps) {
  const { level, mood, plantType } = useSoulie();

  const renderStage = () => {
    switch (level) {
      case 1: return <SeedStage mood={mood} size={size} />;
      case 2: return <SproutStage mood={mood} size={size} />;
      case 3: return <SeedlingStage mood={mood} size={size} />;
      case 4: return <BushStage mood={mood} size={size} />;
      case 5:
        switch (plantType) {
          case 'paubrasil': return <PauBrasilStage mood={mood} size={size} />;
          case 'samambaia': return <SamambaiaStage mood={mood} size={size} />;
          case 'acaizeiro': return <AcaizeiroStage mood={mood} size={size} />;
          case 'ipeamarelo': return <IpeAmareloStage mood={mood} size={size} />;
          case 'mandacaru': return <MandacaruStage mood={mood} size={size} />;
          default: return <PauBrasilStage mood={mood} size={size} />;
        }
      default: return <SeedStage mood={mood} size={size} />;
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className={`transition-[filter] duration-[600ms] ease-in-out ${MOOD_ANIMATIONS[mood]} ${PLANT_FILTERS[plantType] || ''} ${mood === 'excited' ? 'animate-soulie-levelup-glow rounded-full' : ''}`}>
        {renderStage()}
      </div>
      {showMoodLabel && (
        <span className="mt-2 text-xs text-gray-400 font-medium tracking-wide">
          {SOULIE_MOOD_LABELS[mood]}
        </span>
      )}
    </div>
  );
}
