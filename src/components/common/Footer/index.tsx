import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Image from "next/image"
import LayoutWrapper from "../LayoutWrapper"
import Link from "next/link"

const navigation = {
    company: [
        { name: 'Home', href: '/#' },
        { name: 'Gallery', href: '/#gallery' },
        { name: 'Contact us', href: '/#contact' },
        { name: 'Services', href: '/services' },
        { name: 'Packages', href: '/#packages' },
    ],
    solutions: [
        { name: 'Digitizing', href: '/services/#digitizing' },
        { name: 'Vector', href: '/services/#vector' },
        { name: 'Embroidery', href: '/services/#engraving' },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-[url('/assets/footer-bg.png')] bg-cover" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <LayoutWrapper>
                <div className="pb-8 pt-5 sm:pt-7 lg:pt-10">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="">
                            <Image
                                className="w-[90px]"
                                src="/assets/logo.png"
                                width={200}
                                height={200}
                                alt="Company name"
                            />
                            <p className="leading-6 mt-2 text-white">
                                Prime Graphics
                            </p>
                            <div className="flex flex-col gap-4 mt-10">
                                <p className="font-semibold text-white">Follow Us:</p>
                                <div className='flex gap-3 text-white'>
                                    <Twitter size={20} strokeWidth={1} />
                                    <Link href='https://www.facebook.com/profile.php?id=100083557743100' target='_blank' ><Facebook size={20} strokeWidth={1} /></Link>
                                    <Link href='https://www.instagram.com/?hl=en' target='_blank' ><Instagram size={20} strokeWidth={1} /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 sm:grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="font-semibold leading-6 text-white">Company</h3>
                                    <ul role="list" className="mt-6 space-y-2">
                                        {navigation.company.map((item) => (
                                            <li key={item.name}>
                                                <Link href={item.href} className="text-sm leading-6 text-white">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-10 md:mt-0">
                                    <h3 className="font-semibold leading-6 text-white">Solutions</h3>
                                    <ul role="list" className="mt-6 space-y-2">
                                        {navigation.solutions.map((item) => (
                                            <li key={item.name}>
                                                <Link href={item.href} className="text-sm leading-6 text-white">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-10 sm:mt-0">
                                <div className="">
                                    <h3 className="font-semibold leading-6 text-white">Contact Info</h3>
                                    <div className="text-white flex flex-col gap-7 mt-7">
                                        <div className="flex gap-4">
                                            <MapPin size={30} className="flex-shrink-0" />
                                            <p className="">5 Carlisle St, Soho, London W1D 3BJ, United Kingdom </p>
                                        </div>
                                        <div className="flex gap-4">
                                            <Phone className="flex-shrink-0" />
                                            <p className="">+44 74 7683 0914</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <Mail className="flex-shrink-0" />
                                            <p className="">primeservice903@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/40 pt-5 mt-8 lg:mt-10">
                        <p className="text-sm leading-5 text-gray-400 text-center">Copyright © All Rights Reserved - 2024</p>
                    </div>
                </div>
            </LayoutWrapper>
        </footer>
    )
}