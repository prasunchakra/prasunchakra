import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import { projects } from "./constants";

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
                        <span className="text-primary terminal-text text-sm">02.5</span>
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
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.15 * index }}
                            className="group bg-card/30 rounded-xl border border-border hover:border-primary/30 overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/5"
                        >
                            {/* Project Image / Preview */}
                            <div className="relative h-48 bg-gradient-to-br from-primary/10 via-card/50 to-background overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <FolderGit2 className="w-16 h-16 text-primary/20 group-hover:text-primary/40 transition-colors" />
                                </div>
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
                    ))}
                </div>
            </div>
        </section>
    );
}
