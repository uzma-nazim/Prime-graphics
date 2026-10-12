import { SITE_URL, business, packages, type Faq } from '@/lib/site';

// Renders schema.org structured data so Google, Bing and AI assistants
// (ChatGPT, Claude, Perplexity, Gemini) can read who we are, what we sell and for how much.

function Script({ data }: { data: object }) {
    return (
        <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
        />
    );
}

export function OrganizationJsonLd() {
    const org = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#business`,
        name: business.name,
        alternateName: business.alternateNames,
        url: SITE_URL,
        logo: business.logo,
        image: business.image,
        description: business.description,
        email: business.email,
        telephone: business.phone,
        priceRange: '$9 - $50',
        currenciesAccepted: 'USD, GBP',
        paymentAccepted: 'PayPal, Credit Card, Debit Card',
        address: {
            '@type': 'PostalAddress',
            streetAddress: business.address.street,
            addressLocality: business.address.city,
            postalCode: business.address.postalCode,
            addressCountry: business.address.country,
        },
        areaServed: ['GB', 'US', 'CA', 'AU', 'IE', 'NZ', 'DE', 'FR', 'NL', 'AE'],
        sameAs: business.social,
        knowsAbout: [
            'Custom patches',
            'Embroidery digitizing',
            'Logo digitizing',
            'Cap and hat digitizing',
            '3D puff digitizing',
            'Raster to vector conversion',
            'Logo vectorization',
            'Laser engraving design',
            'Custom embroidered patches',
            'PVC patches',
            'Leather patches',
            'Sublimation patches',
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Custom patches, digitizing and vector services',
            itemListElement: [
                ...packages.map((p) => ({
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', name: p.name },
                    priceSpecification: {
                        '@type': 'PriceSpecification',
                        minPrice: p.min,
                        maxPrice: p.max,
                        priceCurrency: 'USD',
                    },
                })),
                ...['Custom Embroidered Patches', 'Custom PVC Patches', 'Custom Leather Patches', 'Custom Sublimation Patches', 'Laser Engraving Designs'].map(
                    (name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })
                ),
            ],
        },
    };

    const website = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: business.name,
        publisher: { '@id': `${SITE_URL}/#business` },
        inLanguage: 'en',
    };

    return (
        <>
            <Script data={org} />
            <Script data={website} />
        </>
    );
}

export function FaqJsonLd({ faqs }: { faqs: Faq[] }) {
    return (
        <Script
            data={{
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                    '@type': 'Question',
                    name: f.q,
                    acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
            }}
        />
    );
}

export function ServiceJsonLd({ name, description, path, serviceType, image, minPrice, maxPrice }: {
    name: string;
    description: string;
    path: string;
    serviceType?: string;
    image?: string;
    minPrice?: number;
    maxPrice?: number;
}) {
    return (
        <Script
            data={{
                '@context': 'https://schema.org',
                '@type': 'Service',
                '@id': `${SITE_URL}${path}#service`,
                name,
                description,
                url: `${SITE_URL}${path}`,
                ...(serviceType ? { serviceType } : {}),
                ...(image ? { image: `${SITE_URL}${image}` } : {}),
                provider: { '@id': `${SITE_URL}/#business` },
                areaServed: ['GB', 'US', 'CA', 'AU', 'Worldwide'],
                ...(minPrice !== undefined ? {
                    offers: {
                        '@type': 'Offer',
                        priceSpecification: {
                            '@type': 'PriceSpecification',
                            minPrice,
                            maxPrice,
                            priceCurrency: 'USD',
                        },
                    },
                } : {}),
            }}
        />
    );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
    return (
        <Script
            data={{
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: items.map((it, i) => ({
                    '@type': 'ListItem',
                    position: i + 1,
                    name: it.name,
                    item: `${SITE_URL}${it.path}`,
                })),
            }}
        />
    );
}
