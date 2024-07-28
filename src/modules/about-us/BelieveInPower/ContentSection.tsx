import React from "react";
import { QuoteIcon } from "@radix-ui/react-icons";
const ContentSection=()=>{
    return (
        <div className="flex flex-row text-gray-600 p-8 md:p-12 lg:px-16 lg:py-24 space-x-5">
            <div>
            <QuoteIcon style={{transform:"rotate(180deg)", color:"#858585"}} className="size-6 md:size-10"/>
            <div className="ml-4 md:ml-8" style={{color:"#2E2D34"}}>
            <span className="font-regular text-[24px] md:text-[46px] leading-tight">At Xplorers,</span> 
            <p className="text-[16px] md:text-[36px] leading-tight">we believe in the power of</p>
            </div>
            </div>
            <div className="flex flex-col font-bold text-[24px] md:text-[42px] leading-7 md:leading-10 md:pt-12">
            <p className="opacity-10 pt-2" style={{color:"#2A59AC"}}>collaboration</p><p style={{color:"#37528E"}}>connection.</p><p className="opacity-10 leading-6 md:leading-tight" style={{color:"#2A59AC"}}>shared learning</p>
            </div>
        </div>
    );
}

export default ContentSection;