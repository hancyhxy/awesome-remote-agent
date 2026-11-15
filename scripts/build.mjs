// Build README.md and prompts/<id>.md from data/items.json.
//   node scripts/build.mjs
// data/items.json is a copy of site/marketplace/data.json in the Hey Atu site (pi-remote), so the gallery here matches heyatu.com/marketplace.
// Each pick is a moving card made from a short clip of the original, credited and linked to the source.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const root = new URL("..", import.meta.url).pathname;
const db = JSON.parse(readFileSync(root + "data/items.json", "utf8"));
const utm = c => `https://heyatu.com/?utm_source=github&utm_medium=readme&utm_campaign=awesome-atu-marketplace&utm_content=${c}`;
const num = n => n >= 1e6 ? (n / 1e6).toFixed(1).replace(/\.0$/, "") + "M" : n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(n);
const heat = k => k.stars ? `★ ${num(k.stars)} stars` : `♥ ${num(k.likes)} likes`;
const anchor = t => t.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9 -]/g, "").trim().replace(/ +/g, "-");
const promptBy = k => k.promptBy === "Hey Atu" ? "Written by Hey Atu for this pick." : `Prompt by ${k.promptBy === "the creator" ? k.by : k.promptBy === "the post" ? "the post by " + k.by : k.promptBy}.`;

mkdirSync(root + "prompts", { recursive: true });
for (const k of db.items) writeFileSync(root + `prompts/${k.id}.md`, `# ${k.title}

${k.oneLiner}

- Original: [${k.by} on ${k.source}](${k.url}) (${heat(k)}${k.views ? `, ${num(k.views)} views` : ""}${k.tools ? `, made with ${k.tools}` : ""})
- ${promptBy(k)}

## What you get

${k.youGet.map(x => `- ${x}`).join("\n")}

## Prompt

\`\`\`text
${k.prompt}
\`\`\`

Paste it into a chat with [Hey Atu](${utm(k.id)}), or into Claude Code, Codex or Pi.
`);

const cell = k => `<td width="50%" valign="top"><a href="${k.url}"><img src="media/${k.id}.webp" alt="${k.title}, by ${k.by}" width="100%"></a><br><b>${k.title}</b><br>${k.kind} · <a href="${k.url}">${k.by}</a> · ${heat(k)}<br><a href="prompts/${k.id}.md">Prompt</a> · <a href="${utm(k.id)}">Build mine with Atu</a></td>`;
const rows = list => { const out = []; for (let i = 0; i < list.length; i += 2) out.push(`<tr>${cell(list[i])}${list[i + 1] ? cell(list[i + 1]) : '<td width="50%"></td>'}</tr>`); return `<table>\n${out.join("\n")}\n</table>`; };

const readme = `# Atu Marketplace

![Atu Marketplace: apps and videos people loved](media/wall.jpg)

Apps and videos people loved, picked by the Hey Atu team. Pick one, say what to change, and [Hey Atu](${utm("intro")}) builds yours on your Mac: an app you open on your phone, or a finished video. Every pick comes with a prompt you can copy into Hey Atu, Claude Code, Codex or Pi.

Updated ${db.updated}. ${db.items.length} picks.

## Contents

${db.groups.map(g => `- [${g.name}](#${anchor(g.name)}) (${db.items.filter(k => k.group === g.id).length})`).join("\n")}
- [How a pick is chosen](#how-a-pick-is-chosen)
- [Credits and removal](#credits-and-removal)

${db.groups.map(g => `## ${g.name}

${g.intro}

${rows(db.items.filter(k => k.group === g.id))}
`).join("\n")}
## How a pick is chosen

- **It shows the result.** You can see the finished app or video, not a script or a terminal.
- **People loved it.** Likes on X or Dribbble, or stars on GitHub, as of ${db.updated}.
- **You can have your own.** Apps run as a Space in Hey Atu on your own data, or as a standalone web app; videos render on your Mac.

Seen one that belongs here? [Open an issue](../../issues/new?title=Pick%3A%20) with the link.

## Credits and removal

Every original belongs to its maker; Hey Atu is not affiliated with them. The previews are short clips of the originals, credited and linked to the source. Picks marked “Designer's concept” were made by designers, not by agents; the prompt is ours. Made one of these and want it changed or removed? [Open an issue](../../issues/new?title=Change%20or%20remove%3A%20) or email support@heyatu.com, and we will act on it quickly.

Prompts written by Hey Atu and the build script: [MIT](LICENSE). Prompts by creators are quoted from their public posts.
`;
writeFileSync(root + "README.md", readme);
console.log(`README.md: ${db.items.length} picks; prompts/: ${db.items.length} files`);
