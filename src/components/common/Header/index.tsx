import { LayoutWrapper } from '@/components/common';
import { Facebook, Instagram, Link as LinkI, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Header() {
    return (
        <div className='bg-dark-primary py-2 shadow-[0_0_10px_black] md:h-[40px]'>
            <LayoutWrapper>
                <div className='w-[95%] flex flex-col sm:flex-row justify-between items-center gap-2 mx-auto'>
                    <div className='flex gap-2 items-center'>
                        <Mail />
                        <p className='text-xs'>primeservice903@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='text-xs font-bold'>Follow us: </p>
                        <div className='flex gap-3'>
                            <Link href='https://www.facebook.com/profile.php?id=100083557743100' target='_blank' ><Facebook size={20} strokeWidth={1} /></Link>
                            <Twitter size={20} strokeWidth={1} />
                            <Link href='https://www.instagram.com/prime_graphics269' target='_blank' ><Instagram size={20} strokeWidth={1} /></Link>
                            <LinkI size={20} strokeWidth={1} />
                        </div>
                    </div>
                </div>
            </LayoutWrapper >
        </div >
    );
}

export default Header;