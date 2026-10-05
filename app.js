// ============================================================
// Portfolio behavior. Content lives in data.js.
// ============================================================
(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const byId = (id) => PROJECTS.find((p) => p.id === id);
  const CAT_LABEL = { ai: "AI & ML", music: "Music tech", gfx: "Graphics & XR", apps: "Apps & data" };

  // Small element helper: h("div", {class:"x"}, child, "text")
  function h(tag, attrs, ...kids) {
    const node = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([k, v]) => {
      if (v === false || v == null) return;
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v === true ? "" : v);
    });
    kids.flat().forEach((c) => c != null && node.append(c));
    return node;
  }

  // ---------- Hero pads (decorative) ----------
  function renderHeroPads() {
    const wrap = $("#heroPads");
    const colors = ["#e45474", "#ff8c00", "#3daf4a", "#0077b5", "#ed6ab9", "#f0307d", "#a06cff", "#2fc4b2"];
    for (let i = 0; i < 16; i++) {
      const pad = h("span", { class: "pad" });
      pad.style.setProperty("--c", colors[(i * 5 + (i >> 2)) % colors.length]);
      pad.style.setProperty("--d", (((i % 4) + (i >> 2)) * 0.18).toFixed(2) + "s");
      wrap.append(pad);
    }
  }

  // ---------- Project cards ----------
  let visibleIds = PROJECTS.map((p) => p.id);
  let activeFilter = "all";

  function tagPills(p) {
    return p.cats.map((c) => h("span", { class: "pill pill-" + c, text: CAT_LABEL[c] }));
  }

  function projectCard(p) {
    return h("button", { class: "card", type: "button", "data-id": p.id, onclick: () => openDetail(p.id) },
      h("img", { class: "card-thumb", src: p.thumb, alt: "", width: 84, height: 91, loading: "lazy", decoding: "async" }),
      h("span", { class: "card-body" },
        h("span", { class: "card-context", text: p.context }),
        h("span", { class: "card-title", text: p.title }),
        h("span", { class: "card-summary", text: p.summary }),
        h("span", { class: "card-tags" }, tagPills(p)),
      ),
      h("span", { class: "card-go", "aria-hidden": "true", text: "→" })
    );
  }

  function renderFeatured() {
    const root = $("#featured");
    FEATURED.forEach((f, i) => {
      const p = byId(f.id);
      root.append(
        h("button", { class: "feat feat-" + (i + 1), type: "button", onclick: () => openDetail(p.id) },
          h("span", { class: "feat-stat", text: f.stat }),
          h("span", { class: "feat-statlabel", text: f.statLabel }),
          h("span", { class: "feat-title", text: p.title }),
          h("span", { class: "feat-pitch", text: f.pitch }),
          h("span", { class: "feat-go", text: "See how it works →" })
        )
      );
    });
  }

  function renderFilters() {
    const root = $("#projectFilters");
    root.replaceChildren(
      ...CATEGORIES.map((c) => {
        const n = c.id === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.cats.includes(c.id)).length;
        return h("button", {
          class: "chip" + (c.id === activeFilter ? " is-on" : ""),
          type: "button",
          "aria-pressed": String(c.id === activeFilter),
          onclick: () => setFilter(c.id)
        }, c.label, h("span", { class: "chip-n", text: String(n) }));
      })
    );
  }

  function renderGrid() {
    const list = PROJECTS.filter((p) => activeFilter === "all" || p.cats.includes(activeFilter));
    visibleIds = list.map((p) => p.id);
    $("#projectGrid").replaceChildren(...list.map(projectCard));
    const notes = {
      all: "Newest and most substantial first.",
      ai: "Machine learning, computer vision, LLM agents and evaluation.",
      music: "Projects that analyze, visualize, recommend or make music.",
      gfx: "Real-time graphics, projection mapping and motion capture.",
      apps: "Full-stack apps, databases and hackathon products."
    };
    $("#filterNote").textContent = `${list.length} project${list.length === 1 ? "" : "s"}. ${notes[activeFilter]}`;
  }

  function setFilter(id, scroll) {
    activeFilter = id;
    renderFilters();
    renderGrid();
    if (scroll) $("#projectFilters").scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function renderSkills() {
    $("#skills").replaceChildren(
      ...SKILLS.map((g) =>
        h("div", { class: "skill-group" },
          h("h4", { text: g.group }),
          h("div", { class: "skill-chips" }, g.items.map((s) => h("span", { class: "skill", text: s })))
        )
      )
    );
  }

  // ---------- Media (click to load, so the page stays fast) ----------
  function embedUrl(m) {
    if (m.type === "youtube") return `https://www.youtube-nocookie.com/embed/${m.id}?autoplay=1&rel=0`;
    if (m.type === "vimeo") return `https://player.vimeo.com/video/${m.id}?autoplay=1`;
    if (m.type === "zoom") return m.src.replace("/clips/share/", "/clips/embed/");
    return "";
  }
  function watchUrl(m) {
    if (m.type === "youtube") return `https://www.youtube.com/watch?v=${m.id}`;
    if (m.type === "vimeo") return `https://vimeo.com/${m.id}`;
    return m.src;
  }

  function videoFacade(m) {
    const box = h("div", { class: "video" });
    const play = h("button", { class: "video-play", type: "button", "aria-label": "Play video: " + m.label },
      m.type === "youtube" ? h("img", { src: `https://i.ytimg.com/vi/${m.id}/hqdefault.jpg`, alt: "", loading: "lazy", onerror: (e) => e.target.remove() }) : null,
      h("span", { class: "video-icon", "aria-hidden": "true", text: "▶" }),
      h("span", { class: "video-label", text: m.label })
    );
    play.addEventListener("click", () => {
      const frame = h("iframe", {
        src: embedUrl(m), title: m.label, allowfullscreen: true,
        allow: "autoplay; encrypted-media; picture-in-picture; fullscreen", referrerpolicy: "strict-origin-when-cross-origin"
      });
      box.replaceChildren(frame);
    });
    box.append(play);
    return h("figure", { class: "media" }, box,
      h("figcaption", {}, m.label + " · ", h("a", { href: watchUrl(m), target: "_blank", rel: "noopener noreferrer", text: "open in new tab ↗" })));
  }

  function renderMedia(items) {
    return items.map((m) =>
      m.type === "image"
        ? h("figure", { class: "media" }, h("img", { src: m.src, alt: m.alt, loading: "lazy" }))
        : videoFacade(m)
    );
  }

  // ---------- Detail dialog ----------
  const dlg = $("#detail");
  let currentId = null;

  function openDetail(id) {
    const p = byId(id);
    if (!p) return;
    currentId = id;
    $("#detailContext").textContent = p.context;
    $("#detailTitle").textContent = p.title;
    $("#detailTags").replaceChildren(...tagPills(p));
    $("#detailDesc").textContent = p.description;
    $("#detailSkills").replaceChildren(...p.skills.map((s) => h("span", { class: "skill", text: s })));
    $("#detailMedia").replaceChildren(...renderMedia(p.media));
    $("#detailMedia").hidden = !p.media.length;
    const actions = [];
    if (p.demo) actions.push(h("a", { class: "btn btn-solid", href: p.demo, target: "_blank", rel: "noopener noreferrer", text: "Live demo ↗" }));
    if (p.repo) actions.push(h("a", { class: "btn" + (p.demo ? "" : " btn-solid"), href: p.repo, target: "_blank", rel: "noopener noreferrer", text: "View code ↗" }));
    $("#detailActions").replaceChildren(...actions);
    const idx = visibleIds.indexOf(id);
    const nav = idx !== -1 && visibleIds.length > 1;
    $("#detailPrev").hidden = $("#detailNext").hidden = !nav;
    if (!dlg.open) dlg.showModal();
    dlg.querySelector(".detail-body").scrollTop = 0;
    dlg.scrollTop = 0;
    document.documentElement.classList.add("modal-open");
  }

  function step(delta) {
    const idx = visibleIds.indexOf(currentId);
    if (idx === -1) return;
    openDetail(visibleIds[(idx + delta + visibleIds.length) % visibleIds.length]);
  }

  function setupDialog() {
    $("#detailClose").addEventListener("click", () => dlg.close());
    $("#detailPrev").addEventListener("click", () => step(-1));
    $("#detailNext").addEventListener("click", () => step(1));
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); }); // backdrop
    dlg.addEventListener("close", () => {
      $("#detailMedia").replaceChildren(); // stops any playing video
      document.documentElement.classList.remove("modal-open");
    });
    dlg.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft" && !$("#detailPrev").hidden) step(-1);
      if (e.key === "ArrowRight" && !$("#detailNext").hidden) step(1);
    });
  }

  // ---------- Music ----------
  function renderMusic() {
    const root = $("#musicPlayer");
    const cap = $("#musicCaption");
    function load(i) {
      const t = MUSIC_TRACKS[i];
      root.replaceChildren(videoFacade({ type: t.type, id: t.id, label: t.title }));
      root.querySelector("figcaption").remove();
      cap.textContent = t.note;
    }
    if (!MUSIC_TRACKS.length) { root.parentElement.hidden = true; return; }
    load(0);
    if (MUSIC_TRACKS.length > 1) {
      const picker = h("div", { class: "chips track-picker" },
        MUSIC_TRACKS.map((t, i) => h("button", { class: "chip", type: "button", onclick: () => load(i), text: t.title })));
      root.parentElement.insertBefore(picker, root);
    }

    const cross = PROJECTS.filter((p) => p.cats.includes("music"));
    $("#musicTech").replaceChildren(...cross.map((p) =>
      h("button", { class: "mini", type: "button", onclick: () => { visibleIds = cross.map((c) => c.id); openDetail(p.id); } },
        h("img", { src: p.thumb, alt: "", width: 48, height: 52, loading: "lazy" }),
        h("span", {}, h("strong", { text: p.title }), h("em", { text: p.summary }))
      )
    ));
    $("#seeAllMusicTech").addEventListener("click", () => {
      setFilter("music");
      $("#tech").querySelector(".subhead").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // ---------- Experience ----------
  function renderTimeline() {
    const root = $("#timeline");
    EXPERIENCE_GROUPS.forEach((g) => {
      const items = EXPERIENCE.filter((e) => g.kinds.includes(e.kind));
      if (!items.length) return;
      root.append(
        h("h3", { class: "tl-group", text: g.title }),
        h("div", { class: "tl" }, items.map((e) =>
          h("article", { class: "tl-item tl-" + e.kind },
            h("img", { class: "tl-logo", src: e.logo, alt: "", width: 56, height: 56, loading: "lazy" }),
            h("div", { class: "tl-main" },
              h("div", { class: "tl-top" },
                h("h4", {}, e.role, h("span", { class: "tl-org", text: " · " + e.org })),
                h("span", { class: "tl-when", text: [e.when, e.where].filter(Boolean).join(" · ") })
              ),
              h("ul", {}, e.bullets.map((b) => h("li", { text: b })))
            )
          )
        ))
      );
    });
  }

  // ---------- Nav highlight ----------
  function setupNav() {
    const links = new Map([...document.querySelectorAll("[data-nav]")].map((a) => [a.dataset.nav, a]));
    const targets = ["tech", "music", "experience", "contact"].map((id) => document.getElementById(id));
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          links.forEach((a) => a.classList.remove("is-active"));
          links.get(en.target.id)?.classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    targets.forEach((t) => t && io.observe(t));
  }

  // ---------- Boot ----------
  document.querySelectorAll('[data-count="projects"]').forEach((n) => (n.textContent = PROJECTS.length));
  renderHeroPads();
  renderFeatured();
  renderFilters();
  renderGrid();
  renderSkills();
  renderMusic();
  renderTimeline();
  setupDialog();
  setupNav();
})();
