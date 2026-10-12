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

// Home page title (page part only) and meta description. Main keyword: "custom patches".
export const HOME_TITLE_PART = 'Custom Patches & Embroidery Digitizing';
export const HOME_TITLE = `${HOME_TITLE_PART} | ${business.name}`;
export const HOME_DESCRIPTION =
    'Custom patches made to order: embroidered, PVC, leather and sublimation, plus embroidery digitizing and vector art from $9. UK, USA & worldwide. Free quote.';

export const packages = [
    { name: 'Left Chest Embroidery Digitizing', min: 9, max: 12 },
    { name: 'Jacket Back Embroidery Digitizing', min: 12, max: 50 },
    { name: 'Raster to Vector Conversion', min: 9, max: 12 },
    { name: 'Digital Vector Art', min: 14, max: 50 },
];
