import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Calendar, FileText, Briefcase, GraduationCap, Terminal, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { journey, articles, type JourneyItem } from "./constants";

const ARTICLES_PER_PAGE = 5;

export function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
    const paginatedArticles = articles.slice(
        currentPage * ARTICLES_PER_PAGE,
        (currentPage + 1) * ARTICLES_PER_PAGE
    );

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
                    {/* Left - Articles */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Column Title */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <FileText className="w-5 h-5 text-primary" />
                                <h3 className="text-xl font-semibold text-foreground">My Writings</h3>
                            </div>
                            {totalPages > 1 && (
                                <span className="text-xs text-muted-foreground terminal-text">
                                    {currentPage + 1}/{totalPages}
                                </span>
                            )}
                        </div>

                        {/* Articles List */}
                        <div className="space-y-4 min-h-[400px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentPage}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-4"
                                >
                                    {paginatedArticles.map((article) => (
                                        <a
                                            key={article.title}
                                            href={article.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group block p-5 bg-card/30 rounded-xl border border-border hover:border-primary/30 transition-all"
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="px-2 py-0.5 text-xs terminal-text bg-primary/10 text-primary rounded">
                                                            {article.category}
                                                        </span>
                                                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                                            <Calendar className="w-3 h-3" />
                                                            {article.date}
                                                        </span>
                                                        <span className="text-xs text-muted-foreground">
                                                            • {article.readTime}
                                                        </span>
                                                    </div>
                                                    <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-1.5">
                                                        {article.title}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                                        {article.excerpt}
                                                    </p>
                                                </div>
                                                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 mt-1 transition-colors" />
                                            </div>
                                        </a>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-3 mt-6">
                                <button
                                    onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                                    disabled={currentPage === 0}
                                    className="p-1.5 rounded-lg border border-border hover:border-primary/30 text-muted-foreground hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                <div className="flex items-center gap-2">
                                    {Array.from({ length: totalPages }).map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentPage(i)}
                                            className={`w-2 h-2 rounded-full transition-all ${i === currentPage
                                                    ? "bg-primary w-6"
                                                    : "bg-border hover:bg-muted-foreground"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <button
                                    onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
                                    disabled={currentPage === totalPages - 1}
                                    className="p-1.5 rounded-lg border border-border hover:border-primary/30 text-muted-foreground hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        )}
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
