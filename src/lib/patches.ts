import type { Faq } from './site';

// Content for each custom patch landing page. Only facts the business has confirmed go here.
// Confirmed by owner: minimum order and production/shipping time depend on patch type and size;
// worldwide shipping; all common backing types available.

const BACKINGS = 'sew-on, iron-on, Velcro (hook and loop), peel-and-stick adhesive and more';

const sharedFaqs = (name: string): Faq[] => [
    {
        q: `What is the minimum order for custom ${name.toLowerCase()}?`,
        a: `The minimum order depends on the patch type and size. Send us your design, size and quantity and we will confirm the minimum and price in your free quote.`,
    },
    {
        q: `What backings are available for ${name.toLowerCase()}?`,
        a: `We offer all common backings, including ${BACKINGS}. Tell us how the patch will be attached and we will recommend the best option.`,
    },
    {
        q: `Do you ship custom ${name.toLowerCase()} worldwide?`,
        a: 'Yes. We work globally and ship to customers in cities across the UK, USA, Canada, Australia, Europe and beyond. Production and delivery time depend on the patch type, size and quantity, and we confirm it with your quote.',
    },
];

export type PatchType = {
    slug: string;
    name: string; // e.g. "PVC Patches"
    metaTitle: string;
    metaDescription: string;
    h1: string;
    eyebrow: string;
    intro: string;
    highlights: string[];
    heroImage?: string;
    heroAlt: string;
    gallery: string[];
    galleryAlt: string;
    sections: { h2: string; body: string[] }[];
    uses: string[];
    faqs: Faq[];
};

const embroideredGallery = [1, 3, 4, 5, 6, 7, 8].map((n) => `/assets/embroideryPatch/patches/${n}.png`);
const leatherGallery = [1, 2, 3, 4, 5, 6, 7].map((n) => `/assets/embroideryPatch/leather/${n}.png`);
const pvcGallery = [1, 2, 3, 4, 5, 6, 7].map((n) => `/assets/embroideryPatch/pvc/custom-pvc-patch-${n}.png`);

export const patchTypes: PatchType[] = [
    {
        slug: 'custom-embroidered-patches',
        name: 'Embroidered Patches',
        metaTitle: 'Custom Embroidered Patches – Free Design & Quote',
        metaDescription:
            'Order custom embroidered patches for hats, uniforms, jackets, clubs and brands. Free design mock-up and quote, premium threads, made to your size and shape. UK, USA & worldwide.',
        h1: 'Custom Embroidered Patches',
        eyebrow: 'Made to order · UK, USA & worldwide',
        intro:
            'Turn your logo, club crest or artwork into durable custom embroidered patches. We digitize every design in-house, so your patch stitches out sharp, with clean lettering and accurate colours.',
        highlights: ['Free design mock-up & quote', 'All backings: sew-on, iron-on, Velcro & more', 'Worldwide shipping', 'Any size, shape and thread colours', 'Digitized in-house for sharp detail', 'For hats, uniforms, jackets & merch'],
        heroImage: '/assets/embroideryPatch/embroidery-patch.svg',
        heroAlt: 'Custom embroidered patch made by Prime Graphics',
        gallery: embroideredGallery,
        galleryAlt: 'Custom embroidered patch example',
        sections: [
            {
                h2: 'Why choose embroidered patches?',
                body: [
                    'Embroidered patches are the classic way to put a brand, team or club on clothing. The raised thread texture looks premium, survives washing and wear, and works on almost any fabric, from caps and polo shirts to heavy work jackets and backpacks.',
                    'Because we are digitizing specialists, your patch starts as a properly built stitch file. That is the difference between crisp small text and a fuzzy, puckered patch.',
                ],
            },
            {
                h2: 'How to order custom embroidered patches',
                body: [
                    'Send us your logo or idea, the size you want and how many patches you need. We send a free design mock-up and quote, make any changes you want, then produce your patches once you approve the design.',
                ],
            },
        ],
        uses: ['Hats and trucker caps', 'Work uniforms and hi-vis', 'Biker and denim jackets', 'Sports teams and clubs', 'Brand merchandise', 'Bags and backpacks'],
        faqs: [...sharedFaqs('Embroidered Patches'),
            {
                q: 'How do I order custom embroidered patches?',
                a: 'Email your logo or artwork, the size and the quantity to primeservice903@gmail.com or call +44 7429 915781. We reply with a free mock-up and quote, then produce your patches once you approve the design.',
            },
            {
                q: 'Can you make embroidered patches from my logo?',
                a: 'Yes. Send any logo file, photo or sketch. We digitize it in-house so the patch stitches out with clean edges and readable text.',
            },
            {
                q: 'Do you ship custom patches to the USA?',
                a: 'Yes. We work with customers in the UK, USA and worldwide. Ask for a quote and we will confirm delivery to your country.',
            },
        ],
    },
    {
        slug: 'custom-pvc-patches',
        name: 'PVC Patches',
        metaTitle: 'Custom PVC Patches – Rubber Logo Patches for Hats & Gear',
        metaDescription:
            'Custom PVC (rubber) patches with your logo: bold 2D and 3D detail, vibrant colours, flexible and waterproof. Ideal for hats, bags, uniforms and tactical gear. Free quote.',
        h1: 'Custom PVC Patches',
        eyebrow: 'Rubber logo patches · UK, USA & worldwide',
        intro:
            'Give your brand a bold, dimensional finish with custom PVC patches. Made from durable, flexible material, they hold crisp detail and vibrant colour while standing up to everyday wear.',
        highlights: ['Free design mock-up & quote', 'All backings: sew-on, iron-on, Velcro & more', 'Worldwide shipping', 'Crisp raised detail', 'Flexible, durable and weather-resistant', 'For hats, bags, uniforms & gear'],
        heroImage: '/assets/embroideryPatch/pvc/custom-pvc-patches.jpg',
        heroAlt: 'Custom PVC rubber patches with logos',
        gallery: pvcGallery,
        galleryAlt: 'Custom PVC patch example',
        sections: [
            {
                h2: 'What are PVC patches?',
                body: [
                    'PVC patches are moulded from soft, flexible polyvinyl chloride (often called rubber patches). Each colour is filled into a mould, which gives sharp edges, raised 2D or 3D detail and strong, bright colours that don’t fray or fade like thread can.',
                    'Because PVC shrugs off water, dirt and sweat, these patches are popular for outdoor brands, tactical and airsoft gear, workwear, and trucker hats.',
                ],
            },
            {
                h2: 'PVC vs embroidered patches',
                body: [
                    'Choose PVC when you want a modern, rubbery 3D look, very fine detail or weather resistance. Choose embroidered patches for a classic textured, stitched look. Not sure? Send us your logo and we will mock it up both ways.',
                ],
            },
        ],
        uses: ['Trucker hats and caps', 'Tactical and airsoft gear', 'Outdoor and fishing brands', 'Bags and backpacks', 'Workwear and uniforms', 'Keychains and merch'],
        faqs: [...sharedFaqs('PVC Patches'),
            {
                q: 'What are custom PVC patches?',
                a: 'Custom PVC patches are flexible rubber patches moulded with your logo. They have raised 2D or 3D detail, bright colours and are waterproof and very durable.',
            },
            {
                q: 'Are PVC patches better than embroidered patches?',
                a: 'Neither is better for everything. PVC suits fine detail, a modern 3D look and outdoor use; embroidered patches give a classic stitched texture. We can mock up your logo in both.',
            },
            {
                q: 'How do I get a quote for PVC patches?',
                a: 'Email your logo, the size and the quantity to primeservice903@gmail.com or call +44 7429 915781 and we will send a free mock-up and quote.',
            },
        ],
    },
    {
        slug: 'custom-leather-patches',
        name: 'Leather Patches',
        metaTitle: 'Custom Leather Patches for Hats, Jeans & Jackets',
        metaDescription:
            'Custom leather patches branded with your logo for hats, denim, jackets and bags. Timeless, durable branding with free design mock-up and quote. UK, USA & worldwide.',
        h1: 'Custom Leather Patches',
        eyebrow: 'Engraved & branded leather · UK, USA & worldwide',
        intro:
            'Add timeless, premium branding to hats, denim, jackets and bags with custom leather patches. Leather is known for its durability, and it ages beautifully, making your logo look better over time.',
        highlights: ['Free design mock-up & quote', 'All backings: sew-on, iron-on, Velcro & more', 'Worldwide shipping', 'Your logo branded on leather', 'Durable, premium look', 'For hats, jeans, jackets & bags'],
        heroImage: '/assets/embroideryPatch/leather-patch.png',
        heroAlt: 'Custom leather patch with engraved logo',
        gallery: leatherGallery,
        galleryAlt: 'Custom leather patch example',
        sections: [
            {
                h2: 'Why brands choose leather patches',
                body: [
                    'Leather patches give products a handcrafted, high-end feel. They are a favourite for leather-patch hats, denim labels, outdoor apparel, bags and gifts. Because we also produce engraving artwork in-house, your logo is prepared to engrave cleanly with sharp lines.',
                ],
            },
            {
                h2: 'How to order custom leather patches',
                body: [
                    'Send your logo, the patch size and shape, and the quantity. We send a free mock-up and quote, adjust the design until you are happy, then produce your patches.',
                ],
            },
        ],
        uses: ['Leather patch hats', 'Jeans and denim labels', 'Jackets and outerwear', 'Bags and accessories', 'Corporate and event gifts', 'Handmade product labels'],
        faqs: [...sharedFaqs('Leather Patches'),
            {
                q: 'Can you put my logo on a leather patch?',
                a: 'Yes. We prepare your logo for engraving and produce custom leather patches in the size and shape you need. Send your logo for a free mock-up.',
            },
            {
                q: 'What are leather patches used for?',
                a: 'Leather patches are popular on hats, jeans, jackets, bags and as product labels, giving a premium, long-lasting branded look.',
            },
            {
                q: 'How do I order custom leather patches?',
                a: 'Email your logo, size and quantity to primeservice903@gmail.com or call +44 7429 915781 for a free mock-up and quote.',
            },
        ],
    },
    {
        slug: 'custom-sublimation-patches',
        name: 'Sublimation Patches',
        metaTitle: 'Custom Sublimation Patches – Full Colour Printed Patches',
        metaDescription:
            'Custom sublimation patches print your artwork in full colour with photo-quality detail, gradients and unlimited colours. Perfect for complex logos and photos. Free quote.',
        h1: 'Custom Sublimation Patches',
        eyebrow: 'Full-colour printed patches · UK, USA & worldwide',
        intro:
            'When your design has photos, gradients, fine text or lots of colours, sublimation patches reproduce it exactly. The artwork is printed directly into the fabric for vivid, full-colour patches that won’t crack or peel.',
        highlights: ['Free design mock-up & quote', 'All backings: sew-on, iron-on, Velcro & more', 'Worldwide shipping', 'Unlimited colours and gradients', 'Photo-quality detail', 'Smooth, lightweight finish'],
        heroImage: undefined,
        heroAlt: '',
        gallery: [],
        galleryAlt: 'Custom sublimation patch example',
        sections: [
            {
                h2: 'What are sublimation patches?',
                body: [
                    'Sublimation (dye-sublimation) uses heat to turn special inks into a gas that bonds into the patch fabric. The result is a smooth, flat patch with unlimited colours and photographic detail, which is impossible with thread.',
                    'Many sublimation patches combine a printed centre with an embroidered or merrowed border for a classic patch edge.',
                ],
            },
            {
                h2: 'Sublimation vs embroidered patches',
                body: [
                    'Embroidery is ideal for bold logos with a few colours. Sublimation is the better choice for photos, gradients, very small text or designs with many colours. Send your artwork and we will recommend the best option.',
                ],
            },
        ],
        uses: ['Photo and portrait patches', 'Detailed or multi-colour logos', 'Event and memorial patches', 'Sports teams and fan merch', 'Hats and jackets', 'Brand merchandise'],
        faqs: [...sharedFaqs('Sublimation Patches'),
            {
                q: 'What is a sublimation patch?',
                a: 'A sublimation patch is a printed patch where the design is heat-transferred into the fabric. It allows unlimited colours, gradients and photo-quality detail with a smooth, flat finish.',
            },
            {
                q: 'When should I choose sublimation instead of embroidery?',
                a: 'Choose sublimation for photos, gradients, very small text or designs with many colours. Choose embroidery for bold logos with a few solid colours and a textured look.',
            },
            {
                q: 'How do I order custom sublimation patches?',
                a: 'Email your artwork, size and quantity to primeservice903@gmail.com or call +44 7429 915781 for a free mock-up and quote.',
            },
        ],
    },
];

export const patchHubFaqs: Faq[] = [
    {
        q: 'What types of custom patches do you make?',
        a: 'We make custom embroidered patches, PVC (rubber) patches, leather patches and sublimation (full-colour printed) patches, all made to your design, size and shape.',
    },
    {
        q: 'Which patch type is best for my logo?',
        a: 'Embroidered patches suit bold logos and a classic stitched look. PVC suits fine detail, 3D effects and outdoor use. Leather gives a premium look on hats, denim and bags. Sublimation is best for photos, gradients and many colours. We will recommend the best option for your artwork.',
    },
    {
        q: 'How do I order custom patches?',
        a: 'Email your logo, the size, quantity and patch type to primeservice903@gmail.com or call +44 7429 915781. We send a free design mock-up and quote and start production once you approve.',
    },
    {
        q: 'Do you ship custom patches worldwide?',
        a: 'Yes. Prime Graphics works globally, with customers in cities across the UK, USA, Canada, Australia, Europe and beyond. Production and delivery time depend on the patch type, size and quantity and are confirmed with your quote.',
    },
    {
        q: 'What is the minimum order for custom patches?',
        a: 'The minimum order depends on the patch type and size. Send your design, size and quantity for a free quote with the exact minimum and price.',
    },
    {
        q: 'What patch backings do you offer?',
        a: `We offer all common backings, including ${BACKINGS}.`,
    },
    {
        q: 'Can you design my patch if I only have an idea?',
        a: 'Yes. Our designers can create patch artwork from a sketch, photo or description, and we digitize and vectorize everything in-house.',
    },
];
