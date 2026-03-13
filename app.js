// ===================
// Constants
// ===================
const PAD_COLOR_CLASSES = ["scene-linkedin", "scene-github", "scene-resume","scene-contact", "scene-about", "scene-skills", 
    "scene-kitware", "scene-griffiss", "scene-northeastern", "scene-mitbeaverworks", "scene-wic", "scene-coms", "scene-ai", 
    "scene-sigma", "scene-gso", "scene-orderup", "scene-resopulse", "scene-underthesea", "scene-virtualcloset", "scene-visualdove", 
    "scene-virtualkaraoke", "scene-myergbuddy", "scene-brickstein", "scene-securecheckup", "scene-acertainconvexhull", 
    "scene-echoflower", "scene-spotiphy", "scene-fibonacci", "scene-areyousocialdistancing", "scene-music1", "scene-music2"];

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
        indexes: [0, 1, 2, 3, 4, 5, 6, 8, 9, 12]
    },

    skills: {
        colorClass: "scene-skills",
        indexes: [7, 10, 11, 13, 14, 15]
    },

    kitware: {
        colorClass: "scene-kitware",
        indexes: [0, 1]
    },

    griffiss: {
        colorClass: "scene-griffiss",
        indexes: [4, 5]
    },

    northeastern: {
        colorClass: "scene-northeastern",
        indexes: [8, 9]
    },

    mitbeaverworks: {
        colorClass: "scene-mitbeaverworks",
        indexes: [12, 13]
    },

    wic: {
        colorClass: "scene-wic",
        indexes: [2, 3]
    },

    coms: {
        colorClass: "scene-coms",
        indexes: [6, 7]
    },

    ai: {
        colorClass: "scene-ai",
        indexes: [10, 11]
    },

    sigma: {
        colorClass: "scene-sigma",
        indexes: [14]
    },

    gso: {
        colorClass: "scene-gso",
        indexes: [15]
    },

    orderup: {
        colorClass: "scene-orderup",
        indexes: [0]
    },

    resopulse: {
        colorClass: "scene-resopulse",
        indexes: [1]
    },

    underthesea: {
        colorClass: "scene-underthesea",
        indexes: [2]
    },

    virtualcloset: {
        colorClass: "scene-virtualcloset",
        indexes: [3]
    },

    visualdove: {
        colorClass: "scene-visualdove",
        indexes: [4]
    },

    virtualkaraoke: {
        colorClass: "scene-virtualkaraoke",
        indexes: [5]
    },

    myergbuddy: {
        colorClass: "scene-myergbuddy",
        indexes: [6]
    },

    brickstein: {
        colorClass: "scene-brickstein",
        indexes: [7]
    },

    securecheckup: {
        colorClass: "scene-securecheckup",
        indexes: [8]
    },

    acertainconvexhull: {
        colorClass: "scene-acertainconvexhull",
        indexes: [9]
    },

    echoflower: {
        colorClass: "scene-echoflower",
        indexes: [10]
    },

    spotiphy: {
        colorClass: "scene-spotiphy",
        indexes: [11]
    },

    fibonacci: {
        colorClass: "scene-fibonacci",
        indexes: [12]
    },

    areyousocialdistancing: {
        colorClass: "scene-areyousocialdistancing",
        indexes: [13]
    },

    music1: {
        colorClass: "scene-music1",
        indexes: [5,6,9,10]
    },

    music2: {
        colorClass: "scene-music2",
        indexes: [0, 1, 2, 3, 4, 7, 8, 11, 12, 13, 14, 15]
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
            applyScenes(["kitware", "griffiss", "northeastern", "mitbeaverworks", "wic", "coms", "ai", "sigma", "gso"]);
        });
    }
    
    if(projectsButton) {
        projectsButton.addEventListener("click", () => {
            applyScenes(["orderup", "resopulse", "underthesea", "virtualcloset", "visualdove", "virtualkaraoke", 
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
            clearPads(pads);
        });
    }
});

// ===================
// Pad Dialog
// ===================
const padDialog = document.getElementById("padDialog");
const padDialogTitle = document.getElementById("padDialogTitle");
const padDialogMessage = document.getElementById("padDialogMessage");
const padDialogClose = document.getElementById("padDialogClose");
const padDialogOpen = document.getElementById("padDialogOpen");
const padsContainer = document.querySelector(".led-pads");

const sceneDialogMap = {
    "scene-linkedin": {
        title: "LinkedIn",
        message: "Open LinkedIn profile?",
        href: "https://www.linkedin.com/in/aparnaain/"
    },
    "scene-github": {
        title: "GitHub",
        message: "Open GitHub profile?",
        href: "https://github.com/AparCode"
    },
    "scene-resume": {
        title: "Resume",
        message: "Download resume?",
        href: "./resume.pdf"
    },
    "scene-contact": {
        title: "Contact",
        message: "Open email compose?",
        href:
            "https://mail.google.com/mail/?view=cm&fs=1&to=apar2003@gmail.com&su=Portfolio%20Inquiry" +
            "&body=Dear%20Aparnaa%2C%20I%20wanted%20to%20connect%20with%20you."
    },
    "scene-about": {
        title: "About",
        message:
            "Hi, I'm Aparnaa! I'm a fifth-year Computer Science B.S./M.S. student at RIT with hands-on experience in software " +
            "engineering, AI, and computer vision. I've worked on object detection systems using PyTorch and transformer-based " +
            "models such as RT-DETR at Kitware. I've also conducted AI research on model robustness and limitations in pre-training " +
            "techniques such as CLIP at the Griffiss Institute.\n\nI'm passionate about building practical, real-world machine " +
            "learning systems and am currently seeking full-time Software Engineer, Machine Learning Engineer, or AI Engineer roles.",
        href: ""
    },
    "scene-skills": { title: "Skills", message: "Skills section.", href: "" },
    "scene-kitware": { title: "Kitware", message: "Kitware experience.", href: "" },
    "scene-griffiss": { title: "Griffiss", message: "Griffiss experience.", href: "" },
    "scene-northeastern": { title: "Northeastern", message: "Northeastern experience.", href: "" },
    "scene-mitbeaverworks": { title: "MIT Beaver Works", message: "MIT Beaver Works experience.", href: "" },
    "scene-wic": { title: "WIC", message: "Women in Computing.", href: "" },
    "scene-coms": { title: "COMS", message: "COMS experience.", href: "" },
    "scene-ai": { title: "AI", message: "AI experience.", href: "" },
    "scene-sigma": { title: "Sigma", message: "Sigma experience.", href: "" },
    "scene-gso": { title: "GSO", message: "GSO experience.", href: "" },
    "scene-orderup": { title: "OrderUp", message: "OrderUp project.", href: "" },
    "scene-resopulse": { title: "ResoPulse", message: "ResoPulse project.", href: "" },
    "scene-underthesea": { title: "Under the Sea", message: "Under the Sea project.", href: "" },
    "scene-virtualcloset": { title: "Virtual Closet", message: "Virtual Closet project.", href: "" },
    "scene-visualdove": { title: "VisualDove", message: "VisualDove project.", href: "" },
    "scene-virtualkaraoke": { title: "Virtual Karaoke", message: "Virtual Karaoke project.", href: "" },
    "scene-myergbuddy": { title: "MyErgBuddy", message: "MyErgBuddy project.", href: "" },
    "scene-brickstein": { title: "Brickstein", message: "Brickstein project.", href: "" },
    "scene-securecheckup": { title: "SecureCheckup", message: "SecureCheckup project.", href: "" },
    "scene-acertainconvexhull": { title: "A Certain Convex Hull", message: "A Certain Convex Hull project.", href: "" },
    "scene-echoflower": { title: "EchoFlower", message: "EchoFlower project.", href: "" },
    "scene-spotiphy": { title: "Spotiphy", message: "Spotiphy project.", href: "" },
    "scene-fibonacci": { title: "Fibonacci", message: "Fibonacci project.", href: "" },
    "scene-areyousocialdistancing": { title: "Are You Social Distancing?", message: "Social distancing project.", href: "" },
    "scene-music1": { title: "Music", message: "Music section.", href: "" },
    "scene-music2": { title: "Music", message: "Music section.", href: "" }
};

let dialogHref = "";

if (padDialog && padDialogTitle && padDialogMessage && padDialogClose && padDialogOpen && padsContainer) {
    padsContainer.addEventListener("click", (event) => {
        const pad = event.target.closest(".pad");
        if (!pad) return;

        const sceneClass = Array.from(pad.classList).find((cls) => cls.startsWith("scene-"));
        const allPads = Array.from(padsContainer.querySelectorAll(".pad"));
        const padNumber = allPads.indexOf(pad) + 1;

        const info = sceneDialogMap[sceneClass] || {
            title: "Pad " + padNumber,
            message: sceneClass
                ? "No dialog metadata yet for " + sceneClass + "."
                : "This pad has no scene assigned yet.",
            href: ""
        };

        dialogHref = info.href || "";
        padDialogTitle.textContent = info.title;
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