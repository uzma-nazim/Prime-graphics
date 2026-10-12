import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    const pages: { path: string; priority: number }[] = [
        { path: '', priority: 1.0 },
        { path: '/embroidery-patch', priority: 1.0 },
        { path: '/services', priority: 0.8 },
    ];
    return pages.map((p) => ({
        url: `${SITE_URL}${p.path}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: p.priority,
    }));
}
