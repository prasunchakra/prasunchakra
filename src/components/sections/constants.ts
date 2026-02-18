export type JourneyType = "work" | "education";

export interface JourneyItem {
    period: string;
    title: string;
    subtitle?: string;
    description: string;
    type: JourneyType;
}

export const journey: JourneyItem[] = [
    {
        period: "2024 - Present",
        title: "Senior Technical Lead",
        description:
            "Directing technical strategy and full stack architecture for enterprise grade solutions, specializing in scalable cloud infrastructure and secure system design.",
        type: "work",
    },
    {
        period: "2024 - Present",
        title: "Masters in Cyber Security",
        subtitle: "Indian Institute of Technology, Kanpur",
        description:
            "Advanced studies in cryptography, network security, and secure system design. Research focus on building resilient distributed systems.",
        type: "education",
    },
    {
        period: "2021 - 2024",
        title: "Senior Software Engineer & Consultant",
        description:
            "Architected high traffic systems and secure microservices meshes. Lead technical due diligence and implemented event driven architectures using gRPC and Kafka.",
        type: "work",
    },
    {
        period: "2016 - 2021",
        title: "Software Engineer",
        description:
            "Engineered real-time, low-latency alert applications and robust backend services. Developed scalable web applications and microservices architectures while establishing foundations in secure-by-design coding practices.",
        type: "work",
    },
    {
        period: "2013 - 2016",
        title: "Masters of Computer Applications",
        subtitle: "Jadavpur University",
        description:
            "Advanced studies in algorithms, data structures, and software engineering principles. Capstone project on distributed computing systems.",
        type: "education",
    },
    {
        period: "2010 - 2013",
        title: "BS in Computer Science",
        subtitle: "Calcutta University",
        description:
            "Foundation in algorithms, data structures, and software engineering principles.",
        type: "education",
    },
];

// Legacy export for backward compatibility
export const timeline = journey.filter(item => item.type === "work").map(item => ({
    period: item.period,
    role: item.title,
    description: item.description,
}));

export const philosophyPoints = [
    "Security is not a feature it is the baseline for business continuity.",
    "Scalable architecture should be boring at 10 users and invisible at 10 million.",
    "Code is a liability; systems are assets. My goal is to minimize the former to maximize the latter.",
    "Deep research is the only hedge against architectural regret.",
    "Technical debt is a high interest loan that eventually bankrupts innovation."
];

// Certifications and credentials
export const certifications = [
    { name: "Professional Machine Learning Engineer", issuer: "Google Cloud", provider: "gcp" },
    { name: "Google Cloud Associate Cloud Engineer", issuer: "Google Cloud", provider: "gcp" },
    { name: "Amazon Web Services Developer - Associate", issuer: "Amazon Web Services", provider: "aws" },
    { name: "Amazon Web Services Solutions Architect Associate", issuer: "Amazon Web Services", provider: "aws" },
] as const;

// Areas of expertise
export const expertiseAreas = [
    {
        icon: "layout",
        title: "System Design & Architecture",
        description: "My core strength is building event-driven systems that don't break under pressure. I have extensive experience using Kafka and gRPC to manage microservices for high-traffic applications handling 100k+ requests per second.",
        skills: ["Kafka", "gRPC", "Event-Driven Architecture", "Microservices", "Scalability"],
        color: "text-blue-400",
    },
    {
        icon: "code",
        title: "Full Stack Development",
        description: "Over 10 years of experience building complete products using Node.js, Python, and React. I focus on writing clean, maintainable code and designing solid database structures.",
        skills: ["Node.js", "Python", "React", "TypeScript", "PostgreSQL"],
        color: "text-amber-400",
    },
    {
        icon: "cloud",
        title: "Cloud & DevOps",
        description: "As a certified Cloud Professional, I set up and manage resilient infrastructure on AWS and GCP. I use Terraform and Kubernetes to make sure deployments are automated and reliable.",
        skills: ["AWS", "GCP", "Terraform", "Kubernetes", "Docker"],
        color: "text-sky-400",
    },
    {
        icon: "shield",
        title: "Cybersecurity",
        description: "I am currently specializing in security through my eMasters at IIT Kanpur. I am moving towards 'secure-by-default' architecture, focusing on web security, identity management, and cloud protection.",
        skills: ["Secure Coding", "Identity Management", "Cloud Security", "Web Security", "Network Basics"],
        color: "text-emerald-400",
    },

] as const;

export const technologies = [
    { name: "Node.js", icon: "nodejs" },
    { name: "Python", icon: "python" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Kafka", icon: "kafka" },
    { name: "gRPC", icon: "grpc" },
    { name: "AWS", icon: "aws" },
    { name: "GCP", icon: "gcp" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "PySpark", icon: "pyspark" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Redis", icon: "redis" },
    { name: "React", icon: "react" },
] as const;

// Featured Projects
export const projects = [
    {
        name: "Path Finder",
        description: "An AI-powered career advisor and interactive roadmap explorer. Features an AI chatbot interface for career guidance and visual industry-specific roadmaps with role details, salary insights, and skill breakdowns.",
        techStack: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS 4",
            "Framer Motion",
            "Radix UI",
            "shadcn/ui",
            "Lucide React",
            "ESLint"
        ],
        liveUrl: "https://pathfinder.prasunchakra.com/",
        githubUrl: "https://github.com/prasunchakra/Path-Finder",
        image: "/placeholder-project.png",
    },
    {
        name: "Parallel Past",
        description: "An interactive historical timeline application built with Angular that visualizes events across parallel swimlanes with a scrollable time axis, event cards, and evidence panels.",
        techStack: ["Angular 19", "TypeScript", "Tailwind CSS 4", "RxJS", "Karma", "Jasmine"],
        liveUrl: "https://parallelpast.prasunchakra.com/",
        githubUrl: "https://github.com/prasunchakra/Parallel-Past",
        image: "/placeholder-project.png",
    },
    {
        name: "Trace Root",
        description: "Cybersecurity vulnerability detection CLI — run manually or as a cron job to keep your infrastructure secure.",
        techStack: ["Python", "Setuptools", "Pytest", "Ruff"],
        liveUrl: "",
        githubUrl: "https://github.com/prasunchakra/Trace-Root",
        image: "/placeholder-project.png",
    },
    {
        name: "prasunchakra",
        description: "Personal portfolio and branding website for Prasun Chakraborty — an Engineering Leader and Fullstack Developer with 10+ years of experience. Showcases projects, research, and professional background.",
        techStack: [
            "React 19",
            "TypeScript",
            "Vite 7",
            "Tailwind CSS 4",
            "Framer Motion",
            "Radix UI",
            "Lucide React",
            "React Icons",
            "ESLint",
        ],
        liveUrl: "https://prasunchakra.com/",
        githubUrl: "https://github.com/prasunchakra/prasunchakra",
        image: "/placeholder-project.png",
    },
] as const;


// Research interests - clickable to Google search
export const researchInterests = [
    "Post-Quantum Cryptography",
    "AI/ML Security & Adversarial Attacks",
    "Secure Multi-Party Computation",
    "Homomorphic Encryption Applications",
    "Zero-Knowledge Proofs in Practice",
    "Supply Chain Security",
] as const;

// Social links
export const socialLinks = {
    twitter: "https://twitter.com/prasunchakra",
    linkedin: "https://www.linkedin.com/in/prasunchakra/",
    github: "https://github.com/prasunchakra",
} as const;

// Articles/Posts with LinkedIn links
export const articles = [
    {
        "title": "REST APIs from Architectures to Status Codes",
        "excerpt": "A deep dive into REST APIs, covering their architecture, design principles, and common status codes.",
        "category": "Web",
        "date": "Feb 2026",
        "readTime": "14 min",
        url: "https://dev.to/prasunchakra/demystifying-the-web-3-rest-api-1nn",
    },
    {
        "title": "The Language of the Internet",
        "excerpt": "Let's explore the core languages of the internet the network protocols that make it all possible.",
        "category": "Web",
        "date": "Feb 2026",
        "readTime": "6 min",
        url: "https://dev.to/prasunchakra/demystifying-the-web-2-the-language-of-the-internet-2bpp",
    },
    {
        "title": "The Journey of a web page",
        "excerpt": "Ever wondered how a web page travels from a server to your browser? Let’s break down the journey of a web page.",
        "category": "Web",
        "date": "Feb 2026",
        "readTime": "7 min",
        url: "https://dev.to/prasunchakra/demystifying-the-web-episode-1-the-journey-of-a-web-page-from-browser-to-screen-4dbh",
    },
    {
        "title": "Become the Engineer Everyone Wants on Their Team: A Roadmap to Career Mastery",
        "excerpt": "In today’s competitive tech landscape, simply being a good coder isn’t enough to stand out. To truly excel and become the engineer everyone wants on their team, you need a blend of technical depth, strategic thinking, and strong interpersonal skills.",
        "category": "Career",
        "date": "Jul 2025",
        "readTime": "5 min",
        url: "https://medium.com/@prasunchakra/become-the-engineer-everyone-wants-on-their-team-a-roadmap-to-career-mastery-10985a4207ef"
    }

] as const;