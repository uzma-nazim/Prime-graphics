'use client'
import React from 'react';
import Heading from '../../common/Heading';
import LayoutWrapper from '../../common/LayoutWrapper';
import Image from 'next/image';
import { motion } from 'framer-motion'
import Link from 'next/link';

function MakePayment() {
    return (
        <div className='pt-20'>
            <LayoutWrapper>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Heading title='Make  Payment' color='black' text='We accept PayPal' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className='mt-12 pt-8 pb-20 border-y border-[#C5C2C1]'>
                        <h2 className='text-xl text-center text-[#6D6D6D] font-medium'>All major Debit Cards and Credit Cards Online/Offline:</h2>
                        <p className='text-xl text-[#6D6D6D] text-center mt-10 w-[85%] mx-auto'>
                            At Prime Graphics, we strive to make the payment process as convenient as possible for our clients. We accept PayPal, ensuring a secure and hassle-free transaction experience. With PayPal, you can confidently make payments knowing your financial information is protected and your transactions are smooth and efficient.
                        </p>
                        <div className='flex flex-col items-center mt-14'>
                            <Link href={'https://paypal.me/Paymentlink524?country.x=GB&locale.x=en_GB'} target='_blank'>
                                <button className='font-bold flex items-center gap-2 bg-dark-primary py-1 px-5 rounded-xl shadow-md'>
                                    <Image src={'/assets/paypal-logo.png'} width={70} height={70} className='w-[35px]' alt='paypal-logo' />
                                    Pay Now
                                </button>
                            </Link>
                            <p className='text-[#6D6D6D] text-center mt-5'>Click on button to make your payment successful</p>
                        </div>
                    </div>
                </motion.div>
            </LayoutWrapper>
        </div>
    );
}

export default MakePayment;