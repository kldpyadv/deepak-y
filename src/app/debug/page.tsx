export const dynamic = "force-dynamic";

import { client } from "@/sanity/client";

export default async function DebugPage() {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

    let posts: unknown[] = [];
    let error: string | null = null;

    try {
        posts = await client.fetch(
            `*[_type == "post"]{ _id, title, slug, publishedAt }`,
            {},
            { next: { revalidate: 0 } }
        );
    } catch (e: unknown) {
        error = e instanceof Error ? e.message : String(e);
    }

    return (
        <main style={{ padding: 40, fontFamily: "monospace", color: "white", background: "#111", minHeight: "100vh" }}>
            <h1>Debug Info</h1>
            <p><strong>NEXT_PUBLIC_SANITY_PROJECT_ID:</strong> {projectId ?? "UNDEFINED"}</p>
            <p><strong>NEXT_PUBLIC_SANITY_DATASET:</strong> {dataset ?? "UNDEFINED"}</p>
            <p><strong>Post Count:</strong> {posts.length}</p>
            {error && <p style={{ color: "red" }}><strong>Error:</strong> {error}</p>}
            <pre style={{ background: "#222", padding: 16, marginTop: 16, overflowX: "auto" }}>
                {JSON.stringify(posts, null, 2)}
            </pre>
        </main>
    );
}
