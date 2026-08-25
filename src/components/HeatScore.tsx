type HeatTier = 'cold' | 'warm' | 'hot' | 'scorching' | 'fugitive';

interface HeatScoreProps {
  score: number;
  showLabel?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

const TIER_STYLES: Record<
  HeatTier,
  {
    badge: string;
    dot: string;
    label: string;
  }
> = {
  cold: {
    badge: 'bg-sky-50 text-sky-700 ring-sky-200',
    dot: 'bg-sky-400',
    label: 'Cold',
  },
  warm: {
    badge: 'bg-amber-50 text-amber-700 ring-amber-200',
    dot: 'bg-amber-400',
    label: 'Warm',
  },
  hot: {
    badge: 'bg-orange-50 text-orange-700 ring-orange-200',
    dot: 'bg-orange-500',
    label: 'Hot',
  },
  scorching: {
    badge: 'bg-rose-50 text-rose-700 ring-rose-200',
    dot: 'bg-rose-500',
    label: 'Scorching',
  },
  fugitive: {
    badge: 'bg-purple-50 text-purple-700 ring-purple-200',
    dot: 'bg-purple-500',
    label: 'Fugitive',
  },
};

function getTier(score: number): HeatTier {
  if (score >= 90) return 'fugitive';
  if (score >= 70) return 'scorching';
  if (score >= 45) return 'hot';
  if (score >= 20) return 'warm';
  return 'cold';
}

export default function HeatScore({
  score,
  showLabel = true,
  size = 'md',
  className = '',
}: HeatScoreProps) {
  const safeScore = Number.isFinite(score) ? score : 0;
  const normalized = Math.max(0, Math.min(100, Math.round(safeScore)));
  const tier = getTier(normalized);
  const style = TIER_STYLES[tier];

  const base = 'inline-flex items-center rounded-full font-semibold ring-1';
  const sizing =
    size === 'sm'
      ? 'gap-1 px-2 py-0.5 text-[11px]'
      : 'gap-1.5 px-2.5 py-1 text-xs';
  const dot = size === 'sm' ? 'h-1.5 w-1.5' : 'h-2 w-2';

  return (
    <span
      className={`${base} ${sizing} ${style.badge} ${className}`.trim()}
      title={`Fugitive heat ${normalized}/100 (${style.label})`}
    >
      <span className={`${dot} rounded-full ${style.dot}`} aria-hidden="true" />
      <span className="whitespace-nowrap">
        {showLabel ? `${style.label} ${normalized}` : normalized}
      </span>
    </span>
  );
}