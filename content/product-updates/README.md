# Product Updates Content Management

This directory contains markdown files for OpenMetadata product updates/release notes.

## Structure

- `versions.json` - Contains metadata for all versions (version number, date, whether it has features)
- `v*.md` - Individual markdown files for each version

## Adding a New Version

1. Add the version metadata to `versions.json`:
```json
{
  "version": "v1.8.0",
  "date": "Released on 1st July 2025.",
  "hasFeatures": true,
  "note": "Optional note about the release"
}
```

2. Create a markdown file named `v1.8.0.md` with the following frontmatter:
```markdown
---
id: 80
version: v1.8.0
date: "Released on 1st July 2025."
note: "Optional note"
---
```

3. Add content sections as needed:

### Features Section
```markdown
## Features

### Feature Title

Short description of the feature.

<YouTube videoId="VIDEO_ID" />

Long description with more details about the feature.
```

### Changelog Section
```markdown
## Changelog

### 🔧 Fixes
- Fix item 1
- Fix item 2

### ✨ Improvements
- Improvement 1
- Improvement 2
```

## Collate Features

For features that are only available in Collate, include "Collate" in the feature title. The system will automatically add the Collate badge and styling.

Example:
```markdown
### Automatically Propagate Collate Metadata into Your Data Platforms
```

## YouTube Videos

To embed YouTube videos, use the custom YouTube component:
```markdown
<YouTube videoId="5iiN2gtJzwo" />
```

Extract the video ID from the YouTube URL:
- Full URL: `https://www.youtube.com/watch?v=5iiN2gtJzwo`
- Embed URL: `https://www.youtube.com/embed/5iiN2gtJzwo`
- Video ID: `5iiN2gtJzwo`

## Emoji Reference for Changelog Sections

- ⚠️ Backward Incompatible Changes
- 🤖 Automations
- 📊 Data Quality
- 🔌 Connectors
- 📈 Data Insights
- 🔗 Lineage
- 👁️ Data Observability
- 🔍 Search & Discovery
- 🔧 APIs & Extensibility / Fixes
- 📥 Bulk Import & Export
- 🆕 New Connectors
- ✨ Improvements
- 🚀 Enhancements
- 📝 Changes
- 🔄 Migration Fixes
- 🛠️ General (default)