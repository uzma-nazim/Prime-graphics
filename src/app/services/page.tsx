import type { Metadata } from 'next';
import { Digitizing, EngravingDesigns, VectorArt } from '@/components/services';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo';

const description =
    'Embroidery digitizing services from $9, plus vector art conversion and laser engraving designs. 4-hour turnaround, free edits, worldwide. Get a free quote.';

export const metadata: Metadata = pageMetadata({
    title: 'Embroidery Digitizing Services & Vector Art',
    description,
    path: '/services',
    image: '/assets/services/digitize.png',
    imageAlt: 'Embroidery digitizing of a logo into a machine stitch file',
});

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
        </div>
    );
}

export default Services;
