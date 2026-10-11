// Single source of truth for business facts used in page metadata, structured data (JSON-LD),
// visible FAQ sections and llms.txt. Update facts here and they change everywhere.

export const SITE_URL = 'https://www.theprimegraphics.com';

export const business = {
    name: 'Prime Graphics',
    alternateNames: ['Prime Graphics Digitizing', 'Prime Graphics & Embroidery Services'],
    email: 'primeservice903@gmail.com',
    phone: '+44 7429 915781',
    phoneHref: 'tel:+447429915781',
    address: {
        street: '5 Carlisle St, Soho',
        city: 'London',
        postalCode: 'W1D 3BJ',
        country: 'GB',
        countryName: 'United Kingdom',
    },
    logo: `${SITE_URL}/assets/logo.png`,
    image: `${SITE_URL}/assets/hero-cover.png`,
    social: [
        'https://www.facebook.com/profile.php?id=100083557743100',
        'https://www.instagram.com/prime_graphics269',
    ],
    description:
        'Prime Graphics makes custom patches (embroidered, PVC, leather and sublimation patches) for brands, teams, clubs and businesses in the UK, USA and worldwide. We also provide embroidery digitizing, vector art conversion and laser engraving designs, with a 4-hour turnaround on digital files.',
};

export type Faq = { q: string; a: string };

export const homeFaqs: Faq[] = [
    {
        q: 'What custom patches does Prime Graphics make?',
        a: 'We make custom embroidered patches, PVC (rubber) patches, leather patches and sublimation (full-colour printed) patches with your logo, for hats, uniforms, jackets, bags, clubs and brand merchandise. Send your logo for a free design mock-up and quote.',
    },
    {
        q: 'How much does embroidery digitizing cost?',
        a: 'Left chest logo digitizing costs $9–12 and jacket back designs cost $12–50, depending on size and stitch count. Raster to vector conversion is $9–12 and digital vector art is $14–50. Small edits and revisions are free, and bulk orders get a discount.',
    },
    {
        q: 'How fast is your turnaround on digitizing and vector files?',
        a: 'Standard turnaround for embroidery digitizing and vector files is about 4 hours. Rush orders can be delivered in around 2 hours. For custom patches, we confirm the production time with your quote.',
    },
    {
        q: 'Which embroidery file formats do you provide?',
        a: 'We deliver EMB, DST, PDF and BMP/JPG as standard. Other machine formats such as PES, EXP, JEF, VP3 and XXX are available on request, so your file runs on Tajima, Brother, Barudan, Janome, Ricoma and most other embroidery machines.',
    },
    {
        q: 'Do you work with customers in the USA and other countries?',
        a: 'Yes. Prime Graphics is an online digitizing service. We work with embroidery shops, apparel brands, print shops and laser engravers in the UK, USA, Canada, Australia and worldwide, and deliver every file by email.',
    },
    {
        q: 'Can I try your service before ordering?',
        a: 'Yes. We offer a free trial on your first simple order so you can check our quality and turnaround time.',
    },
    {
        q: 'How do I place an order?',
        a: 'Email your artwork and details (size, fabric or product, file format) to primeservice903@gmail.com or call +44 7429 915781. We confirm the price, complete the design and send your files. You can pay by PayPal or credit/debit card.',
    },
    {
        q: 'What is embroidery digitizing?',
        a: 'Embroidery digitizing is converting artwork such as a logo into a stitch file that an embroidery machine can read. The digitizer sets stitch types, direction, density, underlay and pull compensation so the design sews cleanly on the chosen fabric.',
    },
];

export const packages = [
    { name: 'Left Chest Embroidery Digitizing', min: 9, max: 12 },
    { name: 'Jacket Back Embroidery Digitizing', min: 12, max: 50 },
    { name: 'Raster to Vector Conversion', min: 9, max: 12 },
    { name: 'Digital Vector Art', min: 14, max: 50 },
];
