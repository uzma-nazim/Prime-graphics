import type { Metadata } from 'next';
import { FaqSection } from '@/components/common';
import { Digitizing, EngravingDesigns, VectorArt } from '@/components/services';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo';
import type { Faq } from '@/lib/site';

const description =
    'Embroidery digitizing, vector art conversion and laser engraving design services from $9, with 4-hour turnaround and free edits. Worldwide. Get a free quote.';

export const metadata: Metadata = pageMetadata({
    title: 'Digitizing, Vector Art & Engraving Services',
    description,
    path: '/services',
    image: '/assets/services/digitize.png',
    imageAlt: 'Embroidery digitizing of a logo into a machine stitch file',
});

const faqs: Faq[] = [
    {
        q: 'What design services does Prime Graphics offer?',
        a: 'We offer embroidery digitizing (digitising), vector art conversion and laser engraving designs for embroidery, print and engraving shops, and we make custom patches.',
        link: { href: '/custom-patches', text: 'Custom patches' },
    },
    {
        q: 'How much do digitizing and vector art services cost?',
        a: 'Left chest logo digitizing costs $9–12 and jacket back digitizing costs $12–50. Raster to vector conversion costs $9–12 and digital vector art costs $14–50. Small edits and revisions are free.',
        link: { href: '/embroidery-digitizing', text: 'Embroidery digitizing services' },
    },
    {
        q: 'How fast will I get my files?',
        a: 'Digitizing and vector files are delivered in about 4 hours, or around 2 hours for rush orders.',
        link: { href: '/vector-art-conversion', text: 'Vector art services' },
    },
    {
        q: 'How do I order a design service?',
        a: 'Email your artwork and details to primeservice903@gmail.com or call +44 7429 915781. We confirm the price, complete the design and send your files by email.',
    },
];

function Services() {
    return (
        <div>
            <ServiceJsonLd
                name='Laser Engraving Designs'
                description='Laser engraving design artwork prepared for clean cutting and engraving, alongside embroidery digitizing and vector art conversion.'
                path='/services'
                serviceType='Laser engraving design'
                image='/assets/services/engraving-designs.png'
            />
            <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]} />
            <Digitizing />
            <VectorArt />
            <EngravingDesigns />
            <FaqSection faqs={faqs} title='Services FAQ' />
        </div>
    );
}

export default Services;
