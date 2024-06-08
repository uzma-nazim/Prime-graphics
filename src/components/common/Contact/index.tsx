'use client'

import React from 'react';
import LayoutWrapper from '../LayoutWrapper';
import Heading from '../Heading';
import { Mail, MapPinned, Phone } from 'lucide-react';
import { motion } from 'framer-motion'
import Link from 'next/link';

function Contact() {
    return (
        <div className='py-16' id='contact'>
            <LayoutWrapper>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Heading title='Contact us' color='black' text='You can connect with us when need help!' />
                </motion.div>
                <div className='mt-16 w-full lg:w-[85%] mx-auto'>
                    <div className='blok sm:flex justify-between gap-5'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className='w-full sm:w-[400px] flex gap-5 items-center'>
                                <MapPinned strokeWidth={1} className='flex-shrink-0' size={50} />
                                <div className='flex flex-col gap-2'>
                                    <h4 className='text-xl font-semibold'>Location 1:</h4>
                                    <p className='text-[#8D8888] font-light'>
                                        (270) 469-1246 <br />
                                        3936 Holley Rd <br />
                                        Moravia, New York(NY), 13118

                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className='w-full sm:w-[400px] flex gap-5 items-center mt-5 sm:mt-0'>
                                <MapPinned strokeWidth={1} className='flex-shrink-0' size={50} />
                                <div className='flex flex-col gap-2'>
                                    <h4 className='text-xl font-semibold'>Location 2:</h4>
                                    <p className='text-[#8D8888] font-light'>
                                        (270) 788-3011 <br />
                                        6451 State 64 Rte #3 <br />
                                        Naples, New York(NY), 14512
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className='block md:flex justify-between gap-5 mt-5 sm:mt-10'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className='w-full sm:w-[400px] flex gap-5 items-center'>
                                <Mail strokeWidth={1} className='flex-shrink-0' size={40} />
                                <div className='flex flex-col gap-2'>
                                    <h4 className='text-xl font-semibold'>Email:</h4>
                                    <p className='text-[#8D8888] font-light'>primeservice903@gmail.com</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className='w-full sm:w-[400px] flex gap-5 items-center mt-5 sm:mt-0'>
                                <Phone strokeWidth={1} className='flex-shrink-0' size={40} />
                                <div className='flex flex-col gap-2'>
                                    <h4 className='text-xl font-semibold'>Phone:</h4>
                                    <p className='text-[#8D8888] font-light'>+92 123456789 </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className='flex justify-center mt-10'>
                        <Link className='hidden [@media(min-width:900px)]:block' href={'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=primeservice903@gmail.com&tf=1'} target='_blank'><button className='py-3 px-10 font-bold bg-gradient-to-r from-[#FFDB5D] to-[#998438] rounded-xl shadow-lg'>Order Now</button></Link>
                        <Link className='block [@media(min-width:900px)]:hidden' href={'mailto:primeservice903@gmail.com '} target='_blank'><button className='py-3 px-10 font-bold bg-gradient-to-r from-[#FFDB5D] to-[#998438] rounded-xl shadow-lg'>Order Now</button></Link>
                    </div>
                </div>
            </LayoutWrapper>
        </div>
    );
}

export default Contact;