const PAD_COLOR_CLASSES = ["scene-linkedin", "scene-github", "scene-resume","scene-contact"];

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

function applyScene(sceneName) {
    const pads = Array.from(document.querySelectorAll(".pad"));
    const scene = scenes[sceneName];
    if (!scene) return;

    clearPads(pads);

    const targetIndexes = resolveIndexes(scene, pads);
    targetIndexes.forEach((index) => {
        const pad = pads[index];
        if (!pad) return;

        pad.classList.add("active");
        if (scene.colorClass) {
            pad.classList.add(scene.colorClass);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const linkedinButton = document.querySelector(".top-controls a[aria-label='LinkedIn']");
    const githubButton = document.querySelector(".top-controls a[aria-label='GitHub']");
    const clearButton = document.querySelector(".clear-control .button[aria-label='Clear']");
    const resumeButton = document.querySelector(".top-controls a[aria-label='Resume']");
    const contactButton = document.querySelector(".top-controls a[aria-label='Contact']");

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
    if (clearButton) {
        clearButton.addEventListener("click", () => {
            const pads = Array.from(document.querySelectorAll(".pad"));
            clearPads(pads);
        });
    }
});
