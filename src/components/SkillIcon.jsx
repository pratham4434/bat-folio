import React from "react";

const SkillIcon = ({ path }) => {
    return (
        // <div className=" shadow-md shadow-black flex items-center justify-center w-[100px] md:w-[90px] 2xl:w-[210px] h-[100px] md:h-[90px] 2xl:h-[110px] rounded-full bg-[#292929]">
        //     <img src={path} className="w-[34px] md:w-[44px] 2xl:w-[50px] " />
        // </div>
        <div className="flex items-center justify-center w-[70px] md:w-[90px] 2xl:w-[110px] h-[70px] md:h-[90px] 2xl:h-[110px] rounded-full bg-[#292929]">
            <img src={path} className="w-[34px] md:w-[44px] 2xl:w-[58px]" />
        </div>
    );
};

export default SkillIcon;
