'use client'
import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from 'motion/react'
import React, { useRef } from 'react'
import { FaCss3Alt, FaFigma, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAdobephotoshop, SiAdobepremierepro, SiTypescript } from "react-icons/si";
import { FaGit } from "react-icons/fa6";
import { RiTailwindCssFill } from 'react-icons/ri';


type Props = {}

const Skills = (props: Props) => {
    const skills = [
        {skill: "React", item: <FaReact className='iconSkill'/>}, 
        {skill: "JavaScript", item: <IoLogoJavascript className='iconSkill'/>}, 
        {skill: "TypeScript", item: <SiTypescript className='iconSkill'/>}, 
        {skill: "Git", item: <FaGit className='iconSkill'/>}, 
        {skill: "Tailwind", item: <RiTailwindCssFill className='iconSkill'/>}, 
        {skill: "Figma", item: <FaFigma className='iconSkill'/>}, 
        {skill: "HTML", item: <FaHtml5 className='iconSkill'/>}, 
        {skill: "CSS", item: <FaCss3Alt  className='iconSkill'/>}, 
        {skill: "Photoshop", item: <SiAdobephotoshop   className='iconSkill'/>}, 
        {skill: "Premier", item: <SiAdobepremierepro    className='iconSkill'/>}, 
        {skill: "Java", item: <FaJava className='iconSkill'/>}, 
    ];

    const ref = useRef(null)

    const { scrollYProgress: scroll1 } = useScroll({
        target: ref,
        offset: ["0 0", "1 1"]
    });

    return (
        <div ref={ref} className='h-[500vh]'>
            <div className='top-0 sticky h-screen overflow-hidden'>

                <div className=' '>
                    <h2 className='lg:text-[10em] md:text-[7em] text-[15vw] italic padding-x uppercase font-bold itaic arimo'>Skills</h2>
                </div>

                <div className='absolute left-[50vw] bottom-[50vh]'>
                    {
                        skills.map((item, index) => {
                            const startDeg = 0 + index * 25;
                            const finalDeg = index * 25 - (skills.length - 1) * 25;

                            const rotateZ = useTransform(scroll1, [0, 1], [`${startDeg}deg`, `${finalDeg}deg`]);

                            const opacity = useMotionValue(1);

                            useMotionValueEvent(rotateZ, "change", (latest) => {
                                const deg = parseFloat(latest); 
                                if (deg > -90 && deg < 90) {
                                    opacity.set(1);
                                } else {
                                    opacity.set(0);
                                }
                            });

                            return (
                                <motion.div
                                    key={index}
                                    style={{
                                        transformOrigin: "50% 200vh",
                                        rotateZ,
                                        opacity,
                                    }}
                                    className='absolute padding-x py-2 w-[35em] translate-x-[-50%] translate-y-[-50%] flex gap-5 justify-center items-center'
                                >
                                    <p className='md:text-[4em] text-[15vw]'>{item.skill}</p>
                                    {item.item}
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills