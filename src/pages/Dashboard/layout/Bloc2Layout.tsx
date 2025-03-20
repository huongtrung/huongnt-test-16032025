import { usePagesStore } from "@/stores/usePageStore"
import Images from "@/theme/Images"
import { Divider } from "antd"
import React, { useEffect, useMemo, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Bloc2Layout = () => {
  const { pagesData } = usePagesStore()

  const [activeLocation, setActiveLocation] = useState<any>(null)

  const getImage = (index: number) => {
    switch (index) {
      case 0:
        return Images.adventure
      case 1:
        return Images.fishing_map
      case 2:
        return Images.hunting
    }
  }

  useEffect(() => {
    AOS.init({ once: false, duration: 800 })
  }, [])

  const locationData = useMemo(() => {
    return [
      {
        id: 1,
        name: pagesData?.bloc_2?.cases?.[0],
        activities: pagesData?.bloc_2?.cases,
        image: Images.mappin_1,
        top: "35%",
        left: "40%",
      },
      {
        id: 2,
        name: pagesData?.bloc_2?.cases?.[1],
        activities: pagesData?.bloc_2?.cases,
        image: Images.mappin_2,
        top: "55%",
        left: "65%",
      },
      {
        id: 3,
        name: pagesData?.bloc_2?.cases?.[2],
        activities: pagesData?.bloc_2?.cases,
        image: Images.mappin_3,
        top: "70%",
        left: "30%",
      },
    ]
  }, [pagesData])

  return (
    <section className="py-12 bg-[#fdf7f5] relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8" data-aos="fade-down" data-aos-delay="200">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 uppercase relative inline-block">
            <span className="before:absolute before:left-[-14rem] before:top-1/2 before:w-40 before:h-px before:bg-gray-300 after:absolute after:right-[-14rem] after:top-1/2 after:w-40 after:h-px after:bg-gray-300">
              {pagesData?.bloc_2?.title}
            </span>
          </h2>
          <div className="flex justify-center flex-wrap gap-4 mt-12">
            {pagesData?.bloc_2?.cases?.map((item: any, index: number) => (
              <button
                key={index}
                className="flex flex-row items-center pl-3 pr-10 py-1 bg-white border border-orange-500 text-orange-600 rounded-full hover:bg-orange-100 transition"
                onClick={() => setActiveLocation(locationData?.[index])}
              >
                <span>
                  <img src={getImage(index)} className="w-7 h-7 mr-2" />
                </span>
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="200">
          <img
            src={Images.map}
            alt="Carte interactive"
            className={`w-full h-auto transition-transform duration-700 ${activeLocation ? "scale-125" : "scale-100"}`}
          />

          {locationData?.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveLocation(loc)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ top: loc.top, left: loc.left }}
              title={loc.name}
            >
              <img
                src={loc.image}
                alt={loc.name}
                className={`w-12 h-14 transition-all duration-300 hover:scale-120 ${
                  activeLocation?.id === loc.id ? "scale-125 border-yellow-400" : ""
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {activeLocation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
              onClick={() => setActiveLocation(null)}
            >
              &times;
            </button>

            <div className="flex items-center space-x-4 mb-4">
              <img src={activeLocation.image} alt="" className="w-16 h-16" />
              <div>
                <h3 className="text-xl font-bold">{activeLocation.name}</h3>
                <p className="text-gray-600">{activeLocation.description}</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Activités:</h4>
              <ul className="list-disc list-inside text-gray-700">
                {activeLocation.activities.map((act: any, index: any) => (
                  <li key={index}>{act}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Bloc2Layout
