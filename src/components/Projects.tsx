'use client'

import { motion, scale, transform, useInView, useScroll, useTransform } from 'motion/react'
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

    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    })

    const pageHeight = MyWorks.length * 150;
    console.log(pageHeight)

    return (
        <motion.section ref={targetRef}
            className={`relative `}>
            <div className={`padding-x py-5 flex flex-col overflow-hidden`}>
                <div>
                    <h2 className='text-[3em]'>Projects</h2>
                    <hr className='bg-white h-[2px] w-full mb-[2em]' />
                </div>
                <div className='relative flex flex-col gap-5 w-full h-full'>
                    {MyWorks.map((item, i) => {

                       

                        return (
                            <motion.div
                                key={i}
                                className={` md:w-[55vw] w-full bg-[var(--background)]`}
                                style={{

                                }}
                            >
                                <motion.div
                                    style={{

                                    }}
                                    className='relative  right-0 transition-all'>
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
                </div>
            </div>
        </motion.section >
    )
}

export default Projects