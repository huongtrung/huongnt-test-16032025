import { usePagesStore } from "@/stores/usePageStore"
import Images from "@/theme/Images"
import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Bloc7Layout: React.FC = () => {
  const { pagesData } = usePagesStore()

  useEffect(() => {
    AOS.init({ once: false, duration: 800 })
  }, [])

  return (
    <div
      className="w-full bg-cover bg-center flex items-center justify-center text-center px-4 py-20 sm:py-28 mt-10"
      style={{
        backgroundImage: `url(${Images.bg_6})`,
      }}
    >
      <div className="max-w-4xl text-white" data-aos="fade-up" data-aos-delay="200">
        <h1 className="text-3xl sm:text-5xl font-bold text-neutral-800">{pagesData?.bloc_6?.title}</h1>
        <h2 className="text-2xl sm:text-4xl font-semibold text-neutral-500 mt-1">{pagesData?.bloc_6?.subtitle}</h2>
        <p className="mt-6 text-md sm:text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
          {pagesData?.bloc_6?.text}
        </p>
        <div className="mt-8">
          <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow hover:scale-105 transition duration-300">
            {pagesData?.bloc_6?.button}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Bloc7Layout
