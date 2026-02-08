"use client";

import { motion } from "framer-motion";
import { Folder, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
    {
        id: "PROJ-001",
        title: "GhostShell",
        category: "C2 Framework",
        description: "A stealthy post-exploitation framework designed for evasion in modern EDR environments.",
        stats: ["Rust", "gRPC", "AES-256"],
        year: "2023",
    },
    {
        id: "PROJ-002",
        title: "NeuroFuzz",
        category: "AI Red Teaming",
        description: "Automated fuzzer for detecting prompt injection vulnerabilities in LLM-integrated applications.",
        stats: ["Python", "OpenAI API", "PyTest"],
        year: "2024",
    },
    {
        id: "PROJ-003",
        title: "VoidScanner",
        category: "Reconnaissance",
        description: "Multi-threaded subdomain enumeration and port scanning tool with custom fingerprinting.",
        stats: ["Go", "Docker", "Postgres"],
        year: "2022",
    },
    {
        id: "PROJ-004",
        title: "EchoChamber",
        category: "Social Engineering",
        description: "Phishing simulation platform focusing on realistic corporate communications cloning.",
        stats: ["Node.js", "React", "SMTP"],
        year: "2023",
    },
];

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    return (
        <section className="min-h-screen w-full bg-background relative z-20 py-24 flex flex-col justify-center overflow-hidden">
            <div className="px-8 md:px-24 mb-12">
                <h2 className="text-4xl md:text-6xl font-bold uppercase text-shadow-heavy">
                    The Arsenal
                </h2>
                <p className="font-mono text-gray-500 mt-2">
                    {"// DECLASSIFIED PROJECTS"}
                </p>
            </div>

            <div className="w-full overflow-x-auto flex gap-8 px-8 md:px-24 pb-12 snap-x snap-mandatory scrollbar-hide">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="w-[85vw] md:w-[600px] flex-shrink-0 snap-center relative group"
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {/* File Folder Tab */}
                        <div className="w-48 h-12 bg-gray-200 border-t-2 border-l-2 border-r-2 border-gray-400 rounded-t-lg flex items-center px-4 font-mono text-xs text-gray-500">
                            {project.id}
                        </div>

                        {/* Main Card */}
                        <div className="bg-[#EBEAD6] border-2 border-gray-400 p-8 shadow-lg relative overflow-hidden h-[400px] flex flex-col justify-between">
                            {/* Hover Glitch Overlay */}
                            <motion.div
                                className="absolute inset-0 bg-signal-red/10 z-0 pointer-events-none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                            >
                                {/* Scanlines */}
                                <div className="w-full h-full bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]"></div>
                            </motion.div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <Folder size={48} className="text-gray-400 group-hover:text-foreground transition-colors" />
                                    <span className="font-mono border border-foreground px-2 py-1 text-xs uppercase">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-4xl font-bold uppercase mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                    {project.title}
                                </h3>

                                <p className="font-mono text-gray-700 leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>

                            <div className="relative z-10 border-t border-gray-400 pt-6 flex justify-between items-center">
                                <div className="flex gap-2">
                                    {project.stats.map((stat) => (
                                        <span key={stat} className="font-mono text-xs bg-gray-300 px-2 py-1 rounded-sm">
                                            {stat}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <Github className="cursor-pointer hover:text-signal-red transition-colors" />
                                    <ExternalLink className="cursor-pointer hover:text-terminal-green transition-colors" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
                {/* Spacer to allow last item to be centered/visible */}
                <div className="w-12 flex-shrink-0"></div>
            </div>
        </section>
    );
}
