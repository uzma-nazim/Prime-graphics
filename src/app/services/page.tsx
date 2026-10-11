import type { Metadata } from 'next';
import { Digitizing, EngravingDesigns, VectorArt } from '@/components/services';

export const metadata: Metadata = {
    title: 'Digitizing, Vector Art & Engraving Design Services',
    description:
        'Embroidery digitizing, raster to vector conversion and laser engraving designs from $9 with 4-hour turnaround and free edits. Serving embroidery, print and engraving shops in the UK, USA & worldwide.',
    alternates: { canonical: '/services' },
};

function Services() {
    return (
        <div>
            <Digitizing />
            <VectorArt />
            <EngravingDesigns />
        </div>
    );
}

export default Services;
