"use client";

import { DATA } from "@/data/resume";
// import { ArrowLast } from "lucide-react";

export function Skills() {
    return (
        <section id="skills" className="py-24">
            <div className="mx-auto max-w-4xl px-4">
                <h2 className="mb-12 text-sm font-bold uppercase tracking-widest text-neutral-500">
                    Skills
                </h2>
                <div className="flex flex-col">
                    {DATA.skills.map((skill, index) => (
                        <div
                            key={skill.category}
                            className="group flex flex-col border-b border-white/10 py-8 transition-colors hover:bg-white/5 md:flex-row md:items-start"
                        >
                            <h3 className="mb-4 w-full text-2xl font-bold text-white md:mb-0 md:w-1/3">
                                {skill.category}
                            </h3>
                            <div className="flex w-full flex-wrap gap-x-4 gap-y-2 text-lg text-neutral-400 md:w-2/3">
                                {skill.items.map((item, i) => (
                                    <span key={item} className="flex items-center">
                                        {item}
                                        {i < skill.items.length - 1 && <span className="ml-4 h-1 w-1 rounded-full bg-neutral-700" />}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
