// ============================================================
//  All site content lives here. Edit this file, nothing else.
//  Images go in /public (see README.md).
// ============================================================

export const site = {
  name: "Ahmed Salem Hussein",
  firstName: "Ahmed",
  logo: "AS",
  title: "Ahmed Salem Hussein | Mobile Developer (Flutter & Android)",
  description:
    "Mobile developer building cross-platform apps with Flutter and native Android apps with Kotlin and Jetpack Compose. Firebase, REST APIs and on-device AI with TensorFlow Lite.",
  role: "Mobile Developer",
  location: "Cairo, Egypt",
  email: "salemdeff@gmail.com",
  phone: "+20 109 520 9776",
  phoneHref: "tel:+201095209776",
  linkedin: "https://www.linkedin.com/in/ahmed-salem-deff",
  linkedinLabel: "linkedin.com/in/ahmed-salem-deff",
  github: "https://github.com/Ahmed-27th-deff",
  githubLabel: "github.com/Ahmed-27th-deff",
  cv: "/Ahmed_Salem_CV_Mobile.pdf",
  photo: "/me.jpg", // put your photo at public/me.jpg
};

export const hero = {
  greeting: "Hi, I'm Ahmed Salem",
  headlineTop: "A MOBILE DEVELOPER",
  headlineItalic: "Flutter & Android",
  text: "Recent Computer Science & Artificial Intelligence graduate. I build cross-platform apps with Flutter and native Android apps with Kotlin and Jetpack Compose, with Firebase, REST APIs and on-device AI.",
  sideSkills: ["Flutter", "Kotlin", "Compose", "Firebase"],
};

export const about = {
  tag: "About me",
  titleTop: "MOBILE DEVELOPER",
  titleItalic: "with an AI background",
  text: "I graduated from Banha University in Computer Science with a specialization in Artificial Intelligence. Across 2 internships (mobile development and computer vision) and 4 app projects, I worked with Firebase, REST APIs, local storage and TensorFlow Lite, using MVVM, BLoC/Cubit and Agile teamwork on Git and GitHub.",
  checks: [
    "Flutter development",
    "Android with Kotlin",
    "On-device AI",
    "Firebase backend",
  ],
  stats: [
    { value: "4", label: "App projects" },
    { value: "2", label: "Internships" },
    { value: "20K+", label: "Images preprocessed" },
    { value: "+7%", label: "Accuracy over baseline" },
  ],
};

export const skills = {
  tag: "My skills",
  titleTop: "TOOLS I BUILD",
  titleItalic: "with",
  text: "The stack I use across my internships and projects.",
  groups: [
    {
      name: "Mobile Development",
      items: ["Flutter (Dart)", "Android (Kotlin)", "Jetpack Compose", "MVVM", "BLoC/Cubit"],
    },
    {
      name: "Data & Backend",
      items: [
        "Firebase Auth",
        "Cloud Firestore",
        "Firebase Storage",
        "REST APIs",
        "Retrofit",
        "Hive",
        "DataStore",
        "SharedPreferences",
      ],
    },
    {
      name: "AI & Computer Vision",
      items: [
        "TensorFlow",
        "TensorFlow Lite",
        "PyTorch",
        "YOLOv5",
        "Transfer Learning",
        "Image Classification",
        "Object Detection",
        "Gemini API",
      ],
    },
    {
      name: "Programming Languages",
      items: ["Dart", "Kotlin", "Java", "Python", "C++"],
    },
    {
      name: "Tools & Design",
      items: ["Git", "GitHub", "Docker", "Postman", "UI/UX Design"],
    },
  ],
};

export const experience = {
  tag: "Experience",
  titleTop: "WHERE I'VE",
  titleItalic: "worked",
  items: [
    {
      role: "Mobile Development Intern",
      org: "DEPI, YAT (El Maadi, Cairo)",
      date: "Nov 2024 – May 2025",
      points: [
        "Developed Android applications with Kotlin and cross-platform mobile apps using Flutter.",
        "Integrated Firebase Authentication, Firestore, and Cloud Storage for secure real-time data handling.",
        "Embedded AI features into mobile apps including image classification and object detection with TensorFlow Lite.",
        "Optimized app performance through API call reduction and intelligent data caching strategies.",
        "Delivered tasks on schedule within Agile sprints in a collaborative team of 4 developers.",
      ],
    },
    {
      role: "Computer Vision Intern",
      org: "NTI (Online)",
      date: "Jul 2025 – Aug 2025",
      points: [
        "Built and fine-tuned deep learning models for object detection and image classification using TensorFlow, PyTorch, and YOLOv5.",
        "Preprocessed and augmented a dataset of 20,000+ images to improve model accuracy, generalization, and robustness.",
        "Applied transfer learning on pre-trained CNN models, achieving a +7% accuracy improvement over baseline.",
        "Collaborated via Git/GitHub and managed reproducible experiments in Docker environments.",
      ],
    },
  ],
};

// image: put screenshots in public/projects/ with these file names.
// youtube: paste a YouTube link or the 11-character video ID. Opens in a popup player.
//          Leave it empty to fall back to the `demo` link (opens in a new tab), or to no demo button.
export const projects = {
  tag: "Projects",
  titleTop: "FEATURED",
  titleItalic: "projects",
  items: [
    {
      title: "SpotiFit",
      subtitle: "AI Fitness Coach (Graduation Project)",
      image: "/projects/spotifit.png",
      stack: ["Flutter", "REST API", "AI Chatbot"],
      description:
        "Fitness coaching app with AI-powered guidance, workout tracking, nutrition management, and progress analytics.",
      points: [
        "Connected the backend API and the AI chatbot to the app.",
        "Designed all 8 app UI screens.",
        "Implemented the full logic and UI for the home, exercise, and chatbot screens.",
      ],
      repo: "https://github.com/Ahmed-27th-deff/SpotiFit-Flutter",
      repoLabel: "github.com/Ahmed-27th-deff/SpotiFit-Flutter",
      youtube: "",
      demo: "https://drive.google.com/file/d/1ZpVNfd9WMz59akK9shPbqw862e1ZY4GP/view?usp=sharing",
    },
    {
      title: "Timor AI",
      subtitle: "AI Personal Assistant",
      image: "/projects/timor-ai.png",
      stack: ["Flutter", "Gemini API", "Speech Recognition", "Text-to-Speech"],
      description:
        "AI assistant app for chatting with Gemini, sending image prompts, and using voice input and spoken replies, with a Material dark theme.",
      points: [
        "Integrated Gemini AI with flutter_gemini for chat and image-based prompts (image_picker).",
        "Built a virtual assistant screen with voice input and spoken replies using speech_to_text and flutter_tts.",
        "Designed and implemented 3 UI screens (Home, Chat, Virtual Assistant) with Lottie animated feedback, toast/snackbar messages, and custom branding.",
      ],
      repo: "https://github.com/Ahmed-27th-deff/Timor-Ai-Module",
      repoLabel: "github.com/Ahmed-27th-deff/Timor-Ai-Module",
      youtube: "",
      demo: "https://drive.google.com/file/d/1uFCRUJrR8IR65oLvSYvwq7sIkuob081V/view",
    },
    {
      title: "Event Countdown",
      subtitle: "Android events and holidays app",
      image: "/projects/event-countdown.png",
      stack: ["Kotlin", "Jetpack Compose"],
      description:
        "Android app to create, view, and manage events and holidays with live countdowns, with onboarding, login/signup, theming, localization, and persistent storage.",
      points: [
        "Built the app drawer and all settings screens (logic and UI) in Jetpack Compose, with 3 theme modes (Dark/Light/System) and 2 language preferences (Arabic/English).",
        "Built the Edit Event screen (logic and UI) in Jetpack Compose for updating existing events.",
      ],
      repo: "https://github.com/Dinabdullah/Event-Countdown",
      repoLabel: "github.com/Dinabdullah/Event-Countdown",
      youtube: "",
      demo: "",
    },
    {
      title: "Ping-Pong",
      subtitle: "Real-time chat app",
      image: "/projects/ping-pong.png",
      stack: ["Flutter", "Firebase Auth", "Cloud Firestore"],
      description:
        "Real-time chat app with email authentication and instant message syncing.",
      points: [
        "Built the full app, designing and implementing all 3 screens (login, register, chat) with route-based navigation.",
        "Implemented authentication with Firebase Auth and real-time message syncing with Cloud Firestore.",
        "Added loading states, snackbar feedback, custom theming, and reusable widgets.",
      ],
      repo: "https://github.com/Ahmed-27th-deff/Ping-Pong-Chat-App",
      repoLabel: "github.com/Ahmed-27th-deff/Ping-Pong-Chat-App",
      youtube: "",
      demo: "",
    },
  ],
};

export const education = {
  tag: "Education",
  titleTop: "EDUCATION &",
  titleItalic: "certifications",
  degree: {
    school: "Banha University",
    name: "Bachelor of Computer Science in Artificial Intelligence",
    date: "Sep 2022 – Jun 2026",
  },
  certs: [
    { name: "Mobile App Development", org: "DEPI Internship" },
    { name: "Computer Vision", org: "NTI Internship" },
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Professional Proficiency" },
  ],
};

export const contact = {
  tag: "Contact",
  titleTop: "GET IN TOUCH",
  titleItalic: "today",
  text: "Open to mobile developer roles and internships. Send me a message and I'll reply by email.",
};
