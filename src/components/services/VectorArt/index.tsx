'use client'
import { Heading, LayoutWrapper } from '@/components/common';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function VectorArt() {
    return (
        <div className='py-16 bg-[url("/assets/services/vector-art-bg.png")] bg-cover' id='vector'>
            <LayoutWrapper>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Heading title='Vector Art' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className='flex flex-col-reverse md:flex-row'>
                        <div className='w-full md:w-1/2 text-white md:pr-10 mt-10 md:mt-0'>
                            <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium'>Vector Embroidery</h1>
                            <p className='text-base lg:text-xl mt-10 tracking-wider'>At Prime Graphics, we&apos;re masters in the craft of creating top-tier vector art. Our seasoned designers excel at crafting vector graphics of unparalleled quality, characterized by their scalability, precision, and adaptability to any application. With meticulous attention to detail, we transform your images into crisp, clean vectors, guaranteeing optimal clarity and versatility for all your projects.</p>
                            <p className='text-base lg:text-xl mt-10 tracking-wider'>Whether you require logo vectorization, intricate illustrations, or raster-to-vector conversions, our vector art services consistently yield exceptional results. Trust us to elevate your visuals with our expertise and commitment to excellence.</p>
                            <div className='flex gap-2 items-center mt-7'>
                                <span className='w-[40px] h-[40px] flex justify-center items-center bg-dark-primary rounded-full'>
                                    <Check className='text-white' />
                                </span>
                                <h2 className='text-lg lg:text-[22px] font-semibold'>Best Quality vector Art</h2>
                            </div>
                        </div>
                        <div className='flex justify-center w-full md:w-1/2 md:border-l border-[#C5C2C1]'>
                            <Image src={'/assets/services/vector-art.png'} width={500} height={500} className='w-[70%] lg:w-[55%] object-contain' alt='digitize' />
                        </div>
                    </div>
                </motion.div>
            </LayoutWrapper>
        </div>
    );
}

export default VectorArt;