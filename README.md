# Aparfolio

Static portfolio site. Open `index.html` or host on GitHub Pages; no build step.

- `data.js`: all content (projects, experience, skills, music tracks). Edit this to update the site.
- `app.js` / `style.css`: rendering and styling.
- To add music: add entries to `MUSIC_TRACKS` in `data.js` (YouTube video IDs, titles and notes); the music library updates automatically.

October 5, 2026 content update:

- Rewrote the introduction, section text and project descriptions in a direct, first-person voice informed by Aparnaa's LinkedIn posts.
- Restored all 19 projects to the supplied masterlist order. Featured work remains a separate selection.
- Preserved the masterlist's supported contributions, tools, links and evaluation caveats. Removed the unsupported Virtual Karaoke repository link.
- Added project evaluation results in the detail dialog, including MAARA retrieval benchmarks, Mood-y's best SVM results, and FrequencyPrint's realistic evaluation.
- Added 14 verified public Illumidove uploads with track selection, click-to-play video and direct YouTube links. No video auto-loads on page arrival.
- Corrected the Women in Computing, COMS, RIT AI Club and Game Symphony Orchestra dates using the supplied LinkedIn profile. Other experience entries are retained from the existing site.

Sources: supplied `Aparnaa_Codex_Portfolio_Handoff.zip`, [existing portfolio source](https://github.com/AparCode/aparfolio), [LinkedIn](https://www.linkedin.com/in/aparnaain/) and [Illumidove videos](https://www.youtube.com/@illumidove/videos).

Checked: JavaScript syntax, all project dialogs and source links, masterlist order, filters, keyboard navigation, music selection and video cleanup, local image paths, and page widths of 390, 680, 768, 1024 and 1440 pixels. Desktop and mobile screenshots were reviewed. Actual YouTube playback depends on YouTube's embedding availability; direct watch links are provided.

The updated files are prepared locally. Publishing these files to the existing GitHub Pages repository is a separate step.
