import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, ArrowUpRight, FileCode2, Briefcase, GraduationCap, Award } from "lucide-react";
import { FaAws } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { journey, philosophyPoints, certifications, type JourneyItem } from "./constants";

// Provider icon mapping
const providerIcons = {
    aws: { icon: FaAws, color: "text-orange-400" },
    gcp: { icon: SiGooglecloud, color: "text-blue-400" },
} as const;

export function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const getItemStyles = (type: JourneyItem["type"]) => {
        if (type === "education") {
            return {
                borderColor: "border-cyan-500/30 hover:border-cyan-400/50",
                dotColor: "border-cyan-500 group-hover:bg-cyan-500",
                periodColor: "text-cyan-400",
                icon: <GraduationCap className="w-4 h-4" />,
                iconBg: "bg-cyan-500/10 text-cyan-400",
                label: "Education",
            };
        }
        return {
            borderColor: "border-border/50 hover:border-primary/30",
            dotColor: "border-primary group-hover:bg-primary",
            periodColor: "text-primary",
            icon: <Briefcase className="w-4 h-4" />,
            iconBg: "bg-primary/10 text-primary",
            label: "Work",
        };
    };

    return (
        <section id="about" className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

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
                        <span className="text-primary terminal-text text-sm">01.</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                            About Me
                        </h2>
                        <div className="h-px flex-1 bg-border max-w-xs" />
                    </div>
                    <p className="text-muted-foreground max-w-2xl">
                        A decade of building systems that need to work and need to be secure.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left - Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Terminal Window */}
                        <div className="bg-cyber-terminal rounded-xl border border-border overflow-hidden mb-8">
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
                        </div>

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
                            className="mt-6 p-5 bg-card/50 rounded-xl border border-border"
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
                    </motion.div>

                    {/* Right - Merged Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <Terminal className="w-5 h-5 text-primary" />
                                <h3 className="text-xl font-semibold text-foreground">Journey</h3>
                            </div>
                            {/* Legend */}
                            <div className="flex items-center gap-4 text-xs">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="text-muted-foreground">Work</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                    <span className="text-muted-foreground">Education</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            {/* Timeline Line - gradient with both colors */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-cyan-500 to-transparent" />

                            {/* Timeline Items */}
                            <div className="space-y-6">
                                {journey.map((item, index) => {
                                    const styles = getItemStyles(item.type);
                                    return (
                                        <motion.div
                                            key={`${item.period}-${item.title}`}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.4 + index * 0.1 }}
                                            className="relative pl-8 group"
                                        >
                                            {/* Dot with type-specific color */}
                                            <div className={`absolute left-0 top-3 -translate-x-1/2 w-3 h-3 rounded-full bg-background border-2 ${styles.dotColor} transition-colors`} />

                                            <div className={`p-5 bg-card/30 rounded-xl border ${styles.borderColor} transition-all duration-300`}>
                                                {/* Header with type badge */}
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className={`text-xs terminal-text ${styles.periodColor}`}>
                                                        {item.period}
                                                    </span>
                                                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${styles.iconBg}`}>
                                                        {styles.icon}
                                                        <span className="hidden sm:inline">{styles.label}</span>
                                                    </span>
                                                </div>

                                                <h4 className="text-base font-semibold text-foreground mb-1">
                                                    {item.title}
                                                </h4>

                                                {item.subtitle && (
                                                    <p className={`text-xs ${styles.periodColor} mb-2`}>
                                                        {item.subtitle}
                                                    </p>
                                                )}

                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* CTA */}
                        <motion.a
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.9 }}
                            href="#contact"
                            className="inline-flex items-center gap-2 mt-8 text-sm text-primary hover:text-primary/80 transition-colors group"
                        >
                            <span>Interested in working together?</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
