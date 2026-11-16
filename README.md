# Oliver Murray

A personal site. Astro builds Markdown notes into static HTML, and Cloudflare Workers serves the output.

## Write

- Each page is a Markdown file in `src/content/notes`. Open that folder as a vault in Obsidian.
- The file name sets the URL. `about.md` becomes `/about`.
- The front matter needs a `title`. `description`, `pubDate`, and `updatedDate` are optional.
- A note with a `pubDate` shows in the list on the home page and in the RSS feed.

## Commands

| Command        | Action                                           |
| :------------- | :----------------------------------------------- |
| `pnpm install` | Install the dependencies                         |
| `pnpm dev`     | Start the local server at `localhost:4321`       |
| `pnpm build`   | Build the site to `./dist`                       |
| `pnpm preview` | Show the build locally                           |
| `pnpm deploy`  | Build the site and deploy it to Cloudflare       |

## Settings

- Site title and description: `src/consts.ts`.
- Site URL: `site` in `astro.config.mjs`.
- Node version: `.nvmrc`. Run `fnm use`.
