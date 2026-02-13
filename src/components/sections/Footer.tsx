import { motion } from "framer-motion";
import { Shield, Heart, Terminal } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-12 border-t border-border/50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Logo & Status */}
                    <div className="flex items-center gap-4">
                        <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="terminal-text">All systems operational</span>
                        </div>
                    </div>

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                        <Terminal className="w-4 h-4" />
                        <span>© {currentYear} Prasun Chakraborty</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="hidden sm:flex items-center gap-1">
                            Built with <Heart className="w-3 h-3 text-primary" /> & TypeScript
                        </span>
                    </motion.div>

                    {/* PGP Key Link */}
                    <a
                        href="#"
                        className="text-xs text-muted-foreground hover:text-primary transition-colors terminal-text"
                    >
                        PGP: 0xABCD...1234
                    </a>
                </div>
            </div>
        </footer>
    );
}
