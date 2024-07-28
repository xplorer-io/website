import React from "react";
import ContentSection from "./ContentSection";
import ImageBackground from "./ImageBackground";

const BelieveInPower=()=>{
    return (
        <div className="flex flex-col md:flex-row w-full justify-between">
        <ContentSection/>
        <ImageBackground/>
        </div>
    );
}

export default BelieveInPower;