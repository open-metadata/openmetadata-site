---
name: prep-product-update
description: Use when the user shares an OpenMetadata GitHub release link (github.com/open-metadata/OpenMetadata/releases/tag/X.Y.Z-release) or the product-updates page URL for a version, and wants the site's product update page prepared. Also use when asked to "prep the product update", "draft the changelog", "add release notes", or "generate the release page" for a new version of open-metadata-site.
---

# Prep OpenMetadata Product Update

## Overview

The user maintains open-metadata-site (this repo). Each OpenMetadata release needs a matching markdown file under `content/product-updates/` and a metadata entry in `content/product-updates/versions.json`. This skill takes a release identifier (a GitHub release URL or the product-updates page URL) and produces both files in the exact style the site already uses.

## Inputs Accepted

- `https://github.com/open-metadata/OpenMetadata/releases/tag/X.Y.Z-release`
- `https://open-metadata.org/product-updates#vX.Y.Z-changelog`
- Bare version + link — anything containing `X.Y.Z` is enough to derive the tag.

## Workflow

Follow these steps in order. Do not skip.

### 1. Parse the version

Extract `X.Y.Z` from the link. The GitHub tag is `X.Y.Z-release`. The site version string is `vX.Y.Z`. The file is `content/product-updates/vX.Y.Z.md`.

### 2. Confirm the previous release

Read `content/product-updates/versions.json` to find the most recent published version. Use its tag (e.g. `1.13.3-release`) as the base for the GitHub compare. Note its `id` — the new file's `id` is `max(id) + 1`.

### 3. Pull the release notes and commit list

Try the release body first:

```bash
rtk gh api repos/open-metadata/OpenMetadata/releases/tags/X.Y.Z-release | jq -r '.body'
```

If `body` is `null` or empty (common when the release is still being cut), fall back to the compare API and paginate manually — 100 per page — because releases regularly exceed 100 commits and `--paginate` gets swallowed by rtk's jq filter:

```bash
gh api "repos/open-metadata/OpenMetadata/compare/PREV-release...X.Y.Z-release?per_page=100&page=1" > /tmp/p1.json
gh api "repos/open-metadata/OpenMetadata/compare/PREV-release...X.Y.Z-release?per_page=100&page=2" > /tmp/p2.json
jq -r '.commits[] | "\(.sha[0:8]) \(.commit.message | split("\n")[0])"' /tmp/p*.json > /tmp/commits.txt
```

Check `.total_commits` first to know how many pages to fetch.

### 4. Read the previous version file as a style reference

`content/product-updates/vPREV.md` shows the exact tone, grouping, and formatting for a maintenance release. Match it:

- **One-sentence release summary** at the top of `## Changelog`, calling out the themes (e.g. "connector reliability, search and lineage correctness, governance workflow stability").
- **Group by area** using the emoji headings from `content/product-updates/README.md`:
  - 🔌 Connectors & Ingestion
  - 📊 Data Quality
  - 🔍 Search & Discovery
  - 🛡️ Data Governance & Quality
  - 🔗 Lineage
  - 🤖 MCP Server / Automations
  - 🔐 Authentication
  - ⚙️ Platform
  - 🎛️ UI
  - 🔒 Security
  - 📣 Notifications
  - ⚠️ Backward Incompatible Changes (only if present)
- **Each bullet is one line**: `**Short problem statement** [#PR](url): what the fix does + why it matters.` Focus on user-facing symptoms, not internal refactors.

### 5. Filter commits

Drop from the changelog:

- CI / workflow tweaks (`ci:`, `test(playwright):`, `test(e2e):`, `fix(e2e):`, `chore:`, `build fix`, `nit`, "Revert" followed by a re-apply)
- Merge commits and branch rebases
- Version bump commit itself (`chore(release): bump version to X.Y.Z`)
- Test flake fixes that don't affect end users
- Anything that got reverted with no re-apply

Keep:

- Connector fixes with a named connector (Snowflake, Databricks, Oracle, BigQuery, MLflow, Tableau, Trino, Unity Catalog, Fivetran, KafkaConnect, ADLS, BurstIQ, etc.)
- Security bumps that clear a specific CVE or upgrade a runtime (Debian, Python, netty, thrift, BouncyCastle, httpclient5, c3p0, sqlparse, libthrift, etc.) — group these together under 🔒 Security
- Search, lineage, governance, workflow, and MCP fixes
- Backend fixes with visible impact (async delete, pagination, API endpoints, permissions)
- Real UI regressions and new UI affordances
- **Migrations** — always call these out (search for "migration" in the commit body if unsure)
- Anything explicitly marked "Fixes #NNNN"

If a fix was reverted, then re-applied later in the same release, cite the final PR only.

### 6. Look up PR titles when unclear

The commit subject is usually enough. If a subject is opaque, fetch the PR body:

```bash
gh pr view NNNN --repo open-metadata/OpenMetadata --json title,body
```

Do this sparingly — batch grouping decisions from the subjects first.

### 7. Write the file

Path: `content/product-updates/vX.Y.Z.md`. Frontmatter:

```markdown
---
id: NEXT_ID
version: vX.Y.Z
date: Released on Nth <Month> YYYY.
---
```

- `date` — parse the release's `published_at` from the GitHub API. Format is the site's convention: `Released on 21st August 2026.` with ordinal suffix (`1st`, `2nd`, `3rd`, `4th`…).
- Body starts with `## Changelog` on line 8 (one blank line above), matching the previous file.

### 8. Update versions.json

Prepend the new version to the array in `content/product-updates/versions.json`:

```json
{
  "version": "vX.Y.Z",
  "date": "Released on Nth <Month> YYYY.",
  "hasFeatures": false
},
```

Set `hasFeatures` to `true` only if the release has a `## Features` section with actual product features (not maintenance fixes). For every `X.Y.Z` patch release, `hasFeatures` is `false`.

### 9. Verify

Before reporting done:

- `rtk proxy grep "^id:" content/product-updates/*.md | sort -t: -k2 -n | tail` — confirm no duplicate IDs.
- Open `versions.json` and check the new entry is first and the JSON is still valid.
- Skim the generated markdown once — every bullet should read as a sentence a user cares about, every link should point at a real PR.

## Style Rules (do not violate)

- **One line per fix.** No sub-bullets, no paragraphs.
- **Bold the problem, not the fix.** Users scan for symptoms.
- **Cite the merged PR**, not the linked issue. Link format: `[#NNNNN](https://github.com/open-metadata/OpenMetadata/pull/NNNNN)`.
- **Never fabricate PR numbers.** If you can't find the PR, leave the commit SHA link: `[\`abcdef12\`](https://github.com/open-metadata/OpenMetadata/commit/abcdef12345…)`.
- **No emojis in bullet text**, only in section headings.
- **No "we", "our", "the team".** Third-person, present tense.
- **Group carry-forwards from the previous release only when they were actively reinforced** (a follow-up fix in this release). Otherwise skip — don't rehash last version's changelog.

## Quick Reference

| Task | Command |
|---|---|
| Release body | `gh api repos/open-metadata/OpenMetadata/releases/tags/X.Y.Z-release \| jq -r '.body'` |
| Compare commits | `gh api "repos/open-metadata/OpenMetadata/compare/PREV-release...X.Y.Z-release?per_page=100&page=N"` |
| PR detail | `gh pr view NNNN --repo open-metadata/OpenMetadata --json title,body` |
| Next id | `grep "^id:" content/product-updates/*.md \| awk -F: '{print $NF+0}' \| sort -n \| tail -1` |
| Published date | `gh api repos/open-metadata/OpenMetadata/releases/tags/X.Y.Z-release \| jq -r '.published_at'` |

## Common Mistakes

- **Skipping pagination.** `--paginate` + `jq -s` looks fine but silently truncates when the compare exceeds a page. Always check `.total_commits` and fetch page-by-page.
- **Copying the raw commit list.** The changelog is curated, not a mirror of `git log`. If a bullet doesn't have a user-facing effect, drop it.
- **Wrong id.** New files continue the counter from the highest existing `id:`, not from the previous version's id + 1 (patches can be out of order — always take the max).
- **`hasFeatures: true` on a patch.** A patch never has a Features section. Only major/minor releases do.
- **Guessed dates.** Read `published_at` from the GitHub API; don't guess from the tag name.

## Verification Checklist

Before ending the turn:

- [ ] `content/product-updates/vX.Y.Z.md` exists with the correct frontmatter.
- [ ] `content/product-updates/versions.json` has the new entry as its first element.
- [ ] Every PR link is a real PR on `open-metadata/OpenMetadata`.
- [ ] Every reverted-and-not-reapplied change is absent.
- [ ] The one-sentence intro names the themes, not just "maintenance release".
- [ ] Migrations are called out explicitly.
- [ ] Security section groups CVE bumps together with the CVE ID where known.
