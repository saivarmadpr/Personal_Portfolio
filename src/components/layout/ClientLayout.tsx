"use client";

import { useState } from "react";
import SmoothScroll from "../ui/SmoothScroll";
import CustomCursor from "../ui/CustomCursor";
import BootSequence from "./BootSequence";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isBooted, setIsBooted] = useState(false);

    return (
        <>
            <BootSequence onComplete={() => setIsBooted(true)} />
            <CustomCursor />
            <SmoothScroll>
                <main className={`min-h-screen transition-opacity duration-1000 ${isBooted ? "opacity-100" : "opacity-0"}`}>
                    {children}
                </main>
            </SmoothScroll>
        </>
    );
}
