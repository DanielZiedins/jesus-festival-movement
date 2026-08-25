/**
 * Shared HTML shell for every Jesus Festival Movement email.
 *
 * Table-based and fully inline-styled on purpose — Outlook and Gmail strip
 * <style> blocks, flexbox and CSS variables. Keep it boring; keep it working.
 */

/** Absolute base URL so email links work outside the browser. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.jesusfestivalmovement.com";

export const BRAND = {
  gold: "#f5c451",
  goldLight: "#ffd76e",
  ember: "#ff6b35",
  ink: "#05060f",
  panel: "#0a1030",
  panelSoft: "#101a4a",
  line: "#22305e",
  text: "#e8ebf7",
  muted: "#a2abd0",
} as const;

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export type Cta = { label: string; url: string };

export type EmailBlock = {
  /** Inbox subject line. */
  subject: string;
  /** Grey preview text shown after the subject in most inboxes. */
  preheader: string;
  /** Small gold label above the heading. */
  eyebrow: string;
  heading: string;
  /** Body paragraphs — plain text, may contain <strong>/<em>/<a>. */
  intro: string[];
  /** Optional highlight cards (label + value). */
  stats?: { value: string; label: string }[];
  /** Optional pull-quote scripture. */
  scripture?: { text: string; reference: string };
  /** Optional bullet list with headings. */
  list?: { title: string; body: string }[];
  cta?: Cta;
  /** Optional secondary block of raw HTML rendered before the CTA. */
  extra?: string;
  /** Optional signoff postscript. */
  ps?: string;
};

function statsRow(stats: { value: string; label: string }[]): string {
  const cells = stats
    .map(
      (s) => `
        <td align="center" style="padding:14px 10px;background:${BRAND.panelSoft};border:1px solid ${BRAND.line};border-radius:12px;">
          <div style="font-size:24px;font-weight:700;color:${BRAND.goldLight};line-height:1.1;">${escapeHtml(s.value)}</div>
          <div style="font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:${BRAND.muted};padding-top:6px;">${escapeHtml(s.label)}</div>
        </td>`,
    )
    .join(`<td style="width:10px;">&nbsp;</td>`);

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:26px 0;">
      <tr>${cells}</tr>
    </table>`;
}

function listBlock(list: { title: string; body: string }[]): string {
  return list
    .map(
      (item) => `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 14px;">
        <tr>
          <td style="padding:16px 18px;background:${BRAND.panelSoft};border-left:3px solid ${BRAND.gold};border-radius:10px;">
            <div style="font-size:16px;font-weight:700;color:#ffffff;">${escapeHtml(item.title)}</div>
            <div style="font-size:15px;line-height:1.65;color:${BRAND.muted};padding-top:6px;">${item.body}</div>
          </td>
        </tr>
      </table>`,
    )
    .join("");
}

function ctaButton(cta: Cta): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:30px 0 6px;">
      <tr>
        <td align="center" bgcolor="${BRAND.gold}" style="border-radius:999px;">
          <a href="${cta.url}"
             style="display:inline-block;padding:15px 34px;font-size:16px;font-weight:700;color:${BRAND.ink};text-decoration:none;border-radius:999px;">
            ${escapeHtml(cta.label)}
          </a>
        </td>
      </tr>
    </table>`;
}

/** Wrap a content block in the branded shell. */
export function renderEmail(block: EmailBlock, unsubUrl: string): string {
  const paragraphs = block.intro
    .map(
      (p) =>
        `<p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:${BRAND.text};">${p}</p>`,
    )
    .join("");

  const scripture = block.scripture
    ? `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:26px 0;">
        <tr>
          <td style="padding:20px 22px;background:rgba(245,196,81,0.07);border:1px solid rgba(245,196,81,0.25);border-radius:14px;">
            <div style="font-size:17px;line-height:1.6;color:#ffffff;font-style:italic;">&ldquo;${escapeHtml(block.scripture.text)}&rdquo;</div>
            <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:${BRAND.gold};padding-top:12px;font-weight:700;">${escapeHtml(block.scripture.reference)}</div>
          </td>
        </tr>
      </table>`
    : "";

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="dark light">
<title>${escapeHtml(block.subject)}</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.ink};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(block.preheader)}</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.ink};padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;">

          <!-- Masthead -->
          <tr>
            <td align="center" style="padding:6px 0 22px;">
              <a href="${SITE_URL}" style="text-decoration:none;">
                <span style="display:inline-block;width:34px;height:34px;line-height:34px;text-align:center;background:${BRAND.gold};color:${BRAND.ink};font-size:19px;font-weight:700;border-radius:9px;vertical-align:middle;">&#10013;</span>
                <span style="font-size:17px;font-weight:700;color:#ffffff;vertical-align:middle;padding-left:9px;">Jesus Festival<span style="color:${BRAND.gold};"> Movement</span></span>
              </a>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:${BRAND.panel};border:1px solid ${BRAND.line};border-radius:20px;padding:36px 30px;">
              <div style="font-size:12px;letter-spacing:2.5px;text-transform:uppercase;color:${BRAND.gold};font-weight:700;">${escapeHtml(block.eyebrow)}</div>
              <h1 style="margin:14px 0 20px;font-size:28px;line-height:1.2;color:#ffffff;font-weight:700;">${block.heading}</h1>
              ${paragraphs}
              ${block.stats ? statsRow(block.stats) : ""}
              ${scripture}
              ${block.list ? listBlock(block.list) : ""}
              ${block.extra ?? ""}
              ${block.cta ? ctaButton(block.cta) : ""}
              ${
                block.ps
                  ? `<p style="margin:24px 0 0;font-size:15px;line-height:1.7;color:${BRAND.muted};border-top:1px solid ${BRAND.line};padding-top:20px;">${block.ps}</p>`
                  : ""
              }
            </td>
          </tr>

          <!-- Signoff -->
          <tr>
            <td style="padding:26px 30px 10px;">
              <p style="margin:0;font-size:15px;line-height:1.7;color:${BRAND.text};">
                For the glory of Jesus,<br>
                <strong style="color:#ffffff;">The Jesus Festival Movement Team</strong><br>
                <span style="color:${BRAND.muted};font-size:14px;">Hamilton, Ontario &rarr; the nations</span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:18px 30px 0;border-top:1px solid ${BRAND.line};">
              <p style="margin:14px 0 0;font-size:12px;line-height:1.7;color:${BRAND.muted};">
                You're receiving this because you joined the movement at
                <a href="${SITE_URL}" style="color:${BRAND.gold};text-decoration:none;">JesusFestivalMovement.com</a>.
                <br>
                <a href="${unsubUrl}" style="color:${BRAND.muted};text-decoration:underline;">Unsubscribe</a>
                &nbsp;&middot;&nbsp;
                <a href="mailto:Hello@JesusFestival.ca" style="color:${BRAND.muted};text-decoration:underline;">Hello@JesusFestival.ca</a>
              </p>
              <p style="margin:14px 0 0;font-size:12px;color:${BRAND.muted};">
                &copy; ${new Date().getFullYear()} Jesus Festival Movement. To the glory of Jesus Christ.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
