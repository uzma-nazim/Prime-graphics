import React, { ReactNode } from 'react';

function LayoutWrapper({ children }: { children: ReactNode }) {
    return (
        <div className='w-[90%] 2xl:w-[1500px] mx-auto'>
            {children}
        </div>
    );
}

export default LayoutWrapper;