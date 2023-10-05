import { useRef } from "react";
import { motion } from "framer-motion";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Wrapper from "./Wrapper";
import man from "../assets/batmanbest.png";
import externalLinkIcon from "../assets/bat-black.png";
import gmailIcon from "../assets/email-icon.png";
import { scrollTo } from "../helper";
import { useFollowPointer } from "./useFollowPointer";
const HeroBanner = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    return (
        <div
            id="hero"
            className="w-full h-[100%] relative bg-[#111111] overflow-hidden sm:h-[640px]"
        >
            {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
            <motion.span
                ref={ref}
                animate={{ x, y }}
                className="hidden md:block sec-1-bg-gradient-1-desktop  md:w-[1120px] 2xl:w-[1420px] md:h-[100vh] lg:h-[100%] 2xl:h-[100%] absolute md:left-[1000px] 2xl:left-[1309px] -top-[709px]"
            />
            {/* //1419px */}
            <span className="hidden md:block sec-1-bg-gradient-2-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] lg:h-[100%] 2xl:h-[100%] absolute left-[105px] top-[672px] md:top-[500px] 2xl:top-[672px]" />
            {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

            {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
            <span className="md:hidden sec-1-bg-gradient-1-mobile absolute w-[212px] h-[211px] left-[285px] -top-[25px]" />
            <span className="md:hidden sec-1-bg-gradient-2-mobile absolute w-[636px] h-[635px] -left-[334px] top-[672px]" />
            {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

            <Wrapper>
                {/* NAVBAR START */}
                <motion.div
                    className="hidden md:flex items-center justify-between mt-[40px] 2xl:mt-[63px] relative"
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    <div className="flex items-center gap-[6px]">
                        <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
                            <img src={gmailIcon} alt="" className="w-[18px]" />
                        </div>
                        <div>prathamsharmafaangm@gmail.com</div>
                    </div>
                    <ul className="flex 2xl:text-[20px]">
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                            onClick={() => scrollTo("about")}
                        >
                            About me
                        </li>

                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                            onClick={() => scrollTo("work")}
                        >
                            Projects
                        </li>
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                            onClick={() => scrollTo("contact")}
                        >
                            Contact
                        </li>
                    </ul>
                </motion.div>
                {/* NAVBAR END */}

                {/* BIG HEADING START */}
                <motion.div
                    className="flex justify-center text-center mt-14 mb-10 relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-[50px] md:text-[8rem] 2xl:text-[189px] leading-[50px] md:leading-[125px]  2xl:leading-[192px] font-oswald uppercase">
                        The dark dev.
                        <br className="invisible md:visible" />
                        <h1 className="text-red-400">
                            Vengeance.
                        </h1>
                    </h1>
                </motion.div>
                {/* BIG HEADING END */}

                {/* INTRO START */}
                <motion.div
                    className="flex flex-col mb-10 text-center md:text-left text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] relative"
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    <div className="font-light mb-4">
                        🦇 It's me{" "}
                        <span className="font-semibold text-blue-400">BATMAN!!</span>
                    </div>
                    <div className="max-w-[510px] z-10 ">
                        The Dark Dev who scales frontend heights,
                        dives into the backend abyss,
                        ensures Gotham's digital realm
                        echoes his dynamic cape!
                    </div>
                </motion.div>
                {/* INTRO END */}

                {/* NUMBER BLOCK START */}
                <motion.div
                    className="hidden md:flex gap-4 relative z-10"
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    {/* START */}
                    <div className="flex justify-center items-center gap-1">
                        <button class="relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <a href="https://drive.google.com/file/d/1tJDnEaa6H90XCX-gTzQEYdPtqO244G-g/view?usp=sharing">Batman's Resume</a>
                            </span>
                        </button>
                        <a href="https://www.linkedin.com/in/pratham-sharma-abcabcabc/"><LinkedInIcon /></a>
                        <a href="https://github.com/pratham4434"><GitHubIcon /></a>
                        <a href="https://www.instagram.com/whereyash/"><InstagramIcon /></a>
                        {/* <a href="https://twitter.com/PrathamSharma_1"><TwitterIcon /></a> */}
                        <a href="https://www.youtube.com/@BassBangers"><YouTubeIcon /></a>

                        

                    </div>
                    {/* END */}

                    {/* START */}
                    {/* <div className="flex justify-center items-center gap-3">
                        <div className="text-[80px] font-light">12+</div>
                        <div className="leading-[22px]">
                            SUCCESSFUL
                            <br />
                            MISSIONS
                        </div>
                    </div> */}
                    {/* END */}
                </motion.div>
                {/* NUMBER BLOCK END */}

                {/* PERSON BLOCK START */}
                <motion.div
                    className="flex w-[100%]  md:w-[100%] 2xl:w-[1275px] absolute bottom-0 left-[50%] -translate-x-1/2"
                    initial={{ y: 200, x: "-50%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
{/* style={{ filter: "brightness(93%)", filter: "contrast(95%)" }} */}
                    <img className="w-[100%] drop-shadow-2xl" style={{  filter: "contrast(130%)" ,imageRendering: "crisp-edges"}} src={man} alt="" />
                    {/* <img className="w-[100%] drop-shadow-2xl" style={{}} src={fog} alt="" /> */}

                    {/* HIRE ME BUTTON START */}
                    <div
                        className="absolute top-[140px] -right-10 2xl:top-[240px] 2xl:-right-10 w-[140px] h-[140px] rounded-full bg-white/[0.5] flex flex-col justify-center items-center gap-2 backdrop-blur-sm cursor-pointer transition-transform scale-[0.65] md:scale-100 active:scale-[0.55] md:active:scale-90"
                        onClick={() => scrollTo("contact")}
                    >
                        <img
                            src={externalLinkIcon}
                            alt=""
                            className="w-[100px]"
                        />
                        <div className="text-black">Need Help?</div>
                    </div>


                    {/* HIRE ME BUTTON END */}
                </motion.div>
                {/* PERSON BLOCK END */}

            </Wrapper>
        </div>
    );
};

export default HeroBanner;
