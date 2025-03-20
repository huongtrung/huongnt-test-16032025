import { usePagesStore } from "@/stores/usePageStore"
import Images from "@/theme/Images"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Bloc6Layout = () => {
  const { pagesData } = usePagesStore()

  const getImage = (index: number) => {
    switch (index) {
      case 0:
        return Images.m_1
      case 1:
        return Images.m_2
      case 2:
        return Images.m_3
      case 4:
        return Images.m_4
      default:
        return Images.m_4
    }
  }

  useEffect(() => {
    AOS.init({ once: false, duration: 800 })
  }, [])

  return (
    <section className="bg-gradient-to-b from-[#e6f8fd] to-white py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <p className="text-gray-600 max-w-md text-sm">{pagesData?.bloc_5?.text}</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-right text-[#3D1F1F] leading-snug">
            {pagesData?.bloc_5?.title} <br />
          </h2>
        </div>
        <div
          className="relative mt-10 rounded-xl overflow-hidden bg-cover bg-center h-[394px] sm:h-[694px]"
          style={{
            backgroundImage: `url(${Images.bg})`,
          }}
        >
          <div
            className="relative m-10 mt-16 bg-white p-4 rounded-xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src={Images.dish} alt="Main" className="w-full h-[270px] sm:h-full object-cover rounded-xl" />
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-xl p-4 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <p className="font-semibold text-black">{pagesData?.bloc_5?.reviews?.[0]?.author}</p>
                <p className="text-sm text-gray-600">{pagesData?.bloc_5?.reviews?.[0]?.review}</p>
              </div>
              <p className="text-xs text-black bg-white px-3 py-1 rounded-full shadow">
                {pagesData?.bloc_5?.reviews?.[0]?.date}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {pagesData?.bloc_5?.reviews?.map(
            (item: any, idx: number) =>
              idx != 4 && (
                <div key={idx} className="relative rounded-xl overflow-hidden group">
                  <img
                    src={getImage(idx)}
                    alt="Thumbnail"
                    className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#3D1F1F] bg-opacity-80 text-white flex items-center justify-between p-2">
                    <div className="flex items-center gap-1 px-2 text-sm">
                      <img src={Images.ins} className="w-4 h-4" />
                      <p className="ml-2">{item.author}</p>
                    </div>
                    <img src={Images.arrow} className="w-4 h-4" />
                  </div>
                </div>
              )
          )}
        </div>

        <p className="mt-6 text-center text-sm text-gray-700">{pagesData?.bloc_5?.footer}</p>
      </div>
    </section>
  )
}

export default Bloc6Layout
