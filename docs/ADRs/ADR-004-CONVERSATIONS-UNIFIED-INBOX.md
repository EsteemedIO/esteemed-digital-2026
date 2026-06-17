# ADR-004: Conversations as Unified Inbox

**Status:** Proposed
**Date:** 2026-06-08
**Extends:** ADR-002 (Platform Shell Design System)
**Source:** Design handoff SPEC_UPDATES C, OPEN_QUESTIONS Q15

---

## Context

The original spec treated Conversations as a Star AI chat interface. The design handoff redefines it as a unified inbox: Star AI threads plus every connected communication channel in one list.

---

## Decision

**Conversations is the unified inbox.** It combines:

1. **Star AI threads** — the AI assistant conversation history
2. **Connected channels** — Email, LinkedIn, X (Twitter), Slack, and future channels

### UI structure

- **Thread list** with per-channel filter chips (All, Star, Email, LinkedIn, X, Slack)
- **Reading pane** alongside the thread list (desktop); full-screen on mobile
- **Composer adapts per channel:** "Ask Star..." for AI threads, "Reply to..." for channel messages
- **Channel badges** on each thread row indicate source (monochrome glyphs at build, official brand logos at polish)

### Channel configuration

Connected channels are managed from **Settings > Integrations** (the tool-connections surface, not the top-level Integrations/Connect connectors page).

---

## Open Items

- Full channel list for launch (Email and Slack are likely first; LinkedIn and X may follow)
- Per-channel reply rules and limits (X DM length, LinkedIn InMail rules, Slack thread vs. channel reply)
- Whether Star AI can draft/send on behalf of the user in connected channels
- Channel authentication flows (OAuth per provider via Settings > Integrations)

---

## Consequences

- Conversations becomes the most complex view in the shell — needs careful state management for multi-channel threading.
- Star AI is no longer a standalone chat; it lives as one channel within Conversations.
- The reading pane must handle different message formats per channel (rich HTML email, Slack blocks, short-form X DMs).
