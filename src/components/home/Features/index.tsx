'use client'
import { Heading, LayoutWrapper } from '@/components/common';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'

function Features() {
    let data = [
        {
            title: 'Turnaround Time',
            text: 'At Prime Graphics, we understand the importance of timely delivery. Our efficient workflow and dedicated team ensure a swift turnaround time without compromising on quality. Whether you need custom patches, digitizing, or vector art services, we prioritize your deadlines and strive to meet or exceed your expectations. With our commitment to fast and reliable service, you can trust us to deliver your projects promptly and professionally.',
            image: '/assets/feature1.png'
        },
        {
            title: 'Quick Revision/ Edits',
            text: 'At Prime Graphics, we value your satisfaction and understand that revisions are sometimes necessary. Our team is committed to providing quick and efficient revisions or edits to ensure your project meets your exact specifications. We work closely with you to make adjustments promptly, ensuring your complete satisfaction with the final product.',
            image: '/assets/feature2.png'
        },
        {
            title: 'Vector Art',
            text: 'At Prime Graphics, we specialize in creating high-quality vector art that is scalable, precise, and perfect for any application. Our skilled designers transform your images into crisp, clean vectors, ensuring optimal clarity and versatility for all your projects. Whether you need logo vectorization, detailed illustrations, or raster-to-vector conversions, our vector art services deliver outstanding results every time.',
            image: '/assets/feature3.png'
        },
        {
            title: 'Payment Methods',
            text: 'At Prime Graphics, we strive to make the payment process as convenient as possible for our clients. We accept PayPal, ensuring a secure and hassle-free transaction experience. With PayPal, you can confidently make payments knowing your financial information is protected and your transactions are smooth and efficient',
            image: '/assets/feature4.png'
        },
        {
            title: 'Order Placement',
            text: "Placing an order with Prime Graphics is simple and straightforward. Just reach out to our friendly team via email or phone with your project details, and we'll guide you through the process step by step. Whether you need custom patches, digitizing, or vector art services, we'll work closely with you to understand your requirements and ensure your vision is brought to life. Let us handle the details while you sit back and anticipate the exceptional results!",
            image: '/assets/feature5.png'
        },
        {
            title: 'Processing',
            text: "Once your order is placed with Prime Graphics, our dedicated team swings into action to ensure swift processing. We meticulously review your project requirements, ensuring clarity and accuracy. From custom patches to digitizing and vector art services, we prioritize your project and allocate resources efficiently to meet your deadlines. Rest assured, your project is in capable hands, and we'll keep you informed every step of the way as we work to bring your vision to life.",
            image: '/assets/feature6.png'
        },
    ]
    return (
        <div className='bg-[#EEF5FF] py-16'>
            <LayoutWrapper>
                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <Heading title='Our Features' color='black' text='We bring the Best Digitizing & Embroidery Design to your ideas' />
                    </motion.div>
                    <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-[350px,350px,350px] gap-5 justify-between gap-y-7 sm:gap-y-14'>
                        {
                            data.map((val, i) => {
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className='bg-white relative h-[375px] group !rounded-[35px] flex flex-col overflow-hidden shadow-[0_4px_4px_0_rgba(0,0,0,0.3)]'>
                                            <div className='bg-light-primary'>
                                                <div className='w-full h-[300px] group-hover:!h-0 bg-white !rounded-br-[35px] px-5 py-5 group-hover:py-0 flex justify-center transition-all [transition-duration:600ms]'>
                                                    <Image src={val.image} width={350} height={350} className='w-auto h-full object-cover' alt='image' />
                                                </div>
                                            </div>
                                            <div className='px-5 py-3 !rounded-s-[35px] !rounded-br-[35px] h-[375px] group-hover:overflow-y-auto lg:group-hover:overflow-y-hidden transition-all [transition-duration:600ms] bg-light-primary'>
                                                <h3 className='text-xl sm:text-2xl font-semibold'>{val.title}</h3>
                                                <p className='text-[#8D8888]  leading-tight line-clamp-1 group-hover:line-clamp-none group-hover:mt-2 transition-all [transition-duration:600ms]'>{val.text}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </div>
            </LayoutWrapper>
        </div>
    );
}

export default Features;