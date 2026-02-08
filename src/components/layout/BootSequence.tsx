"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
    "Initializing core systems...",
    "Mounting file system...",
    "Loading security modules...",
    "Establishing secure connection...",
    "Decrypting user profile...",
    "Target Identified: VISITOR",
];

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
    const [lines, setLines] = useState<string[]>([]);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let delay = 0;
        bootLines.forEach((line, index) => {
            delay += Math.random() * 300 + 200;
            setTimeout(() => {
                setLines((prev) => [...prev, line]);
                if (index === bootLines.length - 1) {
                    setTimeout(() => {
                        setIsVisible(false);
                        setTimeout(onComplete, 500); // Allow exit animation to finish
                    }, 800);
                }
            }, delay);
        });
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 bg-black z-[10000] flex items-center justify-center font-mono text-terminal-green p-8"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-full max-w-2xl">
                        {lines.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="mb-2"
                            >
                                <span className="text-gray-500 mr-2">[{new Date().toLocaleTimeString()}]</span>
                                {">"} {line}
                            </motion.div>
                        ))}
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-3 h-5 bg-terminal-green ml-2 align-middle"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
