"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";

export function Footer() {
    return (
        <footer id="contact" className="py-12 px-4">
            <div className="mx-auto max-w-4xl">
                {/* CTA Card */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-16 text-center shadow-2xl backdrop-blur-3xl md:px-12 md:py-24">
                    <div className="relative z-10">
                        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                            Ready to Transform with AI?
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-lg text-neutral-400">
                            Let's create intelligent solutions that drive real business impact.
                            Available for consulting and architectural reviews.
                        </p>
                        <Link
                            href={`mailto:${DATA.basics.email}`}
                            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition-transform hover:scale-105"
                        >
                            Let's Connect
                        </Link>
                    </div>
                    {/* Decorative gradients */}
                    <div className="absolute top-0 left-0 h-64 w-64 -translate-y-1/2 -translate-x-1/2 bg-blue-500/10 blur-[100px]" />
                    <div className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/2 translate-x-1/2 bg-purple-500/10 blur-[100px]" />
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 text-neutral-500 md:flex-row">
                    <p className="text-sm">
                        © {new Date().getFullYear()} {DATA.basics.name}. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {DATA.basics.social.map((social) => (
                            <Link
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-white"
                            >
                                {social.name} <ArrowUpRight className="h-3 w-3" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
