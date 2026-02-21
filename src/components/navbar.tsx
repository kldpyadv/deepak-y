"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

export function Navbar() {
    const pathname = usePathname();
    const navItems = DATA.nav;

    // HIde Navbar on Sanity Studio
    if (pathname.startsWith("/studio")) return null;

    return (
        <nav className="fixed top-6 left-1/2 z-50 flex max-w-[90vw] -translate-x-1/2 items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-black/50 px-2 py-2 backdrop-blur-md md:max-w-none">
            <div className="flex items-center gap-1 min-w-max">
                {navItems.map((item) => {
                    // Smart linking strategy
                    const isHome = pathname === "/";
                    const isHashLink = item.href.startsWith("#");

                    // If we are NOT on home, and it's a hash link, prepend "/"
                    // Example: "#projects" -> "/#projects"
                    const href = !isHome && isHashLink
                        ? `/${item.href}`
                        : item.href;

                    return (
                        <Link
                            key={item.name}
                            href={href}
                            className={cn(
                                "rounded-full px-4 py-2 text-sm font-medium text-neutral-400 transition-colors hover:bg-white/5 hover:text-white",
                                // Active state if needed, can be expanded
                            )}
                        >
                            {item.name}
                        </Link>
                    );
                })}
                <Link
                    href="#contact"
                    className="ml-2 rounded-full bg-white px-6 py-2 text-sm font-bold text-black transition-transform hover:scale-105"
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
}
