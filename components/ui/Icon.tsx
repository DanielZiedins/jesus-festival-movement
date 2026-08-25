type IconProps = { name: string; className?: string; strokeWidth?: number };

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
  download: <path d="M12 3v12m0 0 5-5m-5 5-5-5M4 19h16" />,
  calendar: <path d="M5 4v3m14-3v3M3 9h18M5 6h14a2 2 0 0 1 2 2v12H3V8a2 2 0 0 1 2-2Z" />,
  shield: <path d="M12 3l7 3v5c0 4.5-2.7 8.2-7 10-4.3-1.8-7-5.5-7-10V6l7-3Zm-3 9 2 2 4-5" />,
  print: (
    <path d="M7 9V3h10v6M7 19H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M7 15h10v6H7v-6Z" />
  ),
  link: (
    <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1m-1 8a5 5 0 0 1-7 0 5 5 0 0 1 0-7l1-1" />
  ),
  whatsapp: (
    <path d="M20 12a8 8 0 0 1-11.9 6.9L4 20l1.1-4A8 8 0 1 1 20 12Zm-11 -2.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.4 1-1 0-.3-.2-.6-.5-.8l-1-.4-.9.8c-1-.5-1.8-1.3-2.3-2.3l.8-.9-.4-1c-.2-.3-.5-.5-.8-.5-.6 0-1 .4-1 1Z" />
  ),
  facebook: (
    <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V9a1 1 0 0 1 1-1Z" />
  ),
  x: <path d="M4 4l7.5 9.5L4.5 20h2.2l5.8-5.6L16.8 20H20l-7.7-9.8L19.4 4h-2.2l-5.4 5.2L8.2 4H4Z" />,
};

export default function Icon({ name, className, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.spark}
    </svg>
  );
}
