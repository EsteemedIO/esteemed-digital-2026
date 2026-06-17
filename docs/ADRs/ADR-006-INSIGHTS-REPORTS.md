# ADR-006: Insights as Connected-App Reports

**Status:** Proposed
**Date:** 2026-06-08
**Extends:** ADR-002 (Platform Shell Design System)
**Source:** Design handoff SPEC_UPDATES D, OPEN_QUESTIONS Q20

---

## Context

Insights was originally a generic dashboard. The design handoff redefines it as a Reports page whose content is driven by which apps the user has connected.

---

## Decision

### Insights = Reports page

- Built on **Recharts** (AreaChart, BarChart, PieChart/donut, horizontal BarChart)
- **HQ-style filter bar:** Period, Department, Region, Add filter, Chart/Table toggle
- **Tabs** with 3px yellow underline (HeroUI `Tabs`)

### Report sets gated by connected apps

| Report Set | Requires |
|------------|----------|
| Overview | Always available |
| Finance | Acquire + Salesforce |
| Workforce | Hire + Acquire |
| Project Management | Jira |
| Sales / Pipeline | Salesforce |
| Support | Zendesk |

Locked/unavailable report sets show a prompt to connect the required app (e.g., "Connect Zendesk to unlock Support reports").

### Chart treatment (Alpaca style)

- Value + delta header on each chart card
- Range pills: 1D / 1M / 1Y / All
- Dense line chart with soft gradient fill
- ~3 faint dashed gridlines
- Multi-line charts use tints of brand yellow/gold (not yellow vs. black)
- Summary KPI cards + "Top projects by activity" with yellow progress bars

---

## Open Items

- Which connected apps unlock which report sets (confirm the table above)
- Real metrics and queries behind each report set
- Default report set on initial load
- Whether reports pull from app APIs in real-time or from a cached/aggregated data layer

---

## Consequences

- Insights is not useful until at least one app is connected — the empty/first-run state matters.
- Report sets grow organically as more integrations are added.
- Recharts is a new dependency for the platform shell.
