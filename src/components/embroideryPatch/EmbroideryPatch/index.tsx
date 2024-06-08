'use client'

import { Heading, LayoutWrapper, OrderNowLink } from '@/components/common';
import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'

function EmbroideryPatch() {
    return (
        <div className='mt-20 relative pb-24'>
            <LayoutWrapper>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className='relative z-20'>
                        <Heading title='Embroidery Patches' color='black' />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className='block md:flex relative z-20'>
                        <div className='flex justify-center w-full md:w-1/2 md:border-r border-[#C5C2C1]'>
                            <div className='w-[70%] lg:w-[60%] overflow-hidden'>
                                <Image src={'/assets/embroideryPatch/embroidery-patch.svg'} width={500} height={500} className='w-full object-contain hover:scale-125 transition-all origin-center [transition-duration:300ms]' alt='digitize' />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 md:pl-10 mt-10 md:mt-0'>
                            <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium flex gap-3'><Check className='text-dark-primary flex-shrink-0' size={30} strokeWidth={3} /> Personalized, Detailed and Durable Designs</h1>
                            {/* <ul className='text-base lg:text-xl mt-7 tracking-wider list-disc list-outside ml-5 sm:ml-16 flex flex-col gap-3'>
                            <li>Express your unique style and identity with fully customizable embroidery patches.</li>
                            <li>Our embroidery patches are made to last. Constructed with high-quality threads and materials, they withstand regular wear and tear.</li>
                            <li>Elevate your brand or organization with professionally crafted embroidery patches.</li>
                        </ul> */}
                            <p className='text-base lg:text-xl mt-7 tracking-wider ml-5 sm:ml-12'>Infuse your distinct style and identity into every stitch with our fully customizable embroidery patches. Crafted for longevity, our patches boast durability and resilience, thanks to premium threads and materials. Transform your brand or organization with our expertly crafted embroidery patches, designed to elevate your presence with professionalism and flair.</p>
                            <div className='flex justify-center mt-7'>
                                <OrderNowLink>
                                    <button className='py-2 px-4 border-2 border-dark-primary rounded-xl text-sm font-bold text-white bg-dark-primary shadow-lg'>Get Quote</button>
                                </OrderNowLink>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </LayoutWrapper>
        </div>
    );
}

export default EmbroideryPatch;