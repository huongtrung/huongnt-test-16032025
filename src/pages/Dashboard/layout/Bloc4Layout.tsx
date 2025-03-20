import React, { useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Images from "@/theme/Images"
import { usePagesStore } from "@/stores/usePageStore"
import AOS from "aos"
import "aos/dist/aos.css"

const Bloc4Layout: React.FC = () => {
  const { pagesData } = usePagesStore()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.2,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.2, spacing: 30 },
      },
    },
  })

  useEffect(() => {
    AOS.init({ once: false, duration: 800 })
  }, [])

  const getImage = (index: number) => {
    switch (index) {
      case 0:
        return Images.is_1
      case 1:
        return Images.is_2
      case 2:
        return Images.is_3
      case 3:
        return Images.is_4
      default:
        return Images.is_1
    }
  }

  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <h2 className="text-3xl font-bold text-[#f15a29]">{pagesData?.bloc_3?.title}</h2>
        <a className="text-gray-700 text-sm font-medium border-b border-gray-400 hover:text-[#f15a29] transition">
          {pagesData?.bloc_3?.more_info}
        </a>
      </div>
      <div ref={sliderRef} className="keen-slider md:ml-20" data-aos="fade-up" data-aos-delay="200">
        {pagesData?.bloc_3?.cases?.map((item: any, index: number) => (
          <div key={index} className="keen-slider__slide rounded-xl mr-2">
            <div className="bg-white rounded-xl w-full  h-60 shadow-sm overflow-hidden">
              <img src={getImage(index)} alt={item.category} className="w-full h-60 object-cover" />
              <div className="space-y-2 mt-5">
                <p className="text-sm text-[#f15a29] font-semibold">{item.tagline}</p>
                <h2 className="text-lg font-semibold">{item.category}</h2>
                <p className="text-sm text-gray-600 border-l-2 border-[#BBBBBB] pl-3 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Bloc4Layout
