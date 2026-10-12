import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Allows normal search engines and the AI answer engines (ChatGPT, Claude, Perplexity,
// Gemini / AI Overviews, Copilot, Apple Intelligence) to read and cite the site.
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: '*', allow: '/' },
            {
                userAgent: [
                    'Googlebot',
                    'Bingbot',
                    'GPTBot',
                    'OAI-SearchBot',
                    'ChatGPT-User',
                    'ClaudeBot',
                    'Claude-SearchBot',
                    'Claude-User',
                    'PerplexityBot',
                    'Perplexity-User',
                    'Google-Extended',
                    'Applebot',
                    'Applebot-Extended',
                    'CCBot',
                ],
                allow: '/',
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
