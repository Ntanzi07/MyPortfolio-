'use client'
import { motion, useScroll, useTransform } from 'motion/react';
import Marquee from "react-fast-marquee"
import { useEffect, useRef, useState } from 'react';

type Props = {}

const aboutme = (props: Props) => {

  // animation scroll
  const ref = useRef(null)
  const refimg = useRef(null)
  const refimg2 = useRef(null)

  const { scrollYProgress: scroll1 } = useScroll({
    target: ref,
    offset: ["0 1", "0 0"]  // Opacidade: 0 quando o topo do elemento toca a base da viewport
  });

  // Rastreia o segundo elemento separadamente
  const { scrollYProgress: scroll2 } = useScroll({
    target: refimg,
    offset: ["0 1", "1 1"]  // Configuração independente
  });

  // Rastreia o terceiro elemento separadamente
  const { scrollYProgress: scroll3 } = useScroll({
    target: refimg2,
    offset: ["0 0", "1 1"]  // Configuração independente
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

  const opacity = viewportWidth > 768
    ? useTransform(scroll1, [0, 1], ["0", "1"])
    : useTransform(scroll1, [0, 1], ["0", "1"]);

  const translateX = useTransform(scroll2, [0.2, 1], ["0", "-100%"])
  const translateY = useTransform(scroll3, [0, 1], ["0", "-100%"])

  const itensMarquee = ["React", "JavaScript", "Node.js", "Java", "Next.js", "Photoshop", "Illustrator"];
  const imgs = ['/eu1.jpg', '/eu6.jpg', '/eu3.jpg', '/eu5.jpg', '/eu2.jpg']

  if (viewportWidth > 1280) {
    return (
      <motion.section
        ref={refimg2}
        style={{ opacity }}
        className='relative h-[300vh]'>
        <div ref={ref} className='sticky top-0 h-[100vh] gap-10 padding-x py-5 flex flex-col'>
          <h2 className='text-[3em]'>About Me</h2>
          <hr className='bg-white h-[2px] mb-[2em]' />
          <div className='relative h-[100%] flex items-center justify-between mb-[2em]'>
            <p className='text-3xl flex-1'>
              I'm a full-stack developer and computer engineering student focused on building scalable web
              applications from front to back. I work on a range of projects, from designing clean,
              responsive interfaces to developing robust APIs and backend solutions.
              <br /> <br />
              You’ll often find me learning new technologies, remixing music, or sharing
              knowledge with other devs through code, conversations, and collaboration.
              I'm passionate about creating meaningful digital experiences and helping others grow along the way.
              <br /> <br />
              Always building. Always evolving.
            </p>
            <div className='relative flex-[1.5] h-full'>
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
          <Marquee
            autoFill={true}
            className="text-[1.5em] py-2 bg-[#0a0a0a] flex w-full"
          >
            {
              itensMarquee.map((item, index) => (
                <>
                  <span className='px-[1em]'>{item}</span>
                  <span className='px-[1em]'>—</span>
                </>
              ))
            }
          </Marquee>
        </div>
      </motion.section>
    )
  }

  return (
    <motion.section
      style={{ opacity }}
      className='relative'>
      <div ref={ref} className='h-fit padding-x py-5 flex flex-col '>
        <h2 className='text-[3em]'>About Me</h2>
        <hr className='bg-white h-[2px] w-full mb-[2em]' />
        <div className='relative h-[100%] flex items-center justify-between mb-[2em]'>
          <p className='text-2xl w-[20em]'>
            I'm a full-stack developer and computer engineering student focused on building scalable web
            applications from front to back. I work on a range of projects, from designing clean,
            responsive interfaces to developing robust APIs and backend solutions.
            <br /> <br />
            You’ll often find me learning new technologies, remixing music, or sharing
            knowledge with other devs through code, conversations, and collaboration.
            I'm passionate about creating meaningful digital experiences and helping others grow along the way.
            <br /> <br />
            Always building. Always evolving.
          </p>
        </div>
        <Marquee
          autoFill={true}
          className="text-[1.5em] py-2 bg-[#0a0a0a] flex w-full"
        >
          {
            itensMarquee.map((item, index) => (
              <>
                <span className='px-[1em]'>{item}</span>
                <span className='px-[1em]'>—</span>
              </>
            ))
          }
        </Marquee>
      </div>
      <div ref={refimg} className="h-[400vh] w-screen">
        <div className='sticky top-0 h-[100vh] overflow-x-hidden '>
          <motion.div
            style={{ translateX }}
            className="absolute flex gap-5 w-max h-[30em] translate-y-[-50%] top-[50%] translate-x-[50vw] "
          >
            {imgs.map((src) => (
              <img
                key={src}
                src={src}
                alt={src}
                className="w-max object-contain"
              />
            ))}
          </motion.div>
        </div>
      </div>


    </motion.section>
  )
}

export default aboutme