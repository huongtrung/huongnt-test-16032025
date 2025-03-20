import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useGetPagesData } from "../hooks/useGetPagesData"
import Images from "@/theme/Images"
import { cn } from "@/utils/Util"

const ChangeLanguage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const getPagesDataMutate = useGetPagesData()

  const defaultLang = i18n.language

  const [isFr, setIsFr] = useState(defaultLang === "fr")

  useEffect(() => {
    const lang = isFr ? "fr" : "en"
    getPagesDataMutate.mutate(lang)
  }, [isFr])

  useEffect(() => {
    changeLanguage("fr")
  }, [])

  const changeLanguage = async (lng: string) => {
    try {
      i18n.changeLanguage(lng)
      getPagesDataMutate.mutate(lng)
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <label
      className="drop-shadow-md mr-4 relative flex items-center w-[72px] h-7 bg-white rounded-full cursor-pointer border-2 border-gray-300 p-1 transition-all"
      style={{ backgroundColor: "#f15a29" }}
      onClick={() => setIsFr(!isFr)}
    >
      <div
        className={`drop-shadow-md absolute w-6 h-6 bg-red-600 rounded-full transition-transform duration-300 ease-in-out transform ${isFr ? "translate-x-0" : "translate-x-9"}`}
      >
        <img src={isFr ? Images.fr : Images.en} />
      </div>
      <span
        className={cn(
          "absolute w-full font-bold text-lg transition-all duration-300 ease-in-out text-white",
          isFr ? "text-right right-2" : "text-left left-2"
        )}
      >
        {isFr ? "FR" : "EN"}
      </span>
    </label>
  )
}

export default ChangeLanguage
