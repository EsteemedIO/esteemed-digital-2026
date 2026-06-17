# ADR-005: Agents Page — AI Agent Roster

**Status:** Proposed
**Date:** 2026-06-08
**Extends:** ADR-002 (Platform Shell Design System)
**Source:** Design handoff SPEC_UPDATES E

---

## Context

The platform shell introduces a dedicated Agents page exposing the AI agents available to users. These are the user-facing personas of the Dolphin agent system (built on Oceanic).

---

## Decision

### Five agents at launch

| Agent | Role | Example skills |
|-------|------|----------------|
| Marketer | Marketing strategy & campaigns | Campaign planning, audience targeting, analytics |
| Writer | Content creation | Blog posts, copy, editing, SEO writing |
| Recruiter | Talent sourcing & screening | Candidate search, outreach, screening questions |
| Social Media Manager | Social presence | Post scheduling, engagement, platform strategy |
| Publicist | PR & communications | Press releases, media outreach, crisis comms |

### Agent card anatomy

- Icon badge with **status dot** (green = online, grey = offline)
- Name, role, description
- Skills as chips
- CTA: online -> "Assign a task"; offline -> "Connect" (filled-yellow primary button)
- Star icon on white circle with 2px grey outline where shown

### Status model

- **Online:** agent is connected and ready to accept tasks
- **Offline:** agent needs to be connected/configured before use
- "Connect" initiates the setup flow (TBD — likely linking to relevant integrations)

---

## Open Items

- Canonical role/skill copy for each agent
- What "Connect" does for an offline agent (integration setup? subscription gate? onboarding wizard?)
- How an agent transitions from offline to online
- Whether agents can be customized or are fixed personas
- Relationship to the Agents app in the App Switcher (page = consumer view; app = builder/config view?)

---

## Consequences

- Agents page is a new top-level nav item.
- Agent cards are a new component in the design system.
- The agent roster may expand over time; the UI should handle a variable number of cards.
