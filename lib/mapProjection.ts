/** Equirectangular projection shared by the map's server and client halves. */

export const VB_W = 2000;
export const VB_H = 1000;

/** Crop Antarctica and the far north for a tighter cinematic frame. */
export const VIEWBOX = "0 60 2000 800";

export function project(lng: number, lat: number) {
  return {
    x: ((lng + 180) / 360) * VB_W,
    y: ((90 - lat) / 180) * VB_H,
  };
}
