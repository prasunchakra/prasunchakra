import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
    Mail,
    Github,
    Linkedin,
    Twitter,
    MapPin,
} from "lucide-react";

const socialLinks = [
    {
        name: "GitHub",
        icon: Github,
        href: "https://github.com/prasunchakra",
        handle: "@prasunchakra",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://linkedin.com/in/prasunchakra",
        handle: "/in/prasunchakraborty",
    },
    {
        name: "Twitter",
        icon: Twitter,
        href: "https://x.com/prasunchakra",
        handle: "@prasunchakra",
    },
];

const howToConnect = [
    "Mail me at prasunchakra@protonmail.com",
    "Connect with me on LinkedIn @prasunchakra",
    "Drop me a message on Twitter @prasunchakra",
    "Connect with me on Instagram @prasunchakra"
];

// Instagram posts to rotate
const instagramPosts = ["DMkE_ACyfqQ", "CyQ9HLqyvzM"];

// Instagram Carousel Component
function InstagramCarousel({ isInView }: { isInView: boolean }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % instagramPosts.length);
        }, 8000); // Rotate every 8 seconds

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
                        height="480"
                        frameBorder="0"
                        scrolling="no"
                        allow="encrypted-media"
                        title={`Instagram post ${currentIndex + 1}`}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Dots indicator */}
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

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Terminal */}
                        <div className="bg-cyber-terminal rounded-xl border border-border overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                <span className="ml-2 text-xs text-muted-foreground terminal-text">
                                    ~/contact/info
                                </span>
                            </div>
                            <div className="p-6 terminal-text text-sm space-y-4">
                                <div>
                                    <span className="text-primary">$</span>{" "}
                                    <span className="text-muted-foreground">
                                        cat how_to_connect.txt
                                    </span>
                                </div>
                                <div className="space-y-2 pl-4">
                                    {howToConnect.map((service, index) => (
                                        <motion.div
                                            key={service}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.4 + index * 0.1 }}
                                            className="flex items-center gap-2 text-foreground/90"
                                        >
                                            <span className="text-primary">▸</span>
                                            <span>{service}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-4">
                            <a
                                href="mailto:prasunchakra@protonmail.com"
                                className="flex items-center gap-4 p-4 bg-card/30 rounded-lg border border-border hover:border-primary/30 transition-colors group"
                            >
                                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Email</div>
                                    <div className="text-foreground terminal-text">
                                        prasunchakra@protonmail.com
                                    </div>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 bg-card/30 rounded-lg border border-border">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Location</div>
                                    <div className="text-foreground">
                                        Remote-first • Available Globally
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-3 bg-card/30 rounded-lg border border-border hover:border-primary/30 hover:text-primary transition-all group flex-1"
                                >
                                    <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors hidden sm:inline">
                                        {link.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Life Beyond Code (Instagram) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="p-6 bg-card/50 rounded-xl border border-border">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg">
                                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">
                                            Life Beyond Code
                                        </h3>
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

                            {/* Instagram Post Carousel */}
                            <InstagramCarousel isInView={isInView} />

                            <p className="text-xs text-muted-foreground text-center mt-4">
                                Adventures, hobbies, and the human side of tech.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
