"use client"
import { MenuitemType } from "../types"
import { AiOutlineHome } from "react-icons/ai"
import { BsCameraVideo } from "react-icons/BS"
import {RiGroupLine} from "react-icons/ri"
export default function Menuitem({iconString,colorString,sizeString}:MenuitemType)
{
    const icons=()=>{
            if(iconString=='For You')return <AiOutlineHome size={sizeString} color={colorString}/>
            if(iconString=='Following')return <RiGroupLine size={sizeString} color={colorString}/>
            if(iconString=='Live')return <BsCameraVideo size={sizeString} color={colorString}/>

        }
    return(
        <>
        <div className="w-full flex items-center hover:bg-gray-100 p-2.5 rounded-md">
                <div
                className="flex ites-center lg:mx-0 mx-auto">
                    {icons()}
                    <p className={`lg:block hidden pl-[2px] mt-0.5 font-semibold text-[15px]
                    text-[${colorString}]`}
                    >
                     {iconString}
                    </p>
                </div>
        </div>
        </>
    )
}
