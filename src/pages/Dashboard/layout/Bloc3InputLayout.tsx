import { usePagesStore } from "@/stores/usePageStore"
import Images from "@/theme/Images"
import { useEffect, useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import AOS from "aos"
import "aos/dist/aos.css"

const Bloc3InputLayout = () => {
  const { pagesData } = usePagesStore()

  const [message, setMessage] = useState("")
  const [fileName, setFileName] = useState("")

  const handleFileChange = (e: any) => {
    const file = e.target.files[0]
    if (file?.type === "application/pdf") {
      setFileName(file.name)
    } else {
      alert("Seuls les fichiers PDF sont autorisés.")
    }
  }

  useEffect(() => {
    AOS.init({ once: false, duration: 800 })
  }, [])

  return (
    <section className="py-6 relative">
      <form className="max-w-6xl mx-auto px-4" data-aos="zoom-in-up" data-aos-delay="200">
        <div className="flex flex-row items-center gap-4 mb-4">
          <label className="w-20 block font-medium text-brown-800 mb-1">{pagesData?.bloc_2_2?.btn_1?.[0]} :</label>
          <input
            type="text"
            placeholder={pagesData?.bloc_2_2?.btn_1?.[1]}
            className="flex-1 px-4 py-2 rounded-full border border-orange-100 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 text-brown-700"
          />
        </div>
        <div className="flex flex-row items-center gap-4 mb-4">
          <label className="w-20 block font-medium text-brown-800 mb-1">{pagesData?.bloc_2_2?.btn_2?.[0]} :</label>
          <input
            type="email"
            placeholder={pagesData?.bloc_2_2?.btn_2?.[0]}
            className="flex-1 w-full px-4 py-2 rounded-full border border-orange-100 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 text-brown-700"
          />
        </div>
        <div className="flex flex-row items-center gap-4 mb-4">
          <label className="w-20 block font-medium text-brown-800 mb-1">{pagesData?.bloc_2_2?.btn_3} :</label>
          <ReactQuill
            theme="snow"
            value={message}
            onChange={setMessage}
            className="flex-1 bg-white rounded-2xl border border-orange-100 w-full"
          />
        </div>
        <div className="flex flex-row items-center gap-4 mb-4">
          <label className="w-20 block font-medium text-brown-800 mb-1">{pagesData?.bloc_2_2?.btn_4?.[0]} :</label>
          <div className="flex items-center space-x-2">
            <label className="cursor-pointer text-blue-600 font-medium flex items-center">
              <img src={Images.attach} className="w-5 h-5 mr-2" />
              {pagesData?.bloc_2_2?.btn_4?.[1]}
              <input type="file" accept="application/pdf" onChange={handleFileChange} className="hidden" />
            </label>
            <span className="text-gray-400 text-sm">(*{pagesData?.bloc_2_2?.btn_4?.[2]})</span>
          </div>
        </div>

        <div className="flex flex-row justify-end items-center gap-4 pt-4">
          <button
            type="reset"
            className="px-6 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
          >
            {pagesData?.bloc_2_2?.btn_5}
          </button>
          <button className="px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2 transition">
            {pagesData?.bloc_2_2?.btn_6}
            <img src={Images.send} className="w-6 h-6" />
          </button>
        </div>
      </form>
    </section>
  )
}

export default Bloc3InputLayout
