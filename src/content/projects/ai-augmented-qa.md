---
title: AI-native QA Workflow
summary: Making a test-automation repo agent-ready — Cursor skills, rules, MCP servers, Cloud Agents and project-specific Bugbot review, powered by Claude.
role: Senior QA Engineer · Initiative lead
period: "2026"
tech: [Claude, Cursor, Cursor Cloud Agents, Bugbot, MCP, GitHub Actions]
featured: true
order: 3
---

## The problem

General-purpose AI assistants write plausible but inconsistent test code — wrong locator strategies, hard-coded sleeps, unregistered page objects. Without project context, AI added review work instead of removing it.

## What I did

- **Agent skills that encode our conventions** — a Page Object authoring skill with a template, locator priority rules, cross-platform requirements and anti-patterns, so AI-generated pages are indistinguishable from hand-written ones.
- **Agent onboarding** — `AGENTS.md` and Cursor rules describe the toolchain, CI constraints and pull-request workflow, so Cursor Cloud Agents can work on the repo autonomously and fix flaky tests.
- **MCP integrations** — the BrowserStack MCP server gives agents direct access to test sessions, logs and screenshots.
- **AI code review** — project-specific Cursor Bugbot rules that block real risks (leaked secrets, unreachable page objects, new flaky waits, test changes that mask product bugs) while skipping style nitpicks. Bugbot replaced our earlier Gemini Code Assist setup as the single AI reviewer.
- **Release automation** — the weekly release kickoff creates the Testmo milestone and the Linear release ticket and posts to Slack automatically, alongside release-status reports and pull-request notifications with auto-merge on approval.

## Outcome

- ~40% faster Page Object authoring and test maintenance.
- Pull requests reviewed automatically against the team's own quality rules.
- Recurring QA admin work replaced by automation.
