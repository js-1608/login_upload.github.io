"use client"
import ClientOnly from "@/app/components/ClientOnly"
import MainLayout from "@/app/layouts/MainLayout"
import { ProfilePageTypes } from "@/app/types"

export default function profile({params}:ProfilePageTypes)
{
    const currentUser={
        id:'123',
        user_id:'123',
        name:'shivam',
        image:'https://placeholder.co/200',
        bio:'active'
    }
    return(
        <>
            <MainLayout>
                <div
                className="pt-[90px] ml-[90px] 2xl:pl-[185px] lg:pl-[160px]
                            lg:pr-0 w-[calc(100%-90px)] pr-3 max-w-[1800px] 2xl:mx-auto
                "       
                >
                    <div className="flex w-[calc(100vw-230px)]">
                        <ClientOnly>


                        {true?(
                                <img className="w-[120px] min-w-[120px] rounded-full"   src={currentUser.image}/>
                              
                            ):(
                                <div className="min-w-[150px] bg-gray-200 rounded-full"/>
                            )}

                        </ClientOnly>

                    </div>

                </div>

            </MainLayout>
        </>
    )
}