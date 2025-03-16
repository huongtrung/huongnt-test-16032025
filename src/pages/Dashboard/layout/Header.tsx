import Images from "@/theme/Images"
import React, { useState } from "react"
import ChangeLanguage from "./ChangeLanguage"
import { usePagesStore } from "@/stores/usePageStore"
import { MenuOutlined } from "@ant-design/icons"

const Header: React.FC = () => {
  const { pagesData } = usePagesStore()

  const [open, setOpen] = useState(false)

  return (
    <header className="w-full fixed top-0 z-50 bg-[#7A5C58]/80 text-white py-3 flex justify-between items-center">
      <div className="hidden md:flex flex-row items-center">
        <div className="font-bold text-lg ml-10 md:mr-20">LOGO SAMPLE</div>
        <nav className="ml-10 hidden md:flex gap-10 text-sm uppercase">
          {pagesData?.banner_menu?.map((page: any) => (
            <a href="#" className="hover:underline" key={page}>
              {page}
            </a>
          ))}
        </nav>
      </div>
      <div className="md:hidden w-full flex flex-row">
        <div className="flex-1 font-bold text-sm ml-10 mr-20">LOGO SAMPLE</div>
        <div className="flex-1 justify-end">
          <button onClick={() => setOpen(!open)}>
            <MenuOutlined style={{ color: "#ffffff" }} />
          </button>
        </div>
      </div>
      <div className="space-x-4 mr-2 items-center hidden md:flex">
        <span>
          <ChangeLanguage />
        </span>
        <span>
          <img src={Images.mountains} className="w-7 h-7" />
        </span>
        <span>
          <img src={Images.fishing} className="w-7 h-7" />
        </span>
        <span>
          <img src={Images.crosshair} className="w-7 h-7" />
        </span>
        <span>
          <img src={Images.reservez} className="w-12 h-7" />
        </span>
      </div>
    </header>
  )
}

export default Header
