import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Contact, FaqSection, LayoutWrapper, OrderNowLink, Packages } from '@/components/common';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import type { Faq } from '@/lib/site';

const title = 'Embroidery Digitizing Services from $9 – 4 Hour Turnaround';
const description =
    'Professional embroidery digitizing (digitising) for embroidery shops in the UK, USA & worldwide. Left chest logos from $9, jacket backs from $12, DST/EMB/PES files, free edits.';

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: '/embroidery-digitizing' },
    openGraph: { title, description, url: '/embroidery-digitizing', images: ['/assets/embroidery-circle.png'] },
};

const faqs: Faq[] = [
    {
        q: 'How much does it cost to digitize a logo for embroidery?',
        a: 'A left chest logo costs $9–12 and a jacket back design costs $12–50, depending on size and stitch count. Small edits and revisions are free, and we discount bulk orders.',
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
        q: 'What do I need to send you?',
        a: 'Send your artwork (any image, photo, sketch or vector file), the finished size, the garment or fabric, and the file format your machine uses. If you are unsure, tell us your machine brand and we will advise.',
    },
    {
        q: 'Is embroidery digitizing the same as embroidery digitising?',
        a: 'Yes. Digitizing is the American spelling and digitising is the British spelling. Both mean converting artwork into a stitch file for an embroidery machine.',
    },
    {
        q: 'Do you offer a free trial?',
        a: 'Yes. Your first simple order can be done as a free trial so you can test our stitch quality and turnaround before you pay.',
    },
];

const steps = [
    { t: 'Send your artwork', d: 'Email your logo or design with the size, fabric and file format you need.' },
    { t: 'Get a quote', d: 'We confirm the price straight away. Most left chest logos are $9–12.' },
    { t: 'We digitize it', d: 'Our digitizers set stitch types, density, underlay and pull compensation by hand.' },
    { t: 'Receive your files', d: 'Your machine-ready file and PDF stitch preview arrive in about 4 hours.' },
];

function EmbroideryDigitizingPage() {
    return (
        <div>
            <ServiceJsonLd
                name='Embroidery Digitizing'
                description={description}
                path='/embroidery-digitizing'
                minPrice={9}
                maxPrice={50}
            />
            <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Embroidery Digitizing', path: '/embroidery-digitizing' }]} />

            <section className='bg-secondary text-white py-16 md:py-24'>
                <LayoutWrapper>
                    <div className='block md:flex gap-10 items-center'>
                        <div className='w-full md:w-3/5'>
                            <p className='text-dark-primary font-semibold uppercase tracking-wider text-sm'>Online digitizing service · UK, USA & worldwide</p>
                            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight'>Embroidery Digitizing Services</h1>
                            <p className='text-lg lg:text-xl mt-6 text-white/85'>
                                Prime Graphics converts your logos and artwork into clean, machine-ready embroidery files.
                                Left chest logos from <strong className='text-dark-primary'>$9</strong>, delivered in about
                                <strong className='text-dark-primary'> 4 hours</strong>, with free edits and revisions.
                            </p>
                            <ul className='mt-8 grid sm:grid-cols-2 gap-3 text-base lg:text-lg'>
                                {['Hand digitized, not auto-converted', '4-hour standard, 2-hour rush', 'DST, EMB, PES & more', 'Free edits and revisions'].map((b) => (
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
                            <Image src='/assets/embroidery-circle.png' width={500} height={500} priority className='w-[80%] h-auto' alt='Embroidered logo digitized by Prime Graphics' />
                        </div>
                    </div>
                </LayoutWrapper>
            </section>

            <section className='py-16'>
                <LayoutWrapper>
                    <div className='w-full lg:w-[85%] mx-auto text-base lg:text-lg leading-relaxed text-[#494747] flex flex-col gap-5'>
                        <h2 className='text-2xl lg:text-3xl font-bold text-secondary'>What is embroidery digitizing?</h2>
                        <p>
                            Embroidery digitizing is the process of turning artwork, such as a company logo, team crest or illustration, into a stitch
                            file that an embroidery machine can read. A digitizer decides the stitch type (satin, fill or running stitch), the stitch
                            direction, density, underlay and pull compensation, so the design sews cleanly without puckering, gaps or thread breaks.
                        </p>
                        <p>
                            Auto-digitizing software rarely gets this right. A badly digitized file wastes thread, time and garments. Our digitizers
                            build every file by hand for the size and fabric you are stitching on, so it runs smoothly in production the first time.
                        </p>

                        <h2 className='text-2xl lg:text-3xl font-bold text-secondary mt-6'>Embroidery digitizing prices</h2>
                        <div className='overflow-x-auto'>
                            <table className='w-full text-left border border-[#323131]/10 rounded-xl overflow-hidden'>
                                <thead className='bg-secondary text-white'>
                                    <tr><th className='p-3'>Design</th><th className='p-3'>Price (USD)</th><th className='p-3'>Turnaround</th></tr>
                                </thead>
                                <tbody>
                                    <tr className='border-t'><td className='p-3'>Left chest / small logo</td><td className='p-3'>$9 – $12</td><td className='p-3'>~4 hours (2 hours rush)</td></tr>
                                    <tr className='border-t'><td className='p-3'>Jacket back / large design</td><td className='p-3'>$12 – $50</td><td className='p-3'>~4 hours (2 hours rush)</td></tr>
                                    <tr className='border-t'><td className='p-3'>Edits and revisions</td><td className='p-3'>Free</td><td className='p-3'>Quick</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className='text-sm'>Bulk orders get a discount. Prices depend on size and stitch count. Your first simple order can be a free trial.</p>

                        <h2 className='text-2xl lg:text-3xl font-bold text-secondary mt-6'>File formats for every embroidery machine</h2>
                        <p>
                            Every order includes <strong>EMB</strong> (Wilcom working file), <strong>DST</strong> (Tajima, the most widely used
                            commercial format), a <strong>PDF</strong> stitch sheet and a <strong>BMP/JPG</strong> preview. Need another format such as
                            PES (Brother), EXP (Melco/Bernina), JEF (Janome) or VP3? Just ask and we will include it.
                        </p>

                        <h2 className='text-2xl lg:text-3xl font-bold text-secondary mt-6'>How ordering works</h2>
                        <ol className='grid sm:grid-cols-2 gap-5'>
                            {steps.map((s, i) => (
                                <li key={s.t} className='rounded-xl border border-[#323131]/10 p-5 shadow-[0_4px_16px_rgba(0,0,0,0.06)]'>
                                    <span className='inline-flex w-9 h-9 items-center justify-center rounded-full bg-dark-primary font-bold text-secondary'>{i + 1}</span>
                                    <h3 className='font-semibold text-secondary text-lg mt-3'>{s.t}</h3>
                                    <p className='mt-1'>{s.d}</p>
                                </li>
                            ))}
                        </ol>

                        <h2 className='text-2xl lg:text-3xl font-bold text-secondary mt-6'>Who we digitize for</h2>
                        <p>
                            We work with embroidery shops, promotional product companies, uniform suppliers, clothing brands and patch makers across
                            the United Kingdom, the United States, Canada, Australia and Europe. Because everything is delivered by email, it makes no
                            difference where you are. Many of our customers have used us for years. Read their{' '}
                            <Link href='/#testimonials' className='underline font-semibold text-secondary'>reviews</Link> or see our{' '}
                            <Link href='/#gallery' className='underline font-semibold text-secondary'>digitizing gallery</Link>.
                        </p>
                        <p>
                            Need artwork redrawn first? Our <Link href='/vector-art-conversion' className='underline font-semibold text-secondary'>vector art conversion</Link> service
                            cleans up low-resolution logos, and we also make{' '}
                            <Link href='/custom-patches' className='underline font-semibold text-secondary'>custom embroidered, leather and PVC patches</Link>.
                        </p>
                    </div>
                </LayoutWrapper>
            </section>

            <Packages />
            <FaqSection faqs={faqs} title='Embroidery Digitizing FAQ' />
            <Contact />
        </div>
    );
}

export default EmbroideryDigitizingPage;
