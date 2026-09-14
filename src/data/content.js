export const navItems = ["about", "skills", "background", "projects", "training", "certificates", "education", "contact"];

export const socials = {
  github: "https://github.com/Meiiliiiii",
  telegram: "https://t.me/meiiliiiii",
  facebook: "https://www.facebook.com/share/1K9ewxbmwU/?mibextid=wwXIfr",
  tiktok: "https://www.tiktok.com/@meiiliiiiiiiiiiii?_r=1&_t=ZS-99XOXBkBZKx",
  instagram: "https://www.instagram.com/meiiliiiii?stkn=MWtzZzk2ODFzd3h1cg%3D%3D&utm_source=qr",
  email: "ranith9876@gmail.com",
  phone: "089 798 949",
};

export const projects = [
  { id: "jomney", number: "01", year: "2026", category: "FULL STACK · E-COMMERCE", title: "Jomney Pet Food", 
    description: "A responsive e-commerce website for dog and cat food, built around product browsing, authentication, cart flow, checkout and a practical database-backed system.", 
    tags: ["React", "Vite", "Tailwind CSS", "Firebase Auth", "Firestore", "Storage"], github: "https://github.com/meiiliiiii/Jomney", demo: "https://meiiliiiii.github.io/Jomney/" },
  { id: "clinic", number: "02", year: "2026", category: "FULL STACK · SYSTEM", title: "Dental Clinic System", 
    description: "A web system concept for appointments, patient records and structured clinic workflows, designed with usability, maintainability and database logic in mind.", 
    tags: ["HTML", "CSS", "JavaScript"], github: "https://github.com/meiiliiiii/Dental_Clinic-Y2-RN-", demo: "https://meiiliiiii.github.io/Dental_Clinic-Y2-RN-/" },
  { id: "windows", number: "03", year: "2026", category: "CYBERSECURITY · STATIC ANALYSIS", title: "Windows Installer Analysis",
    description: "A defensive static investigation of a PE32 Windows installer using file inspection, objdump, strings, entropy analysis, Authenticode parsing and YARA.", 
    tags: ["PE32", "NSIS", "YARA", "MITRE ATT&CK"] },
  { id: "ghidra", number: "04", year: "2026", category: "CYBERSECURITY · REVERSE ENGINEERING", title: "Mobile Application Analysis", 
    description: "An academic reverse-engineering study using Ghidra to understand control flow, decompiled functions, file handling and system-level behavior without execution.", 
    tags: ["Ghidra", "CFG", "Decompilation", "Data Flow"] },
];

export const caseStudies = {
  windows: { eyebrow: "03 / CYBERSECURITY", title: "Windows Installer — Static Malware Analysis", 
    caseNo: "2026", intro: "A static-only investigation focused on method, evidence and responsible defensive reporting.", 
    meta: [{ label: "SCOPE", value: "PE32 / NSIS installer" }, { label: "METHOD", value: "Static analysis" }, 
      { label: "OUTPUT", value: "Evidence + YARA" }, { label: "STATUS", value: "Academic project" }], 
      bullets: ["Identified the sample as a PE32 Windows GUI executable using NSIS.", 
        "Examined PE structure, sections, entropy, appended payload data, imports, strings and manifest information.", 
        "Parsed embedded Authenticode data and documented relevant certificate information.", 
        "Authored a defensive YARA identification rule scoped to the sample.",
        "Mapped MITRE ATT&CK context conservatively and separated capability observations from confirmed behavior.", 
        "Assessed evasion and persistence indicators individually rather than over-claiming from static evidence."], 
        verdict: "This project demonstrates a security-analysis workflow; dynamic analysis would be required before making a runtime safety claim." },
  ghidra: { eyebrow: "04 / REVERSE ENGINEERING", title: "Mobile Application — Reverse Engineering with Ghidra", 
    caseNo: "2026", intro: "An academic project focused on reconstructing compiled program structure and execution logic without running the application.", 
    meta: [{ label: "SCOPE", value: "Android APK" }, { label: "TOOL", value: "Ghidra" }, { label: "METHOD", value: "Control + data flow" }, 
      { label: "EXECUTION", value: "Static only" }], 
      bullets: ["Extracted the application package and imported decompiled code into Ghidra for structured review.", 
        "Generated and interpreted control-flow graphs to understand branches, loops and function relationships.", 
        "Inspected initialization, command-line handling and file operations using decompiled functions.", 
        "Analyzed temporary-file handling, copy/delete operations and privilege-related API usage.",
        "Traced how inputs and file data move between functions using data-flow reasoning.", 
        "Separated capability-level findings from confirmed runtime behavior."], 
        verdict: "The project shows a disciplined reverse-engineering workflow while keeping the analysis static and evidence-based." },
};

export const skillCards = [
  ["01", "Frontend", "Responsive interfaces, component-driven UI and polished interactions across desktop and mobile.",
    ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vite", "Tailwind CSS"], "code"],
  ["02", "Backend & Data", "Application logic, APIs, authentication and database fundamentals for practical full stack systems.", 
    ["Node.js", "Express", "Python", "Java", "PHP", "SQL", "Firebase"], "server"],
  ["03", "Cybersecurity", "Security analysis, scripting and reverse engineering with a defensive, evidence-first mindset.", 
    ["Python", "C", "C++", "Bash", "PowerShell", "Ghidra", "YARA"], "shield"],
  ["04", "Engineering", "Programming languages, version control, system modeling, debugging and documentation for reliable project delivery.", 
    ["C#", "Git", "GitHub", "REST API", "UML", "JSON", "XML"], "terminal"],
];

export const toolkit = [
  ["JavaScript / TypeScript", "Frontend + application logic", "CORE"],
  ["HTML / CSS", "Semantic structure + responsive styling", "CORE"],
  ["React / Vite", "Component-driven interfaces + tooling", "WORKING"],
  ["Tailwind CSS", "Utility-first responsive UI", "WORKING"],
  ["Node.js / Express", "Backend + REST APIs", "WORKING"],
  ["Python", "Automation + security analysis", "WORKING"],
  ["Java / C++ / C / C#", "OOP + systems programming", "WORKING"],
  ["PHP", "Web application development", "WORKING"],
  ["SQL / Firebase", "Data modeling, queries + cloud data", "CORE"],
  ["Bash / PowerShell", "Command line + security workflows", "WORKING"],
  ["Ghidra / YARA", "Reverse engineering + defense", "WORKING"],
  ["Git / GitHub", "Version control + publishing", "CORE"],
  ["REST API / JSON / XML", "Data exchange + integration", "WORKING"],
];

export const education = [
  ["2024 — PRESENT", "Royal University of Phnom Penh", "Bachelor of Information Technology Engineering"],
  ["CURRENT", "Chinese — Spring Education Center", "GCP8 · HSK 4"],
  ["CURRENT", "Chinese — IFL Short Course", "Level 4A"],
  ["2014 — 2020", "English — Sovannaphum School", "English studies"],
];
