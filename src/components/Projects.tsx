'use client'

import { motion, transform } from 'motion/react'
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



    return (
        <motion.section className={`relative h-[400vh]`}>
            <div className={`top-0 sticky h-[100vh] padding-x py-5 flex flex-col overflow-hidden`}>
                <div>
                    <h2 className='text-[3em]'>Projects</h2>
                    <hr className='bg-white h-[2px] w-full mb-[2em]' />
                </div>
                <div className='relative w-full h-full bg-amber-200'>
                    {
                        MyWorks.map((itens, i) => {
                           
                            return (

                                <div key={i}
                                    className={`projects__items`}
                                    style={{
                                        top: `50%`,
                                        left: `${(100 / MyWorks.length) * (i + 1)}%`,
                                        
                                    }}
                                >
                                    <div className='relative w-full '>
                                        <img src={itens.img} alt={itens.img} className='object-cover border-[1px] border-white' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </motion.section>
    )
}

export default Projects