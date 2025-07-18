'use client'

import { motion, MotionProps, useAnimation, useScroll, useTransform } from "motion/react";
import { useInView } from 'react-intersection-observer';
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";



type Props = {}

const Hero = (props: Props) => {

    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setVh();
        window.addEventListener('resize', setVh);
        return () => window.removeEventListener('resize', setVh);
    }, []);


    const scrollRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["0 0", "1 0"]
    });

    const translateY = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);
    const translateYp1 = useTransform(scrollYProgress, [0, 1], ["0", "800%"]);
    const translateYp2 = useTransform(scrollYProgress, [0, 1], ["0", "600%"]);

    const translateX = useTransform(scrollYProgress, [0, .2], ["0", "100%"]);

    const opacityP1 = useTransform(scrollYProgress, [.3, .5], [1, 0])
    const opacityP2 = useTransform(scrollYProgress, [0, .6], [1, 0])

    return (
        <section ref={scrollRef} className='relative flex h-[calc(var(--vh)_*_100)] px-4 justify-end flex-col overflow-hidden'>
            <div className="absolute top-0 w-full gap-4 px-4 py-4 flex justify-between left-0 flex-wrap text-2xl text-justify">
                <motion.p
                    style={{
                        translateY: translateYp1,
                        opacity: opacityP1,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-[15em] italic">
                    I enjoy turning ideas into real.
                </motion.p>
                <motion.p
                    style={{
                        translateY: translateYp2,
                        opacity: opacityP2,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-[15em] ml-auto">
                    Developer and <span className="bg-gray-300  text-center">computer engineering</span> student
                    who loves building web applications.
                    <br /> <br />
                </motion.p>
            </div>
            <motion.div
                style={{
                    translateX
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute right-0 padding-x top-[50%] text-[1.3em] flex flex-col text-right translate-y-[-50%]">
                <Link href="https://github.com/Ntanzi07" className="flex items-center gap-2 justify-end underline"><GitHubLogoIcon width={25} height={25} className="" />git/Ntanzi07</Link>
                <Link href="https://www.linkedin.com/in/nathan-tanzi" className="flex items-center gap-2 justify-end underline"><LinkedInLogoIcon width={25} height={25} className="" />in/nathan-tanzi</Link>
                <Link href="https://www.instagram.com/nat.tanzi" className="flex items-center gap-2 justify-end underline"><InstagramLogoIcon width={25} height={25} className="" />@nat.tanzi</Link>

            </motion.div>
            <h2 className=" text-[8vw] leading-[1em] w-fit z-10">
                <SplitText>Hi I'm</SplitText>
            </h2>
            <motion.h1
                style={{
                    translateY,
                }}
                className='lg:text-[16vw] sm:text-[13vw] text-[23vw] leading-[1em] z-20'>
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
