'use client'

import { motion, useAnimation, useScroll, useTransform } from "motion/react";
import { useInView } from 'react-intersection-observer';
import Image from "next/image"
import { useEffect, useState } from "react";



type Props = {}

const Hero = (props: Props) => {
    // age calc
    const MY_AGE = new Date().getFullYear() - 2003

    // animation appear
    const title = "Nathan Tanzi";
    const letterstitle = title.split(' ');

    const subtitle1 = "Hi I'm";
    const lettersSubtitle1 = subtitle1.split(' ');

    const subtitle2 = `${MY_AGE}, Brazil`;
    const lettersSubtitle2 = subtitle2.split(' ');

    const [refH1, inViewH1] = useInView({ threshold: 0.2, triggerOnce: true });
    const [img, inViewImg] = useInView({ threshold: 0.2, triggerOnce: true });

    const controlsH1 = useAnimation();
    const controlsImg = useAnimation();

    useEffect(() => {
        if (inViewH1) controlsH1.start("visible");
        if (inViewImg) controlsImg.start("visible");
    }, [inViewH1, inViewImg]);

    const letterAnimation = {
        hidden: { opacity: 0, y: "100%" },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .8,
                ease: 'easeOut',
            },
        },
    };

    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Delay between each word
            },
        },
    };

    const appear = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: .8,
                ease: 'easeOut',
            },
        },
    };

    // animation scroll
    const { scrollYProgress } = useScroll();

    const [viewportWidth, setViewportWidth] = useState(0);

    useEffect(() => {
        setViewportWidth(window.innerWidth);
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let width
    if(viewportWidth > 1280)
        width = useTransform(scrollYProgress, [0, 0.5], ["65em", "0em"]);
    else if(viewportWidth > 768)
        width = useTransform(scrollYProgress, [0, 0.5], ["70%", "0%"]);
    else
        width = useTransform(scrollYProgress, [0, 0.3], ["100%", "0%"]);

    return (
        <section className='relative flex h-screen padding-x md:justify-end gap-10 flex-col md:py-16 pt-16'>
            <motion.div
                ref={refH1}
                variants={container}
                initial="hidden"
                animate={controlsH1}
                className="sticky top-[4rem] flex flex-col justify-center questrial-regular">

                <h2 className="xl:text-7xl md:text-5xl text-[6vw] flex sm:gap-5 gap-[3vw] overflow-hidden">
                    {
                        lettersSubtitle1.map((letter, index) => (
                            <motion.span
                                variants={letterAnimation} // ONLY variants here
                                className="inline-block"
                                key={index}>
                                {letter}
                            </motion.span>
                        ))
                    }
                </h2>
                <h1 className='xl:text-8xl md:text-7xl text-[11vw] flex md:gap-5 gap-[3vw] tracking-widest overflow-hidden'>
                    {
                        letterstitle.map((letter, index) => (
                            <motion.span
                                variants={letterAnimation} // ONLY variants here
                                className="inline-block"
                                key={index}>
                                {letter}
                            </motion.span>
                        ))
                    }
                </h1>
                <h2 className="xl:text-5xl md:text-3xl text-[6vw] flex md:gap-5 gap-[3vw] tracking-[.3em] italic overflow-hidden">
                    {
                        lettersSubtitle2.map((letter, index) => (
                            <motion.span
                                variants={letterAnimation} // ONLY variants here
                                className="inline-block"
                                key={index}>
                                {letter}
                            </motion.span>
                        ))
                    }
                </h2>
            </motion.div>
            <motion.div
                ref={refH1}
                variants={appear}
                initial="hidden"
                animate={controlsH1}
                style={{ width }}
                className='hero__img-content'
            >
                <Image src="/bg3.jpg" alt="bg" fill className='object-cover md:object-right' />
            </motion.div>
        </section>
    )


}

export default Hero