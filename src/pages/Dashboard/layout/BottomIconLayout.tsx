import Images from "@/theme/Images"

const BottomIconLayout: React.FC = () => {
  return (
    <div className="absolute sm:bottom-6 left-0 right-0 px-4 flex">
      <div className="absolute bottom-4 left-0 right-0 px-4 flex justify-between sm:justify-center items-center gap-40 text-white text-xl">
        <button>
          <img src={Images.mountains} className="w-7 h-7" />
        </button>
        <button>
          <img src={Images.fishing} className="w-7 h-7" />
        </button>
        <button>
          <img src={Images.huting} className="w-7 h-7" />
        </button>
      </div>
      <div className="absolute bottom-10 right-10 px-4 flex">
        <button>
          <img src={Images.msg} className="w-10 h-10" />
        </button>
      </div>
    </div>
  )
}

export default BottomIconLayout
