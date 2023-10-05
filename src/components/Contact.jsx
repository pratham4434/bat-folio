import React from "react";
import { useRef } from "react";
import { useFollowPointer } from "./useFollowPointer";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import Form from "./Form";
import Div from "./Div";

const Contact = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    return (
        <div
            id="hero"
            className="w-full h-full relative bg-[#111111] overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
            <motion.span
                ref={ref}
                animate={{ x, y }}
                className="hidden md:block sec-1-bg-gradient-1-desktop2 md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute md:left-[1000px] 2xl:left-[1309px] -top-[709px]"
            />
            <span className="hidden md:block sec-1-bg-gradient-2-desktop2 md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute left-[105px] top-[672px] md:top-[500px] 2xl:top-[672px]" />
            {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

            {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
            <span className="md:hidden sec-1-bg-gradient-1-mobile absolute w-[212px] h-[211px] left-[285px] -top-[25px]" />
            <span className="md:hidden sec-1-bg-gradient-2-mobile absolute w-[636px] h-[635px] -left-[334px] top-[672px]" />
            {/* BACKGROUND ELEMENTS FOR DESKTOP END */}
            {/* <div className="bg-[#F2F2F2]"> */}
            <div
                id="contact"
                className=" w-full py-[50px] md:py-[100px] relative overflow-hidden bg-blue-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-100 "
            >
                <Wrapper>
                    {/* SECTION HEADING START */}
                    <Div className="mb-10 relative">
                        <div className=" flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#fff]">
                            Bat-Signal
                        </div>
                        <div className=" text-[#f1f1f1] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px]  text-center max-w-[1000px] mx-auto text-[#fdfdfd]">
                            Signal the Bat-Signal for digital salvation! I'm the Full Stack Web Developer, ready to tackle coding challenges and craft a dynamic digital Gotham. Let's connect and conquer!
                        </div>
                    </Div>
                    {/* SECTION HEADING END */}

                    <Form />
                </Wrapper>
            </div>
        </div>
    );
};

export default Contact;
