---
title: Slack ChatOps Test Runner
summary: A /hb-run Slack command that starts any mobile test suite on demand and reports the result back in the thread.
role: Senior QA Engineer · Author
period: "2026"
tech: [TypeScript, Vercel, Slack API, GitHub Actions API]
order: 6
cover: ../../assets/projects/slack-test-runner.svg
coverAlt: Illustration of a Slack thread where a /hb-run command starts a GitHub Actions workflow and reports that the suite passed.
---

## The problem

Running a specific test suite — a given platform, environment and market — meant opening GitHub Actions, finding the right workflow and filling in its inputs. Developers and product managers rarely did it themselves.

## What I built

- A serverless function on Vercel behind a Slack slash command:
  `/hb-run <android|ios> <dev|stg> <market or suite> [app_url=…] [branch=…]`
- It maps the command to the right one of 16 GitHub Actions workflows and dispatches it, optionally against a specific app build or branch.
- It posts an acknowledgement that becomes the Slack thread, adds the GitHub run link, and the workflow itself replies with pass/fail in the same thread when it finishes.
- Security first: every request is verified with Slack's HMAC signature and a replay window, using a constant-time comparison; credentials live only in environment variables, using a scoped, rotated GitHub token.
- Clear feedback for invalid combinations and missing configuration, instead of silent failures.

## Outcome

- Anyone on the team can start a targeted regression run from Slack in seconds and follow the result in one thread.
