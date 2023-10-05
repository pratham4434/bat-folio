import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Portfolio from "./Portfolio";
import Div from "./Div";

// IMAGES

import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";


import sk1 from "../assets/sk-1.png";
import sk2 from "../assets/logos/git.png";
import sk3 from "../assets/logos/javascript.png";
import sk4 from "../assets/logos/nextjs.png";
import sk5 from "../assets/logos/nodejs.png";
import sk6 from "../assets/logos/python.png";
import sk7 from "../assets/logos/redux.png";
import sk8 from "../assets/logos/ts.png";
import sk9 from "../assets/logos/getpostman.svg";
import sk10 from "../assets/sk-11.png";
import sk11 from "../assets/sk-5.png";


const Skills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
    return (
        <div
            id="skills"
            className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <div className="sec-3-bg-gradient-1" />
            <div className="sec-3-bg-gradient-2" />
            <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
            <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
            {/* BACKGROUND ELEMENTS END */}
            <Wrapper>
                {/* SKILL ICONS START */}
                {/* <Div className="flex justify-center item-center grid-cols-4 gap-3 md:grid-cols-11 relative">
                    <SkillIcon path={sk1} />
                    <SkillIcon path={sk2} />
                    <SkillIcon path={sk3} />
                    <SkillIcon path={sk4} />
                    <SkillIcon path={sk5} />
                    <SkillIcon path={sk6} />
                    <SkillIcon path={sk7} /> */}
                    {/* <SkillIcon path={sk8} /> */}
                    {/* <SkillIcon path={sk9} /> */}
                    {/* <SkillIcon path={sk10} /> */}
                    {/* <SkillIcon path={sk11} /> */}
                {/* </Div> */}

{/* photoshop */}
{/* reactjs */}
{/* nextjs */}
{/* figma */}
{/* JS */}
{/* ts */}
{/* nodejs */}
{/* redux */}

{/* py */}

                <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
                    <SkillIcon path={sk1} />
                    <SkillIcon path={sk2} />
                    <SkillIcon path={sk3} />
                    <SkillIcon path={sk4} />
                    <SkillIcon path={sk5} />
                    <SkillIcon path={sk6} />
                    <SkillIcon path={sk7} />
                    <SkillIcon path={sk8} />
                    <SkillIcon path={sk9} />
                    <SkillIcon path={sk10} />
                    <SkillIcon path={sk11} />
                   
                </Div>
                <Portfolio />
                {/* <Achievements /> */}
            </Wrapper>
        </div>
    );
};

export default Skills;
