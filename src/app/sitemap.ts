import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    const pages: { path: string; priority: number }[] = [
        { path: '', priority: 1.0 },
        { path: '/embroidery-digitizing', priority: 0.9 },
        { path: '/vector-art-conversion', priority: 0.9 },
        { path: '/custom-patches', priority: 1.0 },
        { path: '/custom-embroidered-patches', priority: 0.9 },
        { path: '/custom-pvc-patches', priority: 0.9 },
        { path: '/custom-leather-patches', priority: 0.9 },
        { path: '/custom-sublimation-patches', priority: 0.9 },
        { path: '/services', priority: 0.8 },
    ];
    return pages.map((p) => ({
        url: `${SITE_URL}${p.path}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: p.priority,
    }));
}
