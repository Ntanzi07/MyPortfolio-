'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'

const Projects = () => {

    return (
        <motion.section
            className='relative'>
            <div className='h-screen padding-x py-5 flex flex-col'>
                <div>
                    <h2 className='text-[3em]'>Projects</h2>
                    <hr className='bg-white h-[2px] w-full mb-[2em]' />
                </div>
                <div className='relative grid h-screen sm:grid-cols-2 sm:grid-rows-2 gap-5'>
                    <div className='flex flex-col rounded-2xl overflow-hidden border-1 border-gray-700'>
                        <div className='relative w-full h-full'>
                            <Image src="/work1.jpg" alt="test" fill className='object-cover' />
                        </div>
                        <div className='relative flex justify-between w-full h-max px-3 py-2 border-t-1 border-gray-700'>
                            <h2 className='text-2xl'> Work1</h2>
                            <h2 className='text-2xl'> 22-02-2022</h2>
                        </div>
                    </div>
                    
                </div>
            </div>
        </motion.section>
    )
}

export default Projects