import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import useGetPagesData from "../hooks/useGetPagesData"
import Colors from "@/theme/Colors"

const ChangeLanguage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const mutationPromise = useGetPagesData()

  useEffect(() => {
    changeLanguage("fr")
  }, [])

  const changeLanguage = async (lng: string) => {
    console.log({ lng })
    i18n.changeLanguage(lng)
    const mutation = await mutationPromise
    mutation.mutate(lng)
  }

  return (
    <div className="flex">
      <button
        onClick={() => changeLanguage("en")}
        className="text-sm px-2 py-1 mx-1 rounded text-black shadow hover:bg-gray-100"
        style={{ backgroundColor: i18n.language === "en" ? "#F2542D" : "white" }}
      >
        🇬🇧 EN
      </button>
      <button
        onClick={() => changeLanguage("fr")}
        className="text-sm px-2 py-1 mx-1 rounded bg-white text-black shadow hover:bg-gray-100"
        style={{ backgroundColor: i18n.language === "fr" ? "#F2542D" : "white" }}
      >
        🇫🇷 FR
      </button>
    </div>
  )
}

export default ChangeLanguage
