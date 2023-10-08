import {usePathname} from "next/navigation"
import TopNav from "./TopNav"
import SideNavMain from "./SideNavMain"
export default function MainLayout(
    {children}:{children:React.ReactNode})
    {
        const pathname=usePathname()
        return(
        <div>
            <TopNav/>
            <div className={`flex justify-between mx-auto w-full lg:px-2.5 px-0 ${pathname=='/'? 'max-w-[1140px]':''}`}>
            <SideNavMain/>
            {children}
            </div>
         </div>
        )
    } 