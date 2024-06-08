'use client'
import React, { useState } from 'react';
import LayoutWrapper from '../LayoutWrapper';
import Image from 'next/image';
import { Kaushan_Script, Noto_Sans_Myanmar } from 'next/font/google'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import { AlignJustify, ChevronDown, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import OrderNowLink from '../OrderNowLink';


const kaushanScript = Kaushan_Script({ subsets: ["latin"], weight: ["400"] });
const notoSansMyanmar = Noto_Sans_Myanmar({ subsets: ["myanmar"], weight: ["400"] });



function UnderLine({ text }: { text: string }) {
    return (
        <span className='relative group w-full'>
            {text}
            <span className='absolute left-0 -bottom-3 h-[3px] w-0 group-hover:w-full !mx-auto bg-black transition-all'></span>
        </span>
    )
}


function Navbar() {
    const router = useRouter()
    let [open, setOpen] = useState(false)

    function redirect(path: string) {
        setOpen(false)
        setTimeout(() => {
            router.push(path)
        }, 400);

    }

    function simple_redirect(path: string) {
        setTimeout(() => {
            router.push(path)
        }, 200);
    }
    return (
        <>
            <div className='border-b border-[#CCC3C3] md:h-[94px]'>
                <LayoutWrapper>
                    <div className='py-3 flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <Image src={'/assets/logo.png'} width={100} height={100} className='w-[55px] md:w-[70px]' alt='logo' />
                            <p className={`hidden sm:block font-bold `}>Prime Graphics</p>
                        </div>
                        <Sheet open={open}>
                            <SheetTrigger onClick={() => setOpen(true)}>
                                <AlignJustify className='block lg:hidden' />
                            </SheetTrigger>
                            <SheetContent side={'left'}>
                                <SheetHeader>
                                    <div onClick={() => setOpen(false)} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800">
                                        <X className="h-4 w-4" />
                                        <span className="sr-only">Close</span>
                                    </div>
                                    <div className='flex flex-col items-center gap-12 mt-10'>
                                        <ul className="flex flex-col gap-12 items-center text-sm font-bold">
                                            <li onClick={() => redirect('/')}>HOME</li>
                                            <li onClick={() => redirect('/#gallery')}>GALLERY</li>
                                            <li>
                                                <DropdownMenu modal={false}>
                                                    <DropdownMenuTrigger className='flex items-center gap-2'>SERVICES <ChevronDown size={20} strokeWidth={1} /></DropdownMenuTrigger>
                                                    <DropdownMenuContent className='text-[#8D8888] font-[500]'>
                                                        <DropdownMenuItem onClick={() => redirect('/services/#digitize')}>Digitizing</DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem onClick={() => redirect('/services/#vector')}>Vector</DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem onClick={() => redirect('/services/#engraving')}>Engraving Designs</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </li>
                                            <li>
                                                <DropdownMenu modal={false}>
                                                    <DropdownMenuTrigger className='flex items-center gap-2'>PATCH GALLERY <ChevronDown size={20} strokeWidth={1} /></DropdownMenuTrigger>
                                                    <DropdownMenuContent className='text-[#8D8888] font-[500]'>
                                                        <DropdownMenuItem onClick={() => redirect('/embroidery-patch')}>Embroidery Patches</DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem onClick={() => redirect('/embroidery-patch/#leather')}>Leather Patches</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </li>
                                            <Link href={'/#contact'}><li>CONTACT US</li></Link>
                                            <Link href={'/#packages'}><li>OUR PACKAGES</li></Link>
                                        </ul>
                                        <OrderNowLink>
                                            <button className='text-sm py-2 px-5 bg-black text-dark-primary font-bold rounded-md'>Get Quote</button>
                                        </OrderNowLink>
                                    </div>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>

                        <div className='hidden lg:flex items-center gap-7'>
                            <ul className="flex gap-8 text-[13px] font-bold">
                                <Link href={'/'}><li className=''><UnderLine text='HOME' /></li></Link>
                                <Link href={'/#gallery'}><li> <UnderLine text='GALLERY' /></li></Link>
                                <li>
                                    <HoverCard openDelay={0} closeDelay={200}>
                                        <HoverCardTrigger className='flex items-center gap-2 cursor-pointer'>
                                            <div className='w-full h-full group flex items-center gap-0 cursor-pointer'>
                                                <UnderLine text='SERVICES' />
                                                <ChevronDown size={20} strokeWidth={1} />
                                            </div>
                                        </HoverCardTrigger>
                                        <HoverCardContent className='!p-1 !w-fit mt-3 !z-[100] text-[#8D8888]'>
                                            <div className='flex flex-col'>
                                                <span onClick={() => simple_redirect('/services/#digitize')} className='cursor-pointer py-2 px-3 h-10 hover:!bg-black hover:!text-dark-primary transition-all [transition-duration:400ms]'>Digitizing</span>
                                                <DropdownMenuSeparator className='my-0' />
                                                <span onClick={() => simple_redirect('/services/#vector')} className='cursor-pointer py-2 px-3 h-10 hover:!bg-black hover:!text-dark-primary transition-all [transition-duration:400ms]'>Vector</span>
                                                <DropdownMenuSeparator className='my-0' />
                                                <span onClick={() => simple_redirect('/services/#engraving')} className='cursor-pointer py-2 px-3 h-10 hover:!bg-black hover:!text-dark-primary transition-all [transition-duration:400ms]'>Engraving Designs</span>
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>

                                    {/* <DropdownMenu modal={false}>
                                        <DropdownMenuTrigger className='flex items-center gap-2'>
                                            <UnderLine text='SERVICES' />
                                            <ChevronDown size={20} strokeWidth={1} />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className='text-[#8D8888] font-bold mt-5'>
                                            <DropdownMenuItem className='cursor-pointer h-10 hover:!bg-black hover:!text-white transition-all [transition-duration:400ms]' onClick={() => simple_redirect('/services/#digitize')}>
                                                Digitizing
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className='cursor-pointer h-10 hover:!bg-black hover:!text-white transition-all [transition-duration:400ms]' onClick={() => simple_redirect('/services/#vector')}>
                                                Vector
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className='cursor-pointer h-10 hover:!bg-black hover:!text-white transition-all [transition-duration:400ms]' onClick={() => simple_redirect('/services/#engraving')}>
                                                Engraving Designs
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu> */}
                                </li>
                                <li>
                                    <HoverCard openDelay={0} closeDelay={200}>
                                        <HoverCardTrigger className='flex items-center gap-2 cursor-pointer'>
                                            <div className='w-full h-full group flex items-center gap-0 cursor-pointer'>
                                                <UnderLine text='PATCH GALLERY' />
                                                <ChevronDown size={20} strokeWidth={1} />
                                            </div>
                                        </HoverCardTrigger>

                                        <HoverCardContent className='!p-1 !w-fit mt-3 !z-[100] text-[#8D8888]'>
                                            <div className='flex flex-col'>
                                                <span onClick={() => simple_redirect('/embroidery-patch')} className='cursor-pointer py-2 px-3 h-10 hover:!bg-black hover:!text-dark-primary transition-all [transition-duration:400ms]'>Embroidery Patches</span>
                                                <DropdownMenuSeparator className='my-0' />
                                                <span onClick={() => simple_redirect('/embroidery-patch/#leather')} className='cursor-pointer py-2 px-3 h-10 hover:!bg-black hover:!text-dark-primary transition-all [transition-duration:400ms]'>Leather Patches</span>
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>
                                    {/* <DropdownMenu modal={false}>
                                        <DropdownMenuTrigger className='flex items-center gap-2'>
                                            <UnderLine text='PATCH GALLERY' />
                                            <ChevronDown size={20} strokeWidth={1} />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className='text-[#8D8888] font-bold mt-5'>
                                            <DropdownMenuItem className='cursor-pointer h-10 hover:!bg-black hover:!text-white transition-all [transition-duration:400ms]' onClick={() => simple_redirect('/embroidery-patch')}>
                                                Embroidery Patches
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className='cursor-pointer h-10 hover:!bg-black hover:!text-white transition-all [transition-duration:400ms]' onClick={() => simple_redirect('/embroidery-patch/#leather')}>
                                                Leather Patches
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu> */}
                                </li>
                                <Link href={'/#contact'}><li><UnderLine text='CONTACT US' /></li></Link>
                                <Link href={'/#packages'}><li><UnderLine text='OUR PACKAGES' /></li></Link>
                            </ul>
                            <OrderNowLink>
                                <button className='text-sm py-2 px-5 bg-black text-dark-primary font-bold rounded-md'>Get Quote</button>
                            </OrderNowLink>
                        </div>
                    </div>
                </LayoutWrapper>
            </div>
        </>
    );
}

export default Navbar;