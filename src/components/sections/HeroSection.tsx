import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { socialCards, type SocialCard } from "./constants";

const iconMap: Record<SocialCard["icon"], React.ReactNode> = {
    linkedin: <FaLinkedinIn />,
    x: <FaXTwitter />,
    instagram: <FaInstagram />,
    youtube: <FaYoutube />,
};

const quoteLines = ["Essence of", "Engineering is", "Problem Solving"];

function CyberText({
    text,
    charOffset = 0,
}: {
    text: string;
    charOffset?: number;
}) {
    return (
        <span className="cyber-flow">
            {text.split("").map((char, ci) => (
                <span
                    key={ci}
                    className="cyber-char"
                    style={{ animationDelay: `${(charOffset + ci) * 0.06}s` }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </span>
    );
}

function WavyTricolourText({
    text,
    className,
    charOffset = 0,
}: {
    text: string;
    className?: string;
    charOffset?: number;
}) {
    return (
        <span className={`tricolour-flow ${className ?? ""}`}>
            {text.split("").map((char, ci) => (
                <span
                    key={ci}
                    className="wave-char"
                    style={{ animationDelay: `${(charOffset + ci) * 0.06}s` }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </span>
    );
}

function CyberFrame() {
    return (
        <div className="cyber-frame" aria-hidden="true">
            {/* Top-left corner bracket */}
            <svg className="cyber-corner cyber-corner-tl" viewBox="0 0 60 60" fill="none">
                <path d="M2 58V12L12 2H58" stroke="url(#cyber-grad-tl)" strokeWidth="1.5" />
                <circle cx="12" cy="2" r="2" fill="var(--cyber-cyan)" className="cyber-dot" />
                <defs>
                    <linearGradient id="cyber-grad-tl" x1="2" y1="58" x2="58" y2="2">
                        <stop stopColor="var(--cyber-cyan)" />
                        <stop offset="1" stopColor="var(--cyber-purple)" stopOpacity="0.3" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Top-right corner bracket */}
            <svg className="cyber-corner cyber-corner-tr" viewBox="0 0 60 60" fill="none">
                <path d="M58 58V12L48 2H2" stroke="url(#cyber-grad-tr)" strokeWidth="1.5" />
                <circle cx="48" cy="2" r="2" fill="var(--cyber-magenta)" className="cyber-dot" />
                <defs>
                    <linearGradient id="cyber-grad-tr" x1="58" y1="58" x2="2" y2="2">
                        <stop stopColor="var(--cyber-magenta)" />
                        <stop offset="1" stopColor="var(--cyber-cyan)" stopOpacity="0.3" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Bottom-left corner bracket */}
            <svg className="cyber-corner cyber-corner-bl" viewBox="0 0 60 60" fill="none">
                <path d="M2 2V48L12 58H58" stroke="url(#cyber-grad-bl)" strokeWidth="1.5" />
                <circle cx="12" cy="58" r="2" fill="var(--cyber-purple)" className="cyber-dot" />
                <defs>
                    <linearGradient id="cyber-grad-bl" x1="2" y1="2" x2="58" y2="58">
                        <stop stopColor="var(--cyber-purple)" />
                        <stop offset="1" stopColor="var(--cyber-magenta)" stopOpacity="0.3" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Bottom-right corner bracket */}
            <svg className="cyber-corner cyber-corner-br" viewBox="0 0 60 60" fill="none">
                <path d="M58 2V48L48 58H2" stroke="url(#cyber-grad-br)" strokeWidth="1.5" />
                <circle cx="48" cy="58" r="2" fill="var(--cyber-cyan)" className="cyber-dot" />
                <defs>
                    <linearGradient id="cyber-grad-br" x1="58" y1="2" x2="2" y2="58">
                        <stop stopColor="var(--cyber-cyan)" />
                        <stop offset="1" stopColor="var(--cyber-purple)" stopOpacity="0.3" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Horizontal scan line */}
            <div className="scan-line" />
        </div>
    );
}

export function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative z-10">
            <div className="flex flex-col items-center gap-20 max-w-6xl w-full">
                {/* Quote with cyber frame */}
                <motion.div
                    className="text-center relative quote-block"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <CyberFrame />

                    <h1 className="quote-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                        {quoteLines.map((line, i) => {
                            const charOffset = quoteLines
                                .slice(0, i)
                                .join("")
                                .length;
                            return (
                                <motion.span
                                    key={i}
                                    className="block"
                                    initial={{
                                        opacity: 0,
                                        x: i % 2 === 0 ? -30 : 30,
                                    }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: 0.2 + i * 0.15,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                >
                                    <CyberText
                                        text={line}
                                        charOffset={charOffset}
                                    />
                                </motion.span>
                            );
                        })}
                    </h1>

                    <motion.div
                        className="author-container mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    >
                        <span className="author-dash">— </span>
                        <span className="author-name">
                            <WavyTricolourText
                                text="@prasunchakra"
                                className="author-tricolour"
                            />
                        </span>
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <motion.div
                    className="tri-divider"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                />

                {/* Connect tiles — 2x2 grid */}
                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.3 }}
                >
                    <p
                        className="section-title text-center"
                        style={{ marginBottom: "2.5rem" }}
                    >
                        Connect with me
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {socialCards.map((card, i) => (
                            <motion.a
                                key={card.platform}
                                href={card.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-pill"
                                style={
                                    {
                                        "--tile-color": card.color,
                                    } as React.CSSProperties
                                }
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 1.5 + i * 0.1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                <span className="pill-icon">
                                    {iconMap[card.icon]}
                                </span>
                                <span className="pill-label">
                                    {card.platform}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
