# A launch film like ChatGPT's

White type cards and redrawn product UI, one story from the first question to the result. The style behind OpenAI's ChatGPT launch films.

- Original: [OpenAI on YouTube](https://www.youtube.com/watch?v=MSiAd36bGeQ) (♥ 2.1k likes, 256.3k views)
- Written by Hey Atu for this pick.

## What you get

- A 30-40 second launch film in this style for your own product
- 9:16 and 16:9 from one timeline, music and UI sounds made in code
- Four stills to approve before the full render

## Prompt

```text
Make a {30-40} second launch film for {product}: {one sentence on what it does}.
Audience: {who it is for}. Formats: 9:16 1080x1920 and 16:9 1920x1080 from one timeline.

Follow the visual grammar of OpenAI's ChatGPT launch videos (watch
https://www.youtube.com/watch?v=MSiAd36bGeQ and https://www.youtube.com/watch?v=yyvVUEPSCu0
if you can). Copy the grammar, not their logo, words or footage.

Story
1. One story from start to end: one user, one request, one result. No topic changes.
   Use a made-up example ({e.g. "morning coffee vlog"}), never real customer data.
2. Alternate two layers: a white type card with one selling line, then a product shot.
   No voice-over; music and type tell the story. About half the time is type cards.
3. Shape: pain line (0-3 s) -> product name -> the request typed into an input box ->
   a step list the product works through -> 2-3 results, each introduced by a type card ->
   a one-line summary -> lockup with the product name.

Type cards
4. Pure white, black bold sans-serif, centred. One keyword per card in the brand colour.
5. Words appear in small groups on a 16th-note grid; when a line wraps the block moves up.
   Hold each card about 1.5 s.

Product shots
6. Redraw the UI as a clean mock, not a screen recording: large type, tidy data, only the
   parts this beat needs. Show the whole window only for results.
7. The request: the input box slides in, the camera pushes in until the text is as big
   as a title and follows the cursor as it types, then pulls back and sends.
8. Working: a "Thinking" line with a light sweep, then a step list, one row every 0.2 s,
   each with an app icon; empty circle -> spinner -> green tick; end on a large "Done."
9. Give the agent its own cursor: a black arrow with a small pill label, clicking things
   like a teammate. The user's cursor is a hand.
10. Behind window shots use a soft gradient; windows float with a soft shadow.

Motion
11. 120 BPM, one beat = 0.5 s; small moves land on 0.125 s.
12. Each shot slides in from the right by about 3.5 %, holds completely still, and slides
    out to the left by about 2.4 % just before the cut. No drifting while it holds.
13. Prefer morphs to hard cuts: a button grows into the next screen, a card shrinks into
    an input chip, the input box turns into a status pill.

Build
14. Write the film as one HTML page with a pure seek(t) function (no timers, Math.random
    or Date), render frames with Playwright and encode with FFmpeg. Keep every time in one
    timeline file that both picture and sound read.
15. Make the music and UI sounds in code (plucks on each list row, ticks on typing).
16. Show me 4 stills first (opening card, request, step list, lockup). Render the full
    film only after I approve them, then check the 9:16 version for text that wraps badly.

Do not claim things the product cannot do. Put every product fact in one copy file so I
can check it.
```

Paste it into a chat with [Hey Atu](https://heyatu.com/?utm_source=github&utm_medium=readme&utm_campaign=awesome-remote-agent&utm_content=chatgpt-launch-film-original), or into Claude Code, Codex or Pi.
