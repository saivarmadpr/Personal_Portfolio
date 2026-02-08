"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network delay
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);
            setFormState({ name: "", email: "", message: "" });
            setTimeout(() => setIsSent(false), 5000);
        }, 2000);
    };

    return (
        <section className="min-h-screen w-full bg-background p-8 md:p-24 relative z-20 flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-bold uppercase mb-12 text-shadow-heavy">
                Establish Uplink
            </h2>

            <div className="w-full max-w-2xl font-mono text-lg space-y-8">
                {!isSent ? (
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="flex flex-col md:flex-row md:items-baseline gap-4">
                            <label className="text-gray-500 min-w-[100px]">{">"} IDENTITY:</label>
                            <input
                                type="text"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                className="bg-transparent border-b-2 border-gray-400 focus:border-signal-red outline-none flex-1 py-1 text-foreground placeholder-gray-300"
                                placeholder="Enter Name..."
                                required
                            />
                        </div>

                        <div className="flex flex-col md:flex-row md:items-baseline gap-4">
                            <label className="text-gray-500 min-w-[100px]">{">"} COMMS:</label>
                            <input
                                type="email"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                className="bg-transparent border-b-2 border-gray-400 focus:border-signal-red outline-none flex-1 py-1 text-foreground placeholder-gray-300"
                                placeholder="Enter Email..."
                                required
                            />
                        </div>

                        <div className="flex flex-col md:flex-row md:items-baseline gap-4">
                            <label className="text-gray-500 min-w-[100px]">{">"} DATA:</label>
                            <textarea
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className="bg-transparent border-b-2 border-gray-400 focus:border-signal-red outline-none flex-1 py-1 text-foreground placeholder-gray-300 resize-none h-32"
                                placeholder="Encrypted Message..."
                                required
                            />
                        </div>

                        <div className="pt-8">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-foreground text-background px-8 py-3 text-xl font-bold uppercase hover:bg-signal-red transition-colors disabled:opacity-50"
                            >
                                {isSubmitting ? "ENCRYPTING..." : "INITIATE TRANSMISSION"}
                            </button>
                        </div>
                    </form>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-terminal-green text-xl border border-terminal-green p-8 bg-terminal-green/10"
                    >
                        <p>{">"} TRANSMISSION RECEIVED.</p>
                        <p>{">"} ENCRYPTION VERIFIED.</p>
                        <p>{">"} EXPECT RESPONSE WITHIN 24 HOURS.</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
