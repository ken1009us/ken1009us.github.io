# Content Management Guide

All portfolio content lives in `src/content/` as JSON files. To update the site, edit or add JSON files, commit, and push — GitHub Actions will auto-deploy.

---

## Profile (`src/content/profile/ken.json`)

Update name, title, location, summary, etc.

```json
{
  "name": "Shu-Hao (Ken) Wu",
  "title": "Software Engineer / Site Reliability Engineer",
  "location": "Tokyo, Japan",
  "email": "ken.wu.951009@gmail.com",
  "website": "www.ken-wu.com",
  "degree": "Master of Science",
  "university": "University of Illinois at Urbana-Champaign",
  "summary": "Your bio here...",
  "social": {
    "github": "https://github.com/ken1009us",
    "linkedin": "https://www.linkedin.com/in/shwu02"
  }
}
```

---

## Work Experience (`src/content/experience/`)

Each job is a separate JSON file (e.g. `thecoo.json`, `allstate.json`).

**Add a new job:** Create `src/content/experience/<company-name>.json`

```json
{
  "company": "Company Name",
  "role": "Your Role",
  "startDate": "2026",
  "endDate": "Present",
  "location": "Tokyo, Japan",
  "type": "Remote",
  "order": 0,
  "categories": {
    "Engineering": [
      "Did something impactful",
      "Built something great"
    ],
    "Infrastructure": [
      "Managed cloud resources"
    ]
  }
}
```

**Fields:**
- `order`: Lower = shows first. Set new job to `0` and increment existing ones.
- `categories`: Group bullet points by topic. Key = section title, value = array of strings.
- `type`: Free text (e.g. `"Remote"`, `"Hybrid"`, `"On-site"`).

**Update an existing job:** Edit the corresponding JSON file directly.

**Remove a job:** Delete the JSON file.

---

## Projects (`src/content/projects/`)

Each project is a separate JSON file.

**Add a new project:** Create `src/content/projects/<project-name>.json`

```json
{
  "name": "my-project",
  "displayName": "My Project",
  "category": "proj",
  "description": "Short description",
  "tech": ["Python", "FastAPI"],
  "github": "https://github.com/ken1009us/my-project",
  "liveUrl": null,
  "order": 0
}
```

**Fields:**
- `category`: Must be one of `"tool"`, `"proj"`, or `"game"`.
- `github` / `liveUrl`: Set to `null` if not applicable.
- `order`: Lower = shows first.

---

## Skills (`src/content/skills/skills.json`)

Single file with all skills grouped by category.

```json
{
  "categories": {
    "Languages": [
      { "name": "Python", "level": 100 },
      { "name": "JavaScript", "level": 80 }
    ],
    "Cloud & Infrastructure": [
      { "name": "AWS", "level": 90 }
    ]
  }
}
```

**Fields:**
- `level`: 0–100, rendered as an ASCII bar chart.
- Add/remove categories freely. Key = section title.

---

## Recommendations (`src/content/recommendations/`)

Each recommendation is a separate JSON file.

**Add a new recommendation:** Create `src/content/recommendations/<person-name>.json`

```json
{
  "author": "Jane Doe",
  "title": "CTO, Some Company",
  "text": "Ken is an excellent engineer...",
  "order": 0
}
```

---

## Deploy Workflow

```
Edit JSON → git add → git commit → git push → Auto deployed
```

Build runs via GitHub Actions (`.github/workflows/deploy.yml`). Typically takes ~1 minute.

## Local Development

```bash
npm run dev    # Start dev server at localhost:4321
npm run build  # Build to dist/
```
