# Spec updates needed — before the Claude Code handoff

This file lists every decision made in the **prototype** (`Esteemed Shell.html`) that the written
spec (`esteemed-platform-shell-spec.md`) does **not** yet reflect. Claude Code builds from the spec,
so anything not folded back in here will be lost or re-litigated. Work top to bottom; each item says
**what changed**, **why**, and **where in the spec it lands**.

Legend: 🔴 must update (structural / will cause wrong build) · 🟡 should update · 🟢 nice-to-have

---

## A. Design tokens (spec §Design tokens / `tokens.css`) — 🔴

These overrode locked values from the original brief. The prototype's `tokens.css` is now the source
of truth — point the spec at it and note the supersessions:

| Token | New value | Was | Note |
|---|---|---|---|
| `--es-border` / dividers | `#D7D7D7` | `#E4E4E4` | All borders + divider lines. Overrides brief "locked" card border. |
| Primary body text `--es-fg-1` | `rgba(0,0,0,0.85)` (#000000D9) | warm near-black | Ant-Design-style token. |
| Pill / chip outline `--es-pill-outline` | `#282828` | grey | White-bg pill buttons + chips use a 2px #282828 outline. |
| Font family | **Inter** variable 100–900 only | Manrope display + Inter | Manrope dropped entirely; Inter for display too. |
| Semantic colors | Toastify palette — success `#07BC0C`, warning `#F1C40F`, error `hsl(6,78%,57%)`, info `#3498DB` | muted custom | Replaced wholesale. |
| Toggle "on" | yellow `#FEE546` track, grey `#C8C7CC` off | — | Confirm in spec's Switch component. |

**Action:** replace the spec's token table with the prototype `tokens.css`, and delete the brief's
"yellow/border locked" lines that these supersede.

---

## B. Navigation & information architecture (spec §Shell / LeftNav) — 🔴

The left nav grew and reordered. Spec must show the final IA:

1. **New +** (was "Create") — renamed so it doesn't collide with the **Create** app. It's a
   Calendly-style dropdown: Candidate · Event (Meeting / Interview) · Contact · Company.
2. Nav order (top group): **Home · Conversations · Calendar · Projects · Workflows · Agents · Integrations · Insights**.
   - **Workflows** — new. Mirrors the existing **HCMGPT Workflows** build (see §G).
   - **Agents** — new. 5-agent roster (see §E).
   - **Integrations** — new top-level item = the **Connect / Onyx connectors** UI (distinct from
     Settings › Integrations; see §F + naming conflict below).
   - **Insights** — moved to the bottom of the group; it is a **Reports** page (see §D).
   - Removed the disclosure chevron from Projects.
3. **Top bar:** search is now an **icon** (left of the apps menu), not an open field. Added working
   **notifications** dropdown (bell) and **user** dropdown (avatar). Spec should define what the
   search icon opens (command palette recommended — currently unspecified).

---

## C. Conversations = unified inbox (spec §Conversations) — 🔴

Spec currently treats Conversations as the Star AI chat. **It is the unified inbox**: Star AI threads
**plus** every connected channel — Email, LinkedIn, X, Slack, … — in one list, with per-channel
filter chips and a reading pane. The composer adapts per channel ("Ask Star…" vs "Reply to …").
**Spec needs:** the channel list supported at launch, per-channel reply rules/limits, and confirmation
that channels are configured from Settings › Integrations.

---

## D. Insights = Reports (spec §Insights) — 🔴

Not a generic dashboard. It is a **Reports** page built on **Recharts**, with **HQ-style filtering**,
and its content is **driven by the connected apps**. Report sets shown: Overview, **Finance**,
**Workforce**, **Project management (Jira)**, Sales/Pipeline. Charts follow the **Alpaca** treatment
(value + delta header, 1D/1M/1Y/All range pills, dense line + soft gradient fill, ~3 faint dashed
gridlines). Tabs use a **3px yellow underline** (HeroUI style). Multi-line charts use **tints of the
brand yellow/gold**, not yellow-vs-black. Summary KPI cards + "Top projects by activity" (yellow
progress bars) are part of the layout. **Spec needs:** which connected apps unlock which report sets,
and the real metrics/queries behind each.

---

## E. Agents (spec — new section) — 🔴

New page. **Five agents**, each with role + skills described to the user:
**Marketer · Writer · Recruiter · Social Media Manager · Publicist**. Card = icon badge with a
**status dot** (green online / grey offline), name, role, description, skills chips, and a CTA.
Online → "Assign a task"; **offline → "Connect"** (filled-yellow primary). The AI star sits on a
white circle w/ 2px grey outline where shown. **Spec needs:** canonical role/skill copy, what
"Connect" does, and how an agent comes online.

---

## F. Integrations — two surfaces, naming conflict (spec §Settings + new) — 🟡

There are now **two** "Integrations":
1. **Settings › Integrations** — tool connections (Google Calendar, Gmail, Slack, Greenhouse…) +
   the **cost calculator** (pricing logic still TBD).
2. **Top-level Integrations** nav — the **Connect (Onyx fork) connectors** page (Drive, Gmail, Slack,
   Confluence, Notion, GitHub, Jira, Salesforce, web crawler…) with per-connector sync status and
   enable/disable toggles. Connected sources show a yellow "on" toggle; a disabled example (Web
   crawler, grey/off) is shown.

**Action:** spec must disambiguate the two (rename one — "Connectors" or "Sources" — or merge), and
define the connector list + sync states.

---

## G. Reuse existing approved builds (spec §dependencies) — 🟡

Two screens are **stubbed in the prototype on purpose** and should be lifted from existing, already
approved Esteemed code rather than re-designed:
- **Workflows** → the **HCMGPT Workflows** UI.
- **Integrations / connectors** → the **Connect (Onyx fork)** connectors page.
- **Prompt starters** on Home (Write · Research · Brainstorm · Analyze) → from the Claude-style
  HCMGPT prompt patterns.

**Action:** the spec should reference these source repos/screens directly so Claude Code pulls from
them instead of inventing. (Attach them and fidelity goes way up.)

---

## H. Settings presentation (spec §Settings) — 🟡

Settings opens as a **full-takeover modal** with an X (HeroUI `Modal`, backdrop blur, Esc + click-away
to close). **Confirm in spec** whether it should also be a real `/settings` route under the hood for
deep-linking, even though it presents as a modal.

---

## I. App Switcher (spec §App Switcher) — 🟡

- **Seven apps** now: Acquire · Hire · Create · Intelligence · Agents · Connect · **Curate (CMS/DAM)**.
  Curate is the new 7th tile — confirm grid balance (currently 3/3/1).
- Tiles use the **real product icons** (Lucide glyph in the yellow brand tile), **inlined** so they
  never fail to load. Intelligence / Agents / Connect tiles are composed pending official art.
- "Assist" is fully retired → **Agents** (tile, sublabel, and "Try Agents" callout).

---

## J. Components to add to the spec's inventory — 🟢

New/changed components the spec's component section should list: unified-inbox thread row + channel
badge, channel filter chip, Calendar month grid + week/day time grid + segmented view switcher,
agent card, Recharts report cards (line w/ range pills, bars, donut, hbar progress), connector row,
notifications dropdown, user dropdown, New-menu dropdown, prompt-starter pill, Projects filter chips.

---

## HeroUI mapping (carry into the spec)

| Shell element | HeroUI primitive |
|---|---|
| New menu, user/notifications menus | `Dropdown` / `DropdownMenu` |
| Settings takeover | `Modal` (backdrop blur) |
| Toggles | `Switch` |
| Pills / labels | `Chip` |
| App Switcher | `Popover` + `Card`/`Button` grid |
| Tabs (Insights) | `Tabs` (3px yellow underline) |
| Charts | **Recharts** (not HeroUI) |

Visual style stays governed by `tokens.css`; HeroUI + Recharts are the implementation libraries.

---

## Still open (need your input before/at handoff)

- Pricing logic behind the cost calculator.
- Channel list + per-channel rules for the unified inbox.
- Which connected apps unlock which Insights report sets (+ real metrics).
- Agent role/skill canonical copy and the "Connect" flow.
- The two-"Integrations" naming resolution.
- Official tile art for Intelligence / Agents / Connect.
- The HCMGPT Workflows + Connect/Onyx connectors source designs.
