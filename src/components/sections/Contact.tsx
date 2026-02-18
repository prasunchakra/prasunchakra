import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Linkedin, Youtube } from "lucide-react";

// Instagram posts to rotate
const instagramPosts = ["DMkE_ACyfqQ", "CyQ9HLqyvzM"];

// Instagram Carousel Component
function InstagramCarousel({ isInView }: { isInView: boolean }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % instagramPosts.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [isInView]);

    return (
        <div className="relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={instagramPosts[currentIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-lg overflow-hidden border border-border/50"
                >
                    <iframe
                        src={`https://www.instagram.com/p/${instagramPosts[currentIndex]}/embed`}
                        className="w-full"
                        height="380"
                        frameBorder="0"
                        scrolling="no"
                        allow="encrypted-media"
                        title={`Instagram post ${currentIndex + 1}`}
                    />
                </motion.div>
            </AnimatePresence>

            {instagramPosts.length > 1 && (
                <div className="flex justify-center gap-2 mt-3">
                    {instagramPosts.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                ? "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 w-4"
                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                }`}
                            aria-label={`Go to post ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="relative py-32">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-background" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px flex-1 bg-border max-w-[100px]" />
                        <span className="text-primary terminal-text text-sm">04.</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                            Get In Touch
                        </h2>
                        <div className="h-px flex-1 bg-border max-w-[100px]" />
                    </div>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Have a challenging technical problem? Let&apos;s explore how I can help.
                    </p>
                </motion.div>

                {/* 2×2 Embed Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid md:grid-cols-2 gap-6"
                >
                    {/* Row 1, Col 1 — X (formerly Twitter) */}
                    <div className="p-5 bg-card/50 rounded-xl border border-border">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#e7e9ea" }}>
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-foreground">Full Stack Expert</h3>
                                    <p className="text-xs text-muted-foreground">@prasunchakra</p>
                                </div>
                            </div>
                            <a
                                href="https://x.com/prasunchakra"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 text-xs font-medium text-white rounded-lg hover:opacity-90 transition-opacity"
                                style={{ backgroundColor: "#1d9bf0" }}
                            >
                                Follow
                            </a>
                        </div>
                        <div className="rounded-lg overflow-hidden border border-border/50">
                            <iframe
                                src="https://platform.twitter.com/embed/Tweet.html?id=2001503305772753000"
                                className="w-full"
                                height="350"
                                frameBorder="0"
                                scrolling="no"
                                title="X embed"
                            />
                        </div>
                    </div>

                    {/* Row 1, Col 2 — Instagram */}
                    <div className="p-5 bg-card/50 rounded-xl border border-border">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg">
                                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-foreground">Life Beyond Code</h3>
                                    <p className="text-xs text-muted-foreground">@prasunchakra</p>
                                </div>
                            </div>
                            <a
                                href="https://instagram.com/prasunchakra"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Follow
                            </a>
                        </div>
                        <InstagramCarousel isInView={isInView} />
                    </div>

                    {/* Row 2, Col 1 — YouTube */}
                    <div className="p-5 bg-card/50 rounded-xl border border-border">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg" style={{ backgroundColor: "rgba(255,0,0,0.12)" }}>
                                    <Youtube className="w-5 h-5" style={{ color: "#ff0000" }} />
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-foreground">Lifelong Learner</h3>
                                    <p className="text-xs text-muted-foreground">@prasunchakra</p>
                                </div>
                            </div>
                            <a
                                href="https://youtube.com/@prasunchakra"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 text-xs font-medium text-white rounded-lg hover:opacity-90 transition-opacity"
                                style={{ backgroundColor: "#ff0000" }}
                            >
                                Subscribe
                            </a>
                        </div>
                        <div className="rounded-lg overflow-hidden border border-border/50">
                            <iframe
                                src="https://www.youtube.com/embed?listType=user_uploads&list=prasunchakra"
                                className="w-full"
                                height="350"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="YouTube embed"
                            />
                        </div>
                    </div>

                    {/* Row 2, Col 2 — LinkedIn */}
                    <div className="p-5 bg-card/50 rounded-xl border border-border">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg" style={{ backgroundColor: "rgba(10,102,194,0.15)" }}>
                                    <Linkedin className="w-5 h-5" style={{ color: "#0a66c2" }} />
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-foreground">Engineering Lead</h3>
                                    <p className="text-xs text-muted-foreground">@prasunchakra</p>
                                </div>
                            </div>
                            <a
                                href="https://linkedin.com/in/prasunchakra"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 text-xs font-medium text-white rounded-lg hover:opacity-90 transition-opacity"
                                style={{ backgroundColor: "#0a66c2" }}
                            >
                                Connect
                            </a>
                        </div>
                        <div className="rounded-lg overflow-hidden border border-border/50">
                            <iframe
                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7417756720392900608?collapsed=1"
                                className="w-full"
                                height="350"
                                frameBorder="0"
                                scrolling="no"
                                title="LinkedIn embed"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
