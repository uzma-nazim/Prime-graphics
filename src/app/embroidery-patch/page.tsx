import type { Metadata } from 'next';
import Link from 'next/link';
import { Contact, FaqSection, LayoutWrapper, Packages } from '@/components/common';
import SocialLinks from '@/components/common/SocialLinks';
import { EmbroideryPatch, EmbroideryPatches, LeatherPatch, LeatherPatches, PVCPatch, PVCPatches } from '@/components/embroideryPatch';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { patchHubFaqs } from '@/lib/patches';
import { DEFAULT_OG_IMAGE, pageMetadata } from '@/lib/seo';

const description =
    'Order custom patches: embroidered, PVC, leather and sublimation, for hats, jackets and uniforms. Iron-on, Velcro or sew-on. Worldwide shipping. Free quote.';

export const metadata: Metadata = pageMetadata({
    title: 'Custom Patches – Embroidered, PVC & Leather',
    description,
    path: '/embroidery-patch',
    imageAlt: 'Custom patches made by Prime Graphics',
});

// One Service per patch type, each pointing at its section of this page.
const patchServices = [
    {
        name: 'Custom Embroidered Patches',
        anchor: 'embroidered',
        image: '/assets/embroideryPatch/patches/custom-embroidered-patch-1.png',
        description: 'Custom embroidered patches for hats, uniforms, jackets and clubs, digitized in-house for sharp detail, in any size, shape and backing.',
    },
    {
        name: 'Custom Leather Patches',
        anchor: 'leather',
        image: '/assets/embroideryPatch/leather-patch.png',
        description: 'Custom leather patches for hats, denim, jackets and bags, branded with your logo for a premium, durable finish.',
    },
    {
        name: 'Custom PVC Patches',
        anchor: 'pvc',
        image: DEFAULT_OG_IMAGE,
        description: 'Custom PVC patches (rubber patches) with your logo in bold 2D or 3D detail. Flexible, waterproof and suited to hats, bags and gear.',
    },
    {
        name: 'Custom Sublimation Patches',
        anchor: 'sublimation',
        image: DEFAULT_OG_IMAGE,
        description: 'Custom sublimation patches: full colour printed patches with photo-quality detail, gradients and unlimited colours.',
    },
];

function Embroidery() {
    return (
        <div>
            <ServiceJsonLd name='Custom Patches' description={description} path='/embroidery-patch' serviceType='Custom patches' image={DEFAULT_OG_IMAGE} />
            {patchServices.map((svc) => (
                <ServiceJsonLd key={svc.anchor} name={svc.name} description={svc.description} path='/embroidery-patch' anchor={svc.anchor} serviceType={svc.name} image={svc.image} />
            ))}
            <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Custom Patches', path: '/embroidery-patch' }]} />

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
                            For photos, gradients and designs with lots of colours, our custom sublimation patches print your artwork in full
                            colour with photo-quality detail and a smooth finish. They are often called printed patches: the design is
                            heat-transferred into the fabric, so it won&apos;t crack or peel.
                        </p>
                        <p className='mt-5'>
                            Every custom patch is made to your design, size and shape, for hats, jackets, uniforms and bags, with sew-on, iron-on,
                            Velcro or adhesive backing and worldwide shipping. Compare our{' '}
                            <Link href='#embroidered' className='underline font-semibold text-secondary'>custom embroidered patches</Link>,{' '}
                            <Link href='#leather' className='underline font-semibold text-secondary'>custom leather patches</Link> and{' '}
                            <Link href='#pvc' className='underline font-semibold text-secondary'>custom PVC patches</Link>, or see our{' '}
                            <Link href='/services' className='underline font-semibold text-secondary'>embroidery digitizing and vector art services</Link>.
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

export default Embroidery;
