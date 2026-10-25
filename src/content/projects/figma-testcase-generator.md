---
title: Figma Test Case Generator
summary: A web app that reads Figma designs and generates structured test cases — before a single line of app code exists.
role: Author
period: "2026"
tech: [TypeScript, React, Node.js, Express, Figma API, Gemini API, Tailwind CSS]
order: 5
---

## The problem

Test design usually starts once a feature is built, so QA is always catching up. The designs in Figma already describe every screen, element and navigation path — they could drive test design from day one.

## What I built

- **Figma integration** — connects to a Figma file through the Figma API and extracts screens, UI elements, text and screen-to-screen transitions.
- **Two generation modes:**
  - **Rule-based** — analyses each screen's elements and flows to produce test cases deterministically.
  - **AI-generated** — prompts an LLM (Gemini) acting as a senior QA engineer to produce UI, text, positive and negative functional, navigation and interaction test cases using the real labels from the design, with structured JSON output.
- **Test case editor** — title, priority, tags, preconditions, steps with expected results, test data and element locators (accessibility ID, XPath, CSS) ready for automation.
- **Export** to Markdown or CSV for import into test management tools.

## Outcome

- Shift-left test design: a first draft of the test suite straight from the design, ready for review before development starts.
