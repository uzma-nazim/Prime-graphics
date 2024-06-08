'use client'

import { Heading, LayoutWrapper } from '@/components/common';
import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'

function LeatherPatch() {
    return (
        <div className='py-20' id='leather'>
            <LayoutWrapper>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Heading title='Leather Patches' color='black' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className='flex flex-col-reverse md:flex-row'>
                        <div className='w-full md:w-1/2 md:pr-10 mt-10 md:mt-0'>
                            <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium flex gap-3'><Check className='text-dark-primary flex-shrink-0' size={30} strokeWidth={3} />Timeless Elegance and Lasting Quality</h1>
                            {/* <ul className='text-base lg:text-xl mt-7 tracking-wider list-disc list-outside ml-5 sm:ml-16 flex flex-col gap-3'>
                            <li>Add a touch of sophistication and durability to your garments and accessories with our custom leather patches service.</li>
                            <li>Renowned for its durability, leather patches are built to withstand the test of time.</li>
                            <li>Leather patches serve as a powerful branding tool, allowing you to showcase your logo, in a stylish way.</li>
                        </ul> */}
                            <p className='text-base lg:text-xl mt-7 tracking-wider ml-5 sm:ml-12'>Enhance the elegance and endurance of your garments and accessories with our bespoke leather patches service. Famed for their durability, leather patches are crafted to endure the trials of time. Embrace the power of branding with our leather patches, offering a stylish platform to showcase your logo with sophistication and flair.</p>
                            <div className='flex justify-center mt-7'>
                                <button className='py-2 px-4 border-2 border-dark-primary rounded-xl text-sm font-bold text-white bg-dark-primary shadow-lg'>Get Quote</button>
                            </div>
                        </div>
                        <div className='flex justify-center w-full md:w-1/2 md:border-l border-[#C5C2C1]'>
                            <div className='w-[70%] lg:w-[60%] overflow-hidden'>
                                <Image src={'/assets/embroideryPatch/leather-patch.png'} width={500} height={500} className='w-full object-contain md:hover:scale-125 transition-all origin-center [transition-duration:300ms]' alt='digitize' />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </LayoutWrapper>
        </div>
    );
}

export default LeatherPatch;