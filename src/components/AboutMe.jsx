import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import yashhack from "../assets/yashhack.png";

import Wrapper from "./Wrapper";
import flag from "../assets/dc.png";
import pe1 from "../assets/dotted2.svg";
import pe2 from "../assets/dotted.svg";
import Div from "./Div";



const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className=" w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden main-divison"
            style={{
                background: "#000",
                boxShadow: " 0 8px 8px -4px white"
            }}
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-6-bg-gradient" />

            <span className="sec-2-bg-gradient" />

            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-white text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
                    <span className="flex items-center gap-2 ">

                        {/* <span>Based in</span> */}
                        <img
                            src={flag}
                            alt=""
                            className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
                        />
                        <span className="pr-8 ">Gotham's hope</span>
                        <div className="flex justify-center items-center gap-1">
                            <button onClick={() => { alert("Are you nuts! You really want to compromise Batman?") }} class="relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    See my face?
                                </span>
                            </button>

                        </div>


                        {/* <img
                            src={yashhack}
                            alt=""
                            className="w-[70px] md:w-[150px] 2xl:w-[300px] block mt-1 md:mt-2"
                        /> */}
                    </span>
                </Div>
                {/* HEADING END */}

                {/* PARAGRAPH START */}
                <div className="flex flex-wrap-reverse md:flex-nowrap items-start justify-between  py-[50px] md:py-[100px] relative">
                    <div>
                        <Div className=" text-slate-300 max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                            Attention citizens! Amidst the rising tide of pretending Batmans, I, Pratham, reveal my
                            true identity as the genuine Batman. By day, I pursue a Data Science degree at Heritage
                            Institute of Technology in Kolkata and by the night I debug Gotham's digital shadows. My
                            technical arsenal includes proficiency in C, C++, Python, R, and JavaScript/TypeScript,
                            complemented by ascendancy in Git/Github, UI libraries, Tailwindcss, Postman, Webpack, Figma,
                            Photoshop, and WebSockets.


                        </Div>
                        {/* PARAGRAPH END */}

                        {/* PARAGRAPH START */}
                        <Div className="text-slate-300 max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                            Navigating acclaimed frameworks like ReactJs, NextJs, ExpressJs, NodeJs, and Redux and Flux,
                            I command databases like MongoDB, MySQL, Firebase Firestore, and SQLite. Noteworthy
                            projects in my Bat-Belt include QStack, an instant doubt-solving platform with video-chat
                            features, and BoomBot, a personal ecommerce venture for headphones and watches. Popcorn,
                            my IMDb website clone, stands testament to my prowess.

                        </Div>
                        {/* PARAGRAPH END */}

                        {/* PARAGRAPH START */}
                        <Div className=" text-slate-300 max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                            Achievements adorn my Batcave, including 2nd Runner Up at Status Code 0 hackathon organized by IIIT Kalyani,
                            winning the Postman track at IISER Kolkata, State rank holder, and gold medalist in multiple Olympiads. In
                            the realm of open-source, I contribute actively. Have certifications in NodeJS,
                            Next.js, React, and recognition as a Postman API Fundamentals Student Expert. Together,
                            let's script a heroic tech narrative!
                            <br/>
                            <br/>
                            (Ps. - I have a YouTube channel too (Bass Bangers) with 70k+ subs and around 30M+ total views.)
                        </Div>
                        {/* PARAGRAPH END */}
                    </div>
                    <div className="flex text-right flex-wrap  justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[70px]  2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
                        {/* <img class="h-[360px] max-w-xl rounded-lg drop-shadow-xl " src={yashhack} alt="" /> */}


                        <span>Frontend </span>
                        <span> finesse,  </span>

                        <span >
                            Backend
                            {/* <img
                            src={pattern}
                            className="block md:hidden w-[80px] mt-1"
                        /> */}
                        </span>
                        <span >
                            vigilance,
                            {/* <img
                            src={pattern}
                            className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
                        /> */}
                        </span>
                        <span >
                            Batman.

                        </span>

                    </div>
                </div>
                {/* <img class="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800" src="/docs/images/examples/image-2@2x.jpg" alt="image description" /> */}

            </Wrapper>
        </div>
    );
};

export default AboutMe;
