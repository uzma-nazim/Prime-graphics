'use client'

import { LayoutWrapper } from '@/components/common';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // navigation module
import 'swiper/css/pagination'; // pagination module
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Kaushan_Script } from 'next/font/google';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";


const kaushanScript = Kaushan_Script({ subsets: ["latin"], weight: ["400"] });

function Hero() {
    let data = [
        {
            title: 'Prime Graphics & Embroidery Services',
            text: 'Prime Graphics providing you a web-based digitizing source',
            bullets: [
                'Customized Solutions',
                'Quick Turnaround',
                'Exceptional Customer Service',
                'Precision Embroidery Digitizing'
            ],
            bgImage: '/assets/heroslider1.png',
            subSlider: [
                // '/assets/hero-sub-slider1_1.png',
                // '/assets/embroideryPatch/leather/6.png',
                // '/assets/vector/12.png',
                '/assets/embroidery-circle.png',
            ]
        },
        {
            title: 'Vector Art & Services',
            text: 'Prime Graphics providing you a web-based digitizing source',
            bullets: [
                'Customized Solutions',
                'Quick Turnaround',
                'Exceptional Customer Service',
                'Precision Embroidery Digitizing'
            ],
            bgImage: '/assets/heroslider2.png',
            subSlider: [
                // '/assets/hero-sub-slider2_1.png',
                // '/assets/embroideryPatch/patches/7.png',
                // '/assets/vector/8.png',
                '/assets/vector-circle.png',
            ]
        },
        {
            title: 'Engraving Designs & Digitizing-',
            text: 'Prime Graphics providing you a web-based digitizing source',
            bullets: [
                'Customized Solutions',
                'Quick Turnaround',
                'Exceptional Customer Service',
                'Precision Embroidery Digitizing'
            ],
            bgImage: '/assets/heroslider3.png',
            subSlider: [
                // '/assets/hero-sub-slider3_1.png',
                // '/assets/embroideryPatch/patches/8.png',
                // '/assets/vector/3.png',
                '/assets/engraving-circle.png',
            ]
        },
    ]
    return (
        <div className='relative'>
            <div className='absolute top-0 !z-50 w-full'>
                <Marquee className='bg-black text-white py-1'>
                    <div className='flex items-center gap-2 mx-24'>
                        <Image src={'/assets/gift.png'} className='w-[30px]' width={50} height={50} alt='gift' />
                        We offer a $free trial for your first simple order to showcase our quality and turnaround time.
                        <Image src={'/assets/gift.png'} className='w-[30px]' width={50} height={50} alt='gift' />
                    </div>
                    <div className='flex items-center gap-2 mx-24'>
                        <Image src={'/assets/gift.png'} className='w-[30px]' width={50} height={50} alt='gift' />
                        We offer a $free trial for your first simple order to showcase our quality and turnaround time.
                        <Image src={'/assets/gift.png'} className='w-[30px]' width={50} height={50} alt='gift' />
                    </div>
                </Marquee>
            </div>
            <Swiper
                slidesPerView={1} // Display 6 slides per view
                autoplay={{
                    delay: 3000
                }}
                speed={2000}
                pagination={true}
                freeMode={true}
                modules={[Autoplay, Pagination, FreeMode]}
                className="mySwiper"
                loop
            >
                {
                    data.map((val, i) => {
                        return (
                            <SwiperSlide key={i} className=''>
                                <div style={{ backgroundImage: `url(${val.bgImage})` }} className={`bg-cover py-7 md:py-14 md:[height:calc(100vh-134px)]`}>
                                    <div className='flex items-center h-full'>
                                        <LayoutWrapper>
                                            <div className='block md:flex gap-10 justify-between items-center'>
                                                <div className='w-full md:w-1/2 h-[420px] lg:h-[500px] py-8 sm:py-0 flex flex-col justify-center'>
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 100 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 1 }}
                                                        viewport={{ once: true }}
                                                    >
                                                        <h1 className={`text-3xl lg:text-[40px] text-white font-semibold leading-tight ${kaushanScript.className}`}>{val.title}</h1>
                                                        <div className='w-[250px] h-[5px] bg-dark-primary mt-3'></div>
                                                        <p className='text-xl lg:text-[25px] text-white mt-8 leading-tight'>{val.text}</p>
                                                        <div className='text-white mt-8 flex flex-col gap-3 lg:gap-5'>
                                                            {
                                                                val.bullets.map((point, point_i) => {
                                                                    return (
                                                                        <div key={point_i} className='flex gap-2 items-center text-lg lg:text-xl'><Check size={25} strokeWidth={2} /> {point}</div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </motion.div>
                                                </div>
                                                <div className='w-full md:w-[40%] h-[350px] [@media(min-width:400px)]:h-[400px] [@media(min-width:500px)]:h-[450px] sm:h-[600px] md:h-[500px] flex justify-center items-center relative mt-5 md:mt-0'>
                                                    {/* <div className='absolute w-full flex justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                                                        <div className="swiper-navigation-prev cursor-pointer">
                                                            <ChevronLeft size={40} className='text-white' />
                                                        </div>
                                                        <div className="swiper-navigation-next cursor-pointer">
                                                            <ChevronRight size={40} className='text-white' />
                                                        </div>
                                                    </div> */}
                                                    <div className='w-[80%] flex justify-center items-center'>
                                                        <Swiper
                                                            slidesPerView={1}
                                                            // navigation={{
                                                            //     nextEl: '.swiper-navigation-next',
                                                            //     prevEl: '.swiper-navigation-prev',
                                                            // }}
                                                            autoplay={{
                                                                delay: 1000
                                                            }}
                                                            speed={600}
                                                            spaceBetween={30}
                                                            freeMode={true}
                                                            modules={[ Autoplay, FreeMode]}
                                                            className="mySwiper"
                                                            loop
                                                        >
                                                            {
                                                                val.subSlider.map((image, sub_i) => {
                                                                    return (
                                                                        <SwiperSlide key={sub_i} className='flex items-center !my-auto'>
                                                                            <Image src={image} width={500} height={500} className='w-[100%]' alt='hero' />
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
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </div>
    );
}

export default Hero;