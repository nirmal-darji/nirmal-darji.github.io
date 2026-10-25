---
title: AI-assisted Nightly Failure Triage
summary: An agent skill plus an unattended CI pipeline that classifies every nightly test failure, reports it to Slack and files deduplicated bug tickets — replacing a manual morning routine.
role: Senior QA Engineer · Designer & author
period: "2026"
tech: [Claude, Cursor, BrowserStack MCP, Python, GitHub Actions, Linear API, Slack API]
featured: true
order: 2
cover: ../../assets/projects/ai-nightly-triage.svg
coverAlt: Illustration of failed nightly tests flowing through an AI node into four categories — real regression, known issue, infrastructure and manual review.
---

## The problem

Every morning someone on the QA team had to open the nightly BrowserStack builds, sift through the failures, decide which were real bugs and which were known noise, and file tickets by hand. It was slow, repetitive and easy to get inconsistent.

## What I built

- **Signal over noise** — triage reads only the automatic *re-run* build, so tests that recovered on retry are already filtered out and only genuine failures remain.
- **A failure taxonomy** with explicit precedence rules: real regression, known app-build issue, infrastructure (device queue timeouts, missing builds) and "needs manual review". Each failure gets a normalized signature, and the rules include a product-vs-automation decision rubric so a test is never "fixed" into hiding a real bug.
- **An agent skill for Cursor** (run with Claude) that follows this procedure interactively through the BrowserStack MCP server — pulling failure logs, root-cause analysis and screenshots for each failed session.
- **An unattended CI version** in dependency-free Python that runs automatically once the re-run build finishes. It posts a Slack summary with the verdict, a one-line root cause, a screenshot and links to the session and video for each failure.
- **Auto-filed, deduplicated tickets** — real regressions become Linear issues from a canonical template. Repeat failures add a "seen again" comment instead of a duplicate, and the same failure on Android and iOS lands in one ticket.
- **Safe rollout** — master switch, Slack kill-switch, a summary-only validation period before auto-filing, and redaction of credentials from every message.

## Outcome

- The morning triage routine became an automatic Slack report waiting for the team.
- Consistent, reproducible classification of failures, with no duplicate tickets.
