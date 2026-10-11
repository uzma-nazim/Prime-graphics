import type { Metadata } from 'next';
import Link from 'next/link';
import { LayoutWrapper } from '@/components/common';
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
            <section className='pt-16 text-center'>
                <LayoutWrapper>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary'>Digitizing, Vector Art &amp; Engraving Design Services</h1>
                    <p className='mt-5 text-base lg:text-xl text-[#494747] w-full lg:w-[70%] mx-auto'>
                        Alongside our <Link href='/custom-patches' className='underline font-semibold'>custom patches</Link>, we prepare production-ready
                        files for embroidery, print and engraving businesses. See full details on{' '}
                        <Link href='/embroidery-digitizing' className='underline font-semibold'>embroidery digitizing</Link> and{' '}
                        <Link href='/vector-art-conversion' className='underline font-semibold'>vector art conversion</Link>.
                    </p>
                </LayoutWrapper>
            </section>
            <Digitizing />
            <VectorArt />
            <EngravingDesigns />
        </div>
    );
}

export default Services;
