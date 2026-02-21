import Link from "next/link";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import Image from "next/image";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  mainImage
}`;

export default async function BlogPage() {
    const posts = await client.fetch(POSTS_QUERY);

    return (
        <main className="min-h-screen py-24 px-4">
            <div className="mx-auto max-w-4xl">
                <h1 className="mb-12 text-4xl font-bold tracking-tight text-white md:text-5xl">
                    Writing
                </h1>

                <div className="grid gap-8 md:grid-cols-2">
                    {posts.map((post: any) => (
                        <Link
                            key={post._id}
                            href={`/blog/${post.slug.current}`}
                            className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
                        >
                            {post.mainImage && (
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={urlFor(post.mainImage).width(800).height(400).url()}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            )}
                            <div className="flex flex-1 flex-col p-6">
                                <span className="mb-3 text-xs font-medium uppercase tracking-wider text-neutral-500">
                                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                                <h2 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-blue-400">
                                    {post.title}
                                </h2>
                            </div>
                        </Link>
                    ))}
                </div>

                {posts.length === 0 && (
                    <div className="rounded-3xl border border-dashed border-white/10 p-12 text-center">
                        <p className="text-lg text-neutral-500">
                            No posts found. Go to <Link href="/studio" className="text-white underline">/studio</Link> to publish your first post.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}
