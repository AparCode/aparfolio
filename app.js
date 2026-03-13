// ===================
// Constants
// ===================
const PAD_COLOR_CLASSES = ["scene-linkedin", "scene-github", "scene-resume","scene-contact", "scene-about", "scene-skills", 
    "scene-kitware", "scene-griffiss", "scene-northeastern", "scene-mitbeaverworks", "scene-wic", "scene-coms", "scene-ai", 
    "scene-sigma", "scene-gso", "scene-orderup", "scene-resopulse", "scene-underthesea", "scene-virtualcloset", "scene-visualdove", 
    "scene-virtualkaraoke", "scene-myergbuddy", "scene-brickstein", "scene-securecheckup", "scene-acertainconvexhull", 
    "scene-echoflower", "scene-spotiphy", "scene-fibonacci", "scene-areyousocialdistancing", "scene-music1", "scene-music2"];

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
        message: "Compose an email?",
        href: CONTACT_COMPOSE_URL
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
    "scene-skills": {
        title: "Skills",
        message:
            "Languages: Python, SQL, Java, JavaScript \n Backend & Infrastructure: FastAPI, REST APIs, Slurm, " +
            "GitLab, CI/CD, Linux, Perforce \n Data & Real-Time Systems: PyTorch, OpenCV, MediaPipe, Pandas, " +
            "NumPy \n Tools: Unreal Engine, TouchDesigner, Docker, Git",
        href: ""
    },
    "scene-kitware": {
        title: "Kitware: Computer Vision Intern",
        message:
            "Throughout the summer of 2024, I worked as a research engineering intern for the Computer Vision team. " +
            "I helped develop cutting-edge object detection systems for customers in the DoD and IC. I researched " +
            "small object detection and created datasets and validation pipelines to test small object model " +
            "performance. I also trained a SOTA real-time, transformer-based architecture on COCO (RT-DETR).",
        href: ""
    },
    "scene-griffiss": {
        title: "Griffiss Institute: Artificial Intelligence Research Intern",
        message:
            "Throughout the majority of the summer and fall of 2023, I did a co-op at the Griffiss Institute RI " +
            "branch where I polished my artificial intelligence skills, developed methods for adversarial attacks, " +
            "and explored vulnerabilities within foundational models.",
        href: ""
    },
    "scene-northeastern": {
        title: "Northeastern University: Research Student Internship",
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
        message:
            "Throughout the summer of 2020, I got the opportunity to participate in the MIT BWSI Cog*Works program. " +
            "I learned and applied cognitive science skills to machine learning. I also gained a lot of team " +
            "experience as we split up into teams to work on a couple of projects that involves recognition of certain " +
            "items such as songs.",
        href: ""
    },
    "scene-wic": {
        title: "Women in Computing: Graduate Coordinator",
        message:
            "Organized graduate-level technical and networking events to drive community engagement and membership growth" +
            "\n\nMentored elementary and middle school students in JavaScript and object-oriented programming fundamentals",
        href: ""
    },
    "scene-coms": {
        title: "Computing Organization for Multicultural Students: Public Relations Chair",
        message:
            "Led communication and outreach initiatives, coordinating content across cross-functional teams" +
            "\n\nTranslated technical and event-related information into clear, user-friendly messaging for diverse audiences",
        href: ""
    },
    "scene-ai": {
        title: "RIT AI Club: Events Coordinator",
        message:
            "Planned and coordinated company visits to expand student exposure to Artificial Intelligence.\n" +
            "Captured photos and videos of events to help create recap posts and reels to support the club.",
        href: ""
    },
    "scene-sigma": {
        title: "Sigma Sigma Sigma Sorority: Alumni Relations Chair",
        message: "Networked with and designed monthly newsletters to send to the alumni.",
        href: ""
    },
    "scene-gso": {
        title: "Game Symphony Orchestra",
        message: "-",
        href: ""
    },
    "scene-orderup": {
        title: "OrderUp",
        message:
            "OrderUp is a restaurant simulator game in which users decide the best strategy for improving " +
            "their restaurant into a five-star " +
            "establishment through customizing their menu, analyzing their financial metrics, and making critical business decisions. My " +
            "contributions involve setting up and integrating the Gemini API into the Java-powered user interface.",
        href: ""
    },
    "scene-resopulse": {
        title: "ResoPulse",
        message:
            "ResoPulse is an interactive music visualizer made with Three.js and HTML. It responds to audio amplitude peaks given the " +
            "song, conducting high-intensity visual effects. I worked on " +
            "architecting the particle system such that the particles explode " +
            "out of the object per frequency peak.",
        href: ""
    },
    "scene-underthesea": {
        title: "XRLive: Under the Sea -- Interactive Water Effects",
        message:
            "Prototyped an interactive motion-responsive fabric simulation effect on TouchDesigner using Azure Kinect and body-tracking " +
            "data. Leveraged TouchDesigner's computer vision and GPU-accelerated tools to build responsive, immersive visuals for live " +
            "projection. Composed original soundtrack and sound effects on Ableton to enhance the demo's atmosphere and overall " +
            "immersion.",
        href: ""
    },
    "scene-virtualcloset": {
        title: "VirtualCloset",
        message:
            "VirtualCloset is an AI-powered clothes tracker that helps users organize their wardrobes and receive personalized outfit " +
            "suggestions by using Google's Gemini API, Pandas, JavaFX, and FastAPI. My main contribution was developing the frontend of " +
            "the application and connecting it to the backend using JavaFX.",
        href: ""
    },
    "scene-visualdove": {
        title: "VisualDove",
        message:
            "An interactive audio-visual engine developed in Python. Utilizes Librosa for real-time frequency analysis and PyGame to " +
            "render dynamic, synchronized graphics based on audio input.",
        href: ""
    },
    "scene-virtualkaraoke": {
        title: "Virtual Karaoke",
        message:
            "Engineered functionality for the virtual avatar's thirty morph targets and motion capture using Unreal Engine and RADICAL " +
            "Motion. Identified two bugs with facial animations in motion capture " +
            "when retargeting avatars. Modeled the user interface to " +
            "switch between six avatars by pressing the spacebar.",
        href: ""
    },
    "scene-myergbuddy": {
        title: "MyErgBuddy",
        message:
            "Developed as a team project for WiCHacks '25, MyErgBuddy is an analytical program that uses computer vision to analyze a " +
            "rower's posture and provide feedback for the rower. We created a pose estimation model to detect and measure landmarks to " +
            "determine the correct postures. My contributions involve developing functions that measure and compare each of the body " +
            "landmarks' positions using math. I also worked on developing parts of the OpenCV fancam model such as getting the program " +
            "to print statements.",
        href: ""
    },
    "scene-brickstein": {
        title: "BrickStein",
        message:
            "BrickStein is a chatbot that assists students with math homework struggles. Created as a team project for BrickHack 11, " +
            "BrickStein uses a LangChain-powered GPT agent, APIs, and AI-focused Python libraries such as OpenCV and Manim to provide " +
            "ease-of-use features and visualizations for better guidance. Some of the features that BrickStein can use are taking " +
            "screenshots with a simple button press and providing suggestions from those, and creating a video incorporating diagrams " +
            "and audio to elaborate on the context.",
        href: ""
    },
    "scene-securecheckup": {
        title: "SecureCheckup",
        message:
            "A website/database display program that my team coded during HACK.COMS of 2024. The program aims to secure and display " +
            "hospital data to better represent underrepresented communities. I contributed to the project by finding ways to connect " +
            "the database back-end to the Python front-end using REST API.",
        href: ""
    },
    "scene-acertainconvexhull": {
        title: "A Certain Convex Hull",
        message:
            "A website and an interactive program that started out as a team project for our Computational Geometry class. The program " +
            "allows users to input points on the input space and manipulate the accompanying matrix to create a convex hull. It can " +
            "be used as a pedagogical aid to help professors, students, and teachers understand the functionality of a convex hull, " +
            "including Jarvis's March algorithm that we used to create the program. Some of my major contributions involve working on " +
            "parts of the functionality towards creating the program's user input aspect, and developing much of the website surrounding " +
            "the program.",
        href: ""
    },
    "scene-echoflower": {
        title: "Undertale Echo Flower Scene Recreation",
        message: "A 3D replica of the Echo Flower scene in Undertale's Waterfall area",
        href: ""
    },
    "scene-spotiphy": {
        title: "Spotiphy",
        message:
            "A database command system which was my group project for the class \"Principles of Data Management\". I learned a lot " +
            "about SQL and how to develop a very efficient database system that handles a specific domain. My major contributions to " +
            "this project were writing and debugging SQL statements for some of our database functions such as the login and the top " +
            "artists by most plays functions.",
        href: ""
    },
    "scene-fibonacci": {
        title: "Fibonacci",
        message:
            "A watch e-store that was developed as a team project for the class \"Intro to Software Engineering\". I learned how to " +
            "use programming languages and development programs like JSON, HTML, and Angular while working on the project. My main " +
            "contributions to this project were working on the front-end web design and developing parts of the back-end such as watch " +
            "classes and their relationships with the store. In the end, I enjoyed being able to get the opportunity to be familiar with " +
            "front-end development and how much freedom I got with using visual elements to make our e-store website pop!",
        href: ""
    },
    "scene-areyousocialdistancing": {
        title: "Are You Social Distancing?",
        message:
            "Are You Social Distancing is a mask-recognition program that my group did during the MIT Beaver*Works Summer Institute. " +
            "It uses CNN models and an ML algorithm to identify faces and masks. My main contributions to this project are creating " +
            "the mask and no mask datasets as well as working on face/mask identification using a video/webcam using Python libraries.",
        href: ""
    },
    "scene-music1": { title: "Music", message: "-", href: "" },
    "scene-music2": { title: "Music", message: "-", href: "" }
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