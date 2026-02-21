"use client";

import React from "react";
import { DATA } from "@/data/resume";

export function MadLibsBio() {
    const highlightClass =
        "inline-block rounded-md bg-neutral-800 px-2 py-0.5 font-bold text-white transition-colors hover:bg-neutral-700";

    return (
        <section id="about" className="mx-auto max-w-4xl px-4 py-24 text-center">
            <h2 className="sr-only">About Me</h2>
            <p className="text-xl font-medium leading-relaxed text-neutral-400 md:text-3xl md:leading-relaxed">
                I am a <span className={highlightClass}>{DATA.basics.label}</span> and expert
                in <span className={highlightClass}>Generative AI</span> with over{" "}
                <span className={highlightClass}>10+ years</span> of industry experience. My
                expertise extends to{" "}
                <span className={highlightClass}>Cloud Transformation</span> &{" "}
                <span className={highlightClass}>Agentic AI</span>. I help startups and
                brands to craft expressive and engaging solutions for their software needs.
                Currently works as <span className={highlightClass}>Lead GenAI Architect</span>{" "}
                at <span className={highlightClass}>Opstree Global</span>.
            </p>
        </section>
    );
}
