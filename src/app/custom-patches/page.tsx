import type { Metadata } from 'next';
import Link from 'next/link';
import { Contact, FaqSection, LayoutWrapper, OrderNowLink, Packages } from '@/components/common';
import SocialLinks from '@/components/common/SocialLinks';
import { EmbroideryPatch, EmbroideryPatches, LeatherPatch, LeatherPatches, PVCPatch, PVCPatches } from '@/components/embroideryPatch';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { patchHubFaqs, patchTypes } from '@/lib/patches';

const title = 'Custom Patches – Embroidered, PVC, Leather & Sublimation';
const description =
    'Order custom patches with your logo: embroidered, PVC, leather and sublimation patches for hats, uniforms, jackets, clubs and brands. Free design mock-up and quote. UK, USA & worldwide.';

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: '/custom-patches' },
    openGraph: { title, description, url: '/custom-patches', images: ['/assets/embroideryPatch/pvc/custom-pvc-patches.jpg'] },
};

function CustomPatches() {
    return (
        <div>
            <ServiceJsonLd name='Custom Patches' description={description} path='/custom-patches' />
            <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Custom Patches', path: '/custom-patches' }]} />

            <section className='bg-secondary text-white py-16 md:py-20'>
                <LayoutWrapper>
                    <div className='text-center w-full lg:w-[80%] mx-auto'>
                        <p className='text-dark-primary font-semibold uppercase tracking-wider text-sm'>Made to order · UK, USA & worldwide</p>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight'>Custom Patches for Brands, Teams &amp; Clubs</h1>
                        <p className='text-lg lg:text-xl mt-6 text-white/85'>
                            Prime Graphics makes custom embroidered, PVC, leather and sublimation patches with your logo. Send your artwork for a
                            free design mock-up and quote. We design, digitize and produce everything for you.
                        </p>
                        <div className='mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3'>
                            {patchTypes.map((p) => (
                                <Link key={p.slug} href={`/${p.slug}`} className='rounded-xl border-2 border-dark-primary px-4 py-3 font-semibold hover:bg-dark-primary hover:text-secondary transition-colors'>
                                    {p.name}
                                </Link>
                            ))}
                        </div>
                        <div className='mt-10 flex justify-center'>
                            <OrderNowLink>
                                <span className='inline-block py-3 px-10 font-bold text-secondary bg-gradient-to-r from-[#FFDB5D] to-[#998438] rounded-xl shadow-lg'>Get a Free Quote</span>
                            </OrderNowLink>
                        </div>
                    </div>
                </LayoutWrapper>
            </section>

            <EmbroideryPatch />
            <EmbroideryPatches />
            <LeatherPatch />
            <LeatherPatches />
            <PVCPatch />
            <PVCPatches />

            <section className='py-16' id='sublimation'>
                <LayoutWrapper>
                    <div className='w-full lg:w-[85%] mx-auto text-center text-base lg:text-lg text-[#494747]'>
                        <h2 className='text-2xl lg:text-3xl font-bold text-secondary'>Sublimation Patches</h2>
                        <p className='mt-5'>
                            For photos, gradients and designs with lots of colours, our full-colour sublimation patches print your artwork with
                            photo-quality detail and a smooth finish.{' '}
                            <Link href='/custom-sublimation-patches' className='underline font-semibold text-secondary'>Learn about sublimation patches</Link>.
                        </p>
                        <div className='mt-10 flex flex-col items-center gap-3'>
                            <p className='font-semibold text-secondary'>See our latest patches on social media</p>
                            <SocialLinks variant='dark' />
                        </div>
                    </div>
                </LayoutWrapper>
            </section>

            <div className='mt-4'>
                <Packages />
            </div>
            <FaqSection faqs={patchHubFaqs} title='Custom Patches FAQ' />
            <Contact />
        </div>
    );
}

export default CustomPatches;
