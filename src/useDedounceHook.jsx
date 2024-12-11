import React, { useEffect,useState } from "react";

export default function useDebounceHook({input}){
    const [debouncedValue,setDebounceValue] = useState(input);

    useEffect(()=>{
        const timeout = setTimeout(()=>{
        setDebounceValue(input);
       },2000)

       return ()=>clearTimeout(timeout);

    },[input])

    return [debouncedValue]
}