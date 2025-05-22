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

  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    setViewportWidth(window.innerWidth);
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const opacity = useTransform(scroll1, [0, 1], ["0", "1"]);

  const imgs = ['/eu1.jpg', '/eu6.jpg', '/eu3.jpg', '/eu5.jpg', '/eu2.jpg']

  if (viewportWidth > 1024) {
    const refimg = useRef(null)

    const { scrollYProgress: scroll2 } = useScroll({
      target: refimg,
      offset: ["0 0", "1 1"]
    });

    const translateY = useTransform(scroll2, [0, 1], ["0", "-200%"])
    return (
      <motion.section
        ref={refimg}
        style={{ opacity }}
        className='relative h-[300vh]'>
        <div ref={ref} className='sticky top-0 h-[100vh] padding-x py-5 flex flex-col'>
          <h2 className='text-[3em]'>About Me</h2>
          <hr className='h-[2px] mb-[2em]' />
          <div className='relative  flex items-center justify-between h-full mb-[2em]'>

            <p className='text-3xl max-w-[20em] flex-1'>
              I'm always curious, always learning and
              you’ll often find me remixing music thinking on next project.
              I get excited about solving problems and making things that are both useful and enjoyable to use.
              <br /> <br />
              Always building. Always evolving.
            </p>

            <div className='relative xl:w-[40em] w-[30em] h-full mx-auto'>
              <motion.div
                style={{ translateY }}
                className="absolute h-max columns-2 px-5 z-[-1] top-[100%]">
                {imgs.map((src) => (
                  <div key={src} className="inline-block w-full break-inside-avoid mb-[.6rem]">
                    <img src={src} alt={src} className="" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          <MyMarquee />
        </div>
      </motion.section>
    )
  }
  else {
    const refimg = useRef(null)

    const { scrollYProgress: scroll2 } = useScroll({
      target: refimg,
      offset: ["0 1", "1 0"]
    });
    const translateX = useTransform(scroll2, [0.2, .8], ["0", "-100%"])
    return (
      <motion.section
        style={{ opacity }}
        className='relative'>
        <div ref={ref} className='h-fit padding-x py-5 flex flex-col '>
          <h2 className='text-[3em]'>About Me</h2>
          <hr className='bg-white h-[2px] w-full mb-[2em]' />
          <div className='relative h-[100%] flex items-center text-justify justify-between mb-[2em]'>
            <p className='text-2xl w-[20em]'>
              I'm always curious, always learning and
              you’ll often find me remixing music thinking on next project.
              I get excited about solving problems and making things that are both useful and enjoyable to use.
              <br /> <br />
              Always building. Always evolving.
            </p>
          </div>
          <MyMarquee />
        </div>
        <div ref={refimg} className="h-[400vh]">
          <div className='sticky top-0 h-[100vh] overflow-x-hidden '>
            <div className='relative h-[100vh] w-full overflow-hidden'>
              <motion.div
                style={{ translateX }}
                className="absolute left-1/2 top-1/2  -translate-y-1/2 flex gap-5 w-max h-[60vh] z-0"
              >
                {imgs.map((src, index) => (
                  <img key={index} src={src} className="h-full object-contain" />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    )
  }
}

export default Aboutme

const MyMarquee = () => {
  const itensMarquee = ["React", "JavaScript", "Node.js", "Java", "Next.js", "Photoshop", "Illustrator"];
  return (
    <div className='lg:absolute lg:bottom-[1em] w-full left-0'>
      <Marquee
        autoFill={true}
        gradient
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
    </div>
  )
}

