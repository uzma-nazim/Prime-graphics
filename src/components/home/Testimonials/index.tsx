'use client'

import { Heading, LayoutWrapper } from '@/components/common';
import * as Dialog from '@radix-ui/react-dialog';
import { ChevronLeft, ChevronRight, Play, Quote, X } from 'lucide-react';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import 'swiper/css';

const testimonials: { name: string; review: string; videoUrl?: string }[] = [

    	{
		name: 'Ro',
		review: 'Excellent work every time! Fast turnaround, great communication, and always willing to make adjustments when needed. Highly recommend!',
		videoUrl: '/assets/review/r1.mp4',
	},
	{
		name: 'Ro',
		review: 'Great quality work and very quick service. They always pay attention to the details and deliver exactly what I need. Highly recommend!',
		videoUrl: '/assets/review/r2.mp4',
	},
	{
		name: 'Ro',
		review: 'Very professional and easy to work with. The vector files always come out clean and ready for production. Great service!',
		videoUrl: '/assets/review/r3.mp4',
	},
	{
		name: 'Price Pyburn',
		review: 'Prime Graphics & Embroidery services has great customer service, turn around time and costs!',
	},
	{
		name: 'Brian DiSarro',
		review: 'these are my go to guys for digitizing and vectorizing.  super quick, responsive and turn around time is lightning quick.  Will recommend them every time.',
	},
	{
		name: 'Jon Lesher',
		review: 'Always do phenomenal work and make revisions when things don’t match up.',
	},
	{
		name: 'Rachel Kay',
		review: 'Great quality work and very fast turnaround times! Highly recommend!',
	},
	{
		name: 'Tyler Poor',
		review: 'Prime Graphics has always done a great job vectorizing my sketches for laser projects. Very reasonable prices as well!',
	},
	{
		name: 'Richard Garcia',
		review: 'Some of the fast best services ever here.You can\'t go wrong with using them.They always help us in the pinch.',
	},
	{
		name: 'Drew Penzkover',
		review: 'I’ve had prime do all my vector hat patch files, they always turn out perfect! They are more than helpful making changes as well. Now they also do my DTF files. Highly recommend! 👍🏻 👍🏻',
	},
	{
		name: 'Michael Miranda',
		review: 'Used them several times in the past few months with great results. Give them a try , you wont be disappointed.',
	},
	{
		name: 'James Anderson',
		review: 'Great fast service. Excellent work.',
	},
	{
		name: 'Jonathan Lugo',
		review: 'Fast and great service at a decent price. Definitely worth it. Recommended to anyone that needs a great digitalization and fast turnaround.',
	},
	{
		name: 'Tiffany Resendez',
		review: 'Recommend prime graphics their turn around time is so fast and work is amazing',
	},
	{
		name: 'Jared Ellevold',
		review: 'I’ve been using Prime Graphics guys for over two years and each time they deliver amazing results!\nThe communication is fast and extremely easy.  They truly helped me get my business off the ground and up and running as i wasn’t needing to spend hours in front of my computer.  Instead, i was out in front of my customers 😊.  \nTHANK YOU Prime Graphics and Design Services.',
	},
	{
		name: 'Sandman Cnc',
		review: 'If you want Quality and speed combined and topped off with amazing quality work hit this guys up! Very responsive and very affordable!',
	},

	{
		name: 'Brian',
		review: 'Consistently great work! Clean vectors, quick turnaround, and excellent customer service. Definitely recommend them for design and vector work.',
	},
];

function Testimonials() {
	const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
	const [activeVideo, setActiveVideo] = useState<string | null>(null);

	return (
		<section className='bg-[#EEF5FF] py-16' id='testimonials'>
			<LayoutWrapper>
				<Heading
					title='Client Testimonials'
					color='black'
					lineColor='black'
					text='Kind words from the people we work with'
				/>

				<div className='relative mt-12 sm:mt-16'>
					<div className='mb-5 flex justify-end gap-3'>
						<button
							type='button'
							onClick={() => swiper?.slidePrev()}
							aria-label='Previous testimonials'
							className='flex h-11 w-11 items-center justify-center rounded-full border border-[#323131]/20 bg-white text-[#323131] transition-colors hover:bg-dark-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#323131]'
						>
							<ChevronLeft size={22} aria-hidden='true' />
						</button>
						<button
							type='button'
							onClick={() => swiper?.slideNext()}
							aria-label='Next testimonials'
							className='flex h-11 w-11 items-center justify-center rounded-full border border-[#323131]/20 bg-white text-[#323131] transition-colors hover:bg-dark-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#323131]'
						>
							<ChevronRight size={22} aria-hidden='true' />
						</button>
					</div>

					<Swiper
						onSwiper={setSwiper}
						slidesPerView={1}
						spaceBetween={20}
						breakpoints={{
							640: { slidesPerView: 2, spaceBetween: 20 },
							1024: { slidesPerView: 3, spaceBetween: 24 },
						}}
						className='!pb-2'
					>
						{testimonials.map((testimonial, index) => (
							<SwiperSlide key={`${testimonial.name}-${index}`} className='h-auto'>
								<article className='flex h-full min-h-[290px] flex-col rounded-2xl border border-[#323131]/10 bg-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.08)] sm:p-7'>
									<Quote className='mb-4 text-[#D5A900]' size={28} aria-hidden='true' />
									<p className='flex-1 text-base leading-relaxed text-[#494747]'>
										{testimonial.review}
									</p>
									<div className='mt-6 flex items-end justify-between gap-3 border-t border-[#323131]/10 pt-4'>
										<div>
											<h3 className='font-semibold text-[#323131]'>{testimonial.name}</h3>
										</div>
										{testimonial.videoUrl && (
											<button
												type='button'
												onClick={() => setActiveVideo(testimonial.videoUrl ?? null)}
												className='inline-flex shrink-0 items-center gap-2 rounded-full bg-dark-primary px-4 py-2 text-sm font-semibold text-[#323131] transition-colors hover:bg-[#e8b900] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#323131]'
											>
												<Play size={15} fill='currentColor' aria-hidden='true' />
												Watch video
											</button>
										)}
									</div>
								</article>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</LayoutWrapper>

			<Dialog.Root
				open={activeVideo !== null}
				onOpenChange={(open) => {
					if (!open) setActiveVideo(null);
				}}
			>
				<Dialog.Portal>
					<Dialog.Overlay className='fixed inset-0 z-[100] bg-black/80' />
					<Dialog.Content className='fixed left-1/2 top-1/2 z-[101] w-[min(92vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#323131] p-3 shadow-2xl focus:outline-none sm:p-5'>
						<div className='mb-3 flex items-center justify-between gap-4 px-1'>
							<Dialog.Title className='font-semibold text-white'>
								Client testimonial
							</Dialog.Title>
							<Dialog.Close asChild>
								<button
									type='button'
									aria-label='Close video'
									className='flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white'
								>
									<X size={20} aria-hidden='true' />
								</button>
							</Dialog.Close>
						</div>
						{activeVideo && (
							<div className='aspect-video overflow-hidden rounded-lg bg-black'>
								<video
									src={activeVideo}
									className='h-full w-full'
									controls
									playsInline
									preload='metadata'
								/>
							</div>
						)}
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</section>
	);
}

export default Testimonials;
