import Link from 'next/link';
import React, { ReactNode } from 'react';

function OrderNowLink({ children }: { children: ReactNode }) {
    return (
        <>
            <Link className='hidden [@media(min-width:900px)]:block' href={'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=primeservice903@gmail.com&tf=1'} target='_blank'>
                {children}
            </Link>
            <Link className='block [@media(min-width:900px)]:hidden' href={'mailto:primeservice903@gmail.com '} target='_blank'>
                {children}
            </Link>
        </>
    );
}

export default OrderNowLink;