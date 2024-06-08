'use client'
import { Heading, LayoutWrapper } from '@/components/common';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function EngravingDesigns() {
    return (
        <div className='mt-20 relative pb-36' id='engraving'>
            <Image src={'/assets/services/engraving-designs-bg.png'} width={500} height={700} className='w-[80%] sm:w-[350px] absolute top-0 bottom-0 right-0' alt='bg' />
            <LayoutWrapper>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className='relative z-20'>
                        <Heading title='Engraving Designs' color='black' />
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
                            <Image src={'/assets/services/engraving-designs.png'} width={500} height={500} className='w-[70%] lg:w-[55%] object-contain' alt='digitize' />
                        </div>
                        <div className='w-full md:w-1/2 md:pl-10 mt-10 md:mt-0'>
                            <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium'>Crafted Engraving Designs</h1>
                            <p className='text-base lg:text-xl mt-7 tracking-wider'>Crafted Engraving Designs embodies the artistry and precision of expert craftsmanship. With meticulous attention to detail, we specialize in creating bespoke engraved designs that elevate any surface or product. From personalized gifts to corporate awards, our skilled artisans transform your vision into tangible works of art. Whether you seek intricate patterns, elegant typography, or custom logos, our engraving services deliver unmatched quality and sophistication. Experience the timeless elegance of engraved designs with Crafted Engraving Designs.</p>
                            <div className='flex gap-2 items-center mt-7'>
                                <span className='w-[40px] h-[40px] flex justify-center items-center bg-dark-primary rounded-full'>
                                    <Check className='text-white' />
                                </span>
                                <h2 className='text-lg lg:text-[22px] font-semibold'>Perfect solution Designs Providers</h2>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </LayoutWrapper>
        </div>
    );
}

export default EngravingDesigns;