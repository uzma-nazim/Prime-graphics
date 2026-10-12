import type { Faq } from './site';

// FAQs for /embroidery-patch. Only facts the business has confirmed go here.
// Confirmed by owner: minimum order and production/shipping time depend on patch type and size;
// worldwide shipping; all common backing types available.

const BACKINGS = 'sew-on, iron-on, Velcro (hook and loop), peel-and-stick adhesive and more';

export const patchHubFaqs: Faq[] = [
    {
        q: 'What types of custom patches do you make?',
        a: 'We make custom embroidered patches, custom PVC (rubber) patches, custom leather patches and custom sublimation (full-colour printed) patches, all made to your design, size and shape.',
    },
    {
        q: 'Which patch type is best for my logo?',
        a: 'Embroidered patches suit bold logos and a classic stitched look. PVC suits fine detail, 3D effects and outdoor use. Leather gives a premium look on hats, denim and bags. Sublimation is best for photos, gradients and many colours (colors). We will recommend the best option for your artwork.',
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
        q: 'Do you make custom patches for hats?',
        a: 'Yes. Custom patches for hats and trucker caps are among our most popular orders. Embroidered patches, leather patches and PVC patches all work well on hats, and we will recommend the best type and backing for your hat style.',
    },
    {
        q: 'Can I order custom iron-on patches or custom Velcro patches?',
        a: 'Yes. Any of our patches can be made as custom iron-on patches or custom Velcro (hook and loop) patches, as well as sew-on or adhesive. Tell us how the patch will be attached when you ask for your quote.',
    },
    {
        q: 'Do you make custom patches for jackets?',
        a: 'Yes. We make custom patches for jackets, including biker and denim jackets, work uniforms and outerwear, in any size and shape.',
    },
    {
        q: 'Do you make custom patches in the UK?',
        a: 'Yes. Prime Graphics is based in London and supplies custom patches across the UK, and we also ship to the USA and worldwide. Delivery time depends on the patch type, size and quantity and is confirmed with your quote.',
    },
    {
        q: 'Can you make custom embroidered patches from my logo?',
        a: 'Yes. Send any logo file, photo or sketch. We digitize it in-house, so your custom embroidered patches stitch out with clean edges and readable text. Embroidered patches for hats, uniforms and jackets are our most requested orders.',
    },
    {
        q: 'What are custom PVC patches?',
        a: 'Custom PVC patches, also called custom rubber patches, are flexible rubber patches moulded with your logo. They have raised 2D or 3D detail, bright colours and are waterproof and very durable, which makes PVC patches for hats, bags and outdoor gear a popular choice.',
    },
    {
        q: 'Are PVC patches better than embroidered patches?',
        a: 'Neither is better for everything. PVC suits fine detail, a modern 3D look and outdoor use; embroidered patches give a classic stitched texture. We can mock up your logo in both.',
    },
    {
        q: 'Do you make custom leather patches for hats?',
        a: 'Yes. Custom leather hat patches are one of the most popular ways to brand trucker hats and caps, and leather patches also suit jeans, jackets and bags. Send your logo and we will prepare a free mock-up in the size and shape you need.',
    },
    {
        q: 'What are custom sublimation patches?',
        a: 'Custom sublimation patches are printed patches where the design is heat-transferred into the fabric. They are often called printed patches or full colour (full color) patches, and they allow unlimited colours, gradients and photo-quality detail with a smooth, flat finish.',
    },
    {
        q: 'Can you design my patch if I only have an idea?',
        a: 'Yes. Our designers can create patch artwork from a sketch, photo or description, and we digitize and vectorize everything in-house.',
        link: { href: '/services', text: 'Embroidery digitizing and vector art services' },
    },
];
