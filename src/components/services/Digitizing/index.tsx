'use client'

import { Heading, LayoutWrapper } from '@/components/common';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion'

function Digitizing() {
    
    return (
        <div className='mt-20 relative pb-24' id='digitize'>
            <Image src={'/assets/services/digitize-bg.png'} width={500} height={700} className='w-[90%] sm:w-[400px] absolute top-0 bottom-0 left-0' alt='bg' />
            <LayoutWrapper>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className='relative z-20'>
                        <Heading title='Digitizing' color='black' />
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

                            <Image src={'/assets/services/digitize.png'} width={500} height={500} className='w-[70%] lg:w-[55%] object-contain' alt='digitize' />
                        </div>
                        <div className='w-full md:w-1/2 md:pl-10 mt-10 md:mt-0'>
                            <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium'>We provide the Best Digitizing.</h1>
                            <p className='text-base lg:text-xl mt-7 tracking-wider'>Whenever you spot a shirt adorned with a company&apos;s embroidered logo or a hat displaying a sports team&apos;s emblem, what you&apos;re witnessing is the result of a process called &quot;digitizing.&quot; Embroidery digitizing involves transforming existing artwork, such as a company logo or team emblem, into a stitch file that can be sewn onto a garment by an embroidery machine.</p>
                            <p className='text-base lg:text-xl mt-4 tracking-wider'>Before any design can be embroidered, it must be digitized. Digitizing is a complex process that is both art and science.</p>
                            <div className='flex gap-2 items-center mt-7'>
                                <span className='w-[40px] h-[40px] flex justify-center items-center bg-dark-primary rounded-full'>
                                    <Check className='text-white' />
                                </span>
                                <h2 className='text-lg lg:text-[22px] font-semibold'>Best Approved Designs Embroidery</h2>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </LayoutWrapper >
        </div >
    );
}

export default Digitizing;