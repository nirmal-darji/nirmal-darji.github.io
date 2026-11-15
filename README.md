# nirmal-darji.github.io

Personal portfolio, built with [Astro](https://astro.build). The live site is [https://nirmal-darji.github.io](https://nirmal-darji.github.io).

Saving a file on your computer does not change the live site. The site updates only after a commit is pushed to `main` on the personal GitHub account **nirmal-darji**, and the **Deploy to GitHub Pages** workflow finishes successfully.

## 1. Edit the content

| What visitors see | File |
|---|---|
| Name, headline, about, email, LinkedIn, CV path, stats, value cards, skills, education, languages | `src/data/profile.ts` |
| Jobs, dates, highlights, tools | `src/data/experience.yaml` |
| Certificates | `src/data/certificates.yaml` |
| Company names and logos | `src/data/companies.ts` and `src/assets/companies/` |
| Recommendation screenshots | `src/data/recommendations.ts` and `src/assets/recommendations/` |
| Project case studies | `src/content/projects/*.md` |
| CV download | `public/cv.pdf` |
| Link-preview image, 1200×630, optional | `public/og.png` |

A few rules the build enforces:

- Dates are `YYYY` or `YYYY-MM`. Leave `end` off the current job so the site shows Present.
- A project with `draft: true` is left out of the site. `order` controls the sequence, lowest first.
- Project covers and company logos live under `src/assets/`. Recommendation slides are PNGs. Put a new file in the matching folder and import it from the data file.
- The CV in `public/cv.pdf` is the copy without a phone number. Do not replace it with a CV that includes a phone number.
- `src/content.config.ts` checks the shape of jobs, certificates and projects at build time. A bad date or URL fails the build instead of going live.

## 2. Check it locally

This repo needs Node `22.23.4` or newer. From the portfolio folder:

```bash
source ~/.nvm/nvm.sh
nvm use
npm install
npm run check
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). `npm run check` type-checks the site and validates the content files. Stop the dev server when you are done.

To see the production build instead:

```bash
npm run build
npx astro preview --host --port 4321
```

## 3. Commit

The repo already records commits as the personal account. Do not change the git config.

```bash
git status
git add -A
git commit -m "fix: describe the content change"
```

Use a short lowercase message. `feat:` for something new, `fix:` for a correction, `docs:` for this file only.

## 4. Publish with the personal GitHub account

The site repository is `nirmal-darji/nirmal-darji.github.io`. A push only works while **nirmal-darji** is the active `gh` account. The work account cannot update this repo.

```bash
gh auth switch --hostname github.com --user nirmal-darji
git push origin main
```

GitHub Actions then runs **Deploy to GitHub Pages** on that push. Wait until that workflow is green:

```bash
gh run watch --repo nirmal-darji/nirmal-darji.github.io
```

Reload [https://nirmal-darji.github.io](https://nirmal-darji.github.io). The first load after a deploy can take a minute, and a cached copy can linger for up to 10 minutes.

Switch the GitHub login back to the work account when the push is done:

```bash
gh auth switch --hostname github.com --user NirmalDarji-1k5
gh auth status
```

`Active account: true` should be next to **NirmalDarji-1k5**.

## If the live site does not change

- The push must be to `main`. Other branches are not deployed.
- The workflow must be green. Open the Actions tab on [nirmal-darji/nirmal-darji.github.io](https://github.com/nirmal-darji/nirmal-darji.github.io/actions).
- `npm run check` must pass locally before you push. The same check runs in the workflow, and a failed check never deploys.
- Confirm `gh api user --jq .login` prints `nirmal-darji` before the push.
