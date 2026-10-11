import { ChevronDown } from 'lucide-react';
import type { Faq } from '@/lib/site';
import { FaqJsonLd } from '@/components/seo/JsonLd';
import LayoutWrapper from '../LayoutWrapper';
import Heading from '../Heading';

// Server-rendered FAQ: the answers are in the HTML so Google and AI assistants can read and quote them.
function FaqSection({ faqs, title = 'Frequently Asked Questions', id = 'faq' }: { faqs: Faq[]; title?: string; id?: string }) {
    return (
        <section className='py-16' id={id}>
            <FaqJsonLd faqs={faqs} />
            <LayoutWrapper>
                <Heading title={title} color='black' lineColor='black' />
                <div className='mt-12 w-full lg:w-[85%] mx-auto flex flex-col gap-4'>
                    {faqs.map((f) => (
                        <details
                            key={f.q}
                            className='group rounded-xl border border-[#323131]/10 bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.06)]'
                        >
                            <summary className='flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-[#323131]'>
                                <h3>{f.q}</h3>
                                <ChevronDown className='flex-shrink-0 transition-transform group-open:rotate-180' aria-hidden='true' />
                            </summary>
                            <p className='mt-3 text-base leading-relaxed text-[#494747]'>{f.a}</p>
                        </details>
                    ))}
                </div>
            </LayoutWrapper>
        </section>
    );
}

export default FaqSection;
