'use client'

import { motion, MotionProps, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { DesktopIcon, FaceIcon, PersonIcon } from '@radix-ui/react-icons';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';

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
      className='relative'>
      <div ref={ref} className='relative h-[300vh] padding-x  flex-1 text-justify'>
        <div className='top-[26%] sticky w-full '>
          <h2 className='lg:text-[10em] md:text-[7em] text-[15vw] italic text-center uppercase font-bold itaic arimo'>Why Me ?</h2>
        </div>

        <Card top='100vh' position={'left'}>
          <div className='h-full'>
            <h2 className='sticky top-4 font-bold md:text-5xl text-3xl '>Who i'm?</h2>
          </div>
          <div>
            <PersonIcon width={50} height={50} className='h-max w-max' />
            <p className='md:text-[1.6em] text-[1.3em] leading-[1em]'>
              My name is Nathan, and I’m a Developer and Computer Engineering student at Facens in Brazil.
            </p>
          </div>
        </Card>

        <Card top='170vh' position={'middle'}>
          <div className='h-full'>
            <h2 className='sticky top-4 font-bold md:text-5xl text-3xl '>A little about me:</h2>
          </div>
          <div>
            <FaceIcon width={50} height={50} className='mt-auto' />
            <p className='md:text-[1.6em] text-[1.3em] leading-[1em]'>
              I love building web applications. I’m endlessly curious, always learning,
              and you’ll often find me playing guitar or brainstorming my next project.
            </p>
          </div>
        </Card>

        <Card top='240vh' position={'right'}>
          <div className='h-full'>
            <h2 className='sticky top-4 font-bold md:text-5xl text-3xl '>What I do?</h2>
          </div>
          <div>
            <DesktopIcon width={50} height={50} className='mt-auto' />
            <p className='md:text-[1.6em] text-[1.3em] leading-[1em]'>
              Simple, I solve problems and create things that are both useful and enjoyable to use.
            </p>
          </div>
        </Card>
      </div>
      <div className='flex flex-col justify-center padding-x sm:h-[100vh] h-[50vh] gap-5'>
        <h2 className='lg:text-[3em] md:text-[2em] text-[5vw]'>You can find more about me in my:</h2>
        <div className='flex gap-5 md:flex-row flex-col lg:justify-start justify-around flex-wrap'>
          <Link href="https://docs.google.com/document/d/1yO_1rpyVbC2HnXXCgR2uoA_h5RjJpXBmFSn6-C3EJbc/edit?usp=sharing"
            className='lg:text-[3em] md:text-[2em] text-[5vw] padding-x py-3 border-2 rounded-2xl text-center hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all'>
            My CV
          </Link>
          <Link href="https://www.linkedin.com/in/nathan-tanzi"
            className='lg:text-[3em] md:text-[2em] text-[5vw] padding-x py-3 border-2 rounded-2xl text-center hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all'>
            Linkedin
          </Link>
          <Link href="https://github.com/Ntanzi07"
            className='lg:text-[3em] md:text-[2em] text-[5vw] padding-x py-3 border-2 rounded-2xl text-center hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all'>
            GitHub
          </Link>
        </div>
      </div>
      <div className='relative mt-[10rem]'>
        <OpposityText />
        <AllPhotos />
      </div>
    </motion.section >
  )
}

export default Aboutme

const Card = ({ top, position, children, }: { top: string; position: "left" | "middle" | "right"; children: React.ReactNode }) => {

  const [style, setStyle] = useState({});
  const ref = useRef(null)

  const { scrollYProgress: scroll1 } = useScroll({
    target: ref,
    offset: ["0 1", "0 .5"]
  });

  const opacity = useTransform(scroll1, [0, 1], ["0", "1"]);
  const rotateY = useTransform(scroll1, [0, 1], ["180deg", "0deg"]);


  useEffect(() => {
    if (position === "left") {
      setStyle({ rotateY, opacity, top, left: "10vw" });
    } else if (position === "right") {
      setStyle({ rotateY, opacity, top, right: "10vw" });
    } else if (position === "middle") {
      setStyle({ rotateY, opacity, top, left: "50%", translateX: "-50%" });
    }
  }, [position, top, rotateY, opacity]);


  return (
    <motion.div
      ref={ref}
      style={
        style
      }
      className={`glass-card rounded-2xl absolute md:w-[25em] md:h-[30em] w-[15em] h-[25em] border-2 p-6 z-10 flex flex-col`}
    >
      {children}
    </motion.div>
  );
};

const OpposityText = () => {
  const ref = useRef(null)

  const { scrollYProgress: scroll1 } = useScroll({
    target: ref,
    offset: ["0 1", "0 .5"]
  });

  const translateY = useTransform(scroll1, [0, .5], ["0%", "0%"]);


  return (
    <motion.h2
      ref={ref}
      style={{
        translateY,
      }}
      className="sticky z-20 text-[5vw] top-[50%] translate-y-[-50%] w-full left-0 text-center mix-blend-difference font-bold itaic arimo text-white">
      I'm Always building. Always evolving.
    </motion.h2>
  );
};

const AllPhotos = () => {

  const ref = useRef(null)

  const { scrollYProgress: scroll1 } = useScroll({
    target: ref,
    offset: ["0 1", "0 .5"]
  });

  const translateY = useTransform(scroll1, [0, .5], ["100%", "0%"]);
  return (
    <div className='relative flex flex-col gap-2 md:gap-4'>

      <div className=" md:h-[50rem] padding-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:auto-rows-fr auto-rows-auto lg:grid-rows-2 gap-2 md:gap-4">
        <div className="sm:row-span-2 row-span-2 sm:h-full h-[400px]">
          <img
            src={`/My/my2.jpg`}
            alt="img1"
            className="w-full h-full object-cover object-[50%80%]"
          />
        </div>
        <div className="lg:col-span-2 row-span-2 sm:h-full h-[400px]">
          <img
            src={`/My/my9.jpg`}
            alt="img1"
            className="w-full h-full object-cover object-[50%50%]"
          />
        </div>
        <div className="lg:row-span-1 row-span-2 sm:h-full h-[400px]">
          <img
            src={`/My/my3.jpg`}
            alt="img1"
            className="w-full h-full object-cover object-[50%80%]"
          />
        </div>
        <div className="lg:row-span-1 row-span-2">
          <p className="w-full object-cover object-[50%90%] col-start-4 text-[1.3em] text-justify" >
            I spent six weeks living in Fall River and Newport, Massachusetts, on a personal exchange program
            to immerse myself in English and experience daily life in the U.S. It was a great opportunity
            to improve my language skills while adapting to a new culture.
          </p>
        </div>
      </div>

      <div className=" md:h-[50rem] padding-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:auto-rows-fr auto-rows-auto lg:grid-rows-2 gap-2 md:gap-4">
        <div className="lg:col-span-2 row-span-2 sm:h-full h-[400px]">
          <img
            src={`/My/my7.jpg`}
            alt="img1"
            className="w-full h-full object-cover object-[50%50%]"
          />
        </div>
        <div className="sm:row-span-2 row-span-2 sm:h-full h-[400px]">
          <img
            src={`/My/my1.jpg`}
            alt="img1"
            className="w-full h-full object-cover object-[50%20%]"
          />
        </div>
        <div className="lg:row-span-1 row-span-2 sm:h-full h-[400px]">
          <img
            src={`/My/my8.jpg`}
            alt="img1"
            className="w-full h-full object-cover object-[50%80%]"
          />
        </div>
        <div className="lg:row-span-1 row-span-2">
          <p className="w-full object-cover object-[50%90%] col-start-4 text-[1.3em]  text-justify" >
            In university, I built all kinds of projects—some focused on social impact (like ODS-related tools),
            others just for the joy of solving technical challenges. From web apps to data structures,
            what mattered most was creating things that worked well and, when possible, made a difference.
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col padding-x gap-2 md:gap-4">
        <div className=''>
          <video
            src={`My/webProject.mp4`}
            autoPlay
            muted loop playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            className='object-cover md:h-full w-full h-[300px] select-none object-[50%30%]'
          />
        </div>
        <div className=''>
          <video
            src={`My/pitch.mp4`}
            autoPlay
            muted loop playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            className='object-cover md:h-full w-full h-[300px] select-none object-[50%30%]'
          />
        </div>
      </div>

      <div className='h-[40vh]' />

    </div>
  );
};