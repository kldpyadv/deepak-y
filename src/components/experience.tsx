"use client";

import { DATA } from "@/data/resume";

export function ExperienceTimeline() {
    return (
        <section id="experience" className="py-24 px-4">
            <div className="mx-auto max-w-4xl">
                <h2 className="mb-12 text-sm font-bold uppercase tracking-widest text-neutral-500">Experience</h2>
                <div className="space-y-8">
                    {DATA.experience.map((job) => (
                        <div key={job.role} className="flex flex-col border-b border-white/5 pb-8 transition-opacity hover:opacity-100 md:flex-row md:items-baseline md:justify-between group">
                            <div className="md:w-1/2">
                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.role}</h3>
                                <p className="mt-2 text-sm text-neutral-400 max-w-sm leading-relaxed">{job.description}</p>
                            </div>
                            <div className="mt-2 md:mt-0 md:w-1/2 md:text-right">
                                <div className="text-xl font-medium text-white">{job.company}</div>
                                <div className="text-sm font-medium text-neutral-500">{job.start} - {job.end}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
