import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Stagger, in seconds. */
  delay?: number;
  /** Travel distance, in pixels. */
  y?: number;
  className?: string;
  as?: "div" | "span" | "li";
  /**
   * Animate on mount instead of on scroll-into-view. Use for content that is
   * above the fold — it must never depend on an IntersectionObserver firing.
   */
  immediate?: boolean;
};

/**
 * Server component. Emits markup only; the animation itself is CSS
 * (see the motion system in globals.css) and scroll elements are flipped to
 * `.is-in` by the single shared observer in RevealEngine.
 *
 * Nothing here ships JavaScript, so a section wrapped in Reveal stays a server
 * component all the way down.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as: Tag = "div",
  immediate = false,
}: Props) {
  const style = {
    ...(delay ? { "--reveal-d": `${delay}s` } : null),
    ...(y !== 28 ? { "--reveal-y": `${y}px` } : null),
  } as CSSProperties;

  return (
    <Tag
      data-reveal={immediate ? "now" : "scroll"}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}
