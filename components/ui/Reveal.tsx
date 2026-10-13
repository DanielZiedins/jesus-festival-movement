import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /**
   * Animate on load instead of on scroll-into-view. Use for content above the
   * fold — it must never depend on an IntersectionObserver firing, or a hero
   * can sit invisible if the observer is starved.
   */
  immediate?: boolean;
  /**
   * Element to render. Use "li" inside a <ul>/<ol> — wrapping a list item in
   * a div makes the list's only children divs, which breaks the list
   * semantics screen readers announce (axe: list / listitem).
   */
  as?: "div" | "li";
};

/**
 * Scroll entrance, driven by CSS and the inline RevealGuard script rather than
 * a JS animation library: no hydration is needed for it to play, and nothing
 * here ships to the browser. The markup is visible by default — the hidden
 * "before" state only exists once the guard has marked the document
 * `motion-ready` (see globals.css), so blocked or failed JavaScript leaves a
 * complete, unanimated page.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  immediate = false,
  as: Tag = "div",
}: Props) {
  const style: Record<string, string> = {};
  if (delay) style["--rv-d"] = `${delay}s`;
  if (y !== 28) style["--rv-y"] = `${y}px`;
  return (
    <Tag
      data-reveal=""
      data-rv-now={immediate ? "" : undefined}
      className={className}
      style={Object.keys(style).length ? (style as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
