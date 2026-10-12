import type { Metadata } from 'next';
import { Contact, Packages } from '@/components/common';
import { EmbroideryPatch, EmbroideryPatches, LeatherPatch, LeatherPatches, PVCPatch, PVCPatches } from '@/components/embroideryPatch';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
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

            <div className='mt-16'>
                <Packages />
            </div>
            <Contact />
        </div>
    );
}

export default Embroidery;
