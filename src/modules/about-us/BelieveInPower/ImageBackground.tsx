import React from "react";
import Image from "next/image";

const ImageBackground=()=>{
    return (
            <div>
            <Image src={"/images/Believe-in-power.png"} 
width="250" height="100"
alt="Believe in power"
style={{opacity:"10%"}}
className="hidden md:block"
/>
        </div>
       

    );
}

export default ImageBackground;