# A Descript + Frame.io hybrid, built by an agent

A review app made for agents: word-by-word transcript, chapters, comments at a frame. Delete words to cut; the agent applies the notes.

- Original: [@codyschneider on X](https://x.com/codyschneider/status/2121256832505090108) (♥ 42 likes, 3.6k views, made with Claude Code)
- Prompt by Hey Atu, based on the post.

## What you get

- A web app for one video: transcript, chapters, player and comments
- Cut by deleting words in the transcript
- Export the edit list for the agent to apply

## Prompt

```text
Build me a review app for my video [file], like Descript crossed with Frame.io.

Left: chapters. Middle: a word-by-word transcript with speakers and timestamps; deleting words marks a cut. Right: the player and comments; I can pause and leave a note at a frame or on a selection of words. Add buttons to export the edit list (Markdown) and the comments (CSV), then apply both and render a new version.
```

Paste it into a chat with [Hey Atu](https://heyatu.com/?utm_source=github&utm_medium=readme&utm_campaign=awesome-remote-agent&utm_content=transcript-review-app), or into Claude Code, Codex or Pi.
