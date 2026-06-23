type IconProps = { name: string; className?: string };

const paths: Record<string, React.ReactNode> = {
  music: (
    <path d="M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  ),
  fire: (
    <path d="M12 2c1 3-1 4-2 6-1 2 0 4 2 4s3-1 3-3c2 2 3 4 3 6a6 6 0 1 1-12 0c0-4 3-6 3-9 0-2 0-3 0-4Z" />
  ),
  megaphone: (
    <path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Zm13-4a8 8 0 0 1 0 10M19 4a12 12 0 0 1 0 16" />
  ),
  water: (
    <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
  ),
  hands: (
    <path d="M5 11l3-3 4 4 4-4 3 3M4 14h16M7 14v4m10-4v4M9 18h6" />
  ),
  sprout: (
    <path d="M12 22V11m0 0C9 11 6 9 6 5c4 0 6 2 6 6Zm0 0c0-3 2-5 6-5 0 4-3 6-6 6Z" />
  ),
  globe: (
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c2.5-2.5 4-6 4-9s-1.5-6.5-4-9m0 18c-2.5-2.5-4-6-4-9s1.5-6.5 4-9M3.5 9h17M3.5 15h17" />
  ),
  pray: (
    <path d="M12 21c-1-4-4-5-4-9 0-3 2-5 4-9 2 4 4 6 4 9 0 4-3 5-4 9Z" />
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  mail: (
    <path d="M3 6h18v12H3V6Zm0 1 9 7 9-7" />
  ),
  spark: <path d="M12 3v6m0 6v6m9-9h-6M9 12H3m13.5-4.5L13 11m-2 2-3.5 3.5m9 0L13 13m-2-2L7.5 7.5" />,
  check: <path d="M5 13l4 4L19 7" />,
};

export default function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.spark}
    </svg>
  );
}
