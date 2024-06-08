
'use client'
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

interface CircularProgressBarProps {
    size: number;
    strokeWidth: number;
    percentage: number;
    count: number,
    letter: string
}

const CircularBar: React.FC<CircularProgressBarProps> = ({ size, strokeWidth, percentage, count, letter
}) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    const [animatedPercentage, setAnimatedPercentage] = useState(0);

    const animationProps = useSpring({
        value: inView ? percentage : 0,
        from: { value: 0 },
        config: { duration: 2000 },
        onRest: () => setAnimatedPercentage(percentage),
    });

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    return (
        <div ref={ref} className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="transform -rotate-90">
                <circle
                    className="text-gray-300"
                    strokeWidth={strokeWidth}
                    stroke="currentColor"
                    fill="none"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                <animated.circle
                    className="text-dark-primary"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    fill="none"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    strokeDasharray={circumference}
                    strokeDashoffset={animationProps.value.to((v: number) => circumference - (v / 100) * circumference)}
                    stroke="currentColor"
                />
            </svg>
            <div className="absolute text-2xl font-bold">
                <CountUp end={count} duration={2} useEasing={false} enableScrollSpy scrollSpyOnce />{letter}
                {/* {animationProps.value.to((v: number) => `${Math.round(v)}%`)} */}
            </div>
        </div>
    );
};

export default CircularBar;
