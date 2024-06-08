'use client'
import { Heading, LayoutWrapper } from '@/components/common';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // navigation module
import 'swiper/css/grid';
import { Autoplay, FreeMode, Grid, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';


function VideoGallery() {
    // let data = [
    //     '/assets/vector/1.png',
    //     '/assets/vector/2.jpg',
    //     '/assets/vector/3.png',
    //     '/assets/vector/4.png',
    //     '/assets/vector/5.png',
    //     '/assets/vector/6.png',
    //     '/assets/vector/7.png',
    //     '/assets/vector/8.png',
    //     '/assets/vector/9.png',
    //     '/assets/vector/10.png',
    //     '/assets/vector/11.png',
    //     '/assets/vector/12.png',
    //     '/assets/vector/13.png',
    //     '/assets/vector/14.png',
    //     '/assets/vector/11.png',
    // ]

    let data = [
        ['/assets/vector/1.png', '/assets/vector/2.jpg'],
        ['/assets/vector/3.png', '/assets/vector/4.png'],
        ['/assets/vector/5.png', '/assets/vector/6.png'],
        ['/assets/vector/7.png', '/assets/vector/8.png'],
        ['/assets/vector/9.png', '/assets/vector/10.png'],
        ['/assets/vector/11.png', '/assets/vector/12.png'],
        ['/assets/vector/13.png', '/assets/vector/14.png']
    ]
    return (
        <div className='py-16 pb-24 bg-secondary'>
            <LayoutWrapper>
                <div className='relative'>
                    <div className='mb-20'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <Heading title='Vector Gallery' color='white' />
                        </motion.div>
                    </div>
                    {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-[350px_350px_350px] justify-between gap-x-5 gap-y-5 sm:gap-y-16 mt-10'>
                        {
                            data.map((image, i) => {
                                return (
                                    <div key={i} className='bg-[#CBD5FB]/20 h-[300px] sm:h-[350px] rounded-xl border-2 border-[#6D6D6D] py-10 px-8'>
                                        <Image src={image} width={500} height={500} className='w-full h-full object-contain' alt='image' />
                                    </div>
                                )
                            })
                        }
                    </div> */}
                    <div className='relative'>
                        <div className='absolute  w-full hidden sm:flex justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                            <div className="swiper-navigation-prev cursor-pointer">
                                <ChevronLeft size={50} className='text-white' />
                            </div>
                            <div className="swiper-navigation-next cursor-pointer">
                                <ChevronRight size={50} className='text-white' />
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
                                            <SwiperSlide key={i} className='py-5'>
                                                <div className='flex flex-col gap-10'>
                                                    <div key={i} className='relative bg-[#CBD5FB]/20 h-[300px] overflow-hidden group sm:h-[350px] rounded-xl border-2 border-[#6D6D6D] py-10 px-8 '>
                                                        <div className='absolute bottom-0 left-0 w-full h-full text-white font-bold flex items-end pb-4 px-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-50 translate-y-full group-hover:translate-y-0 transition-all [transition-duration:300ms]'>
                                                            Vector Gallery
                                                        </div>
                                                        <Image src={image[0]} width={500} height={500} className='w-full h-full object-contain group-hover:scale-110 transition-all origin-center [transition-duration:300ms]' alt='image' />
                                                    </div>
                                                    <div key={i} className='relative bg-[#CBD5FB]/20 h-[300px] overflow-hidden group sm:h-[350px] rounded-xl border-2 border-[#6D6D6D] py-10 px-8 '>
                                                        <div className='absolute bottom-0 left-0 w-full h-full text-white font-bold flex items-end pb-4 px-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-50 translate-y-full group-hover:translate-y-0 transition-all [transition-duration:300ms]'>
                                                            Vector Gallery
                                                        </div>
                                                        <Image src={image[1]} width={500} height={500} className='w-full h-full object-contain group-hover:scale-110 transition-all origin-center [transition-duration:300ms]' alt='image' />
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

export default VideoGallery;