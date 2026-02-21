import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await client.fetch(POST_QUERY, { slug });

    if (!post) {
        return (
            <main className="flex min-h-screen items-center justify-center">
                <h1 className="text-2xl font-bold text-white">Post not found</h1>
            </main>
        );
    }

    return (
        <main className="min-h-screen py-24 px-4">
            <article className="mx-auto max-w-3xl">
                <Link
                    href="/blog"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white"
                >
                    <ArrowLeft className="h-4 w-4" /> Back to Blog
                </Link>

                <header className="mb-12 text-center">
                    <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-neutral-500">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                    <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                        {post.title}
                    </h1>
                    {post.mainImage && (
                        <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-3xl">
                            <Image
                                src={urlFor(post.mainImage).width(1200).height(675).url()}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                </header>

                <div className="prose prose-invert prose-lg mx-auto prose-headings:font-bold prose-headings:text-white prose-p:text-neutral-400 prose-a:text-blue-400 prose-li:text-neutral-400">
                    <PortableText value={post.body} />
                </div>
            </article>
        </main>
    );
}
