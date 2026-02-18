import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    ExternalLink,
    Github,
    Map,
    GitBranch,
    History,
    Clock,
    ShieldCheck,
    Terminal,
    Code2,
    Braces,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { projects } from "./constants";

// Per-project visual config using inline color values (Tailwind v4 can't detect dynamic classes)
const projectVisuals: Record<
    string,
    {
        Icon: LucideIcon;
        SecondaryIcon: LucideIcon;
        color: string;
        gradientFrom: string;
        gradientVia: string;
    }
> = {
    "Path Finder": {
        Icon: Map,
        SecondaryIcon: GitBranch,
        color: "#22d3ee",          // cyan-400
        gradientFrom: "rgba(6,182,212,0.15)",
        gradientVia: "rgba(22,78,99,0.10)",
    },
    "Parallel Past": {
        Icon: History,
        SecondaryIcon: Clock,
        color: "#a78bfa",          // violet-400
        gradientFrom: "rgba(139,92,246,0.15)",
        gradientVia: "rgba(76,29,149,0.10)",
    },
    "Trace Root": {
        Icon: ShieldCheck,
        SecondaryIcon: Terminal,
        color: "#34d399",          // emerald-400
        gradientFrom: "rgba(16,185,129,0.15)",
        gradientVia: "rgba(6,78,59,0.10)",
    },
    prasunchakra: {
        Icon: Code2,
        SecondaryIcon: Braces,
        color: "#fbbf24",          // amber-400
        gradientFrom: "rgba(245,158,11,0.15)",
        gradientVia: "rgba(120,53,15,0.10)",
    },
};

const defaultVisual = {
    Icon: Code2,
    SecondaryIcon: Braces,
    color: "var(--color-primary)",
    gradientFrom: "rgba(var(--color-primary),0.10)",
    gradientVia: "transparent",
};

export function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="relative py-32">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

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
                            Featured Projects
                        </h2>
                        <div className="h-px flex-1 bg-border max-w-xs" />
                    </div>
                    <p className="text-muted-foreground max-w-2xl">
                        A selection of projects that showcase my approach to building robust, secure systems.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => {
                        const { Icon, SecondaryIcon, color, gradientFrom, gradientVia } =
                            projectVisuals[project.name] ?? defaultVisual;

                        return (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.15 * index }}
                                className="group bg-card/30 rounded-xl border border-border hover:border-primary/30 overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/5"
                            >
                                {/* Project Visual */}
                                <div
                                    className="relative h-48 overflow-hidden"
                                    style={{
                                        background: project.liveUrl
                                            ? undefined
                                            : `linear-gradient(to bottom right, ${gradientFrom}, ${gradientVia}, transparent)`,
                                    }}
                                >
                                    {project.liveUrl ? (
                                        /* Live site preview via scaled iframe */
                                        <div className="absolute inset-0">
                                            <iframe
                                                src={project.liveUrl}
                                                title={`${project.name} preview`}
                                                className="origin-top-left border-0"
                                                style={{
                                                    width: "1280px",
                                                    height: "768px",
                                                    transform: "scale(0.56)",
                                                    transformOrigin: "top left",
                                                    pointerEvents: "none",
                                                }}
                                                loading="lazy"
                                                sandbox="allow-scripts allow-same-origin"
                                                tabIndex={-1}
                                            />
                                            {/* Overlay to prevent interaction & add hover effect */}
                                            <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-300" />
                                        </div>
                                    ) : (
                                        /* Icon fallback for projects without a live URL */
                                        <>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Icon
                                                    className="w-16 h-16 opacity-25 group-hover:opacity-50 transition-opacity duration-300"
                                                    style={{ color }}
                                                />
                                            </div>
                                            <div className="absolute bottom-3 right-4">
                                                <SecondaryIcon
                                                    className="w-8 h-8 opacity-10 group-hover:opacity-25 transition-opacity duration-300"
                                                    style={{ color }}
                                                />
                                            </div>
                                        </>
                                    )}
                                    {/* Decorative grid overlay */}
                                    <div className="absolute inset-0 cyber-grid opacity-10 group-hover:opacity-20 transition-opacity" />
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                                        {project.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Badges */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-0.5 text-xs terminal-text bg-primary/10 text-primary rounded border border-primary/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-4">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
                                            >
                                                <Github className="w-4 h-4" />
                                                <span>Source</span>
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
