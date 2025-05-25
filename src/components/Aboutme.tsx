'use client'

import { motion, MotionProps, useScroll, useTransform } from 'motion/react';
import Marquee from "react-fast-marquee"
import { useEffect, useRef, useState } from 'react';

type Props = {}

const Aboutme = (props: Props) => {

  const ref = useRef(null)

  const { scrollYProgress: scroll1 } = useScroll({
    target: ref,
    offset: ["0 1", "0 0"]
  });

  const opacity = useTransform(scroll1, [0, 1], ["0", "1"]);

  return (
    <motion.section
      style={{ opacity }}
      className='relative overflow-hidden'>
      <div ref={ref} className='sticky top-0 h-[100vh] padding-x py-5 flex flex-col'>
        <h2 className='text-[3em]'>About Me</h2>
        <hr className='h-[2px] mb-[2em]' />

        <div className='relative flex gap-5  h-full mb-[2em] md:items-center items-start z-10'>
          <div className='md:w-[50%] w-[100%] md:text-left text-justify'>
            <p className='md:text-3xl text-2xl flex-1'>
              I'm always curious, always learning and
              you’ll often find me playing guitar and thinking on next project.
              I get excited about solving problems and making things that are both useful and enjoyable to use.
              <br /> <br />
              Always building. Always evolving.
            </p>
          </div>
        </div>
        <div className='absolute w-full bottom-0 rotate-[-40deg] translate-x-[20%] flex flex-col gap-5'>
          <MyMarquee direction='left'>
            React.js Next.js Node.js
          </MyMarquee>
          <MyMarquee direction='right'>
            HTML CSS JavaScript
          </MyMarquee>
          <MyMarquee direction='left'>
            Photoshop Illustrator
          </MyMarquee>

        </div>
      </div>
    </motion.section>
  )
}

export default Aboutme

type MyMarqueeProps = {
  children: string,
  direction: "left" | "right",
}

const MyMarquee = ({ children, direction }: MyMarqueeProps) => {

  // const itensMarquee = ["React", "JavaScript", "Node.js", "Java", "Next.js", "Photoshop", "Illustrator"];
  const itensMarquee = children.split(" ");
  return (
    <motion.div
      className={`w-full`}>
      <Marquee
        autoFill={true}
        gradient
        direction={direction}
        gradientColor='var(--background)'
        className="bg-[var(--background)]"
      >
        {
          itensMarquee.map((item, index) => (
            <div key={index} className='text-[1.5em]'>
              <span className='px-[1em]'>{item}</span>
              <span className=''>•</span>
            </div>
          ))
        }
      </Marquee>
    </motion.div>
  )
}

