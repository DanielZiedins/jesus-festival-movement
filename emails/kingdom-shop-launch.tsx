type KingdomShopLaunchEmailProps = { firstName?: string };

const shopUrl = "https://www.jesusfestivalmovement.com/shop";

export default function KingdomShopLaunchEmail({ firstName = "friend" }: KingdomShopLaunchEmailProps) {
  return (
    <html>
      <head />
      <body style={{ margin: 0, backgroundColor: "#050812", color: "#f7f5ef", fontFamily: "Arial, Helvetica, sans-serif" }}>
        <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: "#050812", padding: "36px 16px" }}>
          <tbody><tr><td align="center">
            <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ maxWidth: 620, overflow: "hidden", border: "1px solid rgba(255,255,255,.12)", borderRadius: 28, backgroundColor: "#0b1122" }}>
              <tbody>
                <tr><td style={{ padding: "42px 38px 30px", background: "linear-gradient(145deg,#121d36,#0b1122 58%,#28130f)" }}>
                  <p style={{ margin: 0, color: "#f4c45c", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Kingdom Shop × Jesus Festival</p>
                  <h1 style={{ margin: "18px 0 0", color: "#ffffff", fontSize: 42, lineHeight: 1, letterSpacing: -2 }}>Wear the message.<br /><span style={{ color: "#f4c45c" }}>Carry the mission.</span></h1>
                </td></tr>
                <tr><td style={{ padding: "34px 38px 42px" }}>
                  <p style={{ margin: 0, color: "#f7f5ef", fontSize: 18, lineHeight: 1.65 }}>Hey {firstName},</p>
                  <p style={{ margin: "22px 0 0", color: "rgba(247,245,239,.72)", fontSize: 17, lineHeight: 1.7 }}>Kingdom Shop is now open—and the Jesus Festival collection is part of the first drop.</p>
                  <p style={{ margin: "18px 0 0", color: "rgba(247,245,239,.72)", fontSize: 17, lineHeight: 1.7 }}>These are faith-forward pieces made for the street, the gathering, and the everyday yes. They are not a costume or a statement of arrival. They are a simple reminder that Jesus is worth lifting up, and an invitation to carry His love with humility wherever we go.</p>
                  <table role="presentation" cellPadding="0" cellSpacing="0" style={{ marginTop: 30 }}><tbody><tr><td style={{ borderRadius: 999, backgroundColor: "#f4c45c" }}><a href={shopUrl} style={{ display: "inline-block", padding: "15px 24px", color: "#050812", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>Shop the Jesus Festival collection →</a></td></tr></tbody></table>
                  <p style={{ margin: "30px 0 0", color: "rgba(247,245,239,.48)", fontSize: 14, lineHeight: 1.6 }}>“Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.” — Matthew 5:16</p>
                  <p style={{ margin: "24px 0 0", color: "#f7f5ef", fontSize: 16, lineHeight: 1.6 }}>With love,<br />Jesus Festival Movement</p>
                </td></tr>
              </tbody>
            </table>
          </td></tr></tbody>
        </table>
      </body>
    </html>
  );
}
