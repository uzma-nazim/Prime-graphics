import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Contact, FaqSection, LayoutWrapper, OrderNowLink, Packages } from '@/components/common';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import type { Faq } from '@/lib/site';

const title = 'Vector Art Conversion – Raster to Vector Logo Redraw from $9';
const description =
    'Vectorise or vectorize your logo: hand-redrawn raster to vector conversion from $9 for print, DTF, screen printing, vinyl and laser engraving. 4-hour turnaround, free edits.';

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: '/vector-art-conversion' },
    openGraph: { title, description, url: '/vector-art-conversion', images: ['/assets/vector-circle.png'] },
};

const faqs: Faq[] = [
    {
        q: 'How much does it cost to vectorize a logo?',
        a: 'Raster to vector conversion of a typical logo costs $9–12. Detailed digital vector artwork and illustrations cost $14–50. Small edits and revisions are free.',
    },
    {
        q: 'What is the difference between raster and vector?',
        a: 'Raster images (JPG, PNG, screenshots) are made of pixels and go blurry when enlarged. Vector files are made of mathematical paths, so they stay perfectly sharp at any size, from a business card to a banner.',
    },
    {
        q: 'What vector file formats do you deliver?',
        a: 'We deliver PDF and image previews as standard, and vector formats such as AI, EPS and SVG on request. Tell us what your printer, cutter or engraver needs.',
    },
    {
        q: 'Can you vectorize a blurry or low-resolution logo?',
        a: 'Yes. We redraw the logo by hand rather than auto-tracing it, so even a small or blurry image becomes a clean, sharp vector file.',
    },
    {
        q: 'Do you make vector files for laser engraving and DTF?',
        a: 'Yes. Customers use our vector files for laser engraving and CNC cutting, DTF and screen printing, vinyl cutting, signs and embroidered hat patches.',
    },
    {
        q: 'How long does vector conversion take?',
        a: 'Most files are delivered in about 4 hours, or around 2 hours for rush orders.',
    },
];

const uses = ['Screen printing & DTF transfers', 'Laser engraving & CNC cutting', 'Vinyl & sign cutting', 'Hat patches & embroidery', 'Business cards, banners & signage', 'Website and brand refreshes'];

function VectorArtConversionPage() {
    return (
        <div>
            <ServiceJsonLd
                name='Raster to Vector Art Conversion'
                description={description}
                path='/vector-art-conversion'
                minPrice={9}
                maxPrice={50}
            />
            <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Vector Art Conversion', path: '/vector-art-conversion' }]} />

            <section className='bg-secondary text-white py-16 md:py-24'>
                <LayoutWrapper>
                    <div className='block md:flex gap-10 items-center'>
                        <div className='w-full md:w-3/5'>
                            <p className='text-dark-primary font-semibold uppercase tracking-wider text-sm'>Logo vectorisation · UK, USA & worldwide</p>
                            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight'>Vector Art Conversion Services</h1>
                            <p className='text-lg lg:text-xl mt-6 text-white/85'>
                                Turn any JPG, PNG, sketch or blurry logo into a crisp vector file that scales to any size. Hand-redrawn
                                raster to vector conversion from <strong className='text-dark-primary'>$9</strong>, delivered in about
                                <strong className='text-dark-primary'> 4 hours</strong>.
                            </p>
                            <ul className='mt-8 grid sm:grid-cols-2 gap-3 text-base lg:text-lg'>
                                {['Hand redrawn, not auto-traced', '4-hour standard, 2-hour rush', 'Print & cut ready', 'Free edits and revisions'].map((b) => (
                                    <li key={b} className='flex gap-2 items-center'><Check className='text-dark-primary flex-shrink-0' /> {b}</li>
                                ))}
                            </ul>
                            <div className='mt-10'>
                                <OrderNowLink>
                                    <span className='inline-block py-3 px-10 font-bold text-secondary bg-gradient-to-r from-[#FFDB5D] to-[#998438] rounded-xl shadow-lg'>Get a Free Quote</span>
                                </OrderNowLink>
                            </div>
                        </div>
                        <div className='w-full md:w-2/5 mt-10 md:mt-0 flex justify-center'>
                            <Image src='/assets/vector-circle.png' width={500} height={500} priority className='w-[80%] h-auto' alt='Logo converted from raster to vector by Prime Graphics' />
                        </div>
                    </div>
                </LayoutWrapper>
            </section>

            <section className='py-16'>
                <LayoutWrapper>
                    <div className='w-full lg:w-[85%] mx-auto text-base lg:text-lg leading-relaxed text-[#494747] flex flex-col gap-5'>
                        <h2 className='text-2xl lg:text-3xl font-bold text-secondary'>What is raster to vector conversion?</h2>
                        <p>
                            Most logos people have on hand are raster images: JPGs, PNGs, screenshots or photos made of pixels. Enlarge them and
                            they turn blurry and jagged, and printers, cutters and engravers can&apos;t use them. Vector conversion redraws the artwork
                            as clean paths and shapes, so it stays razor-sharp at any size and every colour can be separated for production.
                        </p>
                        <p>
                            Online auto-trace tools produce wobbly lines, extra points and wrong colours. Our designers redraw your logo by hand,
                            fixing fonts, curves and details, so the file is ready for production the moment you receive it.
                        </p>

                        <h2 className='text-2xl lg:text-3xl font-bold text-secondary mt-6'>Vector conversion prices</h2>
                        <div className='overflow-x-auto'>
                            <table className='w-full text-left border border-[#323131]/10 rounded-xl overflow-hidden'>
                                <thead className='bg-secondary text-white'>
                                    <tr><th className='p-3'>Service</th><th className='p-3'>Price (USD)</th><th className='p-3'>Turnaround</th></tr>
                                </thead>
                                <tbody>
                                    <tr className='border-t'><td className='p-3'>Raster to vector (logo redraw)</td><td className='p-3'>$9 – $12</td><td className='p-3'>~4 hours (2 hours rush)</td></tr>
                                    <tr className='border-t'><td className='p-3'>Digital vector art / illustration</td><td className='p-3'>$14 – $50</td><td className='p-3'>~4 hours (2 hours rush)</td></tr>
                                    <tr className='border-t'><td className='p-3'>Edits and revisions</td><td className='p-3'>Free</td><td className='p-3'>Quick</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className='text-sm'>Bulk orders get a discount. Your first simple order can be a free trial.</p>

                        <h2 className='text-2xl lg:text-3xl font-bold text-secondary mt-6'>What our vector files are used for</h2>
                        <ul className='grid sm:grid-cols-2 gap-3'>
                            {uses.map((u) => (
                                <li key={u} className='flex gap-2 items-center'><Check className='text-dark-primary flex-shrink-0' /> {u}</li>
                            ))}
                        </ul>

                        <h2 className='text-2xl lg:text-3xl font-bold text-secondary mt-6'>Vector art for laser engraving</h2>
                        <p>
                            Laser and CNC machines need single, closed paths with no overlaps. We prepare engraving artwork that cuts and engraves
                            cleanly, from detailed sketches to logos for wood, metal, leather and acrylic. See examples in our{' '}
                            <Link href='/services#engraving' className='underline font-semibold text-secondary'>engraving designs</Link>.
                        </p>

                        <h2 className='text-2xl lg:text-3xl font-bold text-secondary mt-6'>Trusted by print and embroidery businesses</h2>
                        <p>
                            Print shops, sign makers, laser engravers and apparel brands in the UK, USA and beyond send us their artwork every week.
                            Read their <Link href='/#testimonials' className='underline font-semibold text-secondary'>reviews</Link>, browse the{' '}
                            <Link href='/#gallery' className='underline font-semibold text-secondary'>vector gallery</Link>, or pair your vector file with our{' '}
                            <Link href='/embroidery-digitizing' className='underline font-semibold text-secondary'>embroidery digitizing</Link> service.
                        </p>
                    </div>
                </LayoutWrapper>
            </section>

            <Packages />
            <FaqSection faqs={faqs} title='Vector Conversion FAQ' />
            <Contact />
        </div>
    );
}

export default VectorArtConversionPage;
