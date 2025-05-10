'use client'

import { motion } from 'motion/react'
import React from 'react'

const Projects = () => {
    return (
        <motion.section
            className='relative'>
            <div className='h-screen padding-x py-5 flex flex-col '>
                <h2 className='text-[3em]'>Projects</h2>
                <hr className='bg-white h-[2px] w-full mb-[2em]' />
            </div>
        </motion.section>
    )
}

export default Projects