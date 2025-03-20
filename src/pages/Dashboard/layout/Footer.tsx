import { usePagesStore } from "@/stores/usePageStore"
import Images from "@/theme/Images"

const Footer: React.FC = () => {
  const { pagesData } = usePagesStore()

  const getName = (index: number) => {
    return pagesData?.footer?.links?.[index]?.name
  }

  return (
    <footer className="bg-[#532e2b] text-white px-4 py-10 sm:py-14">
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm sm:text-base">
          <div>
            <h4 className="font-semibold text-white mb-2">{pagesData?.footer?.address?.name}</h4>
            <p className="text-white">{pagesData?.footer?.address?.phone}</p>
            <p className="text-white">{pagesData?.footer?.address?.location}</p>
          </div>

          <div>
            <ul className="space-y-2 text-gray-300">
              <li>
                <p className="text-sm">{getName(0)}</p>
              </li>
              <li>
                <p className="text-sm">{getName(1)}</p>
              </li>
              <li>
                <p className="text-sm">{getName(2)}</p>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-gray-300">
              <li>
                <p className="text-sm">{getName(3)}</p>
              </li>
              <li>
                <p className="text-sm">{getName(4)}</p>
              </li>
              <li>
                <p className="text-sm">{getName(5)}</p>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-gray-300">
              <li>
                <p className="text-sm">{getName(6)}</p>
              </li>
              <li>
                <p className="text-sm">{getName(7)}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-500 my-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-white text-sm">© BASIC 2024</span>
          <div className="flex gap-4">
            <img src={Images.fb} className="w-7 h-7" />
            <img src={Images.instagram} className="w-7 h-7" />
            <img src={Images.youtube} className="w-7 h-7" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
