import { Kaushan_Script } from 'next/font/google';
import React from 'react';


interface IProps {
    title: string
    text?: string
    color?: string
    lineColor?: string
}

const kaushanScript = Kaushan_Script({ subsets: ["latin"], weight: ["400"] });


function Heading({ color = 'white', title, text, lineColor = "dark-primary" }: IProps) {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-4 mx-auto'>
                    <h2 className={`text-3xl sm:text-[45px] font-bold text-${color} ${kaushanScript.className}`}>{title}</h2>
                    <div className={`w-[100px] ms:w-[170px] h-[5px] bg-${lineColor}`}></div>
                </div>
                <p className='text-base md:text-xl mt-12 sm:w-[550px] text-center'>{text}</p>
            </div>
        </div>
    );
}

export default Heading;