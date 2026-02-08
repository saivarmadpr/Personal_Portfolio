"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const textSpread = useTransform(scrollYProgress, [0, 0.5], ["0em", "0.2em"]);
    const blur = useTransform(scrollYProgress, [0, 0.5], ["0px", "10px"]);

    return (
        <div ref={containerRef} className="h-screen w-full relative flex items-center justify-center overflow-hidden">
            {/* Background Grid or Noise could go here */}

            <motion.div
                style={{ scale, opacity }}
                className="z-10 flex flex-col items-center justify-center text-center px-4"
            >
                <motion.h1
                    style={{ letterSpacing: textSpread, filter: `blur(${blur})` }}
                    className="text-6xl md:text-9xl font-bold font-mono uppercase text-shadow-heavy leading-none text-foreground mix-blend-exclusion"
                >
                    Breaking Things
                    <br />
                    <span className="text-signal-red">To Fix Them.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-xl font-mono text-gray-500 uppercase tracking-widest"
                >
                    AI Red Teaming Engineer
                </motion.p>
            </motion.div>

            {/* Datamosh Image Placeholder */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-multiply">
                {/* 
                TODO: Replace with actual image + datamosh shader/canvas 
                For now, CSS noise/gradient 
            */}
                <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50 contrast-150 brightness-100"></div>
            </div>
        </div>
    );
}
