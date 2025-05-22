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
    const [height, setHeight] = useState(1);

    const itemsRef = useRef<HTMLDivElement>(null);
    const [heightItems, setHeightItems] = useState(1);

    // Smooth spring version of rawMouseY
    const mouseY = useSpring(rawMouseY, {
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
    };

    const handleMouseLeave = () => {
        rawMouseY.set(height / 2); // back to center
    };


    console.log(heightItems)
    const moveY = useTransform(mouseY, [0, height], [`${heightItems/6}px`, `-${heightItems/6}px`]);


    return (
        <motion.section 
            className={`relative`}
            style={{
                height: `100vh`
            }}
        >
            <div className={` h-screen padding-x py-5 flex flex-col`}>
                <div className='z-20'>
                    <h2 className='text-[3em]'>Projects</h2>
                    <hr className='h-[2px] w-full mb-[2em]' />
                </div>
                <div ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className='relative flex flex-col gap-10 h-full overflow-hidden'>
                    <motion.div
                        style={{
                            y: moveY,
                            scale: .7,
                        }}
                        transition={{
                            type: "tween",
                            duration: 1,
                            ease: "easeInOut"
                        }}
                        ref={itemsRef}
                        className='absolute translate-y-[-50%] flex flex-col gap-10 top-[50%] left-0 w-[50vw]'>
                        {MyWorks.map((item, i) => {
                            return (
                                <motion.div
                                    key={i}
                                    className={`w-full bg-[var(--background)] hover:scale-[1.2] transition-all ease-in-out`}
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