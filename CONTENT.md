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

## Translations / i18n (`src/i18n/`)

The site supports 3 languages: **English** (default), **日本語**, **繁體中文**. Users switch with the `lang` command.

- Content JSON files (`src/content/`) stay **English only** (source of truth)
- Translations live in `src/i18n/en.ts`, `ja.ts`, `zh-TW.ts`
- Missing translations automatically fall back to English — nothing breaks

### Adding translations for new Experience

1. Create the JSON file in `src/content/experience/` as usual (English)
2. Add a mapping in `src/components/terminal/commands/experience.tsx`:
   ```ts
   const COMPANY_KEYS: Record<string, string> = {
     ...existing,
     'New Company Name': 'new-company',  // company field → translation key
   };
   ```
3. In `src/i18n/ja.ts` and `src/i18n/zh-TW.ts`, add to the `experience` section:
   ```ts
   categories: {
     'New Category': '翻訳 / 翻譯',  // only if it's a new category name
   },
   bullets: {
     'new-company': {
       'Category Name': [
         'Translated bullet 1',
         'Translated bullet 2',
       ],
     },
   },
   ```

### Adding translations for new Project

1. Create the JSON file in `src/content/projects/` as usual (English)
2. In `ja.ts` / `zh-TW.ts`, add to `projects.descriptions`:
   ```ts
   descriptions: {
     'project-name': 'Translated description',  // key = the `name` field in JSON
   },
   ```

### Adding translations for new Recommendation

1. Create the JSON file in `src/content/recommendations/` as usual (English)
2. Add a mapping in `src/components/terminal/commands/recommendations.tsx`:
   ```ts
   const AUTHOR_KEYS: Record<string, string> = {
     ...existing,
     'Author Display Name': 'author-key',
   };
   ```
3. In `ja.ts` / `zh-TW.ts`, add to `recommendations.texts`:
   ```ts
   texts: {
     'author-key': 'Translated recommendation text',
   },
   ```

### Adding translations for new Skills category

No mapping needed. In `ja.ts` / `zh-TW.ts`, add to `skills.categories`:
```ts
categories: {
  'New Category Name': 'Translated name',  // key = exact category name from skills.json
},
```

### Adding a new UI string

1. Add the English string in `src/i18n/en.ts`
2. Add the type in the `Translations` interface in `src/i18n/index.ts`
3. Add translations in `ja.ts` / `zh-TW.ts`
4. Use `t('key.path')` in the component

### Adding a new language

1. Create `src/i18n/xx.ts` (export type `TranslationsPartial`)
2. In `src/i18n/index.ts`:
   - Add to `Lang` type
   - Add to `translations` record
   - Add to `SUPPORTED_LANGS` array
3. In each language file, add the display name to `lang.labels`

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
