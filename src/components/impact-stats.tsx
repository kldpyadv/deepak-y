"use client";

import { DATA } from "@/data/resume";
import { motion } from "framer-motion";

export function ImpactStats() {
    return (
        <section className="py-12 px-4">
            <div className="mx-auto max-w-4xl">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {DATA.stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/5 p-6 text-center backdrop-blur-sm transition-colors hover:bg-white/10"
                        >
                            <span className="text-3xl font-bold text-white md:text-4xl">
                                {"prefix" in stat && stat.prefix}
                                {stat.value}
                                {stat.suffix}
                            </span>
                            <span className="mt-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
