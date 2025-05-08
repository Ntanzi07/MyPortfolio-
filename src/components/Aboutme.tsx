'use client'
import { motion, useScroll, useTransform } from 'motion/react';

type Props = {}

const aboutme = (props: Props) => {

    // animation scroll
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 1], ["0", "1"]);

    return (
        <motion.section
            style={{ opacity }}
            className='h-screen padding-x py-5'>
            <h2 className='text-[3em]'>About Me</h2>
            <hr className='bg-white h-[2px] w-full' />
            <p>
                a front-end developer & computer engineering student based in Brazil.
                Passionate about technology, design, and clean code.
            </p>
        </motion.section>
    )
}

export default aboutme