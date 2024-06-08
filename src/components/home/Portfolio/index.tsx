'use client'

import { Heading, LayoutWrapper } from '@/components/common';
import { Kaushan_Script } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // navigation module
import 'swiper/css/grid';
import { Autoplay, FreeMode, Grid, Navigation } from 'swiper/modules';


const kaushanScript = Kaushan_Script({ subsets: ["latin"], weight: ["400"] });

function Portfolio() {
    // let data = [
    //     '/assets/portfolio1.png',
    //     '/assets/portfolio2.png',
    //     '/assets/portfolio3.png',
    //     '/assets/portfolio4.png',
    //     '/assets/portfolio5.png',
    //     '/assets/portfolio6.png',
    //     '/assets/portfolio7.jpg',
    //     '/assets/portfolio8.jpg',
    // ]

    let data = [
        ['/assets/portfolio1.png', '/assets/portfolio2.JPG'],
        ['/assets/portfolio3.JPG', '/assets/portfolio4.png'],
        ['/assets/portfolio5.png', '/assets/portfolio6.png'],
        ['/assets/portfolio7.JPG', '/assets/portfolio8.jpg']
    ]
    return (
        <div className='relative py-14' id='gallery'>
            <Image src={'/assets/portfolio-top-image.svg'} width={1500} height={500} className='absolute top-0 left-0 w-full' alt='svg' />
            <Image src={'/assets/portfolio-bottom-image.svg'} width={1500} height={500} className='absolute bottom-0 left-0 w-full' alt='svg' />
            <LayoutWrapper>
                <div className='relative z-20'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <Heading title='Our Gallery' color='black' lineColor='black' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-3xl font-bold text-center mt-16 ${kaushanScript.className}`}>Digitizing Gallery</h2>
                    </motion.div>
                    {/* <div className='mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14'>
                        {
                            data.map((image, index) => {
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Image src={image} width={500} height={500} className='w-full' alt='1' />
                                    </motion.div>
                                )
                            })
                        }
                    </div> */}
                    <div className='relative mt-14 lg:mt-24'>
                        <div className='absolute  w-full hidden sm:flex justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                            <div className="swiper-navigation-prev cursor-pointer">
                                <ChevronLeft size={50} className='text-black' />
                            </div>
                            <div className="swiper-navigation-next cursor-pointer">
                                <ChevronRight size={50} className='text-black' />
                            </div>
                        </div>
                        <div className='sm:w-[85%] mx-auto'>
                            <Swiper
                                slidesPerView={1} // Display 6 slides per view
                                navigation={{
                                    nextEl: '.swiper-navigation-next',
                                    prevEl: '.swiper-navigation-prev',
                                }}
                                autoplay={{
                                    delay: 1000
                                }}
                                // grid={{
                                //     rows: 2,
                                //     fill: 'row',
                                // }}
                                spaceBetween={20}
                                freeMode={true}
                                speed={1000}
                                modules={[Navigation, Autoplay, FreeMode]}
                                className="mySwiper"
                                loop
                                breakpoints={{
                                    // 640: {
                                    //     slidesPerView: 3,
                                    //     spaceBetween: 20,
                                    // },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 50,
                                    },
                                }}
                            >
                                {
                                    data.map((image, i) => {
                                        return (
                                            <SwiperSlide key={i} className='py-3'>
                                                <div className='flex flex-col gap-10'>
                                                    <div className='relative w-full h-[300px] group overflow-hidden border-2 rounded-xl p-4'>
                                                        <div className='absolute bottom-0 left-0 w-full h-full text-white font-bold flex items-end pb-4 px-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-50 translate-y-full group-hover:translate-y-0 transition-all [transition-duration:300ms]'>
                                                            Digitizing Gallery
                                                        </div>
                                                        <Image src={image[0]} width={500} height={500} className='w-full h-full object-contain group-hover:scale-125 transition-all origin-center [transition-duration:300ms]' alt='1' />
                                                    </div>
                                                    <div className='relative w-full h-[300px] group overflow-hidden border-2 rounded-xl p-4'>
                                                        <div className='absolute bottom-0 left-0 w-full h-full text-white font-bold flex items-end pb-4 px-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-50 translate-y-full group-hover:translate-y-0 transition-all [transition-duration:300ms]'>
                                                            Digitizing Gallery
                                                        </div>
                                                        <Image src={image[1]} width={500} height={500} className='w-full h-full object-contain group-hover:scale-125 transition-all origin-center [transition-duration:300ms]' alt='1' />
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </LayoutWrapper>
        </div>
    );
}

export default Portfolio;