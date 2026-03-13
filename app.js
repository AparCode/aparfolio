const PAD_COLOR_CLASSES = ["scene-linkedin", "scene-github", "scene-resume","scene-contact", "scene-about", "scene-skills", 
    "scene-kitware", "scene-griffiss", "scene-northeastern", "scene-mitbeaverworks", "scene-wic", "scene-coms", "scene-ai", 
    "scene-sigma", "scene-gso", "scene-orderup", "scene-resopulse", "scene-underthesea", "scene-virtualcloset", "scene-visualdove", 
    "scene-virtualkaraoke", "scene-myergbuddy", "scene-brickstein", "scene-securecheckup", "scene-acertainconvexhull", 
    "scene-echoflower", "scene-spotiphy", "scene-fibonacci", "scene-areyousocialdistancing", "scene-music1", "scene-music2"];

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
