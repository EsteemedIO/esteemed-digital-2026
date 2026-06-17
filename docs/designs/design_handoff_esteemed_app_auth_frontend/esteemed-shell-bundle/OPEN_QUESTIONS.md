# Open Questions — Esteemed Platform Shell

Everything this pass had to **infer, decide, or flag** because the written spec
(`esteemed-platform-shell-spec.md`) was not available, or because the mockups and brief
disagreed. Resolve these before build. Ordered by impact.

Legend: 🔴 blocks build · 🟡 worth confirming · 🟢 FYI / low-risk default taken

---

## 🔴 Q0 — The spec itself was missing

The brief names `esteemed-platform-shell-spec.md` as the source of truth and references it for
naming, the Integrations first-run layout (§6.4.1), the pastel ramp definitions, and the Lucide
icon list. **It was not provided.** This bundle was built from the brief + mockups + design
system, and every spec-dependent call is flagged below. **Action:** share the spec and re-run to
upgrade fidelity and close Q5/Q6 in particular.

---

## 🔴 Q1 — Curate is the 7th app; the locked grid was 2×3

The brief locks **six** apps in a 2×3 grid. You've now added **Curate (CMS · DAM)**, making
seven. A 3-column grid then runs 3 / 3 / 1, leaving Curate alone on row 3.

- **What I did:** kept the locked six in their positions and placed Curate in row 3, col 1
  (left-aligned). Used the monochrome line version of the provided `Group 4.svg` brand tile as
  its glyph; assigned it the **pink** source ramp.
- **Decide:**
  1. Is row-3 / left-aligned acceptable, or should the grid rebalance (e.g. 4 + 3, or a
     2-row × 4-col grid, or center the orphan)?
  2. Does Curate belong adjacent to Create (both "build / content")? That would break a locked
     position — confirm if so.
  3. Confirm the Curate sublabel: I used **"CMS · DAM"**. And confirm the pink label color.

## 🔴 Q2 — App order: brief vs. v3 mockup conflict

The brief's locked order is **Acquire · Hire · Create / Intelligence · Agents · Connect**.
The `apps-menu-v3` mockup shows **Acquire · Hire · Intelligence / Create · Assist · Connect** —
Intelligence and Create are swapped between the two.

- **What I did:** followed the **brief's locked order** (Create row 1, Intelligence row 2), since
  the brief explicitly labels it "locked" and says the spec wins.
- **Decide:** confirm the brief order is correct and the v3 mockup is stale.

## 🟡 Q3 — Five pastel ramps were derived, not specified

Only **red, amber, blue** are defined (spec + mockups). I derived **slate, teal, coral, purple,
pink** to match the same logic (fg ≈ L45% saturated text, bg ≈ L95% pastel fill):

| Ramp | fg | bg | Assigned to |
|---|---|---|---|
| slate | `#475569` | `#EDF0F4` | Personal / neutral / "Later" |
| teal | `#0E7490` | `#DBEFF3` | Create |
| coral | `#C2410C` | `#FCE9E0` | Agents |
| purple | `#6D28D9` | `#EDE7FC` | Intelligence |
| pink | `#BE2065` | `#FBE2EE` | Curate |

- **Decide:** approve the hex values **and** the app→color mapping. Coral (`#C2410C`) sits close
  to amber/red — if Agents needs more separation, say so and I'll retune.

## 🟡 Q4 — "Agents" naming + "Try Agents" callout (applied per brief)

Per the brief I renamed the tile from "Assist · Agent builder" → **"Agents · Marketing agents"**
and the callout from "Try Assist" → **"Try Agents"**. The callout *body* still describes general
autonomous agents (outreach, candidate screens, follow-ups). **Confirm** the sublabel is
literally "Marketing agents" (it reads narrow next to the broader body copy) and whether the body
should be reworded to match.

## 🟡 Q5 — Integrations first-run (spec §6.4.1) designed blind

No §6.4.1 text was available. I designed a welcome state from scratch (in `components.html`):
badge + "Connect your first tool." + value sentence + primary "Connect a tool" / ghost "See
what's possible." **Confirm** this matches the spec's intent, or send §6.4.1 to replace it.

## 🟡 Q6 — Cost calculator is a visual placeholder

The brief says pricing logic is TBD. The panel on Settings · Integrations shows plausible line
items (Platform · 8 seats, connected sources, retrieval volume) and a total. **The numbers and
the model are invented.** Provide the real inputs (what drives cost, per-unit pricing, billing
period) and I'll wire the visual to it.

## 🟢 Q7 — "Account" vs "Settings" in the left-nav footer

The Home mockup labels the footer item **"Account"**; the Calendar mockup labels it
**"Settings"**. Since Settings · Integrations is a required destination, I standardized on
**"Settings"** across all screens. Flag if both should exist as separate items.

## 🟢 Q8 — App Switcher background + current-app highlight

v3 shows the panel over a **Star conversation**, with **Hire** highlighted as the current app.
I reproduced both. The current-app highlight should be data-driven (the app you're in), not
always Hire — confirm the highlight rule.

## 🟢 Q9 — Mobile is greenfield

The spec is desktop-first; the brief calls mobile "open territory." I used: top bar + bottom tab
bar + Create FAB, single-column carousel, stacked settings with horizontal sub-nav, and a
bottom-sheet App Switcher. **Confirm the bottom-tab IA** (which 4 destinations belong in the bar)
and whether the App Switcher should be a sheet or a full screen on mobile.

## 🟢 Q10 — Icon refinements

Lucide defaults used throughout. The **Connect** "network nodes" glyph was redrawn as a polished
3-node graph (`#connect` in `icons.js`). The **Curate** glyph is the line version of the provided
brand tile. The **Agents** glyph uses Lucide `bot`. Flag any that don't read clearly at 30px.

## 🟢 Q11 — Calendar view tabs

Day / Week / Month are marked "(soon)" per the mockup; only Agenda is live. Confirm that's the
intended launch scope.

## 🟡 Q12 — Create = Calendly-style dropdown (added per direction)

The Create button now opens a dropdown menu: **Candidate · Event (Meeting / Interview) · Contact
· Company**. Confirm the item set, the order, and whether Event should be a flyout submenu vs.
the inline indented group used here. Maps to a HeroUI `Dropdown`.

## 🟡 Q13 — Settings = full-takeover modal (added per direction)

Settings opens as a full-screen takeover modal with an X to close (HeroUI `Modal`, backdrop blur,
Esc + click-away to dismiss). Confirm this should be a true route (`/settings`) under the hood for
deep-linking, even though it presents as a modal.

## 🟢 Q14 — Composed app tiles for Intelligence / Agents / Connect

You provided real tiles for Acquire, Hire, Create, Curate. For the three without art I wrapped the
**exact glyphs from the v3 mockup** (sparkles, bot, network) in your yellow-tile template
(`assets/intelligence-tile.svg`, `agents-tile.svg`, `connect-tile.svg`). Drop in your official
versions to replace them.

---

## 🟡 Q15 — Conversations is the unified inbox

Built out as a unified inbox: Star AI threads + connected channels (Email, LinkedIn, X, Slack)
in one list with per-channel filter chips and a reading pane. **Decide:** the full list of
channels to support at launch, whether each channel needs its own reply affordances/limits (e.g.
X DM length, LinkedIn InMail rules), and whether "configured channels" are managed from Settings ›
Integrations (currently the connect surface). Channel marks are simple monochrome glyphs — swap in
official brand logos at build.

## 🟢 Q16 — Nav label + top-bar tweaks (applied per direction)

"Create" → **"New"** in the left nav (to disambiguate from the Create app). The top-bar search
field is now a **search icon** to the left of the apps menu, not an open field. Confirm search
opens a command-palette / overlay on click (recommended) vs. expanding inline.

---

## 🟡 Q17 — Workflows mirrors the HCMGPT build (need the design)

A **Workflows** nav item was added. The brief/spec didn't include it; you noted the design already
exists in HCMGPT. I stubbed the screen with a clear "mirrors HCMGPT" placeholder rather than invent
a different UI. **Share the HCMGPT Workflows design** and I'll reproduce it 1:1 so it matches dev.

## 🟡 Q18 — Two "Integrations" surfaces

There are now two: **Settings › Integrations** (tool connections + cost calculator) and a
top-level **Integrations** nav item = the document/data connectors that feed conversation and
agent assistance (built out: Drive, Gmail, Slack, Confluence, Notion, GitHub, Jira, Salesforce,
SharePoint, Dropbox, Zendesk, web). Confirm the naming — two "Integrations" may confuse; options:
rename one (e.g. "Connectors" or "Sources"), or merge.

## 🟢 Q19 — Prompt starters + dropdowns

Home Star input now has Claude-style prompt starters (Write · Research · Brainstorm · Analyze) —
approximated from the HCMGPT/Claude pattern; confirm the exact set/labels. Top bar now has working
**notifications** and **user** dropdowns, and the **New** menu + App Switcher use your real icons
(inlined so they never fail to load). Calendar is now Month (default) / Week / Day / Agenda, switchable.

## 🟡 Q20 — Insights = Reports (charts shown are illustrative)

Insights is now a **Reports** page: an HQ-style filter bar (Period / Department / Region / Add
filter + Chart·Table toggle) and report sets that **depend on connected apps** — Overview,
Finance (Acquire + Salesforce), Workforce (Hire + Acquire), Project management (Jira), Sales
(Salesforce), and a **locked** Support set that prompts "Connect Zendesk" to demonstrate the
dependency. **Build note:** the prototype draws charts as inline SVG to stay dependency-free —
**production should use Recharts** (AreaChart, BarChart, PieChart/donut, horizontal BarChart map
1:1 to what's shown). All numbers are illustrative. Confirm the report-set list, which app gates
each set, and the default set on load.

## HeroUI mapping (for the build)| Shell element | HeroUI primitive |
|---|---|
| Create menu | `Dropdown` / `DropdownMenu` |
| Settings takeover | `Modal` (size full-ish, `backdrop="blur"`) |
| Toggle / Switch | `Switch` |
| Pills (priority/source) | `Chip` |
| App Switcher | `Popover` + grid of `Card`/`Button` |
| Buttons (Create, pills) | `Button` (radius full) |
| Avatar | `Avatar` |
Visual style stays governed by `tokens.css` — HeroUI is the implementation library, not the look.
