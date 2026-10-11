'use client'

import React from 'react';
import LayoutWrapper from '../LayoutWrapper';
import Heading from '../Heading';
import { Mail, MapPinned, Phone } from 'lucide-react';
import { motion } from 'framer-motion'
import Link from 'next/link';
import OrderNowLink from '../OrderNowLink';

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
                    <div className='flex justify-center'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <address className='not-italic w-full sm:w-[400px] flex gap-5 items-center'>
                                <MapPinned strokeWidth={1} className='flex-shrink-0' size={50} />
                                <div className='flex flex-col gap-2'>
                                    <h3 className='text-xl font-semibold'>Address:</h3>
                                    <p className='text-[#8D8888] font-light'>
                                        5 Carlisle St, Soho, <br />
                                        London W1D 3BJ, <br />
                                        United Kingdom
                                    </p>
                                </div>
                            </address>
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
                                    <h3 className='text-xl font-semibold'>Email:</h3>
                                    <a href='mailto:primeservice903@gmail.com' className='text-[#8D8888] font-light'>primeservice903@gmail.com</a>
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
                                    <h3 className='text-xl font-semibold'>Phone:</h3>
                                    <a href='tel:+447429915781' className='text-[#8D8888] font-light'>+44 7429 915781</a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className='flex justify-center mt-10'>
                        <OrderNowLink>
                            <button className='py-3 px-10 font-bold bg-gradient-to-r from-[#FFDB5D] to-[#998438] rounded-xl shadow-lg'>Order Now</button>
                        </OrderNowLink>
                    </div>
                </div>
            </LayoutWrapper>
        </div>
    );
}

export default Contact;