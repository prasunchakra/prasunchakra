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

export function ConnectSection() {
    return (
        <section
            id="connect"
            className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
            style={{ background: "var(--bg-secondary)" }}
        >
            {/* Section Title */}
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                    style={{ color: "var(--text-primary)" }}
                >
                    Where I Hang Out on the Internet
                </h2>
                <p
                    className="text-base sm:text-lg max-w-md mx-auto"
                    style={{ color: "var(--text-secondary)" }}
                >
                    Pick your platform. Let's connect.
                </p>
                <hr className="section-divider mt-8" />
            </motion.div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl w-full">
                {socialCards.map((card, i) => (
                    <motion.a
                        key={card.platform}
                        href={card.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-card"
                        style={
                            { "--card-accent": card.color } as React.CSSProperties
                        }
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <span className="card-icon">{iconMap[card.icon]}</span>
                        <span className="card-label">{card.platform}</span>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
