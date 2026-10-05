// ===================
// Constants
// ===================
const PAD_COLOR_CLASSES = [
  "scene-linkedin",
  "scene-github",
  "scene-resume",
  "scene-contact",
  "scene-about",
  "scene-skills",
  "scene-kitware",
  "scene-griffiss",
  "scene-northeastern",
  "scene-mitbeaverworks",
  "scene-wic",
  "scene-coms",
  "scene-ai",
  "scene-sigma",
  "scene-gso",
  "scene-csh",
  "scene-orderup",
  "scene-resopulse",
  "scene-underthesea",
  "scene-virtualcloset",
  "scene-visualdove",
  "scene-virtualkaraoke",
  "scene-myergbuddy",
  "scene-brickstein",
  "scene-securecheckup",
  "scene-acertainconvexhull",
  "scene-echoflower",
  "scene-spotiphy",
  "scene-fibonacci",
  "scene-areyousocialdistancing",
  "scene-music1",
  "scene-music2",
  "scene-moody",
  "scene-frequencyprint",
  "scene-maara",
  "scene-musictheoryagent",
  "scene-artsonna",
];

const CONTACT_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=apar2003@gmail.com&su=Portfolio%20Inquiry" +
  "&body=Dear%20Aparnaa%2C%20I%20wanted%20to%20connect%20with%20you.";

// ===================
// Scene Definitions
// ===================
const scenes = {
  resume: {
    colorClass: "scene-resume",
    indexes: "all",
  },

  linkedin: {
    colorClass: "scene-linkedin",
    indexes: "all",
  },

  github: {
    colorClass: "scene-github",
    indexes: "all",
  },

  contact: {
    colorClass: "scene-contact",
    indexes: "all",
  },

  about: {
    colorClass: "scene-about",
    indexes: [5],
  },

  skills: {
    colorClass: "scene-skills",
    indexes: [10],
  },

  kitware: {
    colorClass: "scene-kitware",
    indexes: [1],
  },

  griffiss: {
    colorClass: "scene-griffiss",
    indexes: [5],
  },

  northeastern: {
    colorClass: "scene-northeastern",
    indexes: [9],
  },

  mitbeaverworks: {
    colorClass: "scene-mitbeaverworks",
    indexes: [13],
  },

  wic: {
    colorClass: "scene-wic",
    indexes: [2],
  },

  coms: {
    colorClass: "scene-coms",
    indexes: [6],
  },

  ai: {
    colorClass: "scene-ai",
    indexes: [10],
  },

  sigma: {
    colorClass: "scene-sigma",
    indexes: [14],
  },

  gso: {
    colorClass: "scene-gso",
    indexes: [15],
  },

  csh: {
    colorClass: "scene-csh",
    indexes: [3],
  },

  artsonna: {
    colorClass: "scene-artsonna",
    indexes: [0],
  },

  musictheoryagent: {
    colorClass: "scene-musictheoryagent",
    indexes: [1],
  },

  maara: {
    colorClass: "scene-maara",
    indexes: [2],
  },

  moody: {
    colorClass: "scene-moody",
    indexes: [3],
  },

  frequencyprint: {
    colorClass: "scene-frequencyprint",
    indexes: [4],
  },

  orderup: {
    colorClass: "scene-orderup",
    indexes: [5],
  },

  underthesea: {
    colorClass: "scene-underthesea",
    indexes: [6],
  },

  virtualcloset: {
    colorClass: "scene-virtualcloset",
    indexes: [7],
  },

  resopulse: {
    colorClass: "scene-resopulse",
    indexes: [8],
  },

  visualdove: {
    colorClass: "scene-visualdove",
    indexes: [9],
  },

  virtualkaraoke: {
    colorClass: "scene-virtualkaraoke",
    indexes: [10],
  },

  myergbuddy: {
    colorClass: "scene-myergbuddy",
    indexes: [11],
  },

  brickstein: {
    colorClass: "scene-brickstein",
    indexes: [12],
  },

  securecheckup: {
    colorClass: "scene-securecheckup",
    indexes: [13],
  },

  acertainconvexhull: {
    colorClass: "scene-acertainconvexhull",
    indexes: [14],
  },

  echoflower: {
    colorClass: "scene-echoflower",
    indexes: [15],
  },

  spotiphy: {
    colorClass: "scene-spotiphy",
    indexes: [0],
  },

  fibonacci: {
    colorClass: "scene-fibonacci",
    indexes: [1],
  },

  areyousocialdistancing: {
    colorClass: "scene-areyousocialdistancing",
    indexes: [2],
  },

  music1: {
    colorClass: "scene-music1",
    indexes: [0],
  },

  music2: {
    colorClass: "scene-music2",
    indexes: [],
  },
};

const PROJECT_PAGES = [
  [
    "artsonna",
    "musictheoryagent",
    "maara",
    "moody",
    "frequencyprint",
    "orderup",
    "underthesea",
    "virtualcloset",
    "resopulse",
    "visualdove",
    "virtualkaraoke",
    "myergbuddy",
    "brickstein",
    "securecheckup",
    "acertainconvexhull",
    "echoflower",
  ],
  ["spotiphy", "fibonacci", "areyousocialdistancing"],
];

const PROJECT_PAGE_LOGOS = [
  [
    {
      scene: "artsonna",
      logo: "images/logo/artsonna-logo.png",
      alt: "Artsonna logo",
    },
    {
      scene: "musictheoryagent",
      logo: "images/logo/music-theory-agent-logo.png",
      alt: "Music Theory Agent logo",
    },
    { scene: "maara", logo: "images/logo/maara-logo.png", alt: "MAARA logo" },
    { scene: "moody", logo: "images/logo/moody-logo.png", alt: "Mood-y logo" },
    {
      scene: "frequencyprint",
      logo: "images/logo/frequencyprint-logo.png",
      alt: "FrequencyPrint logo",
    },
    { scene: "orderup", logo: "images/logo/orderup-logo.png", alt: "OrderUp logo" },
    {
      scene: "underthesea",
      logo: "images/logo/underthesea-logo.png",
      alt: "Under the Sea logo",
    },
    {
      scene: "virtualcloset",
      logo: "images/logo/virtualcloset-logo.png",
      alt: "VirtualCloset logo",
    },
    { scene: "resopulse", logo: "images/logo/resopulse-logo.png", alt: "ResoPulse logo" },
    { scene: "visualdove", logo: "images/logo/visualdove-logo.png", alt: "VisualDove logo" },
    {
      scene: "virtualkaraoke",
      logo: "images/logo/virtualkaraoke-logo.png",
      alt: "Virtual Karaoke logo",
    },
    { scene: "myergbuddy", logo: "images/logo/myergbuddy-logo.png", alt: "MyErgBuddy logo" },
    { scene: "brickstein", logo: "images/logo/brickstein-logo.png", alt: "BrickStein logo" },
    {
      scene: "securecheckup",
      logo: "images/logo/securecheckup-logo.png",
      alt: "Secure Checkup logo",
    },
    {
      scene: "acertainconvexhull",
      logo: "images/logo/acertainconvexhull-logo.png",
      alt: "A Certain Convex Hull logo",
    },
    { scene: "echoflower", logo: "images/logo/echoflower-logo.png", alt: "Echo Flower logo" },
  ],
  [
    { scene: "spotiphy", logo: "images/logo/spotiphy-logo.png", alt: "Spotiphy logo" },
    { scene: "fibonacci", logo: "images/logo/fibonacci-logo.png", alt: "Fibonacci logo" },
    {
      scene: "areyousocialdistancing",
      logo: "images/logo/areyousocialdistancing-logo.png",
      alt: "Are You Social Distancing logo",
    },
  ],
];

const PROJECT_DEMO_URLS = {
  artsonna: "https://artsonna.base44.app/",
  musictheoryagent: "https://github.com/AparCode/music-theory-assistant",
  orderup: "https://github.com/Lilly-Rowland/OrderUp",
  resopulse: "https://aparcode.github.io/resopulse/",
  underthesea: "https://github.com/alf9310/XRLive-VIP-Fall-2025",
  virtualcloset: "https://github.com/ib9168/Virtual_Closet_HACKCOMS-25",
  visualdove: "https://github.com/AparCode/visual-dove",
  virtualkaraoke: "https://github.com/AparCode/virtual-karaoke",
  myergbuddy: "https://github.com/Lilly-Rowland/WiCHacks2025",
  brickstein: "https://github.com/Gunoo1/BrickStein",
  securecheckup: "https://github.com/Szheng25/SecureCheckup",
  acertainconvexhull: "https://github.com/AparCode/acertainconvexhull",
  echoflower: "https://github.com/jltlm/echo-flower-scene",
  spotiphy: "https://github.com/BuxoGabriel/Spotiphy",
  fibonacci: "https://github.com/AparCode/fibonacci",
  areyousocialdistancing: "https://github.com/AparCode/mask_identifier",
  maara: "https://github.com/AparCode/maara",
  moody: "https://github.com/sadhvikoli/voice-mood-music-recommender",
  frequencyprint: "https://aparcode.github.io/frequency-print/",
};

// ===================
// Helper Functions
// ===================
function getAllIndexes(pads) {
  return Array.from({ length: pads.length }, (_, i) => i);
}

function resolveIndexes(scene, pads) {
  if (scene.indexes === "all") return getAllIndexes(pads);
  if (typeof scene.indexes === "function") return scene.indexes(pads);
  return scene.indexes;
}

function clearPads(pads) {
  pads.forEach((pad) => {
    pad.classList.remove("active", ...PAD_COLOR_CLASSES);
    pad.removeAttribute("data-tooltip");
  });
}

function clearAllPadLogos() {
  document.querySelectorAll(".pad-logo").forEach((logo) => {
    logo.remove();
  });
}

let activeLogoGroup = null;
let currentSceneGroup = null;
let currentProjectPage = 0;

function startLogoGroup(groupName) {
  if (activeLogoGroup === groupName) {
    return false;
  }

  activeLogoGroup = groupName;
  clearAllPadLogos();
  return true;
}

function applyScenes(sceneNames, { clearFirst = true } = {}) {
  const pads = Array.from(document.querySelectorAll(".pad"));
  if (clearFirst) {
    clearPads(pads);
  }

  sceneNames.forEach((sceneName) => {
    const scene = scenes[sceneName];
    if (!scene) return;

    const targetIndexes = resolveIndexes(scene, pads);
    targetIndexes.forEach((index) => {
      const pad = pads[index];
      if (!pad) return;

      pad.classList.add("active");
      if (scene.colorClass) {
        pad.classList.add(scene.colorClass);
      }
      const dialogInfo = sceneDialogMap[scene.colorClass];
      if (dialogInfo && dialogInfo.title) {
        pad.setAttribute("data-tooltip", dialogInfo.title);
      }
    });
  });
}

function applyScene(sceneName, options) {
  applyScenes([sceneName], options);
}

function showProjectPage(pageIndex) {
  if (pageIndex < 0 || pageIndex >= PROJECT_PAGES.length) return;
  currentProjectPage = pageIndex;
  currentSceneGroup = "projects";
  applyScenes(PROJECT_PAGES[pageIndex]);
  renderProjectPageLogos(pageIndex);
}

function isProjectsShowing() {
  return currentSceneGroup === "projects";
}

function renderProjectPageLogos(pageIndex) {
  const pads = Array.from(document.querySelectorAll(".led-pads .pad"));
  const logos = PROJECT_PAGE_LOGOS[pageIndex] || [];

  activeLogoGroup = "projects";
  clearAllPadLogos();

  logos.forEach((meta) => {
    const sceneObj = scenes[meta.scene];
    let indexes = [];

    if (sceneObj) {
      indexes = resolveIndexes(sceneObj, pads);
    } else {
      const padByClass = document.querySelector(`.led-pads .pad.scene-${meta.scene}`);
      if (padByClass) indexes = [pads.indexOf(padByClass)];
    }

    indexes.forEach((i) => {
      const pad = pads[i];
      if (!pad) return;
      if (pad.querySelector(".pad-logo")) return;
      const img = document.createElement("img");
      img.className = "pad-logo";
      img.src = meta.logo;
      if (meta.srcset) img.srcset = meta.srcset;
      img.sizes = "(max-width:400px) 60px, 120px";
      img.alt = meta.alt || "";
      img.loading = "lazy";
      img.decoding = "async";
      pad.appendChild(img);
    });
  });
}

function getProjectDemoUrl(sceneKey) {
  return PROJECT_DEMO_URLS[sceneKey] || "";
}

// =========================
// Button Event Listeners
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const linkedinButton = document.querySelector(".top-controls a[aria-label='LinkedIn']");
  const githubButton = document.querySelector(".top-controls a[aria-label='GitHub']");
  const clearButton = document.querySelector(".clear-control .button[aria-label='Clear']");
  const resumeButton = document.querySelector(".top-controls a[aria-label='Download Resume']");
  const contactButton = document.querySelector(".top-controls a[aria-label='Contact']");
  const aboutButton = document.querySelector(".side-controls .button[aria-label='About']");
  const experienceButton = document.querySelector(
    ".side-controls .button[aria-label='Experience']",
  );
  const projectsButton = document.querySelector(".side-controls .button[aria-label='Projects']");
  const musicButton = document.querySelector(".side-controls .button[aria-label='Music']");

  if (linkedinButton) {
    linkedinButton.addEventListener("click", () => {
      applyScene("linkedin");
      currentSceneGroup = "linkedin";
    });
  }

  if (githubButton) {
    githubButton.addEventListener("click", () => {
      applyScene("github");
      currentSceneGroup = "github";
    });
  }

  if (resumeButton) {
    resumeButton.addEventListener("click", () => {
      applyScene("resume");
      currentSceneGroup = "resume";
    });
  }

  if (contactButton) {
    contactButton.href = CONTACT_COMPOSE_URL;
    contactButton.addEventListener("click", () => {
      applyScene("contact");
      currentSceneGroup = "contact";
    });
  }

  if (aboutButton) {
    aboutButton.addEventListener("click", () => {
      applyScenes(["about", "skills"]);
      currentSceneGroup = "about";
    });
  }

  if (experienceButton) {
    experienceButton.addEventListener("click", () => {
      applyScenes([
        "kitware",
        "griffiss",
        "northeastern",
        "mitbeaverworks",
        "wic",
        "coms",
        "ai",
        "sigma",
        "gso",
        "csh",
      ]);
      currentSceneGroup = "experience";
    });
  }

  if (projectsButton) {
    projectsButton.addEventListener("click", () => {
      showProjectPage(0);
    });
  }

  if (musicButton) {
    musicButton.addEventListener("click", () => {
      applyScenes(["music1", "music2"]);
      currentSceneGroup = "music";
    });
  }

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      const pads = Array.from(document.querySelectorAll(".pad"));
      activeLogoGroup = null;
      currentSceneGroup = null;
      currentProjectPage = 0;
      clearAllPadLogos();
      clearPads(pads);
    });
  }

  // Pad scroll buttons (if present)
  const padsScrollWrapper = document.querySelector(".pads-scroll-wrapper");
  const padsScrollUp = document.querySelector(".pads-scroll-btn.up");
  const padsScrollDown = document.querySelector(".pads-scroll-btn.down");

  if (padsScrollUp && padsScrollWrapper) {
    padsScrollUp.addEventListener("click", () => {
      if (!isProjectsShowing() || currentProjectPage === 0) return;
      showProjectPage(currentProjectPage - 1);
    });
  }

  if (padsScrollDown && padsScrollWrapper) {
    padsScrollDown.addEventListener("click", () => {
      if (!isProjectsShowing() || currentProjectPage >= PROJECT_PAGES.length - 1) return;
      showProjectPage(currentProjectPage + 1);
    });
  }
});

// Title card logic: show on load then fade to reveal the launchpad
document.addEventListener("DOMContentLoaded", () => {
  const titleCard = document.getElementById("titleCard");
  const main = document.querySelector("main");
  if (!titleCard) return;

  // Hide main from assistive tech while the title card is shown
  if (main) main.setAttribute("aria-hidden", "true");

  // Keep the intro brief, and let visitors skip it immediately.
  const visibleDuration = 1800;
  let dismissed = false;

  const dismissTitleCard = () => {
    if (dismissed) return;
    dismissed = true;
    titleCard.classList.add("fade-out");
  };

  const timer = setTimeout(dismissTitleCard, visibleDuration);

  titleCard.addEventListener("click", dismissTitleCard);
  document.addEventListener(
    "keydown",
    (event) => {
      if (["Enter", " ", "Escape"].includes(event.key)) dismissTitleCard();
    },
    { once: true },
  );

  // Remove the element after animation completes and restore main
  titleCard.addEventListener("animationend", () => {
    clearTimeout(timer);
    try {
      titleCard.remove();
    } catch (e) {
      titleCard.style.display = "none";
    }
    if (main) main.removeAttribute("aria-hidden");
  });
});

// ===================
// Pad Dialog
// ===================
const padDialog = document.getElementById("padDialog");
const padDialogTitle = document.getElementById("padDialogTitle");
const padDialogMedia = document.getElementById("padDialogMedia");
const padDialogImage = document.getElementById("padDialogImage");
const padDialogVideo = document.getElementById("padDialogVideo");
const padDialogEmbed = document.getElementById("padDialogEmbed");
const padDialogMediaControls = document.getElementById("padDialogMediaControls");
const padDialogPrevMedia = document.getElementById("padDialogPrevMedia");
const padDialogNextMedia = document.getElementById("padDialogNextMedia");
const padDialogMediaCounter = document.getElementById("padDialogMediaCounter");
const padDialogMessage = document.getElementById("padDialogMessage");
const padDialogSkills = document.getElementById("padDialogSkills");
const padDialogClose = document.getElementById("padDialogClose");
const padDialogProject = document.getElementById("padDialogProject");
const padDialogRepo = document.getElementById("padDialogRepo");
const padsContainer = document.querySelector(".led-pads");

let dialogMediaItems = [];
let dialogMediaIndex = 0;
let dialogProjectHref = "";
let dialogRepoHref = "";

function updatePadDialogImageSize() {
  padDialogImage.classList.remove("is-square", "is-rectangle", "is-landscape", "is-portrait");

  if (!padDialogImage.src || !padDialogImage.naturalWidth || !padDialogImage.naturalHeight) {
    return;
  }

  const aspectRatio = padDialogImage.naturalWidth / padDialogImage.naturalHeight;

  if (Math.abs(aspectRatio - 1) < 0.15) {
    padDialogImage.classList.add("is-square");
  } else {
    padDialogImage.classList.add("is-rectangle");
    padDialogImage.classList.add(aspectRatio > 1 ? "is-landscape" : "is-portrait");
  }
}

if (padDialogImage) {
  padDialogImage.addEventListener("load", updatePadDialogImageSize);
}

function updatePadDialogMediaControls() {
  const hasMultiple = dialogMediaItems.length > 1;

  if (padDialogMediaControls) {
    padDialogMediaControls.hidden = !hasMultiple;
  }

  if (padDialogPrevMedia) {
    padDialogPrevMedia.disabled = !hasMultiple || dialogMediaIndex === 0;
  }

  if (padDialogNextMedia) {
    padDialogNextMedia.disabled = !hasMultiple || dialogMediaIndex >= dialogMediaItems.length - 1;
  }

  if (padDialogMediaCounter) {
    padDialogMediaCounter.textContent = hasMultiple
      ? `${dialogMediaIndex + 1} / ${dialogMediaItems.length}`
      : "1 / 1";
  }
}

function updatePadDialogMediaDisplay() {
  const item = dialogMediaItems[dialogMediaIndex];
  const hasMedia = Boolean(item);

  if (padDialogImage) {
    if (item && item.type === "image") {
      padDialogImage.hidden = false;
      padDialogImage.src = item.src;
      padDialogImage.alt = item.alt || "Pad Image";
      padDialogImage.sizes = "(max-width:800px) 60px, 120px";
    } else {
      padDialogImage.hidden = true;
      padDialogImage.removeAttribute("src");
      padDialogImage.classList.remove("is-square", "is-rectangle", "is-landscape", "is-portrait");
    }
  }

  if (padDialogVideo) {
    if (item && item.type === "video") {
      padDialogVideo.hidden = false;
      padDialogVideo.src = item.src;
      padDialogVideo.poster = item.poster || "";
      padDialogVideo.load();
    } else {
      padDialogVideo.hidden = true;
      padDialogVideo.pause();
      padDialogVideo.removeAttribute("src");
      padDialogVideo.removeAttribute("poster");
      padDialogVideo.load();
    }
  }

  if (padDialogEmbed) {
    if (item && item.type === "embed") {
      padDialogEmbed.hidden = false;
      // normalize common watch URLs to embed URLs
      padDialogEmbed.src = normalizeEmbedUrl(item.src || item.embed || "");
    } else {
      padDialogEmbed.hidden = true;
      padDialogEmbed.removeAttribute("src");
    }
  }

  if (padDialogMedia) {
    padDialogMedia.hidden = !hasMedia;
  }

  updatePadDialogMediaControls();
}

function renderPadDialogMedia(info) {
  dialogMediaItems = [];
  dialogMediaIndex = 0;

  if (Array.isArray(info.media) && info.media.length) {
    dialogMediaItems = info.media.map((item) => ({
      type: item.type || (item.embed ? "embed" : item.video ? "video" : "image"),
      src: item.src || item.image || item.video || item.embed || "",
      alt: item.alt || info.title + " image",
      poster: item.poster || "",
    }));
  } else if (info.media) {
    dialogMediaItems = [
      {
        type: info.media.type || (info.media.embed ? "embed" : "image"),
        src: info.media.src || info.media.image || info.media.video || info.media.embed || "",
        alt: info.media.alt || info.title + " image",
        poster: info.media.poster || "",
      },
    ];
  } else if (info.video) {
    dialogMediaItems = [
      { type: "video", src: info.video, poster: info.poster || "", alt: info.title + " video" },
    ];
  } else if (info.image) {
    dialogMediaItems = [{ type: "image", src: info.image, alt: info.title + " image" }];
  }

  updatePadDialogMediaDisplay();
}

function showPadDialogMedia(index) {
  if (!dialogMediaItems.length) return;

  const nextIndex = Math.max(0, Math.min(index, dialogMediaItems.length - 1));
  dialogMediaIndex = nextIndex;
  updatePadDialogMediaDisplay();
}

function normalizeEmbedUrl(url) {
  if (!url) return "";
  try {
    const u = new URL(url, window.location.href);
    const host = u.hostname.toLowerCase();
    const path = u.pathname || "";
    // YouTube (watch / short / embed)
    if (host.includes("youtube.com")) {
      // watch?v=ID
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;
      // youtu.be may not hit here
      if (u.pathname.startsWith("/embed/")) return url;
    }
    if (host === "youtu.be") {
      const id = u.pathname.slice(1);
      return `https://www.youtube.com/embed/${id}`;
    }
    // Vimeo
    if (host.includes("vimeo.com")) {
      // https://vimeo.com/ID
      const parts = u.pathname.split("/").filter(Boolean);
      const id = parts.pop();
      if (id) return `https://player.vimeo.com/video/${id}`;
    }
    // Zoom Clips shared links: /clips/share/<id> -> /clips/embed/<id>
    if (host.endsWith("zoom.us") && path.includes("/clips/share/")) {
      return url.replace("/clips/share/", "/clips/embed/").replace(/\/$/, "");
    }
  } catch (e) {
    // fall through
  }
  // fallback: return as-is (may already be an embed URL)
  return url;
}

const sceneDialogMap = {
  "scene-linkedin": {
    title: "LinkedIn",
    message: "Open LinkedIn profile?",
    projectHref: "https://www.linkedin.com/in/aparnaain/",
    repoHref: "",
  },
  "scene-github": {
    title: "GitHub",
    message: "Open GitHub profile?",
    projectHref: "https://github.com/AparCode",
    repoHref: "",
  },
  "scene-resume": {
    title: "Resume",
    message: "Download resume?",
    projectHref: "./resume.pdf",
    repoHref: "",
  },
  "scene-contact": {
    title: "Contact",
    message: "Compose an email?",
    projectHref: CONTACT_COMPOSE_URL,
    repoHref: "",
  },
  "scene-about": {
    title: "About",
    image: "images/headshot.jpg",
    message:
      "Hi! I’m Aparnaa, a software engineer who recently graduated from RIT with both a B.S. " +
      "and M.S. in Computer Science. I’m interested in applied AI and software engineering, " +
      "with experience across machine learning, LLM/RAG systems, computer vision, audio ML, " +
      "and full-stack development. " +
      "I’ve worked professionally in computer vision and ML evaluation through internships and " +
      "research, with experience in model evaluation, debugging, experimentation, and software " +
      "development. Some of my core tools include Python, JavaScript/TypeScript, PyTorch, FastAPI, " +
      "and modern AI/ML frameworks. " +
      "Outside of tech, I’m a musician and music producer, and I enjoy exploring different forms " +
      "of music and art in my free time. I’m currently looking for early-career, full-time " +
      "opportunities in AI and software engineering where I can continue growing my skills and " +
      "build useful, well-designed software.",
    projectHref: "",
    repoHref: "",
  },
  "scene-skills": {
    title: "Skills",
    message:
      "Languages: Python, Java, JavaScript/TypeScript, SQL, HTML, CSS\n" +
      "Web & App Development: FastAPI, React, Node.js, Spring, JavaFX, Streamlit, REST APIs\n" +
      "AI/ML: PyTorch, scikit-learn, OpenCV, Librosa, RAG/LLM Agents, NumPy, Model Evaluation\n" +
      "Data & Tools: PostgreSQL, MySQL, SQLite, ChromaDB/Qdrant, Docker, Linux, Slurm, " +
      "Git/GitHub, Maven, CI/CD\n" +
      "Graphics, Audio & Interactive Systems: Three.js, WebGL, WebGPU, TouchDesigner, " +
      "Unreal Engine, Ableton",
    projectHref: "",
    repoHref: "",
  },
  "scene-kitware": {
    title: "Kitware: Computer Vision Intern",
    image: "images/logo/kitware-logo.png",
    message:
      "At Kitware, I evaluated YOLOX and RT-DETR on the 20,000-image TinyBirds dataset " +
      "to study small-object detection, using PyTorch, Slurm/multi-GPU workflows, " +
      "and TensorBoard. I also implemented the RT-DETR pipeline, " +
      "to improve model performance.",
    projectHref: "",
    repoHref: "",
  },
  "scene-griffiss": {
    title: "Griffiss Institute: Artificial Intelligence Research Intern",
    image: "images/logo/griffiss-logo.png",
    message:
      "At Griffiss Institute, I investigated whether CLIP could distinguish visually different objects " +
      "that share the same name. I compared RN50 and ViT-L/14 using cosine similarity " +
      "and confusion matrices, finding " +
      "stronger image-image than image-text matching and similar behavior across both architectures.",
    projectHref: "",
    repoHref: "",
  },
  "scene-northeastern": {
    title: "Northeastern University: Research Student Internship",
    image: "images/logo/northeastern-logo.png",
    message:
      "Throughout my three-year research program in high school, I got the opportunity to work with my mentor " +
      "Dr. Sarah Ostadabbas to conduct research in machine learning. Because of the coronavirus outbreak and a " +
      "limited number of resources available due to that, we ended up deciding to improve on the mask recognition " +
      "program that I did over the summer by finding and applying new ways to recognize faces and masks.\n\n" +
      "In the end, I presented our research findings to NYC-based research competitions and I was recognized as " +
      "a semifinalist in the 2021 Junior Science and Humanities Symposium. I was able to learn a lot of new " +
      "skills in machine learning and research, which helped me understand and know what area of research that " +
      "I want to pursue with my skills.",
    projectHref: "",
    repoHref: "",
  },
  "scene-mitbeaverworks": {
    title: "MIT Beaver*Works Summer Institute: Cog*Works",
    image: "images/logo/mit-logo.png",
    message:
      "Throughout the summer of 2020, I got the opportunity to participate in the MIT BWSI Cog*Works program. " +
      "I learned and applied cognitive science skills to machine learning. I also gained a lot of team " +
      "experience as we split up into teams to work on a couple of projects that involves recognition of certain " +
      "items such as songs.",
    projectHref: "",
    repoHref: "",
  },
  "scene-wic": {
    title: "Women in Computing: Graduate Coordinator",
    image: "images/logo/wic-logo.png",
    message:
      "Women in Computing is an organization that promotes women and gender minorities in technology. " +
      "I have been active in Women in Computing since starting college. I organized technical and " +
      "networking events to boost community engagement and membership, and I mentored elementary and " +
      "middle school students in JavaScript and OOP fundamentals.",
    projectHref: "",
    repoHref: "",
  },
  "scene-coms": {
    title: "Computing Organization for Multicultural Students: Public Relations Chair",
    image: "images/logo/coms-logo.png",
    message:
      "Over the past two years, I've been involved in the Computing Organization for Multicultural " +
      "Students. More recently, I was the Public Relations Chair, where I led communication and " +
      "outreach initiatives, coordinating content across cross-functional teams. " +
      "In addition, I translated technical and event-related information into clear, user-friendly " +
      "messaging for diverse audiences.",
    projectHref: "",
    repoHref: "",
  },
  "scene-ai": {
    title: "RIT AI Club: Events Coordinator",
    image: "images/logo/ai-logo.png",
    message:
      "For a year, I coordinated events with the Rochester Institute of Technology's Artificial " +
      "Intelligence Club as the Events Coordinator. I planned and coordinated company visits to expand " +
      "student exposure to Artificial Intelligence. In addition, I captured photos and videos of events " +
      "to help create recap posts and reels to support the club.",
    projectHref: "",
    repoHref: "",
  },
  "scene-sigma": {
    title: "Sigma Sigma Sigma: Alumni Relations Chair",
    image: "images/logo/sigma-logo.png",
    message:
      "I volunteered at events like Daffodil Day and park clean-ups. As Alumni Relations Chair, " +
      "I networked with alumni and designed monthly newsletters.",
    projectHref: "",
    repoHref: "",
  },
  "scene-gso": {
    title: "Game Symphony Orchestra",
    image: "images/logo/gso-logo.png",
    message:
      "I performed with the Game Symphony Orchestra throughout college, playing piano in every " +
      "concert and helping bring orchestral arrangements of video-game music to life.",
    projectHref: "",
    repoHref: "",
  },
  "scene-csh": {
    title: "Computer Science House",
    image: "images/logo/csh-logo.png",
    message:
      "I was an active member of the Computer Science House (Special Interest House) for my first " +
      "two years of college. I helped make the organization's very first yearbook as a member of " +
      "Yearbook Committee, and I've participated in various events that showcase my versatility " +
      "such as Music Jam.",
    projectHref: "",
    repoHref: "",
  },
  "scene-orderup": {
    title: "OrderUp",
    media: [
      { type: "image", src: "images/logo/orderup-logo.png", alt: "OrderUp logo" },
      { type: "image", src: "images/orderup_demo.jpg", alt: "OrderUp demo" },
      { type: "image", src: "images/orderup_demo_2.jpg", alt: "Metrics" },
      { type: "image", src: "images/orderup_demo_3.jpg", alt: "Gemini Output" },
      { type: "embed", src: "https://www.youtube.com/watch?v=Hfh6DiiAWEU" },
    ],
    message:
      "OrderUp is a restaurant simulator created at WiCHacks '26. Players customize menus, analyze " +
      "financial metrics, and make business decisions to grow their restaurant. I helped integrate " +
      "the Gemini API into the Java-based UI.",
    skillsSentence: "Skills Used: Java, JavaFX, Maven, Google Gemini API, XML, JSON",
    projectHref: getProjectDemoUrl("orderup"),
    repoHref: "https://github.com/Lilly-Rowland/OrderUp",
  },
  "scene-resopulse": {
    title: "ResoPulse",
    media: [
      { type: "image", src: "images/logo/resopulse-logo.png", alt: "ResoPulse logo" },
      { type: "embed", src: "https://youtu.be/yNfc7ALeUkM", alt: "ResoPulse demo video" },
    ],
    message:
      "ResoPulse is a Three.js music visualizer built for a Computer Animation course. It reacts to " +
      "audio peaks with high-intensity effects. I architected the particle system so particles explode " +
      "from objects at frequency peaks.",
    skillsSentence: "Skills Used: JavaScript, THREE.js, WebGL, Vite, HTML",
    projectHref: "https://aparcode.github.io/resopulse/",
    repoHref: "https://github.com/AparCode/resopulse",
  },
  "scene-underthesea": {
    title: "XRLive: Under the Sea",
    media: [
      { type: "image", src: "images/logo/underthesea-logo.png", alt: "Under the Sea logo" },
      { type: "image", src: "images/frameless.gif", alt: "Under the Sea frameless GIF" },
      {
        type: "embed",
        src: "https://www.youtube.com/watch?v=8niyMsKDXEo",
        alt: "My song composition",
      },
    ],
    message:
      "XRLive: Under the Sea was a team project for RIT’s Frameless Symposium that created " +
      "underwater-themed interactive visuals using motion tracking and projected effects. My main " +
      "contribution was a resizable fabric-movement effect in TouchDesigner using its MediaPipe " +
      "extension; I tested the effect on the Wegmans Theater projector and also composed music and " +
      "sound effects for the experience.",
    skillsSentence:
      "Skills Used: TouchDesigner, MediaPipe, Azure Kinect, Real-Time Projection, Ableton",
    projectHref: "",
    repoHref: "https://github.com/alf9310/XRLive-VIP-Fall-2025",
  },
  "scene-virtualcloset": {
    title: "VirtualCloset",
    image: "images/logo/virtualcloset-logo.png",
    message:
      "VirtualCloset is an AI-powered wardrobe assistant built at HACK.COMS '25. It suggests outfits " +
      "using Gemini, Pandas, JavaFX, and FastAPI. I developed the frontend and integrated it with " +
      "the backend.",
    skillsSentence:
      "Skills Used: Java, JavaFX, Python, FastAPI, Google Gemini API, Maven, SQLite, Pandas, " +
      "Pydantic, SQLAlchemy, Uvicorn, XML",
    projectHref: "",
    repoHref: "https://github.com/ib9168/Virtual_Closet_HACKCOMS-25",
  },
  "scene-visualdove": {
    title: "VisualDove",
    image: "images/logo/visualdove-logo.png",
    message:
      "For my Global Illumination class final project I built an interactive audio-visual engine in " +
      "Python. Using Librosa for frequency analysis and PyGame for rendering, the system creates " +
      "dynamic visuals synchronized to audio.",
    skillsSentence: "Skills Used: Python, Librosa, PyGame, NumPy, PIL",
    projectHref: "",
    repoHref: "https://github.com/AparCode/visual-dove",
  },
  "scene-virtualkaraoke": {
    title: "Virtual Karaoke",
    media: [
      { type: "image", src: "images/logo/virtualkaraoke-logo.png", alt: "Virtual Karaoke logo" },
      { type: "embed", src: "https://vimeo.com/1084431994", alt: "Virtual Karaoke demo" },
    ],
    message:
      "Virtual Karaoke was a team XR project presented at Imagine RIT 2025, where avatars mirrored " +
      "live performers through motion capture. I worked on the motion-capture sub-team by testing " +
      "RADICAL Motion with Unreal Engine, creating and importing ReadyPlayerMe avatars, investigating " +
      "facial morph-target and audio-motion synchronization issues, exploring Blueprint-based avatar " +
      "switching, and helping test and present the exhibit.",
    skillsSentence:
      "Skills Used: Unreal Engine, RADICAL Motion, ReadyPlayerMe, Perforce, Blueprints, Motion Capture",
    projectHref: "",
    repoHref: "",
  },
  "scene-myergbuddy": {
    title: "MyErgBuddy",
    media: [
      { type: "image", src: "images/logo/myergbuddy-logo.png", alt: "MyErgBuddy logo" },
      {
        type: "embed",
        src: "https://rit.zoom.us/clips/share/A2F3MRZPVzdPZTJLSFQ3NlBUd2VETnJxYzJRAQ",
        alt: "MyErgBuddy demo",
      },
    ],
    message:
      "MyErgBuddy is a real-time rowing-posture coaching prototype built at WiCHacks 2025. I co-developed " +
      "the computer-vision pipeline using MediaPipe pose landmarks, calculated joint angles and positions, " +
      "defined catch/finish posture checks, and helped integrate calibration, timing, sequence logic, " +
      "and feedback into Streamlit.",
    skillsSentence:
      "Skills Used: Python, MediaPipe, OpenCV, Pose Estimation, Joint-Angle Analysis, Streamlit",
    projectHref: "",
    repoHref: "https://github.com/Lilly-Rowland/WiCHacks2025",
  },
  "scene-brickstein": {
    title: "BrickStein",
    image: "images/logo/brickstein-logo.png",
    message:
      "BrickStein is a multimodal AI math-tutor prototype built at BrickHack 11. The team created a " +
      "workflow that accepted voice or chat input, captured and auto-cropped highlighted screen regions, " +
      "checked math reasoning, and generated visual explanation videos.",
    skillsSentence: "Skills Used: Google Chirp, OpenCV, GPT Models, Manim, Multimodal AI",
    projectHref: "",
    repoHref: "https://github.com/Gunoo1/BrickStein",
  },
  "scene-securecheckup": {
    title: "Secure Checkup",
    image: "images/logo/securecheckup-logo.png",
    message:
      "Secure Checkup is a healthcare data-equity platform built at HACK.COMS 2024 to help users inspect " +
      "demographic representation disparities in healthcare datasets. I co-developed the platform and " +
      "worked across the Oracle PL/SQL database, Python REST/JSON API, JavaScript frontend, and Tableau " +
      "visualizations.",
    skillsSentence:
      "Skills Used: Oracle PL/SQL, Python, REST API, JSON, JavaScript, HTML/CSS, Tableau",
    projectHref: "",
    repoHref: "https://github.com/Szheng25/SecureCheckup",
  },
  "scene-acertainconvexhull": {
    title: "A Certain Convex Hull",
    image: "images/logo/acertainconvexhull-logo.png",
    message:
      "A Certain Convex Hull is an interactive site built for a Computational Geometry class. Users add " +
      "points and manipulate matrices to form convex hulls (e.g., Jarvis’s March). I implemented " +
      "user-input features and much of the surrounding website.",
    skillsSentence: "Skills Used: JavaScript, HTML, CSS, JSON, p5.js",
    projectHref: "https://aparcode.github.io/acertainconvexhull/",
    repoHref: "https://github.com/AparCode/acertainconvexhull",
  },
  "scene-echoflower": {
    title: "Undertale Echo Flower Recreation",
    image: "images/logo/echoflower-logo.png",
    message:
      "For my Computer Graphics final I recreated the Echo Flower scene from Undertale using WebGPU " +
      "and JavaScript, building the environment, flowers, grass, and player.",
    skillsSentence: "Skills Used: JavaScript, WebGPU, HTML",
    projectHref: "",
    repoHref: "https://github.com/jltlm/echo-flower-scene",
  },
  "scene-spotiphy": {
    title: "Spotiphy",
    image: "images/logo/spotiphy-logo.png",
    message:
      "Spotiphy is a database-backed music application built for Principles of Data Management. I worked " +
      "with a relational PostgreSQL database and Python/psycopg2, writing and debugging SQL for account, " +
      "playlist, listening-history, search, social, and discovery features including top-artist and " +
      "top-genre queries.",
    skillsSentence: "Skills Used: Python, PostgreSQL, SQL, psycopg2, SSH",
    projectHref: "",
    repoHref: "https://github.com/BuxoGabriel/Spotiphy",
  },
  "scene-fibonacci": {
    title: "Fibonacci Watch Store",
    image: "images/logo/fibonacci-logo.png",
    message:
      "Fibonacci is a team-built watch e-commerce application. I implemented update-product functionality " +
      "and the user-registration class, and formatted website elements including the navigation bar. " +
      "The project used a Java/Spring backend with REST APIs and an Angular/TypeScript frontend.",
    skillsSentence: "Skills Used: Java, Spring, REST APIs, Maven, Angular, TypeScript, HTML/CSS",
    projectHref: "",
    repoHref: "https://github.com/AparCode/fibonacci",
  },
  "scene-areyousocialdistancing": {
    title: "Are You Social Distancing?",
    image: "images/logo/areyousocialdistancing-logo.png",
    message:
      "Are You Social Distancing? is a mask-recognition project from MIT BeaverWorks that uses CNNs to " +
      "detect faces and masks. I created mask/no-mask datasets and implemented webcam-based identification " +
      "with Python libraries.",
    skillsSentence: "Skills Used: Python, OpenCV, NumPy, Pyaudio, PyTorch, Noggin",
    projectHref: "",
    repoHref: "https://github.com/armaan-v924/are-you-social-distancing",
  },
  "scene-music1": {
    title: "Music",
    image: "images/logo/music-logo.png",
    message: "Open my music YouTube channel?",
    projectHref: "https://www.youtube.com/@illumidove",
    repoHref: "",
  },
  "scene-music2": {
    title: "Music",
    media: [
      { type: "image", src: "images/logo/music-logo.png", alt: "Music logo" },
      {
        type: "video",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        poster: "images/logo/music-logo.png",
      },
    ],
    message: "Open my music YouTube channel?",
    projectHref: "https://www.youtube.com/@illumidove",
    repoHref: "",
  },
  "scene-maara": {
    title: "MAARA",
    media: [
      { type: "image", src: "images/logo/maara-logo.png", alt: "MAARA logo" },
      { type: "embed", src: "https://youtu.be/0hhFTL5B0VA", alt: "MAARA demo" },
    ],
    message:
      "MAARA is a multi-agent software-repair assistant that uses locally served LLMs to plan, validate, " +
      "retrieve code context, generate fixes, critique results, and iteratively repair failures. I " +
      "co-developed the five-agent pipeline and worked with its RAG-backed retrieval architecture and " +
      "evaluation. In the project’s strongest reported few-shot setup, the system reached 100% pass@1 " +
      "with a 13-point gain associated with the strategy/evaluator gate.",
    skillsSentence:
      "Skills Used: Python, Ollama, LangChain, RAG, ChromaDB, Qdrant, LLM Agents, Evaluation",
    projectHref: "",
    repoHref: "https://github.com/AparCode/maara",
  },
  "scene-moody": {
    title: "Mood-y",
    media: [
      { type: "image", src: "images/logo/moody-logo.png", alt: "Mood-y logo" },
      { type: "embed", src: "https://youtu.be/7eI5m9MXY8E", alt: "Mood-y demo" },
    ],
    message:
      "Mood-y is a voice-based mood music recommender that turns a voice recording into personalized " +
      "music recommendations. I co-developed the end-to-end system, extracted 112-dimensional acoustic " +
      "features with Librosa, compared emotion classifiers across eight emotions, and connected the model " +
      "to a FastAPI/React application. The best SVM configuration achieved 91.7% accuracy and 0.916 F1 " +
      "on the project evaluation.",
    skillsSentence:
      "Skills Used: Python, Librosa, scikit-learn, SVM, RAVDESS, FastAPI, React, Audio ML",
    projectHref: "",
    repoHref: "https://github.com/sadhvikoli/voice-mood-music-recommender",
  },
  "scene-frequencyprint": {
    title: "FrequencyPrint",
    media: [
      { type: "image", src: "images/logo/frequencyprint-logo.png", alt: "FrequencyPrint logo" },
      { type: "embed", src: "https://youtu.be/N6JO_qRjtS8", alt: "FrequencyPrint demo" },
      {
        type: "image",
        src: "images/frequencyprint_demo.png",
        alt: "FrequencyPrint demo screenshot",
      },
    ],
    message:
      "FrequencyPrint is my capstone project exploring whether CNN-based audio models can distinguish real " +
      "music from AI-generated or deepfake music. I compared SimpleCNN, ResNet18, and ResNet34 on " +
      "spectrogram inputs, then diagnosed why initially near-perfect metrics failed on realistic AI covers. " +
      "After redesigning the evaluation with real and AI-cover data, the best realistic accuracy was 61.5%.",
    skillsSentence:
      "Skills Used: Python, PyTorch, Librosa, Spectrograms, CNNs, ResNet18, ResNet34, Model Evaluation",
    projectHref: "https://aparcode.github.io/frequency-print/",
    repoHref: "https://github.com/AparCode/frequency-print",
  },
  "scene-musictheoryagent": {
    title: "Music Theory Agent",
    media: [
      {
        type: "image",
        src: "images/logo/music-theory-agent-logo.png",
        alt: "Music Theory Agent logo",
      },
    ],
    message:
      "Music Theory Agent is a conversational voice assistant designed to help musicians craft, improve, " +
      "or finish songs with music-theory suggestions. I built and shipped a working prototype in one hour " +
      "during AssemblyAI’s Voice AI Meetup at NY Tech Week, using Claude Code and connecting AssemblyAI’s " +
      "Voice Agent API to a FastAPI application.",
    skillsSentence: "Skills Used: Claude Code, AssemblyAI Voice Agent API, FastAPI, Voice AI",
    projectHref: "",
    repoHref: "https://github.com/AparCode/music-theory-assistant",
  },
  "scene-artsonna": {
    title: "Artsonna",
    media: [{ type: "image", src: "images/logo/artsonna-logo.png", alt: "Artsonna logo" }],
    message:
      "Artsonna is a creative-platform prototype designed to help creators build portfolios and discover " +
      "community. I co-built the live hackathon prototype and iterated on the product experience from an " +
      "initial concept into a usable demo.",
    skillsSentence: "Skills Used: Base44, Prompt Engineering, Rapid Prototyping",
    projectHref: "https://artsonna.base44.app/",
    repoHref: "https://github.com/Likhithaa-Guntaka/artsonna",
  },
};

let dialogHref = "";

if (
  padDialog &&
  padDialogTitle &&
  padDialogMessage &&
  padDialogSkills &&
  padDialogClose &&
  padsContainer
) {
  padsContainer.addEventListener("click", (event) => {
    const pad = event.target.closest(".pad");
    if (!pad) return;

    const sceneClass = Array.from(pad.classList).find((cls) => cls.startsWith("scene-"));
    if (!sceneClass) return;

    const allPads = Array.from(padsContainer.querySelectorAll(".pad"));
    const padNumber = allPads.indexOf(pad) + 1;

    const info = sceneDialogMap[sceneClass] || {
      title: "Pad " + padNumber,
      image: "",
      message: sceneClass
        ? "No dialog metadata yet for " + sceneClass + "."
        : "This pad has no scene assigned yet.",
      href: "",
    };

    dialogProjectHref = info.projectHref || "";
    dialogRepoHref = info.repoHref || "";
    padDialogTitle.textContent = info.title;
    renderPadDialogMedia(info);
    padDialogMessage.textContent = info.message;
    padDialogSkills.textContent = info.skillsSentence || "";
    padDialogSkills.hidden = !info.skillsSentence;
    padDialogProject.disabled = !dialogProjectHref;
    padDialogRepo.disabled = !dialogRepoHref;

    padDialog.showModal();
  });

  // Floating tooltip element (appended to body) to avoid overflow clipping
  let floatingTooltip = null;

  function ensureFloatingTooltip() {
    if (!floatingTooltip) {
      floatingTooltip = document.createElement("div");
      floatingTooltip.className = "floating-tooltip";
      floatingTooltip.style.opacity = "0";
      floatingTooltip.style.transition = "opacity 160ms ease, transform 160ms ease";
      document.body.appendChild(floatingTooltip);
    }
    return floatingTooltip;
  }

  function showFloatingTooltipForPad(pad) {
    const text = pad.getAttribute("data-tooltip");
    if (!text) return;
    const tip = ensureFloatingTooltip();
    tip.textContent = text;
    tip.style.opacity = "0";

    // Allow DOM to update sizes
    requestAnimationFrame(() => {
      const rect = pad.getBoundingClientRect();
      const tipRect = tip.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      let top, left;
      // prefer below, otherwise place above
      if (spaceBelow > tipRect.height + 12) {
        top = rect.bottom + 8;
      } else {
        top = rect.top - tipRect.height - 8;
      }
      left = rect.left + rect.width / 2 - tipRect.width / 2;
      // clamp within viewport
      left = Math.max(8, Math.min(left, window.innerWidth - tipRect.width - 8));
      tip.style.top = Math.round(top) + "px";
      tip.style.left = Math.round(left) + "px";
      tip.style.opacity = "1";
      tip.style.transform = "translateY(0)";
    });
  }

  function hideFloatingTooltip() {
    if (!floatingTooltip) return;
    floatingTooltip.style.opacity = "0";
  }

  // Attach pointer listeners to pads to show/hide floating tooltip
  const padElems = Array.from(padsContainer.querySelectorAll(".pad"));
  padElems.forEach((pad) => {
    pad.addEventListener("pointerenter", (e) => {
      // only show tooltip for active pads
      if (!pad.classList.contains("active")) return;
      showFloatingTooltipForPad(pad);
    });
    pad.addEventListener("pointerleave", () => {
      hideFloatingTooltip();
    });
  });

  // hide tooltip on scroll or resize
  const padsScrollWrapper = document.querySelector(".pads-scroll-wrapper");
  if (padsScrollWrapper) {
    padsScrollWrapper.addEventListener("scroll", () => hideFloatingTooltip(), { passive: true });
  }
  window.addEventListener("resize", hideFloatingTooltip);

  if (padDialogPrevMedia) {
    padDialogPrevMedia.addEventListener("click", () => {
      showPadDialogMedia(dialogMediaIndex - 1);
    });
  }

  if (padDialogNextMedia) {
    padDialogNextMedia.addEventListener("click", () => {
      showPadDialogMedia(dialogMediaIndex + 1);
    });
  }

  padDialogClose.addEventListener("click", () => {
    padDialog.close();
  });

  if (padDialogProject) {
    padDialogProject.addEventListener("click", () => {
      if (dialogProjectHref) {
        window.open(dialogProjectHref, "_blank", "noopener,noreferrer");
      }
      padDialog.close();
    });
  }

  if (padDialogRepo) {
    padDialogRepo.addEventListener("click", () => {
      if (dialogRepoHref) {
        window.open(dialogRepoHref, "_blank", "noopener,noreferrer");
      }
      padDialog.close();
    });
  }
}

// Standalone upper-right button behavior (not part of the launchpad)
const upperActionButton = document.getElementById("upperActionButton");
if (upperActionButton && padDialog) {
  upperActionButton.addEventListener("click", () => {
    // Show the existing pad dialog as a small info modal
    padDialogTitle.textContent = "Instructions";
    renderPadDialogMedia({});
    padDialogMessage.textContent =
      "This portfolio is a launchpad inspired by Ableton. Use the side buttons to navigate sections — " +
      "for example, ‘About’ shows my bio and skills. " +
      "By pressing a side button, the pad will light up in different colors, each representing a " +
      "different project, experience, or aspect of my background. Click the lit-up pads to learn more " +
      "about each one! " +
      "You can also click the top buttons to either view my LinkedIn and GitHub profiles, download my " +
      "resume, or contact me via email.";
    padDialogSkills.textContent = "";
    padDialogSkills.hidden = true;
    dialogProjectHref = "";
    dialogRepoHref = "";
    padDialogProject.disabled = true;
    padDialogRepo.disabled = true;
    padDialog.showModal();
  });
}

// Inject logos into pads when the buttons are toggled
// About
(function () {
  const aboutBtn = document.querySelector('button[aria-label="About"]');
  // if another button is selected the images go away
  if (!aboutBtn) return;
  const about_targets = [
    { scene: "about", logo: "images/logo/about-logo.png", alt: "About logo" },
    { scene: "skills", logo: "images/logo/skills-logo.png", alt: "Skills logo" },
  ];

  function addLogoToPad(pad, meta) {
    if (!pad || pad.querySelector(".pad-logo")) return;
    const img = document.createElement("img");
    img.className = "pad-logo";
    img.src = meta.logo;

    if (meta.srcset) img.srcset = meta.srcset;
    img.sizes = "(max-width:800px) 60px, 120px";
    img.alt = meta.alt || "";
    img.loading = "lazy";
    img.decoding = "async";
    pad.appendChild(img);
  }

  function removeLogoFromPad(pad) {
    const el = pad && pad.querySelector(".pad-logo");
    if (el) el.remove();
  }

  aboutBtn.addEventListener("click", () => {
    if (!startLogoGroup("about")) return;
    const pads = Array.from(document.querySelectorAll(".led-pads .pad"));
    about_targets.forEach((t) => {
      const sceneKey = t.scene;
      const sceneObj = scenes[sceneKey];
      let indexes = [];

      if (sceneObj) {
        indexes = resolveIndexes(sceneObj, pads);
      } else {
        // fallback: find pad by class name
        const padByClass = document.querySelector(`.led-pads .pad.scene-${sceneKey}`);
        if (padByClass) indexes = [pads.indexOf(padByClass)];
      }

      indexes.forEach((i) => {
        const pad = pads[i];
        if (!pad) return;
        addLogoToPad(pad, t);
      });
    });
  });
})();

// Experience
(function () {
  const experienceBtn = document.querySelector('button[aria-label="Experience"]');
  // if another button is selected the images go away
  if (!experienceBtn) return;
  const exp_targets = [
    { scene: "kitware", logo: "images/logo/kitware-logo.png", alt: "Kitware logo" },
    { scene: "griffiss", logo: "images/logo/griffiss-logo.png", alt: "Griffiss Institute logo" },
    {
      scene: "northeastern",
      logo: "images/logo/northeastern-logo.png",
      alt: "Northeastern University logo",
    },
    { scene: "mitbeaverworks", logo: "images/logo/mit-logo.png", alt: "MIT BeaverWorks logo" },
    { scene: "wic", logo: "images/logo/wic-logo.png", alt: "Women in Computing logo" },
    {
      scene: "coms",
      logo: "images/logo/coms-logo.png",
      alt: "Computing Organization for Multicultural Students logo",
    },
    { scene: "ai", logo: "images/logo/ai-logo.png", alt: "RIT AI Club logo" },
    { scene: "sigma", logo: "images/logo/sigma-logo.png", alt: "Sigma Sigma Sigma logo" },
    { scene: "gso", logo: "images/logo/gso-logo.png", alt: "Game Symphony Orchestra logo" },
    { scene: "csh", logo: "images/logo/csh-logo.png", alt: "Computer Science House logo" },
  ];

  function addLogoToPad(pad, meta) {
    if (!pad || pad.querySelector(".pad-logo")) return;
    const img = document.createElement("img");
    img.className = "pad-logo";
    img.src = meta.logo;
    if (meta.srcset) img.srcset = meta.srcset;
    img.sizes = "(max-width:800px) 60px, 120px";
    img.alt = meta.alt || "";
    img.loading = "lazy";
    img.decoding = "async";
    pad.appendChild(img);
  }

  function removeLogoFromPad(pad) {
    const el = pad && pad.querySelector(".pad-logo");
    if (el) el.remove();
  }

  experienceBtn.addEventListener("click", () => {
    if (!startLogoGroup("experience")) return;
    const pads = Array.from(document.querySelectorAll(".led-pads .pad"));

    exp_targets.forEach((t) => {
      const sceneKey = t.scene;
      const sceneObj = scenes[sceneKey];
      let indexes = [];

      if (sceneObj) {
        indexes = resolveIndexes(sceneObj, pads);
      } else {
        // fallback: find pad by class name
        const padByClass = document.querySelector(`.led-pads .pad.scene-${sceneKey}`);
        if (padByClass) indexes = [pads.indexOf(padByClass)];
      }

      indexes.forEach((i) => {
        const pad = pads[i];
        if (!pad) return;
        addLogoToPad(pad, t);
      });
    });
  });
})();

// Projects
(function () {
  const projectsBtn = document.querySelector('button[aria-label="Projects"]');
  if (!projectsBtn) return;

  projectsBtn.addEventListener("click", () => {
    showProjectPage(0);
  });
})();

// Music
(function () {
  const musicBtn = document.querySelector('button[aria-label="Music"]');
  if (!musicBtn) return;
  const music_targets = [
    { scene: "music1", logo: "images/logo/music-logo.png", alt: "Music logo" },
    { scene: "music2", logo: "images/logo/music-logo.png", alt: "Music logo" },
  ];

  function addLogoToPad(pad, meta) {
    if (!pad || pad.querySelector(".pad-logo")) return;
    const img = document.createElement("img");
    img.className = "pad-logo";
    img.src = meta.logo;
    if (meta.srcset) img.srcset = meta.srcset;
    img.sizes = "(max-width:400px) 60px, 120px";
    img.alt = meta.alt || "";
    img.loading = "lazy";
    img.decoding = "async";
    pad.appendChild(img);
  }

  function removeLogoFromPad(pad) {
    const el = pad && pad.querySelector(".pad-logo");
    if (el) el.remove();
  }

  musicBtn.addEventListener("click", () => {
    if (!startLogoGroup("music")) return;
    const pads = Array.from(document.querySelectorAll(".led-pads .pad"));

    music_targets.forEach((t) => {
      const sceneKey = t.scene;
      const sceneObj = scenes[sceneKey];
      let indexes = [];

      if (sceneObj) {
        indexes = resolveIndexes(sceneObj, pads);
      } else {
        // fallback: find pad by class name
        const padByClass = document.querySelector(`.led-pads .pad.scene-${sceneKey}`);
        if (padByClass) indexes = [pads.indexOf(padByClass)];
      }

      indexes.forEach((i) => {
        const pad = pads[i];
        if (!pad) return;
        addLogoToPad(pad, t);
      });
    });
  });
})();
