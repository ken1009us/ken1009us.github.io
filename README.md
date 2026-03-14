# ken-wu.com

Interactive terminal portfolio built with Astro + React.

## Stack

- **Framework**: Astro 5 + React
- **Styling**: CSS Custom Properties (Catppuccin)
- **Font**: JetBrains Mono
- **Deploy**: GitHub Actions → GitHub Pages

## Commands

```
about              Display bio
skills             List technical skills
experience [co]    Show work history
projects [type]    List projects
education          Show education
contact            Show contact info
recommendations    Show recommendations
resume             View resume
theme              Toggle dark/light
history            Show command history
clear              Clear screen
```

## Development

```bash
npm install
npm run dev       # localhost:4321
npm run build     # Build to dist/
```

## Update Content

All content lives in `src/content/` as JSON files. Edit JSON, push, auto-deployed.

See [CONTENT.md](CONTENT.md) for details.

## License

MIT
