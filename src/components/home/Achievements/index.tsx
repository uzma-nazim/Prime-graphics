'use client'

import { CircularBar, LayoutWrapper } from '@/components/common';
import React from 'react';

function Achievements() {
    return (
        <div className='py-16 sm:py-24 lg:py-32'>
            <LayoutWrapper>
                <div className='w-full lg:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[170px_170px_170px_170px] justify-between gap-10 md:gap-0'>
                    <div className='flex flex-col items-center gap-2'>
                        <CircularBar size={150} strokeWidth={12} percentage={100} count={58} letter='K' />
                        <p className='text-base font-bold md:text-[18px]'>Happy Clients</p>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <CircularBar size={150} strokeWidth={12} percentage={100} count={1000} letter='+' />
                        <p className='text-base font-bold md:text-[18px]'>Finished Projects</p>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <CircularBar size={150} strokeWidth={12} percentage={100} count={30} letter='+' />
                        <p className='text-base font-bold md:text-[18px]'>Skills Experts</p>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <CircularBar size={150} strokeWidth={12} percentage={100} count={100} letter='%' />
                        <p className='text-base font-bold md:text-[18px]'>Satisfaction</p>
                    </div>
                </div>
            </LayoutWrapper>
        </div>
    );
}

export default Achievements;