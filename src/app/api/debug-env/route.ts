import { NextResponse } from "next/server";
import { client } from "@/sanity/client";

export async function GET() {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

    let posts: unknown[] = [];
    let error: string | null = null;

    try {
        posts = await client.fetch(`*[_type == "post"]{ _id, title, slug, publishedAt }`);
    } catch (e: unknown) {
        error = e instanceof Error ? e.message : String(e);
    }

    return NextResponse.json({
        projectId,
        dataset,
        postCount: posts.length,
        posts,
        error,
    });
}
