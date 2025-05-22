'use client'

import { motion, MotionProps, useAnimation, useScroll, useTransform } from "motion/react";
import { useInView } from 'react-intersection-observer';
import Image from "next/image"
import { useEffect, useRef, useState } from "react";



type Props = {}

const Hero = (props: Props) => {
    // age calc
    const MY_AGE = new Date().getFullYear() - 2003;

    const scrollRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["0 0", "1 0"]
    });

    const translateY = useTransform(scrollYProgress, [0, 1], ["0", "100%"])

    return (
        <section ref={scrollRef} className='relative flex h-screen px-4 justify-end flex-col overflow-hidden'>
            <h2 className=" text-[8vw] leading-[1em]">
                Hi I'm
            </h2>
            <motion.h1
                style={{
                    translateY,
                }}
                className='lg:text-[16vw] sm:text-[13vw] text-[27vw] leading-[1em]'>
                <SplitText>Nathan Tanzi</SplitText>
            </motion.h1>
        </section>
    )
}

export default Hero

interface SplitTextProps extends MotionProps {
    children: string;
    className?: string;
}


const SplitText: React.FC<SplitTextProps> = ({ children, className, ...props }) => {
    return (
        <span className={className} style={{ display: "inline-block" }}>
            {children.split("").map((char, i) => (
                <motion.span
                    key={i}
                    style={{ display: "inline-block" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        type: "tween",
                         delay: i * 0.05,
                        duration: 0.5,
                        ease: "easeInOut" // or "linear", "easeIn", "easeOut", "circIn", etc.
                    }}
                    {...props}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
};
