import type { Metadata } from 'next';
import Link from 'next/link';
import { Contact, FaqSection, LayoutWrapper, Packages } from '@/components/common';
import SocialLinks from '@/components/common/SocialLinks';
import { EmbroideryPatch, EmbroideryPatches, LeatherPatch, LeatherPatches, PVCPatch, PVCPatches } from '@/components/embroideryPatch';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { patchHubFaqs } from '@/lib/patches';
import { DEFAULT_OG_IMAGE, pageMetadata } from '@/lib/seo';

const description =
    'Order custom patches for hats, jackets, uniforms and brands: iron-on, Velcro or sew-on backing, any shape and size. Worldwide shipping. Get a free quote.';

export const metadata: Metadata = pageMetadata({
    title: 'Custom Patches for Hats, Jackets & Brands',
    description,
    path: '/custom-patches',
    imageAlt: 'Custom patches made by Prime Graphics',
});

function CustomPatches() {
    return (
        <div>
            <ServiceJsonLd name='Custom Patches' description={description} path='/custom-patches' serviceType='Custom patches' image={DEFAULT_OG_IMAGE} />
            <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Custom Patches', path: '/custom-patches' }]} />

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
                            <Link href='/custom-sublimation-patches' className='underline font-semibold text-secondary'>Learn about custom sublimation patches</Link>.
                        </p>
                        <p className='mt-5'>
                            Every custom patch is made to your design, size and shape, for hats, jackets, uniforms and bags, with sew-on, iron-on,
                            Velcro or adhesive backing and worldwide shipping. Read more about our{' '}
                            <Link href='/custom-embroidered-patches' className='underline font-semibold text-secondary'>custom embroidered patches</Link>,{' '}
                            <Link href='/custom-pvc-patches' className='underline font-semibold text-secondary'>custom PVC patches</Link> and{' '}
                            <Link href='/custom-leather-patches' className='underline font-semibold text-secondary'>custom leather patches</Link>.
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
