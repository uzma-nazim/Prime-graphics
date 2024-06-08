'use client'
import { Heading, LayoutWrapper } from '@/components/common';
import { Check } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion'

function Packages() {
    let data = [
        {
            packageName: 'LEFT CHEST EMB',
            price: '9-12',
            features: [
                '4 hours turnaround',
                '2 hours if rush',
                'EMB DST PDF BMP/JPG',
                'Other Formats (On request)',
                'Small Edits free',
                'Revisions free',
                'Discount on bulk order'
            ]
        },
        {
            packageName: 'JACKET BACK EMB',
            price: '12-50',
            features: [
                '4 hours turnaround',
                '2 hours if rush',
                'EMB DST PDF BMP/JPG',
                'Other Formats (On request)',
                'Small Edits free',
                'Revisions free',
                'Discount on bulk order'
            ]
        },
        {
            packageName: 'RASTER TO VECTOR',
            price: '9-12',
            features: [
                '4 hours turnaround',
                '2 hours if rush',
                'EMB DST PDF BMP/JPG',
                'Other Formats (On request)',
                'Small Edits free',
                'Revisions free',
                'Discount on bulk order'
            ]
        },
        {
            packageName: 'DIGITAL VECTOR',
            price: '14-50',
            features: [
                '4 hours turnaround',
                '2 hours if rush',
                'EMB DST PDF BMP/JPG',
                'Other Formats (On request)',
                'Small Edits free',
                'Revisions free',
                'Discount on bulk order'
            ]
        },
    ]
    return (
        <div className='bg-[#EEF5FF] pb-16 overflow-hidden' id='packages'>
            <div className='bg-[url("/assets/packages-bg.png")] bg-cover py-20 !pb-44'>
                <LayoutWrapper>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <Heading title='Our Packages' text='Challenging the Market Price, Order Today...!' color='black' lineColor='black' />
                        </div>
                    </motion.div>
                </LayoutWrapper>
            </div>
            <LayoutWrapper>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 -mt-16'>
                    {
                        data.map((val, i) => {
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 1 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className='py-8 px-7 rounded-[50px] border border-[#C5C2C1] bg-white'>
                                        <div>
                                            <h3 className='text-xl text-[#6D6D6D] font-bold h-[45px]'>{val.packageName}</h3>
                                            <div className='flex justify-center gap-1'>
                                                <span className='text-xs font-semibold mt-4'>$</span>
                                                <h2 className='text-[28px] font-medium text-center mt-3'>{val.price}</h2>
                                            </div>
                                        </div>
                                        <ul className='flex flex-col gap-1 mt-5 border-t border-[#CCC3C3] py-8'>
                                            {
                                                val.features.map((feature, index) => {
                                                    return (
                                                        <li key={index} className='text-sm font-light flex gap-5'>
                                                            <Check size={25} className='!font-light' />
                                                            {feature}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <div className='pt-7 flex justify-center'>
                                            <button className='py-2 px-4 border-2 border-dark-primary rounded-xl text-sm font-bold text-black hover:text-white bg-transparent hover:bg-dark-primary transition-all'>Order Now</button>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </LayoutWrapper>
        </div>
    );
}

export default Packages;