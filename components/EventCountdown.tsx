import Icon from "./ui/Icon";

type Props = {
  /** ISO datetime of the first session (with timezone offset). */
  startIso: string;
  /** ISO datetime of the final session's end (with timezone offset). */
  endIso: string;
  /** Where "Watch live" should point while the festival is on. */
  watchHref?: string;
};

/**
 * Live countdown for a festival page — deliberately NOT a React client
 * component. The audience for festival pages skews mobile-on-slow-networks,
 * where the JS bundle (and therefore hydration) can arrive seconds after the
 * HTML. A tiny inline script placed right after the markup starts ticking the
 * moment the HTML parses instead, and drives the three states: counting down,
 * "happening now" during the event, and a concluded note after — so the page
 * never claims a past event is upcoming.
 *
 * setInterval rather than rAF on purpose: correct for a 1s cadence and keeps
 * working in backgrounded tabs where rAF is starved.
 */
export default function EventCountdown({
  startIso,
  endIso,
  watchHref = "#watch",
}: Props) {
  const start = new Date(startIso).getTime();
  const end = new Date(endIso).getTime();

  const script = `(function(){
var root=document.currentScript.previousElementSibling;
var S=${start},E=${end};
var up=root.querySelector('[data-cd-upcoming]'),lv=root.querySelector('[data-cd-live]'),en=root.querySelector('[data-cd-ended]');
var d=root.querySelector('[data-cd=d]'),h=root.querySelector('[data-cd=h]'),m=root.querySelector('[data-cd=m]'),s=root.querySelector('[data-cd=s]'),dl=root.querySelector('[data-cd=dl]');
function pad(n){return n<10?'0'+n:''+n}
function show(el){[up,lv,en].forEach(function(x){x.hidden=x!==el})}
function tick(){
var now=Date.now();
if(now>E){show(en);clearInterval(t);return}
if(now>=S){show(lv);return}
show(up);
var r=Math.floor((S-now)/1000);
var dd=Math.floor(r/86400);
d.textContent=dd;dl.textContent=dd===1?'day':'days';
h.textContent=pad(Math.floor(r%86400/3600));
m.textContent=pad(Math.floor(r%3600/60));
s.textContent=pad(r%60);
}
tick();var t=setInterval(tick,1000);
})();`;

  return (
    <>
      <div className="mt-10">
        {/* Upcoming */}
        <div data-cd-upcoming className="mx-auto max-w-xl">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
            The festival begins in
          </p>
          <div
            className="mt-4 grid grid-cols-4 gap-2 sm:gap-3"
            role="timer"
            aria-live="off"
            aria-label="Countdown to the festival"
          >
            {(
              [
                ["d", "dl", "days"],
                ["h", null, "hours"],
                ["m", null, "min"],
                ["s", null, "sec"],
              ] as const
            ).map(([key, labelKey, label]) => (
              <div
                key={key}
                className="rounded-2xl glass-strong px-2 py-4 text-center sm:py-5"
              >
                <p
                  data-cd={key}
                  className="font-display text-3xl font-bold tabular-nums text-white sm:text-4xl"
                >
                  –
                </p>
                <p
                  {...(labelKey ? { "data-cd": labelKey } : {})}
                  className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/55"
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Live */}
        <div
          data-cd-live
          hidden
          className="mx-auto max-w-xl rounded-2xl border border-ember/40 bg-ember/[.1] px-6 py-5 text-center"
        >
          <p className="inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.22em] text-ember-400">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-ember" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ember" />
            </span>
            Happening now
          </p>
          <p className="mt-2 font-display text-2xl font-bold text-white">
            The festival is on — join us!
          </p>
          <a
            href={watchHref}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-ember-500 px-6 py-3 text-sm font-bold text-ink transition-transform hover:scale-105"
          >
            Watch live <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>

        {/* Concluded */}
        <div
          data-cd-ended
          hidden
          className="mx-auto max-w-xl rounded-2xl border border-gold/25 bg-gold/[.06] px-6 py-5 text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-400">
            This festival has concluded
          </p>
          <p className="mt-2 font-display text-xl font-bold text-white">
            Thank you, Akuse. Jesus Christ is Lord!
          </p>
          <p className="mt-2 text-sm text-white/65">
            Testimonies and what happens next will be shared with{" "}
            <a href="/#join" className="font-semibold text-gold hover:underline">
              the movement letters
            </a>
            .
          </p>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}
