// ===================
// Constants
// ===================
const PAD_COLOR_CLASSES = ["scene-linkedin", "scene-github", "scene-resume","scene-contact", "scene-about", "scene-skills", 
    "scene-kitware", "scene-griffiss", "scene-northeastern", "scene-mitbeaverworks", "scene-wic", "scene-coms", "scene-ai", 
    "scene-sigma", "scene-gso", "scene-csh", "scene-orderup", "scene-resopulse", "scene-underthesea", "scene-virtualcloset", "scene-visualdove", 
    "scene-virtualkaraoke", "scene-myergbuddy", "scene-brickstein", "scene-securecheckup", "scene-acertainconvexhull", 
    "scene-echoflower", "scene-spotiphy", "scene-fibonacci", "scene-areyousocialdistancing", "scene-music1", "scene-music2", "scene-moody", "scene-frequencyprint"];

const CONTACT_COMPOSE_URL =
    "https://mail.google.com/mail/?view=cm&fs=1&to=apar2003@gmail.com&su=Portfolio%20Inquiry" +
    "&body=Dear%20Aparnaa%2C%20I%20wanted%20to%20connect%20with%20you.";

// ===================
// Scene Definitions
// ===================
const scenes = {
    resume: {
        colorClass: "scene-resume",
        indexes: "all"
    },

    linkedin: {
        colorClass: "scene-linkedin",
        indexes: "all"
    },

    github: {
        colorClass: "scene-github",
        indexes: "all"
    },

    contact: {
        colorClass: "scene-contact",
        indexes: "all"
    },

    about: {
        colorClass: "scene-about",
        indexes: [5]
    },

    skills: {
        colorClass: "scene-skills",
        indexes: [10]
    },

    kitware: {
        colorClass: "scene-kitware",
        indexes: [1]
    },

    griffiss: {
        colorClass: "scene-griffiss",
        indexes: [5]
    },

    northeastern: {
        colorClass: "scene-northeastern",
        indexes: [9]
    },

    mitbeaverworks: {
        colorClass: "scene-mitbeaverworks",
        indexes: [13]
    },

    wic: {
        colorClass: "scene-wic",
        indexes: [2]
    },

    coms: {
        colorClass: "scene-coms",
        indexes: [6]
    },

    ai: {
        colorClass: "scene-ai",
        indexes: [10]
    },

    sigma: {
        colorClass: "scene-sigma",
        indexes: [14]
    },

    gso: {
        colorClass: "scene-gso",
        indexes: [15]
    },

    csh: {
        colorClass: "scene-csh",
        indexes: [3]
    },

    moody: {
        colorClass: "scene-moody",
        indexes: [0]
    },

    frequencyprint: {
        colorClass: "scene-frequencyprint",
        indexes: [1]
    },

    orderup: {
        colorClass: "scene-orderup",
        indexes: [2]
    },

    resopulse: {
        colorClass: "scene-resopulse",
        indexes: [3]
    },

    underthesea: {
        colorClass: "scene-underthesea",
        indexes: [4]
    },

    virtualcloset: {
        colorClass: "scene-virtualcloset",
        indexes: [5]
    },

    visualdove: {
        colorClass: "scene-visualdove",
        indexes: [6]
    },

    virtualkaraoke: {
        colorClass: "scene-virtualkaraoke",
        indexes: [7]
    },

    myergbuddy: {
        colorClass: "scene-myergbuddy",
        indexes: [8]
    },

    brickstein: {
        colorClass: "scene-brickstein",
        indexes: [9]
    },

    securecheckup: {
        colorClass: "scene-securecheckup",
        indexes: [10]
    },

    acertainconvexhull: {
        colorClass: "scene-acertainconvexhull",
        indexes: [11]
    },

    echoflower: {
        colorClass: "scene-echoflower",
        indexes: [12]
    },

    spotiphy: {
        colorClass: "scene-spotiphy",
        indexes: [13]
    },

    fibonacci: {
        colorClass: "scene-fibonacci",
        indexes: [14]
    },

    areyousocialdistancing: {
        colorClass: "scene-areyousocialdistancing",
        indexes: [15]
    },

    music1: {
        colorClass: "scene-music1",
        indexes: [0]
    },

    music2: {
        colorClass: "scene-music2",
        indexes: []
    }
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
    });
}

function clearAllPadLogos() {
    document.querySelectorAll(".pad-logo").forEach((logo) => {
        logo.remove();
    });
}

let activeLogoGroup = null;

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
        });
    });
}

function applyScene(sceneName, options) {
    applyScenes([sceneName], options);
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
    const experienceButton = document.querySelector(".side-controls .button[aria-label='Experience']");
    const projectsButton = document.querySelector(".side-controls .button[aria-label='Projects']");
    const musicButton = document.querySelector(".side-controls .button[aria-label='Music']")

    if (linkedinButton) {
        linkedinButton.addEventListener("click", () => {
            applyScene("linkedin");
        });
    }

    if (githubButton) {
        githubButton.addEventListener("click", () => {
            applyScene("github");
        });
    }

    if (resumeButton) {
        resumeButton.addEventListener("click", () => {
            applyScene("resume");
        });
    }

    if (contactButton) {
        contactButton.href = CONTACT_COMPOSE_URL;
        contactButton.addEventListener("click", () => {
            applyScene("contact");
        });
    }

    if (aboutButton) {
        aboutButton.addEventListener("click", () => {
            applyScenes(["about", "skills"]);
        });
    }

    if(experienceButton) {
        experienceButton.addEventListener("click", () => {
            applyScenes(["kitware", "griffiss", "northeastern", "mitbeaverworks", "wic", "coms", "ai", "sigma", "gso", "csh"]);
        });
    }
    
    if(projectsButton) {
        projectsButton.addEventListener("click", () => {
            applyScenes(["moody","frequencyprint", "orderup", "resopulse", "underthesea", "virtualcloset", "visualdove", "virtualkaraoke", 
                "myergbuddy", "brickstein", "securecheckup", "acertainconvexhull", "echoflower", "spotiphy", 
                "fibonacci", "areyousocialdistancing"]);
        });
    }

    if(musicButton){
        musicButton.addEventListener("click", () => {
            applyScenes(["music1", "music2"]);
        });
    }

    if (clearButton) {
        clearButton.addEventListener("click", () => {
            const pads = Array.from(document.querySelectorAll(".pad"));
            activeLogoGroup = null;
            clearAllPadLogos();
            clearPads(pads);
        });
    }
});

// Title card logic: show on load then fade to reveal the launchpad
document.addEventListener('DOMContentLoaded', () => {
    const titleCard = document.getElementById('titleCard');
    const main = document.querySelector('main');
    if (!titleCard) return;

    // Hide main from assistive tech while the title card is shown
    if (main) main.setAttribute('aria-hidden', 'true');

    // Duration the title card remains visible before starting fade (ms)
    const visibleDuration = 6000;

    // Start fade after the visible duration
    setTimeout(() => {
        titleCard.classList.add('fade-out');
    }, visibleDuration);

    // Remove the element after animation completes and restore main
    titleCard.addEventListener('animationend', () => {
        try { titleCard.remove(); } catch (e) { titleCard.style.display = 'none'; }
        if (main) main.removeAttribute('aria-hidden');
    });
});

// ===================
// Pad Dialog
// ===================
const padDialog = document.getElementById("padDialog");
const padDialogTitle = document.getElementById("padDialogTitle");
const padDialogImage = document.getElementById("padDialogImage");
const padDialogMessage = document.getElementById("padDialogMessage");
const padDialogClose = document.getElementById("padDialogClose");
const padDialogOpen = document.getElementById("padDialogOpen");
const padsContainer = document.querySelector(".led-pads");

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

padDialogImage.addEventListener("load", updatePadDialogImageSize);

const sceneDialogMap = {
    "scene-linkedin": { title: "LinkedIn", message: "Open LinkedIn profile?", href: "https://www.linkedin.com/in/aparnaain/" },
    "scene-github": { title: "GitHub", message: "Open GitHub profile?", href: "https://github.com/AparCode" },
    "scene-resume": { title: "Resume", message: "Download resume?", href: "./resume.pdf" },
    "scene-contact": { title: "Contact", message: "Compose an email?", href: CONTACT_COMPOSE_URL },
    "scene-about": {
        title: "About",
        image: "images/headshot.jpg",
        message:
            "Hello! I'm Aparnaa Senthilnathan, an aspiring software engineer specializing in AI and computer vision. I recently graduated from the Rochester Institute of Technology with both a Bachelor's and Master's degree in Computer Science. I have built object detection systems with PyTorch and trained transformer-based models (RT-DETR) at Kitware. I have also researched model robustness and pretraining limitations (e.g., CLIP) at the Griffiss Institute.\n\n" +
            "I enjoy building practical machine learning systems and am seeking full-time roles in Software Engineering, Machine Learning Engineering, or AI Engineering.",
        href: ""
    },
    "scene-skills": {
        title: "Skills",
        message:
            "Languages: Java, JavaScript, Python, SQL, HTML, CSS\n" +
            "Backend & Infrastructure: FastAPI, REST APIs, Slurm, GitLab CI/CD, Linux, React, Node.js\n" +
            "Databases & Tools: MySQL, Docker, Git, data processing and validation\n" +
            "AI & Machine Learning: PyTorch, TensorFlow, scikit-learn, OpenCV, Librosa, RAG, ChromaDB, Qdrant",
        href: ""
    },
    "scene-kitware": {
        title: "Kitware: Computer Vision Intern",
        image: "images/logo/kitware-logo.png",
        message:
            "Throughout the summer of 2024, I worked as a research engineering intern for the Computer Vision team. " +
            "I helped develop cutting-edge object detection systems for customers in the DoD and IC. I researched " +
            "small object detection and created datasets and validation pipelines to test small object model " +
            "performance. I also trained a SOTA real-time, transformer-based architecture on COCO (RT-DETR).",
        href: ""
    },
    "scene-griffiss": {
        title: "Griffiss Institute: Artificial Intelligence Research Intern",
        image: "images/logo/griffiss-logo.png",
        message:
            "Throughout the majority of the summer and fall of 2023, I did a co-op at the Griffiss Institute RI " +
            "branch where I polished my artificial intelligence skills, developed methods for adversarial attacks, " +
            "and explored vulnerabilities within foundational models.",
        href: ""
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
        href: ""
    },
    "scene-mitbeaverworks": {
        title: "MIT Beaver*Works Summer Institute: Cog*Works",
        image: "images/logo/mit-logo.png",
        message:
            "Throughout the summer of 2020, I got the opportunity to participate in the MIT BWSI Cog*Works program. " +
            "I learned and applied cognitive science skills to machine learning. I also gained a lot of team " +
            "experience as we split up into teams to work on a couple of projects that involves recognition of certain " +
            "items such as songs.",
        href: ""
    },
    "scene-wic": {
        title: "Women in Computing: Graduate Coordinator",
        image: "images/logo/wic-logo.png",
        message:
            "Women in Computing is an organization that promotes women and gender minorities in technology. I have been active in Women in Computing since starting college. I organized technical and networking events to boost community engagement and membership, and I mentored elementary and middle school students in JavaScript and OOP fundamentals.",
        href: ""
    },
    "scene-coms": {
        title: "Computing Organization for Multicultural Students: Public Relations Chair",
        image: "images/logo/coms-logo.png",
        message:
            "Over the past two years, I've been involved in the Computing Organization for Multicultural Students. More recently, I was the " +
            "Public Relations Chair, where I led communication and outreach initiatives, coordinating content across cross-functional teams. " +
            "In addition, I translated technical and event-related information into clear, user-friendly messaging for diverse audiences.",
        href: ""
    },
    "scene-ai": {
        title: "RIT AI Club: Events Coordinator",
        image: "images/logo/ai-logo.png",
        message:
            "For a year, I coordinated events with the Rochester Institute of Technology's Artificial Intelligence Club as the Events Coordinator. I planned and " +
            "coordinated company visits to expand student exposure to Artificial Intelligence. In addition, I captured photos and videos of events to help create recap posts and reels to support the club.",
        href: ""
    },
    "scene-sigma": {
        title: "Sigma Sigma Sigma: Alumni Relations Chair",
        image: "images/logo/sigma-logo.png",
        message: "I volunteered at events like Daffodil Day and park clean-ups. As Alumni Relations Chair, I networked with alumni and designed monthly newsletters.",
        href: ""
    },
    "scene-gso": {
        title: "Game Symphony Orchestra",
        image: "images/logo/gso-logo.png",
        message: "I performed with the Game Symphony Orchestra throughout college, playing piano in every concert and helping bring orchestral arrangements of video-game music to life.",
        href: ""
    },
    "scene-csh": {
        title: "Computer Science House",
        image: "images/logo/csh-logo.png",
        message: "I was an active member of the Computer Science House (Special Interest House) for my first two years of college. I helped make the organization's very first yearbook as a member of Yearbook Committee, and I've participated in various events that showcase my versatility such as Music Jam.",
        href: ""
    },
    "scene-orderup": {
        title: "OrderUp",
        image: "images/logo/orderup-logo.png",
        message:
            "OrderUp is a restaurant simulator created at WiCHacks '26. Players customize menus, analyze financial metrics, and make business decisions to grow their restaurant. I helped integrate the Gemini API into the Java-based UI.",
        href: "https://github.com/Lilly-Rowland/OrderUp"
    },
    "scene-resopulse": {
        title: "ResoPulse",
        image: "images/logo/resopulse-logo.png",
        message:
            "ResoPulse is a Three.js music visualizer built for a Computer Animation course. It reacts to audio peaks with high-intensity effects. I architected the particle system so particles explode from objects at frequency peaks.",
        href: "https://github.com/AparCode/resopulse"
    },
    "scene-underthesea": {
        title: "XRLive: Under the Sea",
        image: "images/logo/underthesea-logo.png",
        message:
            "For XRLive (Fall 2025) our team built an interactive, motion-responsive fabric simulation in TouchDesigner using Azure Kinect body-tracking. I used TouchDesigner’s CV and GPU tools to produce immersive visuals and composed the soundtrack and sound effects in Ableton.",
        href: "https://github.com/alf9310/XRLive-VIP-Fall-2025"
    },
    "scene-virtualcloset": {
        title: "VirtualCloset",
        image: "images/logo/virtualcloset-logo.png",
        message:
            "VirtualCloset is an AI-powered wardrobe assistant built at HACK.COMS '25. It suggests outfits using Gemini, Pandas, JavaFX, and FastAPI. I developed the frontend and integrated it with the backend.",
        href: "https://github.com/ib9168/Virtual_Closet_HACKCOMS-25"
    },
    "scene-visualdove": {
        title: "VisualDove",
        image: "images/logo/visualdove-logo.png",
        message:
            "For my Global Illumination class final project I built an interactive audio-visual engine in Python. Using Librosa for frequency analysis and PyGame for rendering, the system creates dynamic visuals synchronized to audio.",
        href: "https://github.com/AparCode/visual-dove"
    },
    "scene-virtualkaraoke": {
        title: "Virtual Karaoke",
        image: "images/logo/virtualkaraoke-logo.png",
        message:
            "At ImagineRIT 2025, my team built a Virtual Karaoke system using real-time motion-capture avatars. I worked on avatar morph targets and motion capture integration with Unreal Engine and RADICAL Motion, fixed facial animation bugs, and modeled the UI to switch between six avatars using the spacebar.",
        href: ""
    },
    "scene-myergbuddy": {
        title: "MyErgBuddy",
        image: "images/logo/myergbuddy-logo.png",
        message:
            "MyErgBuddy (WiCHacks '25) analyzes a rower's posture using computer vision and provides corrective feedback. We built a pose-estimation model to measure landmarks and evaluate form; I implemented the landmark comparison functions and contributed to the OpenCV components.",
        href: "https://github.com/Lilly-Rowland/WiCHacks2025"
    },
    "scene-brickstein": {
        title: "BrickStein",
        image: "images/logo/brickstein-logo.png",
        message:
            "BrickStein is a math-help chatbot built at BrickHack 11. It combines a LangChain GPT agent with tools like OpenCV and Manim to offer visual guidance. Features include screenshot-based suggestions and autogenerated videos with diagrams and audio for explanations.",
        href: "https://github.com/Gunoo1/BrickStein"
    },
    "scene-securecheckup": {
        title: "SecureCheckup",
        image: "images/logo/securecheckup-logo.png",
        message:
            "SecureCheckup (HACK.COMS 2024) is a web app that displays and secures hospital data to better represent underrepresented communities. I worked on connecting the database backend to the Python frontend via REST APIs.",
        href: "https://github.com/Szheng25/SecureCheckup"
    },
    "scene-acertainconvexhull": {
        title: "A Certain Convex Hull",
        image: "images/logo/acertainconvexhull-logo.png",
        message:
            "A Certain Convex Hull is an interactive site built for a Computational Geometry class. Users add points and manipulate matrices to form convex hulls (e.g., Jarvis’s March). I implemented user-input features and much of the surrounding website.",
        href: "https://github.com/AparCode/acertainconvexhull"
    },
    "scene-echoflower": {
        title: "Undertale Echo Flower Recreation",
        image: "images/logo/echoflower-logo.png",
        message: "For my Computer Graphics final I recreated the Echo Flower scene from Undertale using WebGPU and JavaScript, building the environment, flowers, grass, and player.",
        href: "https://github.com/jltlm/echo-flower-scene"
    },
    "scene-spotiphy": {
        title: "Spotiphy",
        image: "images/logo/spotiphy-logo.png",
        message:
            "Spotiphy is a database project for Principles of Data Management where I focused on SQL and efficient database design. I wrote and debugged SQL for features like login and top-artist queries.",
        href: "https://github.com/BuxoGabriel/Spotiphy"
    },
    "scene-fibonacci": {
        title: "Fibonacci",
        image: "images/logo/fibonacci-logo.png",
        message:
            "Fibonacci is a watch e-store built for Intro to Software Engineering. I worked on frontend design and backend models for products and their relationships, gaining hands-on experience with JSON, HTML, and Angular.",
        href: "https://github.com/AparCode/fibonacci"
    },
    "scene-areyousocialdistancing": {
        title: "Are You Social Distancing?",
        image: "images/logo/areyousocialdistancing-logo.png",
        message:
            "Are You Social Distancing? is a mask-recognition project from MIT BeaverWorks that uses CNNs to detect faces and masks. I created mask/no-mask datasets and implemented webcam-based identification with Python libraries.",
        href: "https://github.com/AparCode/mask_identifier"
    },
    "scene-music1": { title: "Music", image: "images/logo/music-logo.png", message: "Open my music YouTube channel?", href: "https://www.youtube.com/@illumidove" },
    "scene-music2": { title: "Music", image: "images/logo/music-logo.png", message: "Open my music YouTube channel?", href: "https://www.youtube.com/@illumidove" },
    "scene-moody": {
        title: "Moody",
        image: "images/logo/moody-logo.png",
        message: "Moody is an end-to-end ML app (course final) that analyzes voice recordings to detect emotion and recommends songs that match the detected mood.",
        href: "https://github.com/sadhvikoli/voice-mood-music-recommender"
    },
    "scene-frequencyprint": {
        title: "FrequencyPrint",
        image: "images/logo/frequencyprint-logo.png",
        message: "FrequencyPrint (capstone) analyzes audio to detect deepfakes and AI-generated vocals, distinguishing full synthetic audio and AI covers.",
        href: "https://github.com/AparCode/frequency-print"
    }
};

let dialogHref = "";

if (padDialog && padDialogTitle && padDialogMessage && padDialogClose && padDialogOpen && padsContainer) {
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
            href: ""
        };

        dialogHref = info.href || "";
        padDialogTitle.textContent = info.title;
        if (info.image) {
            padDialogImage.classList.remove("is-square", "is-rectangle", "is-landscape", "is-portrait");
            padDialogImage.src = info.image;
            padDialogImage.alt = info.title + " image";
            padDialogImage.sizes = '(max-width:800px) 60px, 120px'
            padDialogImage.style.display = "block";
        } else {
            padDialogImage.removeAttribute("src");
            padDialogImage.classList.remove("is-square", "is-rectangle", "is-landscape", "is-portrait");
            padDialogImage.style.display = "none";
        }
        padDialogMessage.textContent = info.message;
        padDialogOpen.disabled = !dialogHref;

        padDialog.showModal();
    });

    padDialogClose.addEventListener("click", () => {
        padDialog.close();
    });

    padDialogOpen.addEventListener("click", () => {
        if (dialogHref) {
            window.open(dialogHref, "_blank", "noopener,noreferrer");
        }
        padDialog.close();
    });
}

// Standalone upper-right button behavior (not part of the launchpad)
const upperActionButton = document.getElementById("upperActionButton");
if (upperActionButton && padDialog) {
    upperActionButton.addEventListener("click", () => {
        // Show the existing pad dialog as a small info modal
        padDialogTitle.textContent = "Instructions";
        padDialogImage.style.display = "none";
        padDialogMessage.textContent = "This portfolio is a launchpad inspired by Ableton. Use the side buttons to navigate sections — for example, ‘About’ shows my bio and skills. " + 
        "By pressing a side button, the pad will light up in different colors, each representing a different project, experience, or aspect of my background. Click the lit-up pads to learn more about each one! " +
        "You can also click the top buttons to either view my LinkedIn and GitHub profiles, download my resume, or contact me via email.";
        padDialogOpen.disabled = true;
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
        { scene: 'about', logo: 'images/logo/about-logo.png', alt: 'About logo' },
        { scene: 'skills', logo: 'images/logo/skills-logo.png', alt: 'Skills logo' },
    ];  

    function addLogoToPad(pad, meta) {
        if (!pad || pad.querySelector('.pad-logo')) return;
        const img = document.createElement('img');
        img.className = 'pad-logo';
        img.src = meta.logo;

        if (meta.srcset) img.srcset = meta.srcset;
        img.sizes = '(max-width:800px) 60px, 120px';
        img.alt = meta.alt || '';
        img.loading = 'lazy';
        img.decoding = 'async';
        pad.appendChild(img);
    }

    function removeLogoFromPad(pad) {
        const el = pad && pad.querySelector('.pad-logo');
        if (el) el.remove();
    }

    aboutBtn.addEventListener('click', () => {
        if (!startLogoGroup("about")) return;
        const pads = Array.from(document.querySelectorAll('.led-pads .pad'));
        about_targets.forEach((t) => {
            const sceneKey = t.scene;
            const sceneObj = scenes[sceneKey];
            let indexes = [];

            if (sceneObj) {
                indexes = resolveIndexes(sceneObj, pads);
            }
            else {
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
        { scene: 'kitware', logo: 'images/logo/kitware-logo.png', alt: 'Kitware logo' },
        { scene: 'griffiss', logo: 'images/logo/griffiss-logo.png', alt: 'Griffiss Institute logo' },
        { scene: 'northeastern', logo: 'images/logo/northeastern-logo.png', alt: 'Northeastern University logo' },
        { scene: 'mitbeaverworks', logo: 'images/logo/mit-logo.png', alt: 'MIT BeaverWorks logo' },
        { scene: 'wic', logo: 'images/logo/wic-logo.png', alt: 'Women in Computing logo' },
        { scene: 'coms', logo: 'images/logo/coms-logo.png', alt: 'Computing Organization for Multicultural Students logo' },
        { scene: 'ai', logo: 'images/logo/ai-logo.png', alt: 'RIT AI Club logo' },
        { scene: 'sigma', logo: 'images/logo/sigma-logo.png', alt: 'Sigma Sigma Sigma logo' },
        { scene: 'gso', logo: 'images/logo/gso-logo.png', alt: 'Game Symphony Orchestra logo' },
        { scene: 'csh', logo: 'images/logo/csh-logo.png', alt: 'Computer Science House logo' },
    ];

    function addLogoToPad(pad, meta) {
        if (!pad || pad.querySelector('.pad-logo')) return;
        const img = document.createElement('img');
        img.className = 'pad-logo';
        img.src = meta.logo;
        if (meta.srcset) img.srcset = meta.srcset;
        img.sizes = '(max-width:800px) 60px, 120px';
        img.alt = meta.alt || '';
        img.loading = 'lazy';
        img.decoding = 'async';
        pad.appendChild(img);
    }

    function removeLogoFromPad(pad) {
        const el = pad && pad.querySelector('.pad-logo');
        if (el) el.remove();
    }

    experienceBtn.addEventListener('click', () => {
        if (!startLogoGroup("experience")) return;
        const pads = Array.from(document.querySelectorAll('.led-pads .pad'));
    
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
    // if another button is selected the images go away
    if (!projectsBtn) return;
    const proj_targets = [
        { scene: 'areyousocialdistancing', logo: 'images/logo/areyousocialdistancing-logo.png', alt: 'Are You Social Distancing logo' },
        { scene: 'fibonacci', logo: 'images/logo/fibonacci-logo.png', alt: 'Fibonacci logo' },
        { scene: 'spotiphy', logo: 'images/logo/spotiphy-logo.png', alt: 'Spotiphy logo' },
        { scene: 'echoflower', logo: 'images/logo/echoflower-logo.png', alt: 'Echo Flower logo' },
        { scene: 'acertainconvexhull', logo: 'images/logo/acertainconvexhull-logo.png', alt: 'A Certain Convex Hull logo' },
        { scene: 'securecheckup', logo: 'images/logo/securecheckup-logo.png', alt: 'Secure Check-up logo' },
        { scene: 'brickstein', logo: 'images/logo/brickstein-logo.png', alt: 'Brickstein logo' },
        { scene: 'myergbuddy', logo: 'images/logo/myergbuddy-logo.png', alt: 'MyERGBuddy logo' },
        { scene: 'virtualkaraoke', logo: 'images/logo/virtualkaraoke-logo.png', alt: 'Virtual Karaoke logo' },
        { scene: 'visualdove', logo: 'images/logo/visualdove-logo.png', alt: 'Visual Dove logo' },
        { scene: 'virtualcloset', logo: 'images/logo/virtualcloset-logo.png', alt: 'Virtual Closet logo' },
        { scene: 'underthesea', logo: 'images/logo/underthesea-logo.png', alt: 'Under the Sea logo' },
        { scene: 'resopulse', logo: 'images/logo/resopulse-logo.png', alt: 'Reso Pulse logo' },
        { scene: 'orderup', logo: 'images/logo/orderup-logo.png', alt: 'OrderUp logo' },
        { scene: 'frequencyprint', logo: 'images/logo/frequencyprint-logo.png', alt: 'FrequencyPrint logo' },
        { scene: 'moody', logo: 'images/logo/moody-logo.png', alt: 'Moody logo' },
    ];

    function addLogoToPad(pad, meta) {
        if (!pad || pad.querySelector('.pad-logo')) return;
        const img = document.createElement('img');
        img.className = 'pad-logo';
        img.src = meta.logo;
        if (meta.srcset) img.srcset = meta.srcset;
        img.sizes = '(max-width:400px) 60px, 120px';
        img.alt = meta.alt || '';
        img.loading = 'lazy';
        img.decoding = 'async';
        pad.appendChild(img);
    }

    function removeLogoFromPad(pad) {
        const el = pad && pad.querySelector('.pad-logo');
        if (el) el.remove();
    }

    projectsBtn.addEventListener('click', () => {
        if (!startLogoGroup("projects")) return;
        const pads = Array.from(document.querySelectorAll('.led-pads .pad'));

        proj_targets.forEach((t) => {
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

// Music
(function () {
    const musicBtn = document.querySelector('button[aria-label="Music"]');
    if (!musicBtn) return;
    const music_targets = [
        { scene: 'music1', logo: 'images/logo/music-logo.png', alt: 'Music logo' },
        { scene: 'music2', logo: 'images/logo/music-logo.png', alt: 'Music logo' },
    ];

    function addLogoToPad(pad, meta) {
        if (!pad || pad.querySelector('.pad-logo')) return;
        const img = document.createElement('img');
        img.className = 'pad-logo';
        img.src = meta.logo;
        if (meta.srcset) img.srcset = meta.srcset;
        img.sizes = '(max-width:400px) 60px, 120px';
        img.alt = meta.alt || '';
        img.loading = 'lazy';
        img.decoding = 'async';
        pad.appendChild(img);
    }

    function removeLogoFromPad(pad) {
        const el = pad && pad.querySelector('.pad-logo');
        if (el) el.remove();
    }

    musicBtn.addEventListener('click', () => {
        if (!startLogoGroup("music")) return;
        const pads = Array.from(document.querySelectorAll('.led-pads .pad'));

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

