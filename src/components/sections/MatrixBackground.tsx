import { useEffect, useRef } from "react";

const CHAR_SET =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]|/\\+=_-~`!@#$%^&*";

const FONT_SIZE = 14;
const COLORS = [
    "rgba(0, 255, 170, ",
    "rgba(0, 200, 255, ",
    "rgba(180, 0, 255, ",
    "rgba(255, 60, 120, ",
];

export function MatrixBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        let columns: number;
        let drops: number[];
        let colorIndices: number[];
        let speeds: number[];

        function resize() {
            canvas!.width = window.innerWidth;
            canvas!.height = window.innerHeight;
            columns = Math.floor(canvas!.width / FONT_SIZE);
            drops = Array.from(
                { length: columns },
                () => Math.random() * -canvas!.height / FONT_SIZE
            );
            colorIndices = Array.from({ length: columns }, () =>
                Math.floor(Math.random() * COLORS.length)
            );
            speeds = Array.from(
                { length: columns },
                () => 0.3 + Math.random() * 0.7
            );
        }

        resize();
        window.addEventListener("resize", resize);

        function draw() {
            ctx!.fillStyle = "rgba(5, 5, 5, 0.06)";
            ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
            ctx!.font = `${FONT_SIZE}px 'JetBrains Mono', monospace`;

            for (let i = 0; i < columns; i++) {
                const char =
                    CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)];
                const x = i * FONT_SIZE;
                const y = drops[i] * FONT_SIZE;

                const alpha = 0.08 + Math.random() * 0.12;
                ctx!.fillStyle = COLORS[colorIndices[i]] + alpha + ")";

                if (Math.random() > 0.97) {
                    ctx!.fillStyle = COLORS[colorIndices[i]] + "0.6)";
                    ctx!.shadowColor = COLORS[colorIndices[i]] + "0.8)";
                    ctx!.shadowBlur = 12;
                } else {
                    ctx!.shadowBlur = 0;
                }

                ctx!.fillText(char, x, y);
                ctx!.shadowBlur = 0;

                drops[i] += speeds[i];

                if (
                    drops[i] * FONT_SIZE > canvas!.height &&
                    Math.random() > 0.98
                ) {
                    drops[i] = 0;
                    colorIndices[i] = Math.floor(
                        Math.random() * COLORS.length
                    );
                    speeds[i] = 0.3 + Math.random() * 0.7;
                }
            }

            animId = requestAnimationFrame(draw);
        }

        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0, opacity: 0.7 }}
        />
    );
}
