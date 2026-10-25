---
title: Mobile E2E Automation Framework
summary: An Appium + BrowserStack framework built from scratch — 90+ end-to-end tests on real iOS and Android devices, running nightly in CI on every new app build.
role: Senior QA Engineer · Framework author
period: 2024 – present
tech: [Appium, BrowserStack, Java, TestNG, GitHub Actions, Allure]
featured: true
order: 1
---

## The challenge

The Heartbeat app is a Flutter energy-management app for iOS and Android, released weekly to several markets. Regression testing had to keep pace with that cadence without blocking releases.

## What I built

- **Framework from scratch** in Java / TestNG with Appium, running on BrowserStack real devices. A shared page-object layer (35+ pages) and gesture/wait helpers keep tests readable and resilient to Flutter UI rebuilds.
- **90+ E2E tests** covering login, energy dashboards, devices, EV charging, subscriptions, notifications, support and the full onboarding flow for different energy-system setups.
- **Market-specific suites** for Germany, the Netherlands and Sweden, plus dedicated suites for onboarding and a second platform system — each with its own isolated test account.
- **Event-driven CI** — 25+ GitHub Actions workflows. The app repository's CI dispatches each new build to this repo, which stores the build and runs Android and iOS suites nightly on DEV and STG. Failed tests are automatically re-run in a separate build, so flaky failures are filtered out before anyone looks.
- **Repeatable test data** — API-based reset helpers return onboarding accounts to a clean state before and after each run.
- **Quality gates** — compile checks on every pull request, project-specific AI code review, and Slack notifications through the review lifecycle.

## Outcome

- Nightly regression coverage on both platforms for every new app build.
- Release sign-off based on fresh automated results, contributing to ~40% fewer post-release hotfixes.
