import { usePagesStore } from "@/stores/usePageStore"
import Images from "@/theme/Images"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Bloc5Layout: React.FC = () => {
  const { pagesData } = usePagesStore()

  const getImage = (index: number) => {
    switch (index) {
      case 0:
        return Images.icon_1
      case 1:
        return Images.icon_2
      case 2:
        return Images.icon_3
      case 4:
        return Images.icon_4
      default:
        return Images.icon_5
    }
  }

  useEffect(() => {
    AOS.init({ once: false, duration: 800 })
  }, [])

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="flex-1 mt-2" data-aos="fade-left" data-aos-delay="200">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            <span className="text-[#f15a29]">{pagesData?.bloc_4?.title + "  "}</span>
            <span className="text-[#f15a29] text-opacity-50">{pagesData?.bloc_4?.subtitle}</span>
          </h2>
          <div className="flex flex-row mt-10">
            <div className="w-20 h-0.5 mt-4 bg-[#BBBBBB] mr-2"></div>
            <div className=" md:pl-10">
              <h3 className="font-bold text-lg text-[#3d1f1f] mb-5">{pagesData?.bloc_4?.text_title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl">{pagesData?.bloc_4?.text}</p>
            </div>
          </div>
        </div>
        <div className="flex-1" data-aos="fade-right" data-aos-delay="200">
          <img src={Images.ice_cream} alt="Ice cream" className="rounded-xl w-full max-w-md mx-auto object-cover" />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-16 mx-4 text-center">
        {pagesData?.bloc_4?.pictos?.map((item: any, index: number) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <img src={getImage(index)} alt={item.title} className="w-14 h-14" />
            <p className="font-semibold text-gray-800">{item.title}</p>
            <span className="text-gray-500 text-sm">{item.description}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Bloc5Layout
