import type { Metadata } from 'next';
import { FaqSection } from '@/components/common';
import { Digitizing, EngravingDesigns, VectorArt } from '@/components/services';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo';
import type { Faq } from '@/lib/site';

const description =
    'Embroidery digitizing services from $9, plus vector art conversion and laser engraving designs. 4-hour turnaround, free edits, worldwide. Get a free quote.';

export const metadata: Metadata = pageMetadata({
    title: 'Embroidery Digitizing Services & Vector Art',
    description,
    path: '/services',
    image: '/assets/services/digitize.png',
    imageAlt: 'Embroidery digitizing of a logo into a machine stitch file',
});

const faqs: Faq[] = [
    {
        q: 'How much do embroidery digitizing services cost?',
        a: 'A left chest logo costs $9–12 and a jacket back design costs $12–50, depending on size and stitch count. Small edits and revisions are free, and we discount bulk orders.',
        link: { href: '/#packages', text: 'Digitizing and vector art packages' },
    },
    {
        q: 'How long does embroidery digitizing take?',
        a: 'Most designs are delivered in about 4 hours. Rush orders are delivered in around 2 hours.',
    },
    {
        q: 'What embroidery file formats will I receive?',
        a: 'You receive EMB, DST, PDF and BMP/JPG as standard. Other machine formats such as PES, EXP, JEF and VP3 are available on request.',
    },
    {
        q: 'What is a DST file?',
        a: 'DST is the Tajima embroidery file format and the most widely used commercial machine format. Every order includes a DST file alongside EMB, a PDF stitch sheet and a BMP/JPG preview.',
    },
    {
        q: 'Do you do logo digitizing, cap digitizing and 3D puff digitizing?',
        a: 'Yes. We digitize logos for left chest, caps and hats, and jacket backs, and we also do 3D puff digitizing. Tell us the garment and finished size and we will build the file for it.',
    },
    {
        q: 'Is embroidery digitizing the same as embroidery digitising?',
        a: 'Yes. Digitizing is the American spelling and digitising is the British spelling. Both mean converting artwork into a stitch file for an embroidery machine.',
    },
    {
        q: 'Do you offer an embroidery digitizing service in the UK?',
        a: 'Yes. Prime Graphics is based in London and provides embroidery digitising for UK embroidery shops and brands, as well as customers in the USA and worldwide. Every file is delivered by email, usually in about 4 hours.',
    },
    {
        q: 'How much do vector art services cost?',
        a: 'Raster to vector conversion of a typical logo costs $9–12. Detailed digital vector art and illustrations cost $14–50. Small edits and revisions are free.',
    },
    {
        q: 'Can you vectorise my logo?',
        a: 'Yes. Send any JPG, PNG, photo or sketch and we will vectorise (vectorize) your logo by hand rather than auto-tracing it, so it stays sharp at any size. Most files are delivered in about 4 hours.',
    },
    {
        q: 'What is raster to vector conversion?',
        a: 'Raster images (JPG, PNG, screenshots) are made of pixels and go blurry when enlarged. Raster to vector conversion redraws the artwork as paths, so it stays perfectly sharp at any size, from a business card to a banner.',
    },
    {
        q: 'Do you make vector files for laser engraving and DTF?',
        a: 'Yes. Customers use our vector files for laser engraving, DTF and screen printing, vinyl cutting, signs and embroidered hat patches.',
        link: { href: '/embroidery-patch', text: 'Custom patches' },
    },
    {
        q: 'How do I order a design service?',
        a: 'Email your artwork and details (size, fabric or product, file format) to primeservice903@gmail.com or call +44 7429 915781. We confirm the price, complete the design and send your files by email. Your first simple order can be a free trial.',
    },
];

function Services() {
    return (
        <div>
            <ServiceJsonLd
                name='Embroidery Digitizing Services'
                description='Embroidery digitizing (digitising) of logos and artwork into machine-ready stitch files, with 4-hour turnaround and free edits.'
                path='/services'
                anchor='digitize'
                serviceType='Embroidery digitizing'
                image='/assets/services/digitize.png'
                minPrice={9}
                maxPrice={50}
            />
            <ServiceJsonLd
                name='Vector Art Services'
                description='Hand-redrawn raster to vector conversion and digital vector art for print, DTF, vinyl and laser engraving, with 4-hour turnaround.'
                path='/services'
                anchor='vector'
                serviceType='Raster to vector conversion'
                image='/assets/services/vector-art.png'
                minPrice={9}
                maxPrice={50}
            />
            <ServiceJsonLd
                name='Laser Engraving Designs'
                description='Laser engraving design artwork prepared for clean cutting and engraving.'
                path='/services'
                anchor='engraving'
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
