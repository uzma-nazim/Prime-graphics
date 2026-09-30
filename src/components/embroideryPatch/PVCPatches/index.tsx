'use client'

import { Heading } from '@/components/common';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion'

function PVCPatches() {
    const images = [
        '/assets/embroideryPatch/pvc/ChatGPT Image Sep 29, 2026, 04_24_57 AM-Photoroom.png',
        '/assets/embroideryPatch/pvc/ChatGPT Image Sep 29, 2026, 04_27_28 AM-Photoroom.png',
        '/assets/embroideryPatch/pvc/ChatGPT Image Sep 29, 2026, 04_30_30 AM-Photoroom.png',
        '/assets/embroideryPatch/pvc/PVC 1-Photoroom.png',
        '/assets/embroideryPatch/pvc/PVC 2-Photoroom.png',
        '/assets/embroideryPatch/pvc/PVC 3-Photoroom.png',
        '/assets/embroideryPatch/pvc/PVC 4-Photoroom.png',
    ];

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Heading
                    title='PVC Patch Gallery'
                    color='black'
                    text='Explore custom PVC patches made for your brand.'
                />
            </motion.div>
            <div className='bg-secondary py-16 mt-16'>
                <Swiper
                    slidesPerView={2}
                    autoplay={{ delay: 1000 }}
                    freeMode
                    spaceBetween={20}
                    modules={[Autoplay, FreeMode]}
                    className='mySwiper'
                    loop
                    breakpoints={{
                        640: { slidesPerView: 3, spaceBetween: 20 },
                        768: { slidesPerView: 5, spaceBetween: 30 },
                        1024: { slidesPerView: 6, spaceBetween: 40 },
                    }}
                >
                    {images.map((image) => (
                        <SwiperSlide key={image}>
                            <div className='relative flex justify-center items-center rounded-2xl sm:rounded-3xl overflow-hidden'>
                                <Image src='/assets/border.png' className='w-full' width={500} height={500} alt='' />
                                <div className='w-full h-full absolute group flex justify-center items-center p-2'>
                                    <div className='absolute bottom-0 left-0 w-full h-full text-white font-bold flex items-end pb-4 px-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-50 translate-y-full group-hover:translate-y-0 transition-all [transition-duration:300ms]'>
                                        PVC Patch Gallery
                                    </div>
                                    <Image src={image} className='w-[80%] object-contain group-hover:scale-125 transition-all origin-center [transition-duration:300ms]' width={400} height={400} alt='Custom PVC patch' />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default PVCPatches;