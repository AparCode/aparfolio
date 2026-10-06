// Portfolio content. Project facts: supplied masterlist; music: Illumidove public channel.
// Keep project order separate from the editorial featured selection.

const PROFILE = {
  "name": "Aparnaa Senthilnathan",
  "email": "apar2003@gmail.com",
  "github": "https://github.com/AparCode",
  "linkedin": "https://www.linkedin.com/in/aparnaain/",
  "youtube": "https://www.youtube.com/@illumidove",
  "resume": "./resume.pdf"
};

const CATEGORIES = [
  {
    "id": "all",
    "label": "All projects"
  },
  {
    "id": "ai",
    "label": "AI & ML"
  },
  {
    "id": "music",
    "label": "Music tech"
  },
  {
    "id": "gfx",
    "label": "Graphics & XR"
  },
  {
    "id": "apps",
    "label": "Apps & data"
  }
];

const FEATURED = [
  {
    "id": "maara",
    "stat": "100%",
    "statLabel": "pass@1 · strongest reported few-shot setup",
    "pitch": "I co-developed the five-agent repair pipeline and worked on retrieval and evaluation."
  },
  {
    "id": "moody",
    "stat": "91.7%",
    "statLabel": "best SVM accuracy · eight RAVDESS emotions",
    "pitch": "I worked on the acoustic features, emotion classifiers, and end-to-end app."
  },
  {
    "id": "frequencyprint",
    "stat": "61.5%",
    "statLabel": "best accuracy after realistic evaluation redesign",
    "pitch": "My capstone taught me to question results that look too good. I rebuilt the evaluation after the first models failed on AI covers."
  }
];

const PROJECTS = [
  {
    "id": "artsonna",
    "title": "Artsonna",
    "cats": [
      "apps"
    ],
    "context": "Hackathon prototype",
    "summary": "A place for creators to share their work. I co-built the hackathon prototype and refined the demo.",
    "description": "Artsonna started with an idea: help creators build a portfolio and find a community. My teammate and I turned that idea into a live hackathon prototype using Base44. I worked on refining the product experience as we developed the concept into a usable demo.",
    "skills": [
      "Base44",
      "Prompt Engineering",
      "Rapid Prototyping"
    ],
    "thumb": "images/logo/artsonna-logo.png",
    "media": [],
    "demo": "https://artsonna.base44.app/",
    "repo": "https://github.com/Likhithaa-Guntaka/artsonna",
    "metrics": []
  },
  {
    "id": "musictheoryagent",
    "title": "Music Theory Agent",
    "cats": [
      "ai",
      "music"
    ],
    "context": "Built in one hour · NY Tech Week",
    "summary": "I built a voice assistant for songwriting in one hour at NY Tech Week.",
    "description": "What could I build with one hour to learn a voice AI tool? At AssemblyAI’s Voice AI Meetup during NY Tech Week, I built and shipped a working music theory assistant. Musicians can talk to it for suggestions to craft, improve, or finish a song. I used Claude Code to connect AssemblyAI’s Voice Agent API to a FastAPI application.",
    "skills": [
      "Claude Code",
      "AssemblyAI Voice Agent API",
      "FastAPI",
      "Voice AI"
    ],
    "thumb": "images/logo/music-theory-agent-logo.png",
    "media": [],
    "repo": "https://github.com/AparCode/music-theory-assistant",
    "demo": "",
    "metrics": []
  },
  {
    "id": "maara",
    "title": "MAARA",
    "cats": [
      "ai"
    ],
    "context": "Team of 3 · April 2026 – May 2026",
    "summary": "I co-developed a five-agent pipeline that retrieves code, proposes fixes, and checks its work.",
    "description": "MAARA helps repair software using locally served language models. In our team of three, I co-developed the five-agent pipeline and worked on code retrieval and evaluation. The system plans a repair, validates the plan, retrieves relevant code, generates a fix, and critiques the result before trying again when needed. Our strongest reported few-shot setup reached 100% pass@1, with a 13-point gain associated with the strategy/evaluator gate.",
    "skills": [
      "Python",
      "Ollama",
      "LangChain",
      "RAG",
      "ChromaDB",
      "Qdrant",
      "LLM Agents",
      "Evaluation"
    ],
    "thumb": "images/logo/maara-logo.png",
    "media": [
      {
        "type": "youtube",
        "id": "0hhFTL5B0VA",
        "label": "MAARA demo"
      }
    ],
    "repo": "https://github.com/AparCode/maara",
    "demo": "",
    "metrics": [
      "20-query retrieval benchmark across 29 source-code chunks",
      "Dense retrieval ranked the relevant chunk first for 19/20 queries",
      "Dense MRR 0.963 vs. hybrid RRF 0.877 vs. BM25 0.727",
      "Strongest reported few-shot setup reached 100% pass@1 with a 13-point gain associated with the strategy/evaluator gate; keep this metric tied to that setup."
    ]
  },
  {
    "id": "moody",
    "title": "Mood-y",
    "cats": [
      "ai",
      "music"
    ],
    "context": "Team of 3 · March 2026 – May 2026",
    "summary": "Music recommendations from a voice recording. I worked on the audio features, models, and app.",
    "description": "Mood-y takes a voice recording, detects an emotion, and recommends music to match. In our team of three, I co-developed the system from acoustic features to the FastAPI/React application. I extracted 112-dimensional features with Librosa and compared classifiers across eight RAVDESS emotions. Our best SVM configuration reached 91.7% accuracy and 0.916 F1 on the project evaluation.",
    "skills": [
      "Python",
      "Librosa",
      "scikit-learn",
      "SVM",
      "RAVDESS",
      "FastAPI",
      "React",
      "Audio ML"
    ],
    "thumb": "images/logo/moody-logo.png",
    "media": [
      {
        "type": "youtube",
        "id": "7eI5m9MXY8E",
        "label": "Mood-y demo"
      }
    ],
    "repo": "https://github.com/sadhvikoli/voice-mood-music-recommender",
    "demo": "",
    "metrics": [
      "112-dimensional acoustic features",
      "Best SVM: 91.7% accuracy and 0.916 F1 across eight RAVDESS emotions"
    ]
  },
  {
    "id": "frequencyprint",
    "title": "FrequencyPrint",
    "cats": [
      "ai",
      "music"
    ],
    "context": "Solo capstone · January 2026 – May 2026",
    "summary": "My audio deepfake capstone: testing CNNs, finding misleading results, and rebuilding the evaluation.",
    "description": "Can an audio model distinguish real music from an AI-generated cover? For my solo capstone, I tested SimpleCNN, ResNet18, and ResNet34 on spectrograms. The first results looked almost perfect, but the models failed on realistic AI covers. I investigated the datasets and redesigned the evaluation using real music and AI-cover data. The best realistic accuracy was 61.5%. That result gave me a much more useful understanding of the problem than the initial 99–100% accuracy.",
    "skills": [
      "Python",
      "PyTorch",
      "Librosa",
      "Spectrograms",
      "CNNs",
      "ResNet18",
      "ResNet34",
      "Model Evaluation"
    ],
    "thumb": "images/logo/frequencyprint-logo.png",
    "media": [
      {
        "type": "youtube",
        "id": "N6JO_qRjtS8",
        "label": "FrequencyPrint demo"
      },
      {
        "type": "image",
        "src": "images/frequencyprint_demo.png",
        "alt": "FrequencyPrint demo screenshot"
      }
    ],
    "demo": "https://aparcode.github.io/frequency-print/",
    "repo": "https://github.com/AparCode/frequency-print",
    "metrics": [
      "Initial 99–100% accuracy did not generalize to realistic AI covers",
      "After redesigning evaluation, best realistic accuracy was 61.5%"
    ]
  },
  {
    "id": "orderup",
    "title": "OrderUp",
    "cats": [
      "apps",
      "ai"
    ],
    "context": "Hackathon · WiCHacks ’26",
    "summary": "A restaurant simulator for WiCHacks ’26. I helped connect Gemini to the Java UI.",
    "description": "For WiCHacks ’26, our team built OrderUp, a restaurant simulator where players customize menus, review financial metrics, and decide how to grow their business. I helped integrate the Gemini API into the Java-based interface so the simulator could use AI in its business-decision workflow.",
    "skills": [
      "Java",
      "JavaFX",
      "Maven",
      "Google Gemini API",
      "XML",
      "JSON"
    ],
    "thumb": "images/logo/orderup-logo.png",
    "media": [
      {
        "type": "youtube",
        "id": "Hfh6DiiAWEU",
        "label": "OrderUp demo"
      },
      {
        "type": "image",
        "src": "images/orderup_demo.jpg",
        "alt": "OrderUp gameplay"
      },
      {
        "type": "image",
        "src": "images/orderup_demo_2.jpg",
        "alt": "OrderUp financial metrics"
      },
      {
        "type": "image",
        "src": "images/orderup_demo_3.jpg",
        "alt": "OrderUp Gemini output"
      }
    ],
    "repo": "https://github.com/Lilly-Rowland/OrderUp",
    "demo": "",
    "metrics": []
  },
  {
    "id": "underthesea",
    "title": "XRLive: Under the Sea",
    "cats": [
      "gfx",
      "music"
    ],
    "context": "RIT Frameless Symposium",
    "summary": "I made a motion-responsive fabric effect and composed the music for our underwater XR demo.",
    "description": "For RIT’s Frameless Symposium, our XRLive team created underwater-themed visuals that respond to motion and run as projected effects. My main contribution was a resizable fabric-movement effect in TouchDesigner using its MediaPipe extension. I tested it on the Wegmans Theater projector and composed the music and sound effects in Ableton. It was a chance to work on both the visuals and the sound of the experience.",
    "skills": [
      "TouchDesigner",
      "MediaPipe",
      "Azure Kinect",
      "Real-Time Projection",
      "Ableton"
    ],
    "thumb": "images/logo/underthesea-logo.png",
    "media": [
      {
        "type": "image",
        "src": "images/frameless.gif",
        "alt": "Under the Sea interactive projection"
      },
      {
        "type": "youtube",
        "id": "8niyMsKDXEo",
        "label": "Mystical Ocean · Music for XRLive: Under the Sea"
      }
    ],
    "repo": "https://github.com/alf9310/XRLive-VIP-Fall-2025",
    "demo": "",
    "metrics": []
  },
  {
    "id": "virtualcloset",
    "title": "VirtualCloset",
    "cats": [
      "ai",
      "apps"
    ],
    "context": "Hackathon · HACK.COMS ’25",
    "summary": "Outfit suggestions with Gemini. I built the JavaFX frontend and connected it to the backend.",
    "description": "Deciding what to wear became our team’s challenge for HACK.COMS ’25. We built VirtualCloset, an AI wardrobe assistant that suggests outfits using Gemini, Pandas, JavaFX, and FastAPI. My contribution was developing the frontend and connecting it to the backend so users could interact with the wardrobe assistant.",
    "skills": [
      "Java",
      "JavaFX",
      "Python",
      "FastAPI",
      "Google Gemini API",
      "Maven",
      "SQLite",
      "Pandas",
      "Pydantic",
      "SQLAlchemy",
      "Uvicorn",
      "XML"
    ],
    "thumb": "images/logo/virtualcloset-logo.png",
    "media": [],
    "repo": "https://github.com/ib9168/Virtual_Closet_HACKCOMS-25",
    "demo": "",
    "metrics": []
  },
  {
    "id": "resopulse",
    "title": "ResoPulse",
    "cats": [
      "music",
      "gfx"
    ],
    "context": "Computer Animation course",
    "summary": "A Three.js music visualizer. I built the particle system that bursts at frequency peaks.",
    "description": "For a Computer Animation course, we built ResoPulse, a Three.js visualizer that responds to audio peaks with high-intensity effects. I architected the particle system so particles explode from objects when the music reaches a frequency peak. I enjoyed turning changes in sound into something you can see.",
    "skills": [
      "JavaScript",
      "THREE.js",
      "WebGL",
      "Vite",
      "HTML"
    ],
    "thumb": "images/logo/resopulse-logo.png",
    "media": [
      {
        "type": "youtube",
        "id": "yNfc7ALeUkM",
        "label": "ResoPulse demo"
      }
    ],
    "demo": "https://aparcode.github.io/resopulse/",
    "repo": "https://github.com/AparCode/resopulse",
    "metrics": []
  },
  {
    "id": "visualdove",
    "title": "VisualDove",
    "cats": [
      "music",
      "gfx"
    ],
    "context": "Global Illumination final project",
    "summary": "I built a Python engine that analyzes audio frequencies and draws visuals in sync with the music.",
    "description": "For my Global Illumination final, I built VisualDove, an interactive audio-visual engine in Python. Librosa analyzes the audio frequencies, and PyGame renders visuals synchronized to the sound. I used NumPy and PIL alongside them to build the engine.",
    "skills": [
      "Python",
      "Librosa",
      "PyGame",
      "NumPy",
      "PIL"
    ],
    "thumb": "images/logo/visualdove-logo.png",
    "media": [],
    "repo": "https://github.com/AparCode/visual-dove",
    "demo": "",
    "metrics": []
  },
  {
    "id": "virtualkaraoke",
    "title": "Virtual Karaoke",
    "cats": [
      "gfx",
      "music"
    ],
    "context": "Imagine RIT 2025",
    "summary": "An Imagine RIT motion-capture exhibit. I helped test the avatars, animations, and live performance.",
    "description": "Our Virtual Karaoke exhibit at Imagine RIT 2025 used motion capture to make avatars mirror live performers. On the motion-capture sub-team, I tested RADICAL Motion with Unreal Engine and created and imported ReadyPlayerMe avatars. I investigated facial morph-target and audio-motion synchronization issues, explored avatar switching with Blueprints, and helped test and present the exhibit.",
    "skills": [
      "Unreal Engine",
      "RADICAL Motion",
      "ReadyPlayerMe",
      "Perforce",
      "Blueprints",
      "Motion Capture"
    ],
    "thumb": "images/logo/virtualkaraoke-logo.png",
    "media": [
      {
        "type": "vimeo",
        "id": "1084431994",
        "label": "Virtual Karaoke demo"
      }
    ],
    "repo": "",
    "demo": "",
    "metrics": []
  },
  {
    "id": "myergbuddy",
    "title": "MyErgBuddy",
    "cats": [
      "ai"
    ],
    "context": "Hackathon · WiCHacks 2025",
    "summary": "A rowing-posture coach. I co-built pose checks using joint angles and body landmarks.",
    "description": "For WiCHacks 2025, we built MyErgBuddy to give rowers real-time feedback on their posture. I co-developed the computer-vision pipeline with MediaPipe pose landmarks, calculated joint angles and positions, and defined checks for catch and finish postures. I also helped connect calibration, timing, movement sequence logic, and feedback in Streamlit.",
    "skills": [
      "Python",
      "MediaPipe",
      "OpenCV",
      "Pose Estimation",
      "Joint-Angle Analysis",
      "Streamlit"
    ],
    "thumb": "images/logo/myergbuddy-logo.png",
    "media": [
      {
        "type": "zoom",
        "src": "https://rit.zoom.us/clips/share/A2F3MRZPVzdPZTJLSFQ3NlBUd2VETnJxYzJRAQ",
        "label": "MyErgBuddy demo"
      }
    ],
    "repo": "https://github.com/Lilly-Rowland/WiCHacks2025",
    "demo": "",
    "metrics": []
  },
  {
    "id": "brickstein",
    "title": "BrickStein",
    "cats": [
      "ai"
    ],
    "context": "Hackathon · BrickHack 11",
    "summary": "Our team built a math tutor that accepts voice or chat and generates visual explanation videos.",
    "description": "At BrickHack 11, our team built BrickStein, a multimodal math-tutor prototype. The workflow accepts voice or chat, captures and auto-crops highlighted screen regions, checks math reasoning, and generates visual explanation videos. We used Google Chirp, OpenCV, GPT models, and Manim to put the workflow together.",
    "skills": [
      "Google Chirp",
      "OpenCV",
      "GPT Models",
      "Manim",
      "Multimodal AI"
    ],
    "thumb": "images/logo/brickstein-logo.png",
    "media": [],
    "repo": "https://github.com/Gunoo1/BrickStein",
    "demo": "",
    "metrics": []
  },
  {
    "id": "securecheckup",
    "title": "Secure Checkup",
    "cats": [
      "apps"
    ],
    "context": "Hackathon · HACK.COMS 2024",
    "summary": "I co-built a platform for inspecting demographic gaps in healthcare datasets.",
    "description": "At HACK.COMS 2024, we built Secure Checkup to help people inspect demographic representation disparities in healthcare datasets. I co-developed the platform, working across the Oracle PL/SQL database, Python REST/JSON API, JavaScript frontend, and Tableau visualizations.",
    "skills": [
      "Oracle PL/SQL",
      "Python",
      "REST API",
      "JSON",
      "JavaScript",
      "HTML/CSS",
      "Tableau"
    ],
    "thumb": "images/logo/securecheckup-logo.png",
    "media": [],
    "repo": "https://github.com/Szheng25/SecureCheckup",
    "demo": "",
    "metrics": []
  },
  {
    "id": "acertainconvexhull",
    "title": "A Certain Convex Hull",
    "cats": [
      "gfx"
    ],
    "context": "Computational Geometry course",
    "summary": "An interactive geometry tool. I built the point-input features and much of the website.",
    "description": "For Computational Geometry, we built an interactive site that lets users add points and manipulate matrices to form convex hulls, including with Jarvis’s March. I implemented the user-input features and much of the surrounding website using JavaScript, HTML, CSS, JSON, and p5.js.",
    "skills": [
      "JavaScript",
      "HTML",
      "CSS",
      "JSON",
      "p5.js"
    ],
    "thumb": "images/logo/acertainconvexhull-logo.png",
    "media": [],
    "demo": "https://aparcode.github.io/acertainconvexhull/",
    "repo": "https://github.com/AparCode/acertainconvexhull",
    "metrics": []
  },
  {
    "id": "echoflower",
    "title": "Undertale Echo Flower Recreation",
    "cats": [
      "gfx"
    ],
    "context": "Computer Graphics final",
    "summary": "I recreated Undertale’s Echo Flower scene with WebGPU, from the environment to the player.",
    "description": "For my Computer Graphics final, I recreated the Echo Flower scene from Undertale using WebGPU and JavaScript. I built the environment, flowers, grass, and player to bring the scene into a 3D graphics project.",
    "skills": [
      "JavaScript",
      "WebGPU",
      "HTML"
    ],
    "thumb": "images/logo/echoflower-logo.png",
    "media": [],
    "repo": "https://github.com/jltlm/echo-flower-scene",
    "demo": "",
    "metrics": []
  },
  {
    "id": "spotiphy",
    "title": "Spotiphy",
    "cats": [
      "music",
      "apps"
    ],
    "context": "Principles of Data Management",
    "summary": "A PostgreSQL music app. I wrote and debugged SQL for accounts, playlists, and music discovery.",
    "description": "For Principles of Data Management, our team built Spotiphy, a music application backed by PostgreSQL. I used Python and psycopg2 to write and debug SQL for accounts, playlists, listening history, search, social features, and discovery, including top-artist and top-genre queries.",
    "skills": [
      "Python",
      "PostgreSQL",
      "SQL",
      "psycopg2",
      "SSH"
    ],
    "thumb": "images/logo/spotiphy-logo.png",
    "media": [],
    "repo": "https://github.com/BuxoGabriel/Spotiphy",
    "demo": "",
    "metrics": []
  },
  {
    "id": "fibonacci",
    "title": "Fibonacci Watch Store",
    "cats": [
      "apps"
    ],
    "context": "Team project",
    "summary": "A team-built watch store. I implemented product updates, registration, and parts of the UI.",
    "description": "Fibonacci is a watch e-commerce application our team built with a Java/Spring backend and an Angular/TypeScript frontend. I implemented the update-product functionality and user-registration class, and formatted website elements including the navigation bar.",
    "skills": [
      "Java",
      "Spring",
      "REST APIs",
      "Maven",
      "Angular",
      "TypeScript",
      "HTML/CSS"
    ],
    "thumb": "images/logo/fibonacci-logo.png",
    "media": [],
    "repo": "https://github.com/AparCode/fibonacci",
    "demo": "",
    "metrics": []
  },
  {
    "id": "areyousocialdistancing",
    "title": "Are You Social Distancing?",
    "cats": [
      "ai"
    ],
    "context": "MIT Beaver*Works",
    "summary": "A face and mask recognition project. I created datasets and implemented webcam identification.",
    "description": "At MIT BeaverWorks, we worked on face and mask recognition using CNNs. I created mask and no-mask datasets and implemented webcam-based identification using Python libraries, including OpenCV and PyTorch.",
    "skills": [
      "Python",
      "OpenCV",
      "NumPy",
      "Pyaudio",
      "PyTorch",
      "Noggin"
    ],
    "thumb": "images/logo/areyousocialdistancing-logo.png",
    "media": [],
    "repo": "https://github.com/armaan-v924/are-you-social-distancing",
    "demo": "",
    "metrics": []
  }
];

const SKILLS = [
  {
    "group": "Languages",
    "items": [
      "Python",
      "Java",
      "JavaScript / TypeScript",
      "SQL",
      "HTML / CSS"
    ]
  },
  {
    "group": "AI / ML",
    "items": [
      "PyTorch",
      "scikit-learn",
      "OpenCV",
      "Librosa",
      "RAG & LLM agents",
      "Model evaluation",
      "NumPy"
    ]
  },
  {
    "group": "Web & apps",
    "items": [
      "FastAPI",
      "React",
      "Node.js",
      "Spring",
      "JavaFX",
      "Streamlit",
      "REST APIs"
    ]
  },
  {
    "group": "Data & tools",
    "items": [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "ChromaDB / Qdrant",
      "Docker",
      "Linux",
      "Slurm",
      "Git / GitHub",
      "Maven",
      "CI/CD"
    ]
  },
  {
    "group": "Graphics, audio & XR",
    "items": [
      "Three.js",
      "WebGL",
      "WebGPU",
      "TouchDesigner",
      "Unreal Engine",
      "Ableton"
    ]
  }
];

const EXPERIENCE = [
  {
    "kind": "work",
    "org": "Kitware",
    "role": "Computer Vision Intern",
    "when": "May – Aug 2024",
    "where": "Carrboro, NC",
    "logo": "images/logo/kitware-logo.png",
    "bullets": [
      "Trained and evaluated YOLOX and RT-DETR object-detection pipelines on ~20,000 TinyBirds images to study small-object detection.",
      "Compared the two pipelines with PyTorch, TensorBoard, Slurm and a multi-GPU setup; debugged dataset and model-configuration issues.",
      "Checked predictions against ground-truth annotations to find detection errors on very small objects."
    ]
  },
  {
    "kind": "work",
    "org": "Griffiss Institute",
    "role": "AI Research Co-op",
    "when": "Jul – Dec 2023",
    "where": "Rome, NY",
    "logo": "images/logo/griffiss-logo.png",
    "bullets": [
      "Designed experiments testing how CLIP vision-language models handle 20 homonym image samples (same name, different object).",
      "Compared ResNet50 and ViT-L/14 zero-shot classifiers using cosine similarity, NumPy and confusion matrices.",
      "Found image-to-image matching was stronger than image-to-text matching, highlighting trouble with ambiguous concepts."
    ]
  },
  {
    "kind": "research",
    "org": "Northeastern University",
    "role": "Research Student Internship",
    "when": "3-year high-school program",
    "where": "with Dr. Sarah Ostadabbas",
    "logo": "images/logo/northeastern-logo.png",
    "bullets": [
      "Machine-learning research on face and mask recognition; presented at NYC-area research competitions.",
      "Semifinalist, 2021 Junior Science and Humanities Symposium."
    ]
  },
  {
    "kind": "research",
    "org": "MIT Beaver*Works Summer Institute",
    "role": "Cog*Works",
    "when": "Summer 2020",
    "where": "",
    "logo": "images/logo/mit-logo.png",
    "bullets": [
      "Applied cognitive science to machine learning in team projects, including recognition tasks such as identifying songs."
    ]
  },
  {
    "kind": "music",
    "org": "Game Symphony Orchestra",
    "role": "Pianist",
    "when": "Jan 2022 – May 2026",
    "where": "RIT",
    "logo": "images/logo/gso-logo.png",
    "bullets": [
      "Played piano in every concert, bringing orchestral arrangements of video-game music to life."
    ]
  },
  {
    "kind": "lead",
    "org": "Women in Computing",
    "role": "Graduate Coordinator",
    "when": "May 2025 – May 2026",
    "where": "RIT",
    "logo": "images/logo/wic-logo.png",
    "bullets": [
      "As Graduate Coordinator, I organized social events for students to connect and share their experiences at RIT."
    ]
  },
  {
    "kind": "lead",
    "org": "Computing Organization for Multicultural Students",
    "role": "Public Relations Chair",
    "when": "May – Dec 2025",
    "where": "RIT",
    "logo": "images/logo/coms-logo.png",
    "bullets": [
      "I designed a COMS Connection newsletter template and created weekly posts, reels, and flyers for our events.",
      "I photographed and edited event recaps for Instagram and LinkedIn."
    ]
  },
  {
    "kind": "lead",
    "org": "RIT AI Club",
    "role": "Events Coordinator",
    "when": "May 2024 – May 2025",
    "where": "RIT",
    "logo": "images/logo/ai-logo.png",
    "bullets": [
      "I coordinated company visits to help students learn more about artificial intelligence."
    ]
  },
  {
    "kind": "lead",
    "org": "Sigma Sigma Sigma",
    "role": "Alumni Relations Chair",
    "when": "College",
    "where": "",
    "logo": "images/logo/sigma-logo.png",
    "bullets": [
      "Networked with alumni, designed monthly newsletters, and volunteered at events like Daffodil Day and park clean-ups."
    ]
  },
  {
    "kind": "lead",
    "org": "Computer Science House",
    "role": "Member",
    "when": "First two years of college",
    "where": "RIT",
    "logo": "images/logo/csh-logo.png",
    "bullets": [
      "Helped make the organization’s first yearbook; took part in events such as Music Jam."
    ]
  }
];

const EXPERIENCE_GROUPS = [
  {
    "title": "Industry",
    "kinds": [
      "work"
    ]
  },
  {
    "title": "Research",
    "kinds": [
      "research"
    ]
  },
  {
    "title": "Leadership & music",
    "kinds": [
      "music",
      "lead"
    ]
  }
];

const MUSIC_TRACKS = [
  {
    "type": "youtube",
    "id": "Osx9m8qw5WM",
    "title": "XLOV (Hyun & Haru) - HIPS (Illumidove Remix)",
    "note": "My remix of HIPS by XLOV’s Hyun and Haru."
  },
  {
    "type": "youtube",
    "id": "w5kdshXFYUc",
    "title": "Illumidove - Dub-Dummy",
    "note": "Dub-Dummy, released on my Illumidove channel."
  },
  {
    "type": "youtube",
    "id": "vo5q7d_7uNA",
    "title": "CHEN (EXO) - I Don't Even Mind (Illumidove Remix)",
    "note": "My remix of CHEN’s I Don’t Even Mind."
  },
  {
    "type": "youtube",
    "id": "FP6aoIGNwDU",
    "title": "Illumidove - CPU",
    "note": "CPU, released on my Illumidove channel."
  },
  {
    "type": "youtube",
    "id": "yRPwJDyoVQs",
    "title": "Illumidove - Dark Sea (Frozen II OST Recomposition)",
    "note": "My recomposition of Dark Sea from the Frozen II soundtrack."
  },
  {
    "type": "youtube",
    "id": "QS2Q3e6uC1Q",
    "title": "CHANYEOL (EXO) - I'm on your side too (Revamped)",
    "note": "My revamped version of CHANYEOL’s I’m on your side too."
  },
  {
    "type": "youtube",
    "id": "LTf-Illc0-c",
    "title": "I Remade XLOV's \"I,God\" Highlight Medley Without Hearing It",
    "note": "A remake challenge: XLOV’s I,God highlight medley without hearing it."
  },
  {
    "type": "youtube",
    "id": "8niyMsKDXEo",
    "title": "Illumidove - Mystical Ocean",
    "note": "Music I composed for XRLive: Under the Sea, the interactive projection experience at RIT."
  },
  {
    "type": "youtube",
    "id": "flLbu3QOog4",
    "title": "BAEKHYUN (EXO) - Elevator (Illumidove Remix) [Instrumental]",
    "note": "The instrumental version of my BAEKHYUN Elevator remix."
  },
  {
    "type": "youtube",
    "id": "HnWhDStoVg4",
    "title": "BAEKHYUN (EXO) - Elevator (Illumidove Remix)",
    "note": "My remix of BAEKHYUN’s Elevator."
  },
  {
    "type": "youtube",
    "id": "eoNdr-9P3PE",
    "title": "What's Up Danger (Spider-Verse) (Illumidove Remake)",
    "note": "My remake of What’s Up Danger from Spider-Verse."
  },
  {
    "type": "youtube",
    "id": "iBb1N8qx750",
    "title": "Baekhyun (EXO) x Porter Robinson x Madeon - Woo, a Shelter (Mashup)",
    "note": "A mashup of Baekhyun, Porter Robinson, and Madeon."
  },
  {
    "type": "youtube",
    "id": "ctavdGMzwH0",
    "title": "EXO - Sweet Lies (Illumidove Remix)",
    "note": "My remix of EXO’s Sweet Lies."
  },
  {
    "type": "youtube",
    "id": "JCC64BSihFs",
    "title": "EXO - Sweet Lies (Illumidove Remix) [Instrumental]",
    "note": "The instrumental version of my EXO Sweet Lies remix."
  }
];
