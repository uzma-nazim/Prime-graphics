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

function EngravingDesigns() {
    // let data = [
    //     '/assets/vector/engraving/1.png',
    //     '/assets/vector/engraving/2.png',
    //     '/assets/vector/engraving/3.png',
    //     '/assets/vector/engraving/4.png',
    //     '/assets/vector/engraving/5.png',
    //     '/assets/vector/engraving/6.png',
    //     '/assets/vector/engraving/7.png',
    //     '/assets/vector/engraving/8.png',
    //     '/assets/vector/engraving/9.png',
    //     '/assets/vector/engraving/10.png',
    //     '/assets/vector/engraving/11.png',
    //     '/assets/vector/engraving/12.png',
    //     '/assets/vector/engraving/13.png',
    //     '/assets/vector/engraving/14.png',
    // ]
    // [
    let data = [
        ['/assets/vector/engraving/1.png', '/assets/vector/engraving/2.png'],
        ['/assets/vector/engraving/3.png', '/assets/vector/engraving/4.png'],
        ['/assets/vector/engraving/5.png', '/assets/vector/engraving/6.png'],
        ['/assets/vector/engraving/7.png', '/assets/vector/engraving/8.png'],
        ['/assets/vector/engraving/9.png', '/assets/vector/engraving/10.png'],
        ['/assets/vector/engraving/11.png', '/assets/vector/engraving/12.png'],
        ['/assets/vector/engraving/13.png', '/assets/vector/engraving/14.png']
    ]

    return (
        <div className='relative pb-16 overflow-hidden'>
            {/* <div className='absolute top-0 w-full h-[55%] bg-[#D9D9D9] bg-opacity-50'></div> */}
            <div className='bg-[#D9D9D9] bg-opacity-50 pt-16 !pb-44'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Heading title='Engraving Designs' color='black' />
                </motion.div>
            </div>
            <LayoutWrapper>
                {/* <div className='relative z-50 -mt-40'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-5 md:gap-10 lg:gap-12'>
                        {
                            data.map((image, i) => {
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1}}
                                        viewport={{ once: true }}
                                    >
                                        <div className='px-5 py-10 h-[300px] rounded-md bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] flex justify-center items-center'>
                                            <Image src={image} width={400} height={400} className='w-auto h-full object-contain' alt='image' />
                                        </div>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
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
                                        <SwiperSlide key={i} className='py-5 px-3'>
                                            <div className='flex flex-col gap-10'>
                                                <div className='relative px-5 py-10 h-[300px] rounded-md group bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] flex justify-center items-center overflow-hidden'>
                                                    <div className='absolute bottom-0 w-full h-full text-white font-bold flex items-end pb-4 px-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-50 translate-y-full group-hover:translate-y-0 transition-all [transition-duration:300ms]'>
                                                        Engraving Design
                                                    </div>
                                                    <Image src={image[0]} width={400} height={400} className='w-auto h-full object-contain group-hover:scale-110 transition-all origin-center [transition-duration:300ms]' alt='image' />
                                                </div>
                                                <div className='relative px-5 py-10 h-[300px] rounded-md group bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] flex justify-center items-center overflow-hidden'>
                                                    <div className='absolute bottom-0 w-full h-full text-white font-bold flex items-end pb-4 px-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-50 translate-y-full group-hover:translate-y-0 transition-all [transition-duration:300ms]'>
                                                        Engraving Design
                                                    </div>
                                                    <Image src={image[1]} width={400} height={400} className='w-auto h-full object-contain group-hover:scale-110 transition-all origin-center [transition-duration:300ms]' alt='image' />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </LayoutWrapper>
        </div>
    );
}

export default EngravingDesigns;