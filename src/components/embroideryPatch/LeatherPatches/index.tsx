'use client'

import { Heading } from '@/components/common';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // navigation module
import { Autoplay, Navigation, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion'

function LeatherPatches() {
    let images = [
        '/assets/embroideryPatch/leather/1.png',
        '/assets/embroideryPatch/leather/2.png',
        '/assets/embroideryPatch/leather/3.png',
        '/assets/embroideryPatch/leather/4.png',
        '/assets/embroideryPatch/leather/5.png',
        '/assets/embroideryPatch/leather/6.png',
        '/assets/embroideryPatch/leather/7.png'
    ]
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Heading
                    title='Leather Gallery'
                    color='black'
                    text="Let's ready to elevate your designs with custom leather patches!"
                />
            </motion.div>
            <div className='bg-secondary py-16 mt-16'>
                <Swiper
                    slidesPerView={2} // Display 7 slides per view
                    autoplay={{
                        delay: 1000
                    }}
                    freeMode={true}
                    spaceBetween={20}
                    // speed={50}
                    modules={[Autoplay, FreeMode]}
                    className="mySwiper"
                    loop
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {
                        images.map((image, i) => {
                            return (
                                <SwiperSlide key={i} className=''>
                                    <div className='relative flex justify-center items-center rounded-2xl sm:rounded-3xl overflow-hidden'>
                                        <Image src={'/assets/border.png'} className='w-full' width={500} height={500} alt='' />
                                        <div className='w-full h-full absolute group flex justify-center items-center p-2'>
                                            <div className='absolute bottom-0 left-0 w-full h-full text-white font-bold flex items-end pb-4 px-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-50 translate-y-full group-hover:translate-y-0 transition-all [transition-duration:300ms]'>
                                                Leather Gallery
                                            </div>
                                            <Image src={image} className='w-[80%] object-contain group-hover:scale-125 transition-all origin-center [transition-duration:300ms]' width={400} height={400} alt='not found' />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default LeatherPatches;