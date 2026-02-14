import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    Shield,
    Cloud,
    LayoutGrid,
    Code2,
    Terminal,
} from "lucide-react";
import {
    SiTypescript,
    SiPython,
    SiKubernetes,
    SiPostgresql,
    SiRedis,
    SiGooglecloud,
    SiApachekafka,
    SiReact,
    SiApachespark,
} from "react-icons/si";
import { FaAws, FaNodeJs } from "react-icons/fa";
import { VscSymbolMethod } from "react-icons/vsc";
import { technologies, expertiseAreas } from "./constants";

// Technology icon mapping
// Technology icon mapping with CSS color values for hover
const techIcons: Record<string, { icon: React.ComponentType<{ className?: string }>; hoverColor: string }> = {
    typescript: { icon: SiTypescript, hoverColor: "#60a5fa" },
    python: { icon: SiPython, hoverColor: "#facc15" },
    nodejs: { icon: FaNodeJs, hoverColor: "#22c55e" },
    kubernetes: { icon: SiKubernetes, hoverColor: "#3b82f6" },
    pyspark: { icon: SiApachespark, hoverColor: "#f97316" },
    postgresql: { icon: SiPostgresql, hoverColor: "#38bdf8" },
    redis: { icon: SiRedis, hoverColor: "#f87171" },
    aws: { icon: FaAws, hoverColor: "#fb923c" },
    gcp: { icon: SiGooglecloud, hoverColor: "#60a5fa" },
    kafka: { icon: SiApachekafka, hoverColor: "#cbd5e1" },
    grpc: { icon: VscSymbolMethod, hoverColor: "#2dd4bf" },
    react: { icon: SiReact, hoverColor: "#22d3ee" },
};

// Expertise area icon mapping
const expertiseIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    shield: Shield,
    cloud: Cloud,
    code: Code2,
    layout: LayoutGrid,
};

export function Expertise() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="expertise" className="relative py-32">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

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
                        <span className="text-primary terminal-text text-sm">02.</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                            Areas of Expertise
                        </h2>
                        <div className="h-px flex-1 bg-border max-w-xs" />
                    </div>
                    <p className="text-muted-foreground max-w-2xl">
                        Specialized in building secure, scalable systems across multiple domains.
                    </p>
                </motion.div>

                {/* Expertise Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {expertiseAreas.map((area, index) => {
                        const AreaIcon = expertiseIcons[area.icon];
                        return (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="group p-6 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`p-3 rounded-lg bg-primary/10 ${area.color} group-hover:scale-110 transition-transform`}
                                    >
                                        {AreaIcon && <AreaIcon className="w-6 h-6" />}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-foreground mb-2">
                                            {area.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                            {area.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {area.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-2 py-1 text-xs terminal-text bg-background/50 text-muted-foreground rounded border border-border"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Technology Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="p-8 bg-card/30 rounded-xl border border-border"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Terminal className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold text-foreground">
                            Technology Stack
                        </h3>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                        {technologies.map((tech, index) => {
                            const techIcon = techIcons[tech.icon];
                            if (!techIcon) return null;
                            const TechIcon = techIcon.icon;
                            return (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.6 + index * 0.05 }}
                                    className="tech-icon-card flex flex-col items-center gap-2 p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all group cursor-default"
                                    style={{ "--icon-hover-color": techIcon.hoverColor } as React.CSSProperties}
                                >
                                    <span className="tech-icon w-6 h-6 text-muted-foreground transition-colors">
                                        <TechIcon className="w-6 h-6" />
                                    </span>
                                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center">
                                        {tech.name}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Consulting CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mt-16 text-center"
                >
                    <p className="text-muted-foreground mb-4">
                        Have a challenging technical problem?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary border border-primary/30 rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all glow-green-border font-medium"
                    >
                        <span>Let&apos;s connect</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
