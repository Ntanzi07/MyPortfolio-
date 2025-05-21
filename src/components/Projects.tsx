'use client'

import { motion, scale, transform, useInView, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Projects = () => {

    const MyWorks =
        [
            {
                title: "NutriAção",
                date: "22-02-2022",
                img: "/work1.png",
                link: "https://nutri-view.vercel.app"
            },
            {
                title: "work2",
                date: "26-05-2020",
                img: "/work1.jpg",
                link: ""
            },
            {
                title: "work3",
                date: "26-05-2026",
                img: "/work1.jpg",
                link: ""
            },
            {
                title: "work4",
                date: "26-05-2026",
                img: "/work1.jpg",
                link: ""
            },
        ]

    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    })


    return (
        <motion.section ref={targetRef} className={`relative h-[400vh]`}>
            <div className={`top-0 sticky h-[100vh] padding-x py-5 flex flex-col overflow-hidden`}>
                <div>
                    <h2 className='text-[3em]'>Projects</h2>
                    <hr className='bg-white h-[2px] w-full mb-[2em]' />
                </div>
                <div className='relative w-full h-full'>
                    {MyWorks.map((itens, i) => {

                        const walgDeg = (MyWorks.length - 1) * 10;
                        const difGrau = (i * 10);

                        const starDeg = 0 - difGrau;
                        const centerDeg = (walgDeg / 2) - difGrau;
                        const endDeg = walgDeg - difGrau;

                        const rotateZ = useTransform(scrollYProgress, [0, .5, 1], [`${starDeg}deg`, `${centerDeg}deg`, `${endDeg}deg`]);

                        const ref = useRef(null);


                        return (
                            <motion.div

                                key={i}
                                className={`absolute `}
                                style={{
                                    rotateZ,
                                    top: `50%`,
                                    left: `50%`,
                                    translateY: `-50%`,
                                    translateX: `-50%`,
                                    transformOrigin: `50% 400vh`,

                                }}
                            >
                                <motion.div
                                    ref={ref}
                                    style={{
                                    
                                    }}
                                    className='relative  sm:w-[30em] sm:h-[20em] w-[85vw] h-[15em] right-0 hover:scale-[1.3] transition-all'>
                                    <Image src={itens.img} alt={itens.img} fill className='object-cover' />
                                </motion.div>
                            </motion.div>
                        )
                    })
                    }
                </div>
            </div>
        </motion.section >
    )
}

export default Projects