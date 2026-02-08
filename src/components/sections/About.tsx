"use client";

import { motion } from "framer-motion";

const Redacted = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-block bg-foreground text-transparent select-none cursor-help hover:bg-transparent hover:text-foreground transition-all duration-300 px-1 rounded-sm mx-1">
        {children}
    </span>
);

export default function About() {
    return (
        <section className="min-h-screen w-full flex flex-col md:flex-row bg-background text-foreground relative z-20">
            {/* Sticky Sidebar */}
            <div className="w-full md:w-1/3 h-auto md:h-screen md:sticky top-0 p-8 md:p-12 flex flex-col justify-between border-r border-gray-300/50">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase mb-8 text-shadow-heavy">
                        Dossier
                    </h2>
                    <div className="font-mono text-sm space-y-4">
                        <p>
                            <span className="text-gray-500">SUBJECT:</span><br />
                            Sai [REDACTED]
                        </p>
                        <p>
                            <span className="text-gray-500">ROLE:</span><br />
                            AI Red Teaming Engineer
                        </p>
                        <p>
                            <span className="text-gray-500">CLEARANCE:</span><br />
                            <span className="text-signal-red">TOP SECRET // NOFORN</span>
                        </p>
                        <p>
                            <span className="text-gray-500">STATUS:</span><br />
                            <span className="text-terminal-green animate-pulse">● ACTIVE</span>
                        </p>
                    </div>
                </div>

                <div className="hidden md:block">
                    {/* Decorative Barcode or QR */}
                    <div className="h-12 w-full bg-[repeating-linear-gradient(90deg,black,black_2px,transparent_2px,transparent_4px)] opacity-50"></div>
                </div>
            </div>

            {/* Scrolling Content */}
            <div className="w-full md:w-2/3 p-8 md:p-24 font-mono text-lg md:text-xl leading-relaxed">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="mb-8">
                        I specialize in <Redacted>adversarial attacks</Redacted> on Large Language Models.
                        My work involves dismantling safety guardrails to understand how they break, so we can build them stronger.
                    </p>
                    <p className="mb-8">
                        Formerly at <Redacted>Classified Corp</Redacted>, where I led the offensive security team
                        targeting <Redacted>GenAI Infrastructure</Redacted>. I bridge the gap between traditional
                        cybersecurity and the chaotic new world of probabilistic computing.
                    </p>
                    <p className="mb-8">
                        My philosophy is simple: <span className="italic">&quot;Trust nothing, verify everything, and then break it anyway.&quot;</span>
                    </p>
                    <p>
                        Currently focused on:
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                        <li>Prompt Injection Vectors</li>
                        <li>Model Inversion Attacks</li>
                        <li>Automated Red Teaming Pipelines</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
