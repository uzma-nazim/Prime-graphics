'use client'

import { Heading, LayoutWrapper, OrderNowLink } from '@/components/common';
import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'

function PVCPatch() {
    return (
        <div className='py-20' id='pvc'>
            <LayoutWrapper>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Heading title='PVC Patches' color='black' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className='flex flex-col-reverse md:flex-row'>
                        <div className='w-full md:w-1/2 md:pr-10 mt-10 md:mt-0'>
                            <h2 className='text-xl sm:text-2xl lg:text-3xl font-medium flex gap-3'><Check className='text-dark-primary flex-shrink-0' size={30} strokeWidth={3} />Built for Bold, Lasting Branding</h2>
                            <p className='text-base lg:text-xl mt-7 tracking-wider ml-5 sm:ml-12'>Give your branding a bold, dimensional finish with custom PVC patches. Made from durable, flexible material, they hold crisp detail and vibrant color while standing up to everyday wear. Add them to hats, bags, uniforms, and gear for a distinctive look that lasts.</p>
                            <div className='flex justify-center mt-7'>
                                <OrderNowLink>
                                    <button className='py-2 px-4 border-2 border-dark-primary rounded-xl text-sm font-bold text-white bg-dark-primary shadow-lg'>Get Quote</button>
                                </OrderNowLink>
                            </div>
                        </div>
                        <div className='flex justify-center w-full md:w-1/2 md:border-l border-[#C5C2C1]'>
                            <div className='w-[70%] lg:w-[60%] overflow-hidden'>
                                <Image src='/assets/embroideryPatch/pvc/PVC Main image.jpg' width={500} height={500} className='w-full object-contain md:hover:scale-125 transition-all origin-center [transition-duration:300ms]' alt='Custom PVC patch' />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </LayoutWrapper>
        </div>
    );
}

export default PVCPatch;