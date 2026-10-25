---
title: Claude-powered Cursor Automations
summary: Autonomous agents that publish weekly Linear project updates and turn a Slack message into release notes in four languages.
role: Senior QA Engineer · Author
period: "2026"
tech: [Cursor Automations, Claude Opus, Linear MCP, Slack]
featured: true
order: 3
---

## The problem

Two recurring jobs took time every week without needing much judgement: writing project status updates for stakeholders, and turning a release's tickets into customer-facing release notes — in every language the app ships in.

## Weekly Linear project updates

A scheduled Cursor Automation on Claude Opus runs every Friday morning:

- Finds every in-progress project I lead across two teams, reads its latest status update and collects the issues completed since then.
- De-duplicates against work already reported as shipped — while still promoting previously "planned" items that are now done.
- Writes the update in **that project's own format and tone**, grouping work into meaningful bullets instead of restating ticket titles, and keeps a "Working on next" list.
- Publishes it to Linear with a health status, and skips projects with nothing new.
- Uses agent memory to learn each project's style over time. Guardrails: it only reports work backed by a completed issue and never invents progress.

## Release notes from a Slack message

A Slack-triggered Cursor Automation for the Service app:

- A message starting with `release_notes` plus a list of Linear tickets starts the run.
- The agent reads each ticket and writes release notes the way an experienced product manager would — user value first, grouped into New, Improvements and Fixes, one short line per item, internal work left out.
- It produces natural, localized **English, German, Dutch and Swedish** versions, keeping product and UI names consistent, and replies in the same Slack thread.
- Guardrails: no invented features, no version numbers, and it asks for tickets if none were given.

## Outcome

- Stakeholder updates and release notes now arrive on time without anyone writing them by hand.
- Consistent quality and tone across projects and languages.
