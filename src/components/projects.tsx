"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
    return (
        <div id="projects" className="py-24">
            <div className="mx-auto max-w-4xl px-4">
                <h2 className="mb-12 text-4xl font-bold text-white md:text-5xl">
                    Projects
                </h2>
                <div className="flex flex-col gap-10">
                    {DATA.projects.map((project, index) => (
                        <StickyCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function StickyCard({
    project,
    index,
}: {
    project: (typeof DATA.projects)[number];
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="sticky top-20 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-3xl md:top-24 md:p-12"
            style={{
                top: `calc(5rem + ${index * 2}rem)`,
            }}
        >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-black">
                            {index + 1}
                        </span>
                        <h3 className="text-2xl font-bold text-white md:text-3xl">
                            {project.title}
                        </h3>
                    </div>

                    <p className="max-w-xl text-lg text-neutral-400">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-neutral-800 transition-colors hover:bg-white hover:text-black"
                >
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                </Link>
            </div>


        </motion.div>
    );
}
