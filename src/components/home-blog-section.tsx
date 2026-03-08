import Link from "next/link";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const HOMEPAGE_POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...5]{
  _id,
  title,
  slug,
  publishedAt,
  mainImage
}`;

export async function HomeBlogSection() {
    const posts = await client.fetch(HOMEPAGE_POSTS_QUERY, {}, { next: { revalidate: 60 } });

    if (posts.length === 0) return null;

    return (
        <section id="blog" className="py-24 px-4">
            <div className="mx-auto max-w-4xl">
                <h2 className="mb-12 text-sm font-bold uppercase tracking-widest text-neutral-500">
                    Latest Insights
                </h2>

                <div className="flex flex-col gap-8">
                    {posts.map((post: any) => (
                        <Link
                            key={post._id}
                            href={`/blog/${post.slug.current}`}
                            className="group flex flex-col gap-6 rounded-3xl border border-white/5 bg-white/5 p-6 transition-colors hover:bg-white/10 md:flex-row md:items-center"
                        >
                            {post.mainImage && (
                                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-2xl md:h-32 md:w-48">
                                    <Image
                                        src={urlFor(post.mainImage).width(400).height(300).url()}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            )}
                            <div className="flex flex-1 flex-col justify-center">
                                <span className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
                                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </span>
                                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-blue-400 md:text-2xl">
                                    {post.title}
                                </h3>
                            </div>
                            <div className="flex shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 p-4 transition-colors group-hover:bg-white group-hover:text-black">
                                <ArrowRight className="h-5 w-5 -rotate-45 transition-transform group-hover:rotate-0" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-black"
                    >
                        View All Articles
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
