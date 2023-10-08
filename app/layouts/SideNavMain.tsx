import { usePathname } from "next/navigation";
import Link from "next/link";
import Menuitem from "./Menuitem";
import ClientOnly from "../components/ClientOnly";
import MenuItemFollow from "./MenuItemFollow";

export default function SideNavMain() {
  const pathname = usePathname();
  return (
    <>
      <div
        id="sideNavMain"
        className={`flex z-20 bg-white pt-[80px] h-full lg:border-r-0 border-r
            w-[150px] overflow-auto 
            ${pathname === "/" ? "max-w-[310px]" : "lg:w-[250px]"}`}
      >
        <div className="lg:w-full w-[55px] mx-auto">
          <Link href="/">
            <Menuitem
              iconString="For You"
              colorString={pathname == "/" ? "#F02C56" : ""}
              sizeString="25"
            />
          </Link>
          <Menuitem
            iconString="Following"
            colorString="#000000"
            sizeString="25"
          />
          <Menuitem iconString="Live" colorString="#000000" sizeString="25" />
          <div className="border-b lg:ml-2 mt-2"/>
            <h3
              className="lg:block hidden text-xs text-gray-600
                        font-semibold pt-4 pb-2 px-2"
            >
              Suggested Accounts
            </h3>

            <div className="lg:hidden block pt-3" />

            <ClientOnly>
              <div className="cursor-pointer">
                <MenuItemFollow
                  user={{
                    id: "1",
                    name: "TestUser",
                    image: "https://placeholder.co/50",
                  }}
                />

                <MenuItemFollow
                  user={{
                    id: "2",
                    name: "TestUser",
                    image: "https://placeholder.co/50",
                  }}
                />
              </div>
            </ClientOnly>
            <button className="lg:block:hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]">
              See all
            </button>
            
            
            {true ? (<div>
                <div className="border-b lg:ml-2 mt-2"/>
            <h3
              className="lg:block hidden text-xs text-gray-600
                        font-semibold pt-4 pb-2 px-2"
            >Following Account
            </h3>

            <div className="lg:hidden block pt-3" />

            <ClientOnly>
              <div className="cursor-pointer">
                <MenuItemFollow
                  user={{
                    id: "1",
                    name: "TestUser",
                    image: "https://placeholder.co/50",
                  }}
                />
              </div>
            </ClientOnly>
            <button className="lg:block:hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]">
              More
            </button>

            </div>) : null}
            <div className="lg:block hidden border-b lg:ml-2 mt-2"/>
            <div className="lg:block hidden text-[11px] text-gray-500">
                 <p className="pt-4 px-2">About Newsroom tiktik shop contact careers ByteDance</p>
                 <p className="pt-4 px-2">2023 TIKTIK</p>

            </div>
          </div>
        </div>
    </>
  );
}
