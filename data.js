// ============================================================
// Portfolio content. Edit this file to change what the site says.
// ============================================================

const PROFILE = {
  name: "Aparnaa Senthilnathan",
  email: "apar2003@gmail.com",
  github: "https://github.com/AparCode",
  linkedin: "https://www.linkedin.com/in/aparnaain/",
  youtube: "https://www.youtube.com/@illumidove",
  resume: "./resume.pdf"
};

// Filter categories for the project grid.
const CATEGORIES = [
  { id: "all",   label: "All projects" },
  { id: "ai",    label: "AI & ML" },
  { id: "music", label: "Music tech" },
  { id: "gfx",   label: "Graphics & XR" },
  { id: "apps",  label: "Apps & data" }
];

// Projects the page leads with (they have measurable results).
const FEATURED = [
  {
    id: "maara",
    stat: "100%",
    statLabel: "pass@1 in best few-shot setup",
    pitch: "Five LLM agents that plan, retrieve, write, critique and repair code."
  },
  {
    id: "moody",
    stat: "91.7%",
    statLabel: "accuracy, 8-emotion voice classifier",
    pitch: "Turns a voice recording into a mood-matched music recommendation."
  },
  {
    id: "frequencyprint",
    stat: "99% → 61.5%",
    statLabel: "caught overfitting, rebuilt the test",
    pitch: "Can CNNs tell real music from AI-generated covers? Capstone project."
  }
];

// cats: ai | music | gfx | apps (a project can have several)
const PROJECTS = [
  {
    id: "maara", title: "MAARA", cats: ["ai"],
    context: "Team project · 2026",
    summary: "Multi-agent software-repair assistant with local LLMs and RAG.",
    description: "MAARA is a multi-agent software-repair assistant that uses locally served LLMs to plan, validate, retrieve code context, generate fixes, critique results, and iteratively repair failures. I co-developed the five-agent pipeline and worked with its RAG-backed retrieval architecture and evaluation. In the project’s strongest reported few-shot setup, the system reached 100% pass@1 with a 13-point gain associated with the strategy/evaluator gate.",
    skills: ["Python", "Ollama", "LangChain", "RAG", "ChromaDB", "Qdrant", "LLM Agents", "Evaluation"],
    thumb: "images/logo/maara-logo.png",
    media: [{ type: "youtube", id: "0hhFTL5B0VA", label: "MAARA demo" }],
    repo: "https://github.com/AparCode/maara"
  },
  {
    id: "moody", title: "Mood-y", cats: ["ai", "music"],
    context: "Team project · 2026",
    summary: "Voice-based mood detection that recommends music.",
    description: "Mood-y is a voice-based mood music recommender that turns a voice recording into personalized music recommendations. I co-developed the end-to-end system, extracted 112-dimensional acoustic features with Librosa, compared emotion classifiers across eight emotions, and connected the model to a FastAPI/React application. The best SVM configuration achieved 91.7% accuracy and 0.916 F1 on the project evaluation.",
    skills: ["Python", "Librosa", "scikit-learn", "SVM", "RAVDESS", "FastAPI", "React", "Audio ML"],
    thumb: "images/logo/moody-logo.png",
    media: [{ type: "youtube", id: "7eI5m9MXY8E", label: "Mood-y demo" }],
    repo: "https://github.com/sadhvikoli/voice-mood-music-recommender"
  },
  {
    id: "frequencyprint", title: "FrequencyPrint", cats: ["ai", "music"],
    context: "Capstone · 2026",
    summary: "CNN-based detection of AI-generated and deepfake music.",
    description: "FrequencyPrint is my capstone project exploring whether CNN-based audio models can distinguish real music from AI-generated or deepfake music. I compared SimpleCNN, ResNet18, and ResNet34 on spectrogram inputs, then diagnosed why initially near-perfect metrics failed on realistic AI covers. After redesigning the evaluation with real and AI-cover data, the best realistic accuracy was 61.5%.",
    skills: ["Python", "PyTorch", "Librosa", "Spectrograms", "CNNs", "ResNet18", "ResNet34", "Model Evaluation"],
    thumb: "images/logo/frequencyprint-logo.png",
    media: [
      { type: "youtube", id: "N6JO_qRjtS8", label: "FrequencyPrint demo" },
      { type: "image", src: "images/frequencyprint_demo.png", alt: "FrequencyPrint demo screenshot" }
    ],
    demo: "https://aparcode.github.io/frequency-print/",
    repo: "https://github.com/AparCode/frequency-print"
  },
  {
    id: "musictheoryagent", title: "Music Theory Agent", cats: ["ai", "music"],
    context: "Built in one hour · NY Tech Week",
    summary: "Voice assistant that suggests music theory ideas to finish songs.",
    description: "Music Theory Agent is a conversational voice assistant designed to help musicians craft, improve, or finish songs with music-theory suggestions. I built and shipped a working prototype in one hour during AssemblyAI’s Voice AI Meetup at NY Tech Week, using Claude Code and connecting AssemblyAI’s Voice Agent API to a FastAPI application.",
    skills: ["Claude Code", "AssemblyAI Voice Agent API", "FastAPI", "Voice AI"],
    thumb: "images/logo/music-theory-agent-logo.png",
    media: [],
    repo: "https://github.com/AparCode/music-theory-assistant"
  },
  {
    id: "resopulse", title: "ResoPulse", cats: ["music", "gfx"],
    context: "Computer Animation course",
    summary: "Three.js music visualizer that explodes into particles on audio peaks.",
    description: "ResoPulse is a Three.js music visualizer built for a Computer Animation course. It reacts to audio peaks with high-intensity effects. I architected the particle system so particles explode from objects at frequency peaks.",
    skills: ["JavaScript", "Three.js", "WebGL", "Vite", "HTML"],
    thumb: "images/logo/resopulse-logo.png",
    media: [{ type: "youtube", id: "yNfc7ALeUkM", label: "ResoPulse demo" }],
    demo: "https://aparcode.github.io/resopulse/",
    repo: "https://github.com/AparCode/resopulse"
  },
  {
    id: "visualdove", title: "VisualDove", cats: ["music", "gfx"],
    context: "Global Illumination final project",
    summary: "Python audio-visual engine: visuals synced to frequency analysis.",
    description: "For my Global Illumination class final project I built an interactive audio-visual engine in Python. Using Librosa for frequency analysis and PyGame for rendering, the system creates dynamic visuals synchronized to audio.",
    skills: ["Python", "Librosa", "PyGame", "NumPy", "PIL"],
    thumb: "images/logo/visualdove-logo.png",
    media: [],
    repo: "https://github.com/AparCode/visual-dove"
  },
  {
    id: "underthesea", title: "XRLive: Under the Sea", cats: ["gfx", "music"],
    context: "RIT Frameless Symposium",
    summary: "Projected, motion-tracked underwater visuals. I also scored it.",
    description: "XRLive: Under the Sea was a team project for RIT’s Frameless Symposium that created underwater-themed interactive visuals using motion tracking and projected effects. My main contribution was a resizable fabric-movement effect in TouchDesigner using its MediaPipe extension; I tested the effect on the Wegmans Theater projector and also composed music and sound effects for the experience.",
    skills: ["TouchDesigner", "MediaPipe", "Azure Kinect", "Real-Time Projection", "Ableton"],
    thumb: "images/logo/underthesea-logo.png",
    media: [
      { type: "image", src: "images/frameless.gif", alt: "Under the Sea interactive projection" },
      { type: "youtube", id: "8niyMsKDXEo", label: "Music I composed for the experience" }
    ],
    repo: "https://github.com/alf9310/XRLive-VIP-Fall-2025"
  },
  {
    id: "virtualkaraoke", title: "Virtual Karaoke", cats: ["gfx", "music"],
    context: "Imagine RIT 2025",
    summary: "Motion-capture XR exhibit where avatars mirror live performers.",
    description: "Virtual Karaoke was a team XR project presented at Imagine RIT 2025, where avatars mirrored live performers through motion capture. I worked on the motion-capture sub-team by testing RADICAL Motion with Unreal Engine, creating and importing ReadyPlayerMe avatars, investigating facial morph-target and audio-motion synchronization issues, exploring Blueprint-based avatar switching, and helping test and present the exhibit.",
    skills: ["Unreal Engine", "RADICAL Motion", "ReadyPlayerMe", "Perforce", "Blueprints", "Motion Capture"],
    thumb: "images/logo/virtualkaraoke-logo.png",
    media: [{ type: "vimeo", id: "1084431994", label: "Virtual Karaoke demo" }],
    repo: "https://github.com/AparCode/virtual-karaoke"
  },
  {
    id: "spotiphy", title: "Spotiphy", cats: ["music", "apps"],
    context: "Principles of Data Management",
    summary: "Database-backed music app: playlists, history, top-artist queries.",
    description: "Spotiphy is a database-backed music application built for Principles of Data Management. I worked with a relational PostgreSQL database and Python/psycopg2, writing and debugging SQL for account, playlist, listening-history, search, social, and discovery features including top-artist and top-genre queries.",
    skills: ["Python", "PostgreSQL", "SQL", "psycopg2", "SSH"],
    thumb: "images/logo/spotiphy-logo.png",
    media: [],
    repo: "https://github.com/BuxoGabriel/Spotiphy"
  },
  {
    id: "myergbuddy", title: "MyErgBuddy", cats: ["ai"],
    context: "Hackathon · WiCHacks 2025",
    summary: "Real-time rowing posture coach using pose estimation.",
    description: "MyErgBuddy is a real-time rowing-posture coaching prototype built at WiCHacks 2025. I co-developed the computer-vision pipeline using MediaPipe pose landmarks, calculated joint angles and positions, defined catch/finish posture checks, and helped integrate calibration, timing, sequence logic, and feedback into Streamlit.",
    skills: ["Python", "MediaPipe", "OpenCV", "Pose Estimation", "Joint-Angle Analysis", "Streamlit"],
    thumb: "images/logo/myergbuddy-logo.png",
    media: [{ type: "zoom", src: "https://rit.zoom.us/clips/share/A2F3MRZPVzdPZTJLSFQ3NlBUd2VETnJxYzJRAQ", label: "MyErgBuddy demo" }],
    repo: "https://github.com/Lilly-Rowland/WiCHacks2025"
  },
  {
    id: "brickstein", title: "BrickStein", cats: ["ai"],
    context: "Hackathon · BrickHack 11",
    summary: "Multimodal AI math tutor with voice input and explainer videos.",
    description: "BrickStein is a multimodal AI math-tutor prototype built at BrickHack 11. The team created a workflow that accepted voice or chat input, captured and auto-cropped highlighted screen regions, checked math reasoning, and generated visual explanation videos.",
    skills: ["Google Chirp", "OpenCV", "GPT Models", "Manim", "Multimodal AI"],
    thumb: "images/logo/brickstein-logo.png",
    media: [],
    repo: "https://github.com/Gunoo1/BrickStein"
  },
  {
    id: "virtualcloset", title: "VirtualCloset", cats: ["ai", "apps"],
    context: "Hackathon · HACK.COMS ’25",
    summary: "AI wardrobe assistant that suggests outfits with Gemini.",
    description: "VirtualCloset is an AI-powered wardrobe assistant built at HACK.COMS ’25. It suggests outfits using Gemini, Pandas, JavaFX, and FastAPI. I developed the frontend and integrated it with the backend.",
    skills: ["Java", "JavaFX", "Python", "FastAPI", "Google Gemini API", "Maven", "SQLite", "Pandas", "Pydantic", "SQLAlchemy", "Uvicorn", "XML"],
    thumb: "images/logo/virtualcloset-logo.png",
    media: [],
    repo: "https://github.com/ib9168/Virtual_Closet_HACKCOMS-25"
  },
  {
    id: "orderup", title: "OrderUp", cats: ["apps", "ai"],
    context: "Hackathon · WiCHacks ’26",
    summary: "Restaurant simulator with Gemini-powered business decisions.",
    description: "OrderUp is a restaurant simulator created at WiCHacks ’26. Players customize menus, analyze financial metrics, and make business decisions to grow their restaurant. I helped integrate the Gemini API into the Java-based UI.",
    skills: ["Java", "JavaFX", "Maven", "Google Gemini API", "XML", "JSON"],
    thumb: "images/logo/orderup-logo.png",
    media: [
      { type: "youtube", id: "Hfh6DiiAWEU", label: "OrderUp demo" },
      { type: "image", src: "images/orderup_demo.jpg", alt: "OrderUp gameplay" },
      { type: "image", src: "images/orderup_demo_2.jpg", alt: "OrderUp financial metrics" },
      { type: "image", src: "images/orderup_demo_3.jpg", alt: "OrderUp Gemini output" }
    ],
    repo: "https://github.com/Lilly-Rowland/OrderUp"
  },
  {
    id: "artsonna", title: "Artsonna", cats: ["apps"],
    context: "Hackathon prototype",
    summary: "Creative platform prototype for portfolios and community.",
    description: "Artsonna is a creative-platform prototype designed to help creators build portfolios and discover community. I co-built the live hackathon prototype and iterated on the product experience from an initial concept into a usable demo.",
    skills: ["Base44", "Prompt Engineering", "Rapid Prototyping"],
    thumb: "images/logo/artsonna-logo.png",
    media: [],
    demo: "https://artsonna.base44.app/",
    repo: "https://github.com/Likhithaa-Guntaka/artsonna"
  },
  {
    id: "securecheckup", title: "Secure Checkup", cats: ["apps"],
    context: "Hackathon · HACK.COMS 2024",
    summary: "Healthcare data-equity platform exposing demographic gaps.",
    description: "Secure Checkup is a healthcare data-equity platform built at HACK.COMS 2024 to help users inspect demographic representation disparities in healthcare datasets. I co-developed the platform and worked across the Oracle PL/SQL database, Python REST/JSON API, JavaScript frontend, and Tableau visualizations.",
    skills: ["Oracle PL/SQL", "Python", "REST API", "JSON", "JavaScript", "HTML/CSS", "Tableau"],
    thumb: "images/logo/securecheckup-logo.png",
    media: [],
    repo: "https://github.com/Szheng25/SecureCheckup"
  },
  {
    id: "fibonacci", title: "Fibonacci Watch Store", cats: ["apps"],
    context: "Team project",
    summary: "Full-stack watch e-commerce app (Spring + Angular).",
    description: "Fibonacci is a team-built watch e-commerce application. I implemented update-product functionality and the user-registration class, and formatted website elements including the navigation bar. The project used a Java/Spring backend with REST APIs and an Angular/TypeScript frontend.",
    skills: ["Java", "Spring", "REST APIs", "Maven", "Angular", "TypeScript", "HTML/CSS"],
    thumb: "images/logo/fibonacci-logo.png",
    media: [],
    repo: "https://github.com/AparCode/fibonacci"
  },
  {
    id: "echoflower", title: "Undertale Echo Flower", cats: ["gfx"],
    context: "Computer Graphics final",
    summary: "WebGPU recreation of a scene from Undertale.",
    description: "For my Computer Graphics final I recreated the Echo Flower scene from Undertale using WebGPU and JavaScript, building the environment, flowers, grass, and player.",
    skills: ["JavaScript", "WebGPU", "HTML"],
    thumb: "images/logo/echoflower-logo.png",
    media: [],
    repo: "https://github.com/jltlm/echo-flower-scene"
  },
  {
    id: "acertainconvexhull", title: "A Certain Convex Hull", cats: ["gfx"],
    context: "Computational Geometry course",
    summary: "Interactive site for building convex hulls (Jarvis’s March).",
    description: "A Certain Convex Hull is an interactive site built for a Computational Geometry class. Users add points and manipulate matrices to form convex hulls (e.g., Jarvis’s March). I implemented user-input features and much of the surrounding website.",
    skills: ["JavaScript", "HTML", "CSS", "JSON", "p5.js"],
    thumb: "images/logo/acertainconvexhull-logo.png",
    media: [],
    demo: "https://aparcode.github.io/acertainconvexhull/",
    repo: "https://github.com/AparCode/acertainconvexhull"
  },
  {
    id: "areyousocialdistancing", title: "Are You Social Distancing?", cats: ["ai"],
    context: "MIT Beaver*Works",
    summary: "CNN face and mask detection from a webcam.",
    description: "Are You Social Distancing? is a mask-recognition project from MIT BeaverWorks that uses CNNs to detect faces and masks. I created mask/no-mask datasets and implemented webcam-based identification with Python libraries.",
    skills: ["Python", "OpenCV", "NumPy", "Pyaudio", "PyTorch", "Noggin"],
    thumb: "images/logo/areyousocialdistancing-logo.png",
    media: [],
    repo: "https://github.com/armaan-v924/are-you-social-distancing"
  }
];

// Skills, grouped (from the existing portfolio).
const SKILLS = [
  { group: "Languages", items: ["Python", "Java", "JavaScript / TypeScript", "SQL", "HTML / CSS"] },
  { group: "AI / ML", items: ["PyTorch", "scikit-learn", "OpenCV", "Librosa", "RAG & LLM agents", "Model evaluation", "NumPy"] },
  { group: "Web & apps", items: ["FastAPI", "React", "Node.js", "Spring", "JavaFX", "Streamlit", "REST APIs"] },
  { group: "Data & tools", items: ["PostgreSQL", "MySQL", "SQLite", "ChromaDB / Qdrant", "Docker", "Linux", "Slurm", "Git / GitHub", "Maven", "CI/CD"] },
  { group: "Graphics, audio & XR", items: ["Three.js", "WebGL", "WebGPU", "TouchDesigner", "Unreal Engine", "Ableton"] }
];

// Experience timeline. kind: work | research | lead | music
const EXPERIENCE = [
  {
    kind: "work", org: "Kitware", role: "Computer Vision Intern", when: "May – Aug 2024", where: "Carrboro, NC",
    logo: "images/logo/kitware-logo.png",
    bullets: [
      "Trained and evaluated YOLOX and RT-DETR object-detection pipelines on ~20,000 TinyBirds images to study small-object detection.",
      "Compared the two pipelines with PyTorch, TensorBoard, Slurm and a multi-GPU setup; debugged dataset and model-configuration issues.",
      "Checked predictions against ground-truth annotations to find detection errors on very small objects."
    ]
  },
  {
    kind: "work", org: "Griffiss Institute", role: "AI Research Co-op", when: "Jul – Dec 2023", where: "Rome, NY",
    logo: "images/logo/griffiss-logo.png",
    bullets: [
      "Designed experiments testing how CLIP vision-language models handle 20 homonym image samples (same name, different object).",
      "Compared ResNet50 and ViT-L/14 zero-shot classifiers using cosine similarity, NumPy and confusion matrices.",
      "Found image-to-image matching was stronger than image-to-text matching, highlighting trouble with ambiguous concepts."
    ]
  },
  {
    kind: "research", org: "Northeastern University", role: "Research Student Internship", when: "3-year high-school program", where: "with Dr. Sarah Ostadabbas",
    logo: "images/logo/northeastern-logo.png",
    bullets: [
      "Machine-learning research on face and mask recognition; presented at NYC-area research competitions.",
      "Semifinalist, 2021 Junior Science and Humanities Symposium."
    ]
  },
  {
    kind: "research", org: "MIT Beaver*Works Summer Institute", role: "Cog*Works", when: "Summer 2020", where: "",
    logo: "images/logo/mit-logo.png",
    bullets: [
      "Applied cognitive science to machine learning in team projects, including recognition tasks such as identifying songs."
    ]
  },
  {
    kind: "music", org: "Game Symphony Orchestra", role: "Pianist", when: "Throughout college", where: "RIT",
    logo: "images/logo/gso-logo.png",
    bullets: ["Played piano in every concert, bringing orchestral arrangements of video-game music to life."]
  },
  {
    kind: "lead", org: "Women in Computing", role: "Graduate Coordinator", when: "College", where: "RIT",
    logo: "images/logo/wic-logo.png",
    bullets: [
      "Organized technical and networking events to grow community engagement and membership.",
      "Mentored elementary and middle school students in JavaScript and OOP fundamentals."
    ]
  },
  {
    kind: "lead", org: "Computing Organization for Multicultural Students", role: "Public Relations Chair", when: "2 years", where: "RIT",
    logo: "images/logo/coms-logo.png",
    bullets: [
      "Led communication and outreach, coordinating content across cross-functional teams.",
      "Translated technical and event information into clear messaging for diverse audiences."
    ]
  },
  {
    kind: "lead", org: "RIT AI Club", role: "Events Coordinator", when: "1 year", where: "RIT",
    logo: "images/logo/ai-logo.png",
    bullets: [
      "Planned company visits to expand student exposure to AI.",
      "Photographed and filmed events for recap posts and reels."
    ]
  },
  {
    kind: "lead", org: "Sigma Sigma Sigma", role: "Alumni Relations Chair", when: "College", where: "",
    logo: "images/logo/sigma-logo.png",
    bullets: ["Networked with alumni, designed monthly newsletters, and volunteered at events like Daffodil Day and park clean-ups."]
  },
  {
    kind: "lead", org: "Computer Science House", role: "Member", when: "First two years of college", where: "RIT",
    logo: "images/logo/csh-logo.png",
    bullets: ["Helped make the organization’s first yearbook; took part in events such as Music Jam."]
  }
];

// Timeline groups, in display order.
const EXPERIENCE_GROUPS = [
  { title: "Industry", kinds: ["work"] },
  { title: "Research", kinds: ["research"] },
  { title: "Leadership & music", kinds: ["music", "lead"] }
];

// Music player. The first track loads in the player; add more and a track
// picker appears automatically. type: "youtube" (id) | "vimeo" (id)
const MUSIC_TRACKS = [
  {
    type: "youtube", id: "8niyMsKDXEo",
    title: "Score for XRLive: Under the Sea",
    note: "Music and sound effects I composed for an interactive, motion-tracked projection experience at RIT."
  }
  // , { type: "youtube", id: "VIDEO_ID", title: "Track name", note: "One-line description" }
];
