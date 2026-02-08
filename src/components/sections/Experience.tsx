"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Terminal, ShieldAlert, Bug } from "lucide-react";

interface Job {
    id: number;
    date: string;
    role: string;
    company: string;
    description: string;
    details: {
        label: string;
        items: string[];
        icon: React.ElementType;
    }[];
}

const experiences: Job[] = [
    {
        id: 1,
        date: "2024 - PRESENT",
        role: "Staff Security Engineer",
        company: "Anthropic / OpenAI (Redacted)",
        description: "Leading automated red teaming initiatives for frontier models.",
        details: [
            {
                label: "VULNERABILITIES EXPOSED",
                icon: ShieldAlert,
                items: ["Model Inversion via API", "Prompt Injection in RAG pipelines"],
            },
            {
                label: "TECH STACK",
                icon: Terminal,
                items: ["Python", "PyTorch", "Kubernetes", "AWS Bedrock"],
            },
        ],
    },
    {
        id: 2,
        date: "2021 - 2024",
        role: "Senior Penetration Tester",
        company: "Defense Contractor",
        description: "Conducting authorized exercises against critical infrastructure.",
        details: [
            {
                label: "EXPLOITS",
                icon: Bug,
                items: ["Zero-day in SCADA systems", "Auth bypass in legacy VPNs"],
            },
        ],
    },
    {
        id: 3,
        date: "2018 - 2021",
        role: "Security Researcher",
        company: "Freelance / Bug Bounty",
        description: "Hunting widespread vulnerabilities in open source software.",
        details: [],
    },
];

export default function Experience() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    return (
        <section className="min-h-screen w-full bg-background p-8 md:p-24 relative z-20">
            <h2 className="text-4xl md:text-6xl font-bold uppercase mb-16 text-shadow-heavy flex items-center gap-4">
                <span className="text-signal-red">{">"}</span> System Logs
            </h2>

            <div className="relative border-l-2 border-gray-300/50 ml-4 md:ml-12 space-y-12">
                {experiences.map((job) => (
                    <div key={job.id} className="relative pl-8 md:pl-16">
                        {/* Timeline Node */}
                        <div
                            className={`absolute left-[-9px] top-2 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${expandedId === job.id ? "bg-signal-red border-signal-red" : "bg-background border-gray-400"}`}
                        ></div>

                        <div
                            className="cursor-pointer group"
                            onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-2">
                                <span className="font-mono text-signal-red text-sm tracking-widest">{job.date}</span>
                                <h3 className="text-2xl font-bold uppercase group-hover:text-signal-red transition-colors">
                                    {job.role} <span className="text-gray-400">@ {job.company}</span>
                                </h3>
                            </div>

                            <p className="font-mono text-gray-600 max-w-2xl">{job.description}</p>

                            <AnimatePresence>
                                {expandedId === job.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/5 p-6 rounded-sm border border-black/10">
                                            {job.details.map((detail, idx) => (
                                                <div key={idx}>
                                                    <h4 className="font-mono text-xs text-gray-500 mb-2 flex items-center gap-2">
                                                        <detail.icon size={12} />
                                                        {detail.label}
                                                    </h4>
                                                    <ul className="font-mono text-sm space-y-1">
                                                        {detail.items.map((item, i) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                <span className="text-signal-red">-</span> {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Visual Connector for Hover */}
                            <div className="absolute left-[-35px] top-3 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block text-signal-red font-mono text-xs">
                                [REQ_ACCESS]
                            </div>
                        </div>
                    </div>
                ))}

                {/* End of Log */}
                <div className="absolute left-[-5px] bottom-[-20px] w-2 h-2 bg-gray-300"></div>
            </div>
        </section>
    );
}
