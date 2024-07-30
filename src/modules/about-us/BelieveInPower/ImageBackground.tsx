import React from "react";
import Image from "next/image";

const ImageBackground=()=>
            <div className="flex items-center">
            <Image src={"/images/Believe-in-power.png"} 
                    width="250" height="100"
                    alt="Believe in power"
                    className="hidden md:block opacity-10"
                    />
            </div>

export default ImageBackground;