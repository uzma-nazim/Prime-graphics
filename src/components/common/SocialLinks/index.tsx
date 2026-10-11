import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

// Add new profiles (TikTok, YouTube, Pinterest, LinkedIn) here and in `business.social` in src/lib/site.ts.
export const socialProfiles = [
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100083557743100', Icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/prime_graphics269', Icon: Instagram },
];

export default function SocialLinks({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
    const color = variant === 'light' ? 'text-white' : 'text-secondary';
    return (
        <div className={`flex gap-4 ${color}`}>
            {socialProfiles.map(({ name, href, Icon }) => (
                <Link key={name} href={href} target='_blank' rel='noopener me' aria-label={`Prime Graphics on ${name}`} className='hover:opacity-70'>
                    <Icon size={22} strokeWidth={1.5} aria-hidden='true' />
                </Link>
            ))}
        </div>
    );
}
