import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    FileText,
    ArrowUpRight,
    Calendar,
    Lightbulb,
    Search,
} from "lucide-react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { articles, researchInterests, socialLinks } from "./constants";

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
                    {/* Articles Grid */}
                    <div className="lg:col-span-2 space-y-6">
                        {articles.map((article, index) => (
                            <motion.a
                                key={article.title}
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="group block p-6 bg-card/30 rounded-xl border border-border hover:border-primary/30 transition-all"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="px-2 py-1 text-xs terminal-text bg-primary/10 text-primary rounded">
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
                                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {article.excerpt}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        <FaLinkedin className="w-4 h-4 text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </div>
                                </div>
                            </motion.a>
                        ))}

                        <motion.a
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.6 }}
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group mt-4"
                        >
                            <FileText className="w-4 h-4" />
                            <span>View all articles on LinkedIn</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </motion.a>
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
