'use client'
import { Heading, LayoutWrapper } from '@/components/common';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'

function About() {
    return (
        <div className={`py-14 bg-[url("/assets/about-bg.png")] bg-cover`}>
            <LayoutWrapper>
                <div className='flex flex-col-reverse lg:flex-row justify-between gap-16 lg:gap-5'>
                    <div className='w-full lg:w-[45%]'>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <Image src={'/assets/about.png'} width={700} height={700} className='w-full' alt='about' />
                        </motion.div>
                    </div>
                    <div className='w-full lg:w-[45%]'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <Heading title='About us' />
                            {/* <div className='flex justify-center'>
                            <div className='flex flex-col gap-3 mx-auto'>
                                <h2 className='text-[40px] font-bold text-white'>About us</h2>
                                <div className='w-[170px] h-[5px] bg-dark-primary'></div>
                            </div>
                        </div> */}
                        </motion.div>
                        <div className='mt-10'>
                            {/* <h2 className='text-3xl font-semibold text-white text-center'>Why work with us?</h2> */}
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                                <p className='text-lg md:text-2xl text-white mt-7 sm:mt-14'>
                                    For years, Prime Graphics has been the trusted name in custom patches, digitizing, and vector art services. Our reputation for quality craftsmanship and personalized designs has established us as industry leaders. With a dedicated team and a commitment to surpassing expectations, we bring your ideas to life with precision and passion. Join our long-standing tradition of excellence and experience the art of customization with us.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >

                                <div className='flex mt-20 justify-center lg:justify-start'>
                                    <div className='pr-7 sm:pr-12 py-2'>
                                        <h2 className='text-3xl md:text-[40px] font-bold text-white leading-tight'>1000+</h2>
                                        <p className='text-lg md:text-2xl text-white'>Projects</p>
                                    </div>
                                    <div className='w-[1px] bg-[#9C9C9C] flex-shrink-0'></div>
                                    <div className='pl-7 sm:pl-12 py-2'>
                                        <h2 className='text-3xl md:text-[40px] font-bold text-white leading-tight'>99.9%</h2>
                                        <p className='text-lg md:text-2xl text-white'>Perfection</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </LayoutWrapper>
        </div>
    );
}

export default About;