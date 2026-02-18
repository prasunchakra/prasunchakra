import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Shield, Code2, Cloud, Brain } from "lucide-react";

const roles = [
    "Full Stack Developer",
    "Security Researcher",
    "Software Architect",
    "AI Practitioner",
    "DevOps Engineer",
];

const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Systems Secured", value: "50+" },
    { label: "Lines of Code", value: "1M+" },
];

export function Hero() {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const role = roles[currentRole];
        let charIndex = 0;
        let isDeleting = false;
        let timeout: ReturnType<typeof setTimeout>;

        const type = () => {
            if (!isDeleting && charIndex <= role.length) {
                setDisplayedText(role.slice(0, charIndex));
                charIndex++;
                setIsTyping(true);
                timeout = setTimeout(type, 80);
            } else if (!isDeleting && charIndex > role.length) {
                setIsTyping(false);
                timeout = setTimeout(() => {
                    isDeleting = true;
                    type();
                }, 2000);
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
                setDisplayedText(role.slice(0, charIndex));
                setIsTyping(true);
                timeout = setTimeout(type, 40);
            } else if (isDeleting && charIndex === 0) {
                setCurrentRole((prev) => (prev + 1) % roles.length);
            }
        };

        type();
        return () => clearTimeout(timeout);
    }, [currentRole]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 cyber-grid opacity-30" />

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            <span className="text-foreground">Hi, I&apos;m</span>
                            <br />
                            <span className="gradient-text glow-green-text">
                                Prasun Chakraborty
                            </span>
                        </h1>

                        {/* Typing Role */}
                        <div className="h-12 mb-6">
                            <div className="flex items-center gap-2 text-xl sm:text-2xl text-muted-foreground terminal-text">
                                <span className="text-primary">&gt;</span>
                                <span>{displayedText}</span>
                                <span
                                    className={`w-0.5 h-6 bg-primary ${isTyping ? "cursor-blink" : "opacity-0"
                                        }`}
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
                        >
                            I build secure, scalable systems at the intersection of
                            <span className="text-foreground font-medium"> cybersecurity</span>,
                            <span className="text-foreground font-medium"> cloud architecture</span>, and
                            <span className="text-foreground font-medium"> artificial intelligence</span>.
                            Research-driven. Production-hardened.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="#projects"
                                className="group px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all glow-green flex items-center gap-2"
                            >
                                Featured Projects
                                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                            </a>
                            <a
                                href="#about"
                                className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary/50 hover:text-primary transition-all"
                            >
                                About Me
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex gap-8 mt-12 pt-8 border-t border-border/50"
                        >
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center sm:text-left">
                                    <div className="text-2xl font-bold text-primary terminal-text">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Logo & Floating Icons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:flex items-center justify-center"
                    >
                        {/* Main Logo */}
                        <div className="relative w-80 h-80">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[64px]" />
                            <div className="relative w-full h-full rounded-full border border-border/50 overflow-hidden glow-green-border">
                                <img
                                    src={`${import.meta.env.BASE_URL}logo.png`}
                                    alt="Prasun Chakraborty"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Icons */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 p-4 bg-card border border-border rounded-xl shadow-lg"
                            >
                                <Shield className="w-8 h-8 text-primary" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 p-4 bg-card border border-border rounded-xl shadow-lg"
                            >
                                <Code2 className="w-8 h-8 text-primary" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                className="absolute top-1/2 -right-8 p-4 bg-card border border-border rounded-xl shadow-lg"
                            >
                                <Cloud className="w-8 h-8 text-primary" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                                className="absolute top-1/2 -left-8 p-4 bg-card border border-border rounded-xl shadow-lg"
                            >
                                <Brain className="w-8 h-8 text-primary" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-muted-foreground"
                >
                    <span className="text-xs terminal-text">scroll</span>
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}
