"use client";

import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { DATA } from "@/data/resume";

export function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 text-center">
            {/* Background Blur Blob */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/20 blur-[120px]" />

            {/* Avatar Wrapper */}
            <div className="relative mb-8 h-32 w-32 md:h-40 md:w-40">
                <div className="h-full w-full overflow-hidden rounded-full border-2 border-white/10 bg-neutral-900">
                    <Image
                        src="/deepakpic.jpeg"
                        alt={DATA.basics.name}
                        width={160}
                        height={160}
                        className="h-full w-full object-cover"
                        priority
                    />
                </div>
                {/* Verified Badge */}
                <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-white px-3 py-1 shadow-lg">
                    <BadgeCheck className="h-4 w-4 fill-blue-500 text-white" />
                    <span className="text-xs font-bold text-black">Verified Expert</span>
                </div>
            </div>

            {/* Headlines */}
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                {DATA.basics.label}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400 md:text-xl">
                {DATA.basics.summary}
            </p>

        </section>
    );
}
