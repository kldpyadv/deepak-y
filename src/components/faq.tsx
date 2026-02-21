"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
    {
        question: "How do you approach Enterprise AI Strategy?",
        answer:
            "I start by analyzing the business value chain to identify high-impact use cases. My framework ensures alignment between technical capability (GenAI/LLMs) and business ROI, focusing on scalability and governance.",
    },
    {
        question: "What tech stack do you recommend for GenAI?",
        answer:
            "For enterprise scale, I recommend a hybrid approach: Google Cloud Vertex AI (Gemini) for foundation models, combined with LangChain/LangGraph for orchestration and Vector DBs (Pinecone/Weaviate) for RAG.",
    },
    {
        question: "How do you measure success in AI adoption?",
        answer:
            "Beyond production deployment, I track adoption rate (target >90%), query accuracy (>85% for RAG), and tangible business outcomes like reduced processing time or cost savings.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 px-4">
            <div className="mx-auto max-w-4xl">
                <h2 className="mb-12 text-sm font-bold uppercase tracking-widest text-neutral-500">
                    FAQ
                </h2>
                <div className="flex flex-col border-t border-white/5">
                    {FAQS.map((faq, index) => (
                        <div key={index} className="border-b border-white/5">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between py-8 text-left transition-colors hover:text-white group"
                            >
                                <span className="text-xl font-medium text-neutral-300 group-hover:text-white md:text-2xl">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`h-6 w-6 text-neutral-500 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="mb-8 max-w-2xl text-lg text-neutral-400">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
