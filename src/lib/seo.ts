import type { Metadata } from 'next';
import { SITE_URL, business } from './site';

export const DEFAULT_OG_IMAGE = '/assets/embroideryPatch/pvc/custom-pvc-patches.jpg';

// Builds the full metadata for one page: title, description, canonical, Open Graph and Twitter.
// `title` is the page part only (main keyword first). "| Prime Graphics" is added here,
// and the full title must be 50–60 characters. Descriptions must be 140–160 characters.
export function pageMetadata({ title, description, path, image = DEFAULT_OG_IMAGE, imageAlt }: {
    title: string;
    description: string;
    path: string;
    image?: string;
    imageAlt: string;
}): Metadata {
    const fullTitle = `${title} | ${business.name}`;
    return {
        title: { absolute: fullTitle },
        description,
        alternates: { canonical: path },
        openGraph: {
            type: 'website',
            url: `${SITE_URL}${path === '/' ? '' : path}`,
            siteName: business.name,
            locale: 'en_GB',
            title: fullTitle,
            description,
            images: [{ url: image, alt: imageAlt }],
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [{ url: image, alt: imageAlt }],
        },
    };
}
