import GlobalMapInteractive from "./GlobalMapInteractive";
import worldPaths from "@/lib/worldPaths.json";

/**
 * Server half of the global map. Rendering the ~180 country paths here keeps
 * the 138KB geometry file out of the client bundle entirely — the browser
 * receives the finished SVG markup as part of the HTML instead.
 */
export default function GlobalMap() {
  const countries = (
    <g>
      {(worldPaths as { id: string; d: string }[]).map((c, i) => (
        <path
          key={`${c.id}-${i}`}
          d={c.d}
          fill="#101a4a"
          fillOpacity={0.55}
          stroke="#3450b5"
          strokeOpacity={0.35}
          strokeWidth={1}
        />
      ))}
    </g>
  );

  return <GlobalMapInteractive countries={countries} />;
}
