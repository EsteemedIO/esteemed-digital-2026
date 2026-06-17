# ADR-008: Integrations vs. Connectors — Naming Resolution

**Status:** Proposed
**Date:** 2026-06-08
**Extends:** ADR-002 (Platform Shell), ADR-003 (App Switcher)
**Source:** Design handoff SPEC_UPDATES F, OPEN_QUESTIONS Q18

---

## Context

The design handoff surfaces a naming conflict: two different "Integrations" surfaces exist in the shell.

1. **Settings > Integrations** — tool connections (Google Calendar, Gmail, Slack, Greenhouse) + cost calculator. These are user-level productivity integrations that feed Conversations, Calendar, etc.
2. **Top-level Integrations nav item** — the Connect (Onyx fork) connectors page (Drive, Gmail, Slack, Confluence, Notion, GitHub, Jira, Salesforce, web crawler). These are data/document sources that feed the RAG retrieval layer.

Having both called "Integrations" will confuse users.

---

## Decision

### Rename the top-level nav item; keep Settings > Integrations as-is

- **Settings > Integrations** stays as "Integrations" — this is where users connect their everyday tools (calendar, email, Slack). Familiar SaaS pattern.
- **Top-level nav item** becomes **"Sources"** — this is the Connect product's connector management UI. It manages the document/data sources that feed RAG retrieval (Intelligence, Agents, Conversations context).

### Rationale

- "Sources" clearly describes what it manages: data sources indexed for retrieval.
- It aligns with Connect's role as the RAG product — you're connecting *sources* of knowledge.
- "Connectors" was considered but is more of an implementation term. "Sources" is user-facing and intuitive.
- Since Connect is confirmed as a standalone app (ADR-003), the top-level Sources page is effectively the in-shell management view for the Connect product.

### Nav update

Left nav order becomes: Home, Conversations, Calendar, Projects, Workflows, Agents, **Sources**, Insights

---

## Open Items

- Confirm "Sources" as the label (alternatives: "Connectors", "Data Sources", "Knowledge")
- Whether Sources should show a badge/count of active connectors
- Sync status indicators per connector (connected, syncing, error, disabled)
- Whether Sources is visible to all users or only those with Connect enabled

---

## Consequences

- All references to "top-level Integrations" in the design handoff should be read as "Sources."
- Connect product page on esteemed.io should use "Sources" language when describing the in-platform management UI.
- Settings > Integrations and Sources are distinct surfaces with different purposes — documentation and onboarding must make this clear.
