import { usePagesStore } from "@/stores/usePageStore"
import Images from "@/theme/Images"
import React from "react"

const Bloc1Layout: React.FC = () => {
  const { pagesData } = usePagesStore()

  const getImage = (index: number) => {
    switch (index) {
      case 0:
        return Images.image_1
      case 1:
        return Images.image_2
      case 2:
        return Images.image_3
      default:
        return Images.image_1
    }
  }

  return (
    <section className="py-12 px-4 sm:px-8 md:px-16 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#dc5b38] mb-2">{pagesData?.bloc_1?.title}</h2>
        <p className="text-lg text-gray-600 mb-20">{pagesData?.bloc_1?.subtitle}</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {pagesData?.bloc_1?.cases?.map((item: any, index: number) => (
          <div
            key={index}
            className={`bg-white rounded-xl overflow-hidden shadow-sm text-left transition-all duration-300 ${
              index === 1 ? "relative z-10 -mt-10" : "mt-0"
            }`}
          >
            <img
              src={getImage(index)}
              alt={item?.category}
              className={`w-full object-cover rounded-t-xl transition-all duration-300 ${
                index === 1 ? "h-90" : "h-80"
              }`}
            />
            <div className="p-5">
              <p className="text-sm text-[#dc5b38] font-medium mb-1">{item.category}</p>
              <h3 className="text-lg font-semibold mb-2">{item.tagline}</h3>
              <p className="text-sm text-gray-600 mb-4">{item?.description}</p>
              <button className="border border-gray-400 px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition">
                {item.cta} <span className="inline-block ml-1 text-blue-400">↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Bloc1Layout
