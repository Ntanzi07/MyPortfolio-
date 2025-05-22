'use client'

import { motion, scale, transform, useInView, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Projects = () => {

    const MyWorks =
        [
            {
                title: "NutriAção",
                date: "2025",
                img: "/work1.png",
                link: "https://nutri-view.vercel.app"
            },
            {
                title: "Portfolio",
                date: "2025",
                img: "/work2.png",
                link: "https://ntanzi-portfolio.vercel.app"
            },
        ]

    const containerRef = useRef<HTMLDivElement>(null);
    const rawMouseY = useMotionValue(0);
    const rawScale = useMotionValue(0);
    const [height, setHeight] = useState(1);

    const itemsRef = useRef<HTMLDivElement>(null);
    const [heightItems, setHeightItems] = useState(1);

    const mouseY = useSpring(rawMouseY, {
        stiffness: 100,
        damping: 20,
    });

    const scaleItem = useSpring(rawScale, {
        stiffness: 100,
        damping: 20,
    });

    useEffect(() => {
        if (containerRef.current) {
            setHeight(containerRef.current.offsetHeight);
            // set default to center
            rawMouseY.set(containerRef.current.offsetHeight / 2);
        }
        if (itemsRef.current) {
            setHeightItems(itemsRef.current.offsetHeight);
        }

    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const bounds = containerRef.current.getBoundingClientRect();
        const relativeY = e.clientY - bounds.top;
        rawMouseY.set(relativeY);
        rawScale.set(1);
    };

    const handleMouseLeave = () => {
        rawMouseY.set(height / 2); // back to center
        rawScale.set(0);
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile(); // initial
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const moveY = useTransform(
        mouseY,
        [0, height],
        isMobile
            ? [`0`, `0`]
            : [`${heightItems / 2}px`, `-${heightItems / 2}px`]);

    const scale = useTransform(
        scaleItem,
        [0, 1],
        isMobile ? ["1", "1"] : [".4", "1"]
    );


    return (
        <motion.section className={`relative`}>
            <div className={` md:h-screen padding-x py-5 flex flex-col`}>
                <div className='z-20'>
                    <h2 className='text-[3em]'>Projects</h2>
                    <hr className='h-[2px] w-full mb-[2em]' />
                </div>
                <div ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className='relative flex flex-col gap-10 h-full md:overflow-hidden'>
                    <motion.div
                        style={{
                            y: moveY,
                            scale,
                        }}
                        transition={{
                            type: "tween",
                            duration: 1,
                            ease: "easeInOut"
                        }}
                        ref={itemsRef}
                        className='md:absolute md:translate-y-[-50%] md:top-[50%] md:w-[50%] w-[100%] md:left-0  
                         flex flex-col gap-10'>
                        {MyWorks.map((item, i) => {
                            return (
                                <motion.div
                                    key={i}
                                    className={` w-[100%] bg-[var(--background)] transition-all ease-in-out`}
                                    style={{

                                    }}
                                >
                                    <motion.div
                                        style={{

                                        }}
                                        className='relative right-0 transition-all'>
                                        <img src={item.img} alt={item.img} className='object-cover' />
                                    </motion.div>
                                    <div className='w-full flex justify-between text-xl'>
                                        <h2>{item.title}</h2>
                                        <h2 className='tracking-widest'>{item.date}</h2>
                                    </div>
                                </motion.div>
                            )
                        })
                        }
                    </motion.div>
                </div>
            </div>
        </motion.section >
    )
}

export default Projects