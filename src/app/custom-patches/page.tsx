import type { Metadata } from 'next';
import Link from 'next/link';
import { Contact, FaqSection, LayoutWrapper, Packages } from '@/components/common';
import SocialLinks from '@/components/common/SocialLinks';
import { EmbroideryPatch, EmbroideryPatches, LeatherPatch, LeatherPatches, PVCPatch, PVCPatches } from '@/components/embroideryPatch';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { patchHubFaqs } from '@/lib/patches';

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
