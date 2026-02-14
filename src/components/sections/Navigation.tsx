import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#expertise", label: "Expertise" },
    { href: "#research", label: "Research" },
    { href: "#contact", label: "Contact" },
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
                        : "bg-transparent"
                    }`}
            >
                <nav className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href="/" className="flex items-center gap-3 group">
                            <div className="relative w-10 h-10 overflow-hidden rounded-lg glow-green-border">
                                <img
                                    src={`${import.meta.env.BASE_URL}logo.gif`}
                                    alt="Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="hidden sm:flex flex-col">
                                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                    prasunchakra
                                </span>
                                <span className="text-xs text-muted-foreground terminal-text flex items-center gap-1">
                                    <Shield className="w-3 h-3 text-primary" />
                                    <span>secure_mode</span>
                                </span>
                            </div>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors animated-underline"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                                className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/30 rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all glow-green-border"
                            >
                                <span className="flex items-center gap-2">
                                    Let&apos;s Connect
                                </span>
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        <div
                            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <nav className="relative z-50 flex flex-col items-center justify-center h-full gap-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
