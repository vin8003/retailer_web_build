---
name: review-before-push
description: >-
  Pre-push checklist for retailer_web_build: summarize artifact commits/diff,
  secret skim, call out that main push deploys Cloudflare Pages. Use when about
  to git push main or when the user asks to push or deploy the retailer site.
---

# Review before push (retailer_web_build)

## When

Before any `git push` (especially `main`) or when the user asks to push/deploy. Artifact updates should originate from `retailer_ordereasy_njs` deploy-frontend.

## Checklist

1. **Range** — `git log` / `git diff` against upstream (or `main`). Summarize commits and notable file churn (static HTML/JS/CSS/assets).
2. **Secrets** — Skim that diff for `.env*`, credentials, `service_account`, `*.pem`/`*.key`, Bearer tokens, `AKIA…`, `BEGIN … PRIVATE KEY`, accidental key material copied from the build.
3. **Tests** — This repo has no app test suite. Confirm the source build in `retailer_ordereasy_njs` ran `npm test` green before the artifact sync when this push is a deploy.
4. **Deploy side effects** — Pushing **`main`** → **Cloudflare Pages goes live**. State that clearly.
5. **Present findings** — Short review to the user; push only after confirmation (or prior explicit push/deploy ask in the same turn). Never force-push.

## Output template

```markdown
## Pre-push review (artifact repo)
- **Branch → remote**: … (main = production Pages)
- **Commits / churn**: …
- **Secrets skim**: clean / issues found
- **Source tests**: npm test in retailer_ordereasy_njs — pass/fail/unknown
- **Deploy implication**: push main → Cloudflare Pages live
- **Ask**: OK to push?
```
