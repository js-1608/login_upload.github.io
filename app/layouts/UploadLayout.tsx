import TopNav from "./TopNav"
export default function UplaodLayout(
    {children}:{children:React.ReactNode})
    {
       return(
            <>
            <TopNav/>
            <div className="bg-[#F8F8F8] h-[100vh]">
            <TopNav/>
            <div className="flex justify-between mx-auto w-full px-2 max-w-[1140px]">
                {children}
            </div >
            </div>
            </>
        )
    } 