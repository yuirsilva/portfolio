import { PNG } from "@components/open-graph/createImage";
import openGraphImage from "@components/open-graph/openGraphImage";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
    const postsEntries = await getCollection("posts");
    return postsEntries.map((entry) => ({
        params: { slug: entry.slug },
        props: { entry },
    }));
}

export const GET: APIRoute = async ({ props }) => {
    const png = await PNG(
        openGraphImage({
            title: props.entry.data.title,
            description: props.entry.data.description,
        }) as JSX.Element
    );
    return new Response(png, {
        headers: {
            "Content-Type": "image/png",
        },
    });
};
