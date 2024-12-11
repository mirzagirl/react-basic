import React, { useEffect,useState,useRef } from "react";

export default function useHover(){
    const refHo = useRef("");
    const [isHovered,setIsHovered] = useState(false);

   
    useEffect(() => {
        const element = refHo.current
        const handleHover = ()=>setIsHovered(t=>!t);
        if (element) {
            element.addEventListener('mouseenter',handleHover);
            element.addEventListener('mouseleave', handleHover);
        }
        return () => { // callback/cleanup to run every render. It's not a big deal ...
            element.removeEventListener('mouseenter', handleHover);
            element.removeEventListener('mouseleave', handleHover);
        }
    })

    return [refHo,isHovered]
}

