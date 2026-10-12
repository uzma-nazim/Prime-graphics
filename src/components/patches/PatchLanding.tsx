import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Contact, FaqSection, LayoutWrapper, OrderNowLink } from '@/components/common';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { patchTypes, type PatchType } from '@/lib/patches';
import SocialLinks from '@/components/common/SocialLinks';

// Server-rendered landing page for one custom patch type, so all text is visible to search engines and AI crawlers.
export default function PatchLanding({ patch }: { patch: PatchType }) {
    const others = patchTypes.filter((p) => p.slug !== patch.slug);
    return (
        <div>
            <ServiceJsonLd name={`Custom ${patch.name}`} description={patch.metaDescription} path={`/${patch.slug}`} serviceType={`Custom ${patch.name.toLowerCase()}`} image={patch.ogImage} />
            <BreadcrumbJsonLd
                items={[
                    { name: 'Home', path: '/' },
                    { name: 'Custom Patches', path: '/custom-patches' },
                    { name: `Custom ${patch.name}`, path: `/${patch.slug}` },
                ]}
            />

            <section className='bg-secondary text-white py-16 md:py-24'>
                <LayoutWrapper>
                    <div className='block md:flex gap-10 items-center'>
                        <div className={`w-full ${patch.heroImage ? 'md:w-3/5' : ''}`}>
                            <p className='text-dark-primary font-semibold uppercase tracking-wider text-sm'>{patch.eyebrow}</p>
                            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight'>{patch.h1}</h1>
                            <p className='text-lg lg:text-xl mt-6 text-white/85'>{patch.intro}</p>
                            <ul className='mt-8 grid sm:grid-cols-2 gap-3 text-base lg:text-lg'>
                                {patch.highlights.map((h) => (
                                    <li key={h} className='flex gap-2 items-center'><Check className='text-dark-primary flex-shrink-0' /> {h}</li>
                                ))}
                            </ul>
                            <div className='mt-10'>
                                <OrderNowLink>
                                    <span className='inline-block py-3 px-10 font-bold text-secondary bg-gradient-to-r from-[#FFDB5D] to-[#998438] rounded-xl shadow-lg'>Get a Free Quote</span>
                                </OrderNowLink>
                            </div>
                        </div>
                        {patch.heroImage && (
                            <div className='w-full md:w-2/5 mt-10 md:mt-0 flex justify-center'>
                                <Image src={patch.heroImage} width={500} height={500} priority sizes='(min-width: 768px) 34vw, 77vw' className='w-[85%] h-auto rounded-xl' alt={patch.heroAlt} />
                            </div>
                        )}
                    </div>
                </LayoutWrapper>
            </section>

            <section className='py-16'>
                <LayoutWrapper>
                    <div className='w-full lg:w-[85%] mx-auto text-base lg:text-lg leading-relaxed text-[#494747] flex flex-col gap-5'>
                        {patch.sections.map((s) => (
                            <div key={s.h2} className='flex flex-col gap-4'>
                                <h2 className='text-2xl lg:text-3xl font-bold text-secondary'>{s.h2}</h2>
                                {s.body.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
                            </div>
                        ))}

                        <h2 className='text-2xl lg:text-3xl font-bold text-secondary mt-4'>Popular uses for custom {patch.name.toLowerCase()}</h2>
                        <ul className='grid sm:grid-cols-2 gap-3'>
                            {patch.uses.map((u) => (
                                <li key={u} className='flex gap-2 items-center'><Check className='text-dark-primary flex-shrink-0' /> {u}</li>
                            ))}
                        </ul>
                    </div>
                </LayoutWrapper>
            </section>

            {patch.gallery.length > 0 && (
                <section className='bg-[#EEF5FF] py-16'>
                    <LayoutWrapper>
                        <h2 className='text-2xl lg:text-3xl font-bold text-secondary text-center'>{patch.name} we have made</h2>
                        <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5'>
                            {patch.gallery.map((src, i) => (
                                <div key={src} className='bg-white rounded-xl p-4 flex items-center justify-center aspect-square shadow-[0_4px_16px_rgba(0,0,0,0.06)]'>
                                    <Image src={src} width={300} height={300} sizes='(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw' className='w-full h-full object-contain' alt={`${patch.galleryAlt} ${i + 1}`} />
                                </div>
                            ))}
                        </div>
                    </LayoutWrapper>
                </section>
            )}

            <section className='py-16'>
                <LayoutWrapper>
                    <div className='w-full lg:w-[85%] mx-auto text-center'>
                        <h2 className='text-2xl lg:text-3xl font-bold text-secondary'>Other custom patches we make</h2>
                        <div className='mt-8 grid sm:grid-cols-3 gap-4'>
                            {others.map((o) => (
                                <Link key={o.slug} href={`/${o.slug}`} className='rounded-xl border-2 border-dark-primary p-5 font-semibold text-secondary hover:bg-dark-primary transition-colors'>
                                    Custom {o.name}
                                </Link>
                            ))}
                        </div>
                        <p className='mt-8 text-[#494747]'>
                            Compare every type on our <Link href='/custom-patches' className='underline font-semibold text-secondary'>custom patches</Link> page.
                            Need the artwork prepared first? See our{' '}
                            <Link href='/embroidery-digitizing' className='underline font-semibold text-secondary'>embroidery digitizing services</Link> and{' '}
                            <Link href='/vector-art-conversion' className='underline font-semibold text-secondary'>vector art services</Link>.
                        </p>
                        <div className='mt-8 flex flex-col items-center gap-3'>
                            <p className='font-semibold text-secondary'>See our latest patches on social media</p>
                            <SocialLinks variant='dark' />
                        </div>
                    </div>
                </LayoutWrapper>
            </section>

            <FaqSection faqs={patch.faqs} title={`${patch.name} FAQ`} />
            <Contact />
        </div>
    );
}
