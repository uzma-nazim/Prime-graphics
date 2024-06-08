'use client'

import { Heading, LayoutWrapper } from '@/components/common';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // navigation module
import { Autoplay, Navigation, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import {motion} from 'framer-motion'

function EmbroideryPatches() {
    let images = [
        '/assets/embroideryPatch/patches/1.png',
        // '/assets/embroideryPatch/patches/2.png',
        '/assets/embroideryPatch/patches/3.png',
        '/assets/embroideryPatch/patches/4.png',
        '/assets/embroideryPatch/patches/5.png',
        '/assets/embroideryPatch/patches/6.png',
        '/assets/embroideryPatch/patches/7.png',
        '/assets/embroideryPatch/patches/8.png',
        // '/assets/embroideryPatch/patches/9.png',
    ]
    return (
        <div>
            <LayoutWrapper>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Heading
                        title='Embroidery Patch Portfolio'
                        color='black'
                        text='Each patch in our portfolio is a testament to our dedication to quality.
                    we offer custom designs tailored to your specific requirements.'
                    />
                </motion.div>
            </LayoutWrapper>
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
                                    <div className='relative flex justify-center items-center'>
                                        <Image src={'/assets/border.png'} className='w-full' width={500} height={500} alt='' />
                                        <div className='w-full h-full absolute flex justify-center items-center p-2'>
                                            <Image src={image} className='w-[80%] object-contain' width={400} height={400} alt='not found' />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div >
    );
}

export default EmbroideryPatches;