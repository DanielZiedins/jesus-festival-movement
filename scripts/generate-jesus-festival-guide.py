#!/usr/bin/env python3
"""Generate the downloadable Jesus Festival starter guide."""

from pathlib import Path
from reportlab.lib.colors import HexColor, Color
from reportlab.lib.pagesizes import letter
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "basics-how-to-start-a-jesus-festival.pdf"
PUBLIC = ROOT / "public" / "resources" / "basics-how-to-start-a-jesus-festival.pdf"
LOGO = ROOT / "public" / "jesus-festival-movement-logo.png"
MARK = ROOT / "public" / "jesus-festival-movement-mark.png"

W, H = letter
INK = HexColor("#050812")
NAVY = HexColor("#0B1730")
NAVY_2 = HexColor("#16284A")
GOLD = HexColor("#F4C45C")
PALE_GOLD = HexColor("#FFF0B2")
EMBER = HexColor("#E95F32")
WHITE = HexColor("#F8F6EF")
MUTED = HexColor("#AAB1C2")
SOFT = HexColor("#D8DCE6")
GREEN = HexColor("#8ED4B1")


def lines_for(text, font, size, width):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if not current or stringWidth(candidate, font, size) <= width:
            current = candidate
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_text(c, text, x, y, width, font="Helvetica", size=10.5, color=SOFT,
              leading=None, max_lines=None):
    leading = leading or size * 1.42
    lines = lines_for(text, font, size, width)
    if max_lines:
        lines = lines[:max_lines]
    c.setFont(font, size)
    c.setFillColor(color)
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def draw_bullet(c, text, x, y, width, color=SOFT, bullet_color=GOLD, size=9.7,
                gap=7):
    c.setFillColor(bullet_color)
    c.circle(x + 3, y + 3, 2.2, fill=1, stroke=0)
    y2 = draw_text(c, text, x + 14, y, width - 14, size=size, color=color,
                   leading=size * 1.38)
    return y2 - gap


def background(c, page, section):
    c.setFillColor(INK)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(Color(0.91, 0.37, 0.20, alpha=0.08))
    c.circle(55, 720, 145, fill=1, stroke=0)
    c.setFillColor(Color(0.96, 0.77, 0.36, alpha=0.055))
    c.circle(590, 90, 190, fill=1, stroke=0)
    c.setStrokeColor(Color(0.96, 0.77, 0.36, alpha=0.14))
    c.circle(538, 690, 92, fill=0, stroke=1)
    c.circle(538, 690, 68, fill=0, stroke=1)
    c.setFillColor(MUTED)
    c.setFont("Helvetica-Bold", 7.2)
    c.drawString(48, 756, "JESUS FESTIVAL MOVEMENT")
    c.setFillColor(GOLD)
    c.drawRightString(564, 756, section.upper())
    c.setStrokeColor(Color(1, 1, 1, alpha=0.10))
    c.line(48, 742, 564, 742)
    c.setFillColor(HexColor("#6F778A"))
    c.setFont("Helvetica", 7.3)
    c.drawString(48, 27, "Basics: How to Start a Jesus Festival")
    c.drawCentredString(W / 2, 27, "JESUSFESTIVALMOVEMENT.COM")
    c.drawRightString(564, 27, f"{page:02d}")


def title(c, eyebrow, heading, intro=None):
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(48, 708, eyebrow.upper())
    y = draw_text(c, heading, 48, 680, 505, font="Helvetica-Bold", size=27,
                  color=WHITE, leading=30)
    if intro:
        y -= 7
        y = draw_text(c, intro, 48, y, 498, size=11.2, color=MUTED, leading=16)
    return y


def card(c, x, y, w, h, heading, body=None, number=None, accent=GOLD):
    c.setFillColor(Color(0.09, 0.16, 0.29, alpha=0.88))
    c.setStrokeColor(Color(1, 1, 1, alpha=0.11))
    c.roundRect(x, y - h, w, h, 14, fill=1, stroke=1)
    c.setFillColor(accent)
    if number:
        c.setFont("Helvetica-Bold", 8)
        c.drawString(x + 16, y - 22, number)
        heading_y = y - 42
    else:
        heading_y = y - 25
    c.setFont("Helvetica-Bold", 12)
    c.setFillColor(WHITE)
    c.drawString(x + 16, heading_y, heading)
    if body:
        draw_text(c, body, x + 16, heading_y - 20, w - 32, size=9.2,
                  color=MUTED, leading=13)


def section_label(c, text, x, y):
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(x, y, text.upper())


def page_cover(c):
    c.setFillColor(INK)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(Color(0.96, 0.77, 0.36, alpha=0.10))
    c.circle(485, 670, 235, fill=1, stroke=0)
    c.setFillColor(Color(0.91, 0.37, 0.20, alpha=0.12))
    c.circle(80, 140, 210, fill=1, stroke=0)
    c.setStrokeColor(Color(0.96, 0.77, 0.36, alpha=0.18))
    for radius in (115, 148, 181):
        c.circle(485, 665, radius, fill=0, stroke=1)
    c.drawImage(ImageReader(str(LOGO)), 183, 458, 246, 246, mask="auto",
                preserveAspectRatio=True, anchor="c")
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawCentredString(W / 2, 433, "A PRACTICAL FIELD GUIDE FOR YOUR FIRST FAITHFUL STEPS")
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 34)
    c.drawCentredString(W / 2, 365, "BASICS")
    c.setFont("Helvetica-Bold", 22)
    c.drawCentredString(W / 2, 331, "HOW TO START A")
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 36)
    c.drawCentredString(W / 2, 282, "JESUS FESTIVAL")
    c.setFillColor(MUTED)
    draw_text(c,
              "Pray. Gather a team. Serve your city. Proclaim the Gospel. Build for fruit that remains.",
              104, 234, 404, font="Helvetica", size=12.5, color=MUTED,
              leading=18)
    c.setFillColor(Color(1, 1, 1, alpha=0.055))
    c.roundRect(76, 105, 460, 76, 16, fill=1, stroke=0)
    c.setFillColor(PALE_GOLD)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(98, 151, "START SMALL. PREPARE WELL. KEEP JESUS AT THE CENTRE.")
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 9)
    c.drawString(98, 130, "Built from lessons learned through Jesus Festival Hamilton.")
    c.setFillColor(HexColor("#777F92"))
    c.setFont("Helvetica", 7.5)
    c.drawCentredString(W / 2, 42, "JESUSFESTIVALMOVEMENT.COM  |  HELLO@JESUSFESTIVAL.CA")


def page_prayer(c):
    background(c, 2, "Start with prayer")
    y = title(c, "01 / The foundation", "Start smaller than your fear.",
              "A Jesus Festival does not begin with a stage. It begins when someone listens, prays, and takes one clear step of obedience.")
    y -= 14
    card(c, 48, y, 248, 126, "Prayer before production", number="01",
         body="Ask God for His heart, timing, location, and the people you should walk with. Notice whether a specific park or neighbourhood keeps returning to prayer.")
    card(c, 316, y, 248, 126, "Small can be deeply fruitful", number="02",
         body="The first vision in Hamilton was a simple BBQ, an acoustic guitar, and a few hundred people. Faithfulness creates room for God to add what is needed.", accent=EMBER)
    y -= 151
    section_label(c, "Your first seven days", 48, y)
    y -= 24
    items = [
        "Set aside one focused hour to pray for your city and write down what keeps rising in your heart.",
        "Walk one or two possible parks. Pray there. Notice foot traffic, transit, parking, visibility, washrooms, shade, and nearby neighbours.",
        "Invite two or three humble, trustworthy believers to pray with you - not to build a crowd, but to discern together.",
        "Write one sentence that answers: Why should this gathering exist in our city?",
        "Choose one next action with an owner and a date. Momentum begins when prayer becomes obedience.",
    ]
    for item in items:
        y = draw_bullet(c, item, 48, y, 510)
    y -= 5
    c.setFillColor(Color(0.96, 0.77, 0.36, alpha=0.10))
    c.setStrokeColor(Color(0.96, 0.77, 0.36, alpha=0.28))
    c.roundRect(48, 73, 516, 70, 14, fill=1, stroke=1)
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(66, 119, "A HEALTHY FIRST WIN")
    draw_text(c, "A praying core team, a promising location, and one clear next step - not a perfect master plan.", 66, 98, 476, size=10.3, color=WHITE, leading=14)


def page_venue(c):
    background(c, 3, "Venue and permits")
    y = title(c, "02 / Choose the ground", "Find the place people already gather.",
              "If no location feels specific in prayer, look for a public place where people can naturally encounter worship, community, and the Gospel.")
    y -= 12
    section_label(c, "A simple venue scorecard", 48, y)
    y -= 23
    left = [
        "Visible and easy to find",
        "Accessible by transit and foot",
        "Enough parking or overflow options",
        "Washrooms or room for portable toilets",
    ]
    right = [
        "Safe power and sound possibilities",
        "Space for prayer, kids, food, and baptisms",
        "Weather and emergency shelter plan",
        "Neighbour impact and sound restrictions",
    ]
    for idx, item in enumerate(left):
        y_i = y - idx * 40
        c.setFillColor(Color(1, 1, 1, alpha=0.05))
        c.roundRect(48, y_i - 28, 248, 31, 8, fill=1, stroke=0)
        c.setFillColor(GREEN)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(61, y_i - 17, "CHECK")
        c.setFillColor(SOFT)
        c.setFont("Helvetica", 8.7)
        c.drawString(103, y_i - 17, item)
    for idx, item in enumerate(right):
        y_i = y - idx * 40
        c.setFillColor(Color(1, 1, 1, alpha=0.05))
        c.roundRect(316, y_i - 28, 248, 31, 8, fill=1, stroke=0)
        c.setFillColor(GREEN)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(329, y_i - 17, "CHECK")
        c.setFillColor(SOFT)
        c.setFont("Helvetica", 8.7)
        c.drawString(371, y_i - 17, item)
    y -= 178
    section_label(c, "Contact the city early", 48, y)
    y -= 22
    draw_text(c,
              "Search for your municipality's park or special-event permit office. Ask whether your preferred date is available and request the full application package, fee schedule, insurance requirements, sound rules, food rules, and site-specific restrictions.",
              48, y, 516, size=10.2, color=SOFT, leading=14.4)
    c.setFillColor(Color(0.09, 0.16, 0.29, alpha=0.94))
    c.setStrokeColor(Color(1, 1, 1, alpha=0.10))
    c.roundRect(48, 79, 516, 181, 15, fill=1, stroke=1)
    section_label(c, "City inquiry checklist", 66, 234)
    checklist = [
        "Purpose: a free, family-friendly community gathering centred on worship, service, and hope.",
        "Date, hours, estimated attendance, setup and teardown windows.",
        "Stage/sound, food, tents, inflatables, baptisms, generators, parking, waste, and washrooms.",
        "Accessibility, first aid, security, emergency plan, insurance, and volunteer supervision.",
        "Ask what must be approved before promotion begins and who your ongoing city contact will be.",
    ]
    cy = 210
    for item in checklist:
        cy = draw_bullet(c, item, 66, cy, 478, size=8.8, gap=3)


def page_team(c):
    background(c, 4, "Core team")
    y = title(c, "03 / Build the core", "Do not carry the whole festival alone.",
              "Gather leaders who are prayerful, dependable, locally connected, and willing to serve without needing the spotlight.")
    y -= 14
    roles = [
        ("Prayer", "Cover the vision, leaders, grounds, and people."),
        ("City and site", "Permits, map, parking, accessibility, sanitation."),
        ("Program", "Worship, Gospel, testimonies, prayer, baptisms."),
        ("People", "Greeting, evangelism, kids, volunteers, follow-up."),
        ("Operations", "Stage, sound, security, first aid, vendors."),
        ("Communication", "Churches, promotion, schedules, updates."),
    ]
    for i, (heading, body) in enumerate(roles):
        col = i % 2
        row = i // 2
        card(c, 48 + col * 268, y - row * 105, 248, 86, heading, body=body,
             number=f"{i + 1:02d}", accent=GOLD if col == 0 else EMBER)
    y -= 334
    section_label(c, "A meeting rhythm that works", 48, y)
    y -= 20
    y = draw_bullet(c, "Early stage: meet monthly for prayer, clarity, and one or two decisions.", 48, y, 510)
    y = draw_bullet(c, "Final 8-10 weeks: meet every two weeks, then weekly in the final month.", 48, y, 510)
    draw_bullet(c, "Every task needs one owner, one deadline, and one clear definition of done.", 48, y, 510)
    c.setFillColor(Color(0.91, 0.37, 0.20, alpha=0.12))
    c.setStrokeColor(Color(0.91, 0.37, 0.20, alpha=0.34))
    c.roundRect(48, 67, 516, 82, 14, fill=1, stroke=1)
    c.setFillColor(EMBER)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(66, 124, "LEADERSHIP GUARDRAIL")
    draw_text(c,
              "Be prayerful about who represents the festival. Character, church connection, teachability, reliability, and care for people matter more than charisma.",
              66, 103, 478, size=9.6, color=WHITE, leading=13.6)


def page_program(c):
    background(c, 5, "Program and Gospel")
    y = title(c, "04 / Design the day", "Build every moment around people meeting Jesus.",
              "A strong program creates a clear path: welcome people, serve them well, lift up Jesus, invite response, and connect every response to local follow-up.")
    y -= 14
    flow = [
        ("WELCOME", "Warm greeting, clear signage, family-friendly atmosphere."),
        ("WORSHIP", "Local churches and artists lifting up one name together."),
        ("GOSPEL", "A clear, compassionate invitation to repent, believe, and follow Jesus."),
        ("RESPONSE", "Prayer teams, testimonies, baptisms, healing prayer, next steps."),
        ("CONNECTION", "Capture contact details with consent and introduce local churches."),
    ]
    for i, (name, body) in enumerate(flow):
        top = y - i * 74
        c.setFillColor(GOLD if i < 3 else EMBER)
        c.circle(67, top - 13, 14, fill=1, stroke=0)
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 8)
        c.drawCentredString(67, top - 16, f"{i + 1}")
        if i < len(flow) - 1:
            c.setStrokeColor(Color(0.96, 0.77, 0.36, alpha=0.25))
            c.line(67, top - 29, 67, top - 61)
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 10)
        c.drawString(94, top - 8, name)
        draw_text(c, body, 94, top - 27, 456, size=9.3, color=MUTED, leading=13)
    c.setFillColor(Color(0.09, 0.16, 0.29, alpha=0.94))
    c.setStrokeColor(Color(1, 1, 1, alpha=0.10))
    c.roundRect(48, 72, 516, 157, 15, fill=1, stroke=1)
    section_label(c, "Community blessing creates natural bridges", 66, 203)
    draw_text(c,
              "Free food, kids activities, local vendors, and practical service can welcome people who would never attend a church event. Hamilton's free hot dog station drew many people from around the park. Serve generously and make sure the Gospel remains clear, never manipulative.",
              66, 179, 478, size=9.5, color=SOFT, leading=13.7)
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 8.4)
    c.drawString(66, 101, "KEEP THE MAIN THING THE MAIN THING")
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(66, 83, "Jesus at the centre. The Gospel made clear. People lovingly connected.")


def page_operations(c):
    background(c, 6, "Operations and safety")
    y = title(c, "05 / Prepare the ground", "Plan for people, not just a platform.",
              "Operational excellence is a form of hospitality. Local requirements vary, so confirm every item with your municipality, insurer, venue, and qualified providers.")
    y -= 14
    ops = [
        ("Parking and access", "Overflow parking, accessible routes, traffic flow, drop-off, transit, signage."),
        ("Sanitation", "Portable toilets, handwashing, waste/recycling, extra bins, cleanup and disposal."),
        ("Safety", "Security, overnight equipment protection, first aid, incident log, lost-child process."),
        ("Food", "Food permits, safe handling, allergen awareness, vendor insurance, power and waste."),
        ("Kids", "Vetted workers, check-in/out, visible spaces, safeguarding policy, weather plan."),
        ("Production", "Stage engineering, sound limits, power distribution, cable ramps, rain/wind plan."),
    ]
    for i, (heading, body) in enumerate(ops):
        col = i % 2
        row = i // 2
        card(c, 48 + col * 268, y - row * 116, 248, 96, heading, body=body,
             number=f"{i + 1:02d}", accent=GOLD if row != 1 else EMBER)
    y -= 365
    c.setFillColor(Color(0.96, 0.77, 0.36, alpha=0.10))
    c.setStrokeColor(Color(0.96, 0.77, 0.36, alpha=0.28))
    c.roundRect(48, 66, 516, 116, 14, fill=1, stroke=1)
    section_label(c, "Before you announce the date", 66, 156)
    items = [
        "Confirm the written permit path, insurance, fees, deposits, sound rules, and cancellation terms.",
        "Draft a scaled site map showing stage, tents, food, kids, prayer, baptism, first aid, exits, and parking.",
        "Create emergency, severe-weather, missing-child, and incident-response plans with named decision makers.",
    ]
    yy = 134
    for item in items:
        yy = draw_bullet(c, item, 66, yy, 478, size=8.8, gap=2)


def page_outreach(c):
    background(c, 7, "Prayer and outreach")
    y = title(c, "06 / Begin before festival day", "Walk the ground. Love the neighbourhood.",
              "Prayer walks combine intercession, listening, relationship, and simple Gospel witness. The festival should feel like the continuation of love already being shown.")
    y -= 14
    card(c, 48, y, 248, 145, "Prayer walk pattern", number="01",
         body="Gather briefly. Pray for sensitivity. Walk in pairs. Bless people. Listen well. Offer prayer. Share Jesus naturally. Record follow-up needs with permission.")
    card(c, 316, y, 248, 145, "Invite, do not advertise only", number="02",
         body="A flyer can start a conversation. One person invited during a Hamilton prayer walk later came to the festival and was baptized. Personal invitation carries love.", accent=EMBER)
    y -= 172
    section_label(c, "Mobilize the local Church", 48, y)
    y -= 23
    church_items = [
        "Invite pastors and leaders personally. Explain the Gospel purpose, what unity means, and how follow-up will serve local churches.",
        "Ask worship teams and artists to participate with humility, shared expectations, and realistic technical requirements.",
        "Invite churches to own specific lanes: prayer, food, kids, baptism, greeting, evangelism, cleanup, or follow-up.",
        "Support local and Christian-owned vendors where appropriate, but keep the vendor mix simple enough to serve the event well.",
    ]
    for item in church_items:
        y = draw_bullet(c, item, 48, y, 510, size=9.5, gap=7)
    c.setFillColor(Color(0.09, 0.16, 0.29, alpha=0.94))
    c.setStrokeColor(Color(1, 1, 1, alpha=0.10))
    c.roundRect(48, 67, 516, 100, 14, fill=1, stroke=1)
    section_label(c, "A useful outreach question", 66, 141)
    draw_text(c,
              "If the stage disappeared, how would our team still love this park, share Jesus, and build relationships in the weeks before the event?",
              66, 115, 478, font="Helvetica-Bold", size=11.4, color=WHITE, leading=16)


def page_volunteers(c):
    background(c, 8, "Volunteer readiness")
    y = title(c, "07 / Prepare the people who serve", "A lanyard should represent trust.",
              "Every volunteer shapes someone's experience of Jesus Festival. Create a simple, consistent process before anyone is assigned a public-facing role.")
    y -= 14
    steps = [
        ("APPLICATION", "Contact information, church connection, experience, desired team, references, consent."),
        ("SCREENING", "Role-appropriate conversations, references, and checks - especially for children and vulnerable people."),
        ("TRAINING", "Mandatory orientation 1-2 weeks before the festival with expectations, Gospel clarity, safety, and escalation paths."),
        ("ASSIGNMENT", "Every volunteer knows a team leader, shift, check-in point, radio/contact process, and what success looks like."),
    ]
    for i, (name, body) in enumerate(steps):
        top = y - i * 92
        c.setFillColor(Color(1, 1, 1, alpha=0.05))
        c.roundRect(48, top - 70, 516, 75, 12, fill=1, stroke=0)
        c.setFillColor(GOLD if i < 2 else EMBER)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(65, top - 23, f"0{i + 1} / {name}")
        draw_text(c, body, 65, top - 43, 480, size=9.3, color=SOFT, leading=13)
    c.setFillColor(Color(0.96, 0.77, 0.36, alpha=0.10))
    c.setStrokeColor(Color(0.96, 0.77, 0.36, alpha=0.28))
    c.roundRect(48, 67, 516, 109, 14, fill=1, stroke=1)
    section_label(c, "Give every volunteer one relational goal", 66, 150)
    draw_text(c,
              "Prayerfully connect with one or two people. Learn their names. Listen to their story. Offer prayer. Share Jesus when appropriate. Help them take one genuine next step.",
              66, 124, 478, font="Helvetica-Bold", size=10.7, color=WHITE, leading=15)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8.4)
    c.drawString(66, 83, "People are never projects. Serve with dignity, consent, patience, and love.")


def page_followup(c):
    background(c, 9, "Follow-up and launch plan")
    y = title(c, "08 / Build for fruit that remains", "The festival ends. The mission continues.",
              "Decide before the event who will care for each response, how quickly they will reach out, and which local relationships can help people grow.")
    y -= 12
    section_label(c, "The first 48 hours", 48, y)
    y -= 22
    actions = [
        "Capture contact information only with clear consent and explain how it will be used.",
        "Assign every response to a trained follow-up leader before the team leaves the site.",
        "Reach out within 48 hours with warmth, prayer, a clear next step, and a local church connection.",
        "Track connection, not just attempts. Keep following up with care while respecting boundaries.",
    ]
    for item in actions:
        y = draw_bullet(c, item, 48, y, 510, size=9.3, gap=4)
    y -= 6
    section_label(c, "Your 30 / 60 / 90 day head start", 48, y)
    y -= 20
    phases = [
        ("DAYS 1-30", "Pray weekly. Clarify the purpose. Walk possible sites. Gather 3-5 core leaders. Contact the city. Draft a simple budget and decision timeline."),
        ("DAYS 31-60", "Choose the strongest feasible site/date. Define team leads. Begin church conversations. Draft the site map, program flow, safety needs, and follow-up pathway."),
        ("DAYS 61-90", "Submit required applications. Confirm insurance path and key providers. Start prayer walks. Build volunteer intake. Set meeting rhythm and next milestone."),
    ]
    for i, (heading, body) in enumerate(phases):
        card(c, 48 + i * 178, y, 160, 143, heading, body=body,
             number=f"0{i + 1}", accent=GOLD if i != 1 else EMBER)
    c.setFillColor(Color(0.09, 0.16, 0.29, alpha=0.96))
    c.setStrokeColor(Color(1, 1, 1, alpha=0.11))
    c.roundRect(48, 66, 516, 145, 14, fill=1, stroke=1)
    section_label(c, "A 45-minute first team meeting", 66, 186)
    agenda = [
        "10 min - worship and prayer for the city",
        "10 min - share the burden and listen to one another",
        "10 min - identify possible parks, dates, and local relationships",
        "10 min - choose three next actions with owners and dates",
        "5 min - pray over each person and the people who will be reached",
    ]
    yy = 163
    for item in agenda:
        yy = draw_bullet(c, item, 66, yy, 478, size=8.7, gap=2)


def page_closing(c):
    c.setFillColor(INK)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(Color(0.96, 0.77, 0.36, alpha=0.09))
    c.circle(W / 2, 472, 255, fill=1, stroke=0)
    c.setStrokeColor(Color(0.96, 0.77, 0.36, alpha=0.17))
    for r in (150, 195, 240):
        c.circle(W / 2, 472, r, fill=0, stroke=1)
    c.drawImage(ImageReader(str(MARK)), 211, 520, 190, 190, mask="auto",
                preserveAspectRatio=True, anchor="c")
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawCentredString(W / 2, 484, "THE NEXT STEP IS NOT PERFECTION. IT IS OBEDIENCE.")
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 31)
    c.drawCentredString(W / 2, 425, "YOUR CITY COULD")
    c.setFillColor(GOLD)
    c.drawCentredString(W / 2, 385, "BE NEXT.")
    draw_text(c,
              "Begin in prayer. Gather a few faithful people. Serve your city with excellence. Preach Jesus clearly. Build for discipleship that continues when the stage comes down.",
              103, 335, 406, size=12.1, color=MUTED, leading=18)
    c.setFillColor(Color(1, 1, 1, alpha=0.055))
    c.roundRect(76, 151, 460, 112, 18, fill=1, stroke=0)
    c.setFillColor(PALE_GOLD)
    c.setFont("Helvetica-Bold", 11)
    c.drawCentredString(W / 2, 224, "WE WOULD LOVE TO WALK WITH YOU.")
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 12)
    c.drawCentredString(W / 2, 196, "HELLO@JESUSFESTIVAL.CA")
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 10)
    c.drawCentredString(W / 2, 174, "JESUSFESTIVALMOVEMENT.COM")
    c.setFillColor(HexColor("#757E91"))
    draw_text(c,
              "This guide offers general planning ideas, not legal or safety advice. Confirm all permits, insurance, food, child-safeguarding, accessibility, emergency, and venue requirements with qualified local authorities and providers.",
              88, 102, 436, size=7.5, color=HexColor("#757E91"), leading=10.5)
    c.setFont("Helvetica", 7.2)
    c.drawCentredString(W / 2, 41, "ONE NAME. ONE MISSION. EVERY NATION.")


def generate(path):
    path.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(path), pagesize=letter, pageCompression=1)
    c.setTitle("Basics: How to Start a Jesus Festival")
    c.setAuthor("Jesus Festival Movement")
    c.setSubject("A practical field guide for beginning a Jesus Festival in your city")
    pages = [
        page_cover,
        page_prayer,
        page_venue,
        page_team,
        page_program,
        page_operations,
        page_outreach,
        page_volunteers,
        page_followup,
        page_closing,
    ]
    for index, page in enumerate(pages):
        page(c)
        if index < len(pages) - 1:
            c.showPage()
    c.save()


if __name__ == "__main__":
    generate(OUTPUT)
    PUBLIC.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC.write_bytes(OUTPUT.read_bytes())
    print(f"Generated {OUTPUT}")
    print(f"Published {PUBLIC}")
