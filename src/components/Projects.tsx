'use client'

import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'
import { ArrowLeftIcon, ArrowUpIcon, GitHubLogoIcon, Link1Icon } from '@radix-ui/react-icons'
import Link from 'next/link'

type ProjectItens = {
  title: string,
  date: string,
  imgs: string,
  link: string,
  linkGit: string,
  description: string,
  services: string[],
}

const Projects = () => {

  const MyWorks: ProjectItens[] =
    [
      {
        title: "NutriAção",
        date: "2025",
        imgs: "/project1",
        link: "https://nutri-view.vercel.app",
        linkGit: "https://github.com/Ntanzi07/NutriAcao",
        services: ["Web Design", "Developer"],
        description:
          `NutriAção is a website/app focused on promoting healthy eating habits and helping users adopt a 
          balanced nutritional routine. The main goal of the project is to 
          educate and inspire people to take better care of their health 
          through nutrition. The target audience includes those interested 
          in nutrition and balanced diets, as well as health and fitness 
          professionals who want to follow content and tips about healthy eating.`,
      },
      {
        title: "MyPortfolio",
        date: "2025",
        imgs: "/project2",
        link: "https://ntanzi-portfolio.vercel.app",
        linkGit: "https://github.com/Ntanzi07/MyPortfolio-",
        services: ["Web Design", "Developer"],
        description:
          `This portfolio is a modern web application built with Next.js, 
        designed to showcase personal projects, technical skills, 
        and professional experience in an interactive and visually 
        appealing way. The main goal of this platform is to present 
        my work as a developer while providing a clean and intuitive 
        experience for visitors. It serves as both a personal brand 
        and a hub for future opportunities. The target audience includes 
        recruiters, potential employers, collaborators, and anyone interested 
        in exploring my journey as a developer.`,
      },
    ]

  const [selectWork, setSelectWork] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const rawMouseY = useMotionValue(0);
  const rawScale = useMotionValue(0);
  const [height, setHeight] = useState(1);

  const itemsRef = useRef<HTMLDivElement>(null);
  const [heightTitle, setHeightTitle] = useState(1);

  const mouseY = useSpring(rawMouseY, {
    stiffness: 100,
    damping: 20,
  });

  const scaleItem = useSpring(rawScale, {
    stiffness: 100,
    damping: 20,
  });

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.offsetHeight);
      // set default to center
      rawMouseY.set(containerRef.current.offsetHeight / 2);
    }
    if (itemsRef.current) {
      setHeightTitle(itemsRef.current.offsetHeight);
    }

  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    const relativeY = e.clientY - bounds.top;
    rawMouseY.set(relativeY);
    rawScale.set(1);
  };

  const handleMouseLeave = () => {
    rawMouseY.set(height / 2); // back to center
    rawScale.set(0);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // initial
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const moveY = useTransform(
    mouseY,
    [0, height],
    isMobile
      ? [`0`, `0`]
      : [`50%`, `-50%`]);

  const scale = useTransform(
    scaleItem,
    [0, 1],
    isMobile ? ["1", "1"] : [selectWork === -1 ? ".4" : ".7", ".8"]
  );

  const ref = useRef(null)

  const { scrollYProgress: scroll1 } = useScroll({
    target: ref,
    offset: ["0 1", "0 0"]
  });

  const opacity = useTransform(scroll1, [0, 1], ["0", "1"]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className={`relative `}>
      <div className={` padding-x py-5 flex flex-col`}>
        <div ref={itemsRef} className=''>
          <h2 className='lg:text-[7em] md:text-[5em] italic text-[15vw] uppercase font-bold itaic arimo leading-[1em]'>Last Works</h2>
        </div>

        <div className='relative flex gap-10 w-full h-full'>
          <motion.div
            style={{
              display: isMobile ? selectWork === -1 ? "inline" : "none" : "inline",
              height: isMobile ? '' : `calc(100vh - ${heightTitle}px)`,
            }}
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={` relative ${(selectWork !== -1 && !isMobile) ? `flex-[.3]` : `flex-[1]`}  w-full duration-700 transition-all ease-in-out`}>
            <motion.div
              style={{
                y: moveY,
                scale,
              }}
              transition={{
                type: "tween",
                duration: 1,
                ease: "easeInOut"
              }}
              className='md:absolute md:translate-y-[-50%] md:top-[50%] md:w-[100%] w-[100%]  
                         flex flex-col gap-10'>
              {MyWorks.map((item, i) => {
                return (
                  <button key={i} onClick={() => setSelectWork(i)}
                    className='cursor-pointer shadow-[0px_30px_50px_-22px] overflow-hidden rounded-2xl hover:scale-[1.2] hover:z-10 transition-all ease-in-out'
                  >
                    <motion.div
                      className={`w-[100%] bg-[var(--background)] transition-all ease-in-out`}
                      style={{}}
                    >
                      <motion.div
                        style={{}}
                        className='relative right-0 transition-all'>
                        <img src={`${item.imgs}/main.png`} alt={"main"} className='object-cover' />
                      </motion.div>
                    </motion.div>
                  </button>
                )
              })
              }
            </motion.div>
          </motion.div>
          <motion.div
            style={{
              display: isMobile ? selectWork === -1 ? "none" : "inline" : "inline",
            }}
            className={`flex-1 relative`}>
            {selectWork === -1
              ? <div className={`flex h-full items-center justify-center`}><ArrowLeftIcon height={50} width={50} /><h2 className='text-5xl italic'> Select a project</h2></div>
              : <Work project={MyWorks[selectWork]} setWork={setSelectWork} />
            }
          </motion.div>
        </div>
      </div>
      <motion.div 
        style={{
          display: isMobile ? "flex" : "none",
        }}
        className='h-[20vh] justify-center items-center gap-3'>
        <h2 className='lg:text-5xl text-[8vw]'>Select one project</h2>
        <ArrowUpIcon height={50} width={50}/>
      </motion.div>
    </motion.section >
  )
}

export default Projects

const Work = ({ project, setWork }: { project: ProjectItens, setWork: React.Dispatch<React.SetStateAction<number>> }) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      key={project.title}
      className='flex flex-col gap-10 w-full '>
      <div className=' flex flex-col gap-2 w-full'>
        <span className='cursor-pointer underline' onClick={() => setWork(-1)}>back to projects</span>

        <img
          src={`${project.imgs}/main.png`}
          alt="main"
          className='object-cover'
        />
        <div className='flex md:flex-row flex-col gap-10 md:justify-between'>
          <div className='md:w-[60%] w-full flex flex-col gap-2'>
            <h2 className='italic text-[1.2em]'>
              {project.title}
            </h2>
            <p className='md:text-left text-justify'>
              {project.description}
            </p>
          </div>

          <div className=' flex flex-col ml-auto md:text-start text-end'>
            <h2 className='underline'>Services</h2>
            {
              project.services.map((item) => (
                <p key={item}>{item}</p>
              ))
            }
          </div>

          <div className='flex flex-col'>
            <h2 className='underline'>links</h2>
            <Link href={project.linkGit} className='flex gap-2 items-center'>
              <GitHubLogoIcon />
              <p>Ntanzi/{project.title}</p>
            </Link>
            <Link href={project.link} className='flex gap-2 items-center'>
              <Link1Icon />
              <p>{project.title}</p>
            </Link>
          </div>
        </div>
      </div>


      <div className='grid grid-cols-[2fr_1fr] gap-4'>
        <img
          src={`${project.imgs}/img1.png`}
          alt="img1"
          className='object-cover'
        />
        <img
          src={`${project.imgs}/img2.png`}
          alt="img2"
          className='object-cover'
        />
      </div>

      <video
        src={`${project.imgs}/video.mp4`}
        autoPlay
        muted loop playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        className='object-cover select-none w-full'
      />

    </motion.div>
  )
}