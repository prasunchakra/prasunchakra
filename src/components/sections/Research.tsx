import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    FileCode2,
    Award,
    Lightbulb,
    Search,
} from "lucide-react";
import { FaTwitter, FaAws } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { philosophyPoints, certifications, researchInterests, socialLinks } from "./constants";

// Provider icon mapping
const providerIcons = {
    aws: { icon: FaAws, color: "text-orange-400" },
    gcp: { icon: SiGooglecloud, color: "text-blue-400" },
} as const;

// Helper to create Google search URL
const getGoogleSearchUrl = (topic: string) => {
    const query = encodeURIComponent(`${topic} prasunchakra`);
    return `https://www.google.com/search?q=${query}`;
};

export function Research() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="research" className="relative py-32">
            {/* Background */}
            <div className="absolute inset-0 cyber-grid opacity-20" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-primary terminal-text text-sm">03.</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                            Research & Writing
                        </h2>
                        <div className="h-px flex-1 bg-border max-w-xs" />
                    </div>
                    <p className="text-muted-foreground max-w-2xl">
                        Thoughts on security, architecture, and the intersection of AI with
                        secure systems.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left - Terminal, Approach & Credentials */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Terminal Window */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-cyber-terminal rounded-xl border border-border overflow-hidden"
                        >
                            <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                <span className="ml-2 text-xs text-muted-foreground terminal-text">
                                    ~/about/whoami
                                </span>
                            </div>
                            <div className="p-6 terminal-text text-sm leading-relaxed">
                                <p className="text-muted-foreground mb-4">
                                    <span className="text-primary">$</span> cat philosophy.md
                                </p>
                                <div className="space-y-3 text-foreground/90">
                                    {philosophyPoints.map((point, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.4 + index * 0.1 }}
                                            className="flex items-start gap-2"
                                        >
                                            <span className="text-primary mt-1">▸</span>
                                            <span>{point}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Approach Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6 }}
                            className="p-6 bg-card/50 rounded-xl border border-border"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <FileCode2 className="w-5 h-5 text-primary" />
                                <h3 className="font-semibold text-foreground">My Approach</h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                I focus on building software that is secure and doesn&apos;t break when traffic
                                increases. Whether I am working on microservices, cloud setup,
                                or security protocols, I always try to understand the logic behind the design
                                first. This research-based approach has helped me build systems
                                that handle 75k+ hits per second without crashing or having security gaps.
                                For me, it is not just about finishing a task, but making sure the foundation
                                is solid for the long run.
                            </p>
                        </motion.div>

                        {/* Credentials */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.7 }}
                            className="p-5 bg-card/50 rounded-xl border border-border"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Award className="w-4 h-4 text-amber-400" />
                                <h4 className="text-sm font-semibold text-foreground">Credentials</h4>
                            </div>
                            <div className="space-y-3">
                                {certifications.map((cert, index) => {
                                    const ProviderIcon = providerIcons[cert.provider].icon;
                                    const iconColor = providerIcons[cert.provider].color;
                                    return (
                                        <motion.div
                                            key={cert.name}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.8 + index * 0.1 }}
                                            className="group flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50 hover:border-amber-500/30 transition-all"
                                        >
                                            <ProviderIcon className={`w-6 h-6 ${iconColor}`} />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-foreground">{cert.name}</p>
                                                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <motion.aside
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6"
                    >
                        {/* Research Interests */}
                        <div className="p-6 bg-card/50 rounded-xl border border-border">
                            <div className="flex items-center gap-2 mb-4">
                                <Lightbulb className="w-5 h-5 text-primary" />
                                <h3 className="font-semibold text-foreground">
                                    Research Interests
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {researchInterests.map((interest) => (
                                    <a
                                        key={interest}
                                        href={getGoogleSearchUrl(interest)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-background/50 text-muted-foreground rounded-full border border-border hover:border-primary/30 hover:text-foreground hover:bg-primary/5 transition-all group"
                                    >
                                        <span>{interest}</span>
                                        <Search className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Twitter Follow Card */}
                        <div className="p-6 bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-xl border border-sky-500/20">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-sky-500/20 rounded-lg">
                                    <FaTwitter className="w-5 h-5 text-sky-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Stay Updated</h3>
                                    <p className="text-xs text-muted-foreground">@prasunchakra</p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                Follow me for insights on security, architecture, and tech leadership.
                            </p>
                            <a
                                href={socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors text-sm"
                            >
                                <FaTwitter className="w-4 h-4" />
                                <span>Follow on Twitter</span>
                            </a>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}
