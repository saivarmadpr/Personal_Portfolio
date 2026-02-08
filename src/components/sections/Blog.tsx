"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

interface Post {
    id: number;
    date: string;
    title: string;
    severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
    content: string;
}

const posts: Post[] = [
    {
        id: 1,
        date: "2024-01-15",
        title: "Bypassing RLHF with ASCII Art",
        severity: "CRITICAL",
        content: "Detailed analysis of how visual encoding bypasses semantic filters in multimodal models. By converting malicious instructions into block ASCII text, we observed a 40% increase in successful jailbreaks against leading foundation models...",
    },
    {
        id: 2,
        date: "2023-11-02",
        title: "Poisoning the Context Window",
        severity: "HIGH",
        content: "Investigating the effects of long-context attacks where benign-looking data injected at specific intervals degrades model reasoning capabilities, leading to hallucinated security advice...",
    },
    {
        id: 3,
        date: "2023-08-10",
        title: "Reverse Engineering Copilot",
        severity: "MEDIUM",
        content: "A deep dive into the telemetry and prompt construction of AI coding assistants. We discovered several leaks in the system prompt that allowed for extraction of internal API keys...",
    },
];

const severityColors = {
    LOW: "text-blue-500",
    MEDIUM: "text-phosphor-amber",
    HIGH: "text-orange-500",
    CRITICAL: "text-signal-red",
};

export default function Blog() {
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    return (
        <section className="min-h-screen w-full bg-background p-8 md:p-24 relative z-20">
            <h2 className="text-4xl md:text-6xl font-bold uppercase mb-16 text-shadow-heavy">
                Transmission Log
            </h2>

            <div className="font-mono text-sm md:text-base border border-gray-400 p-2 md:p-8 bg-white/50 shadow-lg">
                {/* Header */}
                <div className="flex border-b-2 border-gray-400 pb-2 mb-4 font-bold text-gray-400 px-2 uppercase tracking-wider">
                    <div className="w-24 md:w-32">Date</div>
                    <div className="flex-1">Subject</div>
                    <div className="w-24 md:w-32 text-right">Severity</div>
                </div>

                {/* Rows */}
                <div className="space-y-2">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            onClick={() => setSelectedPost(post)}
                            className="flex p-2 hover:bg-black hover:text-terminal-green cursor-pointer transition-colors group"
                        >
                            <div className="w-24 md:w-32 opacity-70 group-hover:opacity-100">{post.date}</div>
                            <div className="flex-1 font-bold group-hover:translate-x-2 transition-transform">{post.title}</div>
                            <div className={`w-24 md:w-32 text-right font-bold ${severityColors[post.severity]} group-hover:text-terminal-green`}>
                                [{post.severity}]
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedPost(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-background w-full max-w-3xl border-2 border-gray-400 shadow-2xl overflow-hidden max-h-[80vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="bg-foreground text-background p-4 flex justify-between items-center font-mono uppercase">
                                <span>Reading: {selectedPost.title}</span>
                                <button onClick={() => setSelectedPost(null)} className="hover:text-signal-red">
                                    <X />
                                </button>
                            </div>
                            <div className="p-8 md:p-12 overflow-y-auto font-mono text-lg leading-relaxed">
                                <div className="flex justify-between text-sm text-gray-500 mb-8 border-b border-gray-300 pb-4">
                                    <span>{selectedPost.date}</span>
                                    <span className={severityColors[selectedPost.severity]}>SEVERITY: {selectedPost.severity}</span>
                                </div>
                                <p>{selectedPost.content}</p>
                                <p className="mt-4 text-gray-400 animate-pulse">_</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
