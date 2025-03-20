import { useEffect, useState } from "react"
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
} from "date-fns"
import { Divider } from "antd"
import { usePagesStore } from "@/stores/usePageStore"
import AOS from "aos"
import "aos/dist/aos.css"

const Bloc3Layout = () => {
  const { pagesData } = usePagesStore()

  const [currentDate, setCurrentDate] = useState(new Date())
  const selectedDate = new Date(2025, 6, 21)
  const busyDays = ["2025-01-28", "2025-01-29", "2025-04-02"]

  const renderHeader = () => (
    <div className="flex justify-center gap-5 items-center mb-6 text-lg font-medium text-gray-800">
      <button onClick={() => setCurrentDate(subMonths(currentDate, 1))} className="text-orange-500 text-xl">
        {"<"}
      </button>
      <span>{format(currentDate, "MMMM yyyy")}</span>
      <button onClick={() => setCurrentDate(addMonths(currentDate, 1))} className="text-orange-500 text-xl">
        {">"}
      </button>
    </div>
  )

  const renderDays = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    return days.map((day, idx) => (
      <div key={idx} className="text-center font-semibold text-brown-800">
        {day}
      </div>
    ))
  }

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 })
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 })

    const rows = []
    let days = []
    let day = startDate

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "d")
        const fullDate = format(day, "yyyy-MM-dd")

        const isBusy = busyDays.includes(fullDate)
        const isSelected = isSameDay(day, selectedDate)
        const isCurrentMonth = isSameMonth(day, currentDate)

        let cellStyle = "rounded-md aspect-square flex flex-col justify-center items-center text-center"
        let text = ""
        let textClass = ""
        let bgClass = ""
        let borderClass = ""

        if (!isCurrentMonth) {
          textClass = "text-gray-300"
          bgClass = "bg-gray-100"
        } else if (isBusy) {
          textClass = "text-gray-500"
          borderClass = "border border-gray-300"
          text = "Occupé"
        } else if (isSelected) {
          borderClass = "border-2 border-purple-500"
          textClass = "text-purple-600"
          text = "Libre"
        } else {
          bgClass = "bg-orange-50"
          textClass = "text-orange-600"
          borderClass = "border border-orange-300"
          text = "Libre"
        }

        days.push(
          <div key={day?.toString()} className={`${cellStyle} ${bgClass} ${textClass} ${borderClass}`}>
            <div className="font-semibold">{formattedDate}</div>
            {isCurrentMonth && <div className="text-xs mt-1 opacity-80">{text}</div>}
          </div>
        )

        day = addDays(day, 1)
      }

      rows.push(
        <div key={day?.toString()} className="grid grid-cols-7 gap-2">
          {days}
        </div>
      )
      days = []
    }

    return <div className="space-y-2">{rows}</div>
  }

  useEffect(() => {
    AOS.init({ once: false, duration: 800 })
  }, [])

  return (
    <section className="px-4 py-12">
      <div className="text-center mb-10" data-aos="fade-down" data-aos-delay="200">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 uppercase relative inline-block">
          <span className="before:absolute before:left-[-7rem] before:top-1/2 before:w-20 before:h-px before:bg-gray-300 after:absolute after:right-[-7rem] after:top-1/2 after:w-20 after:h-px after:bg-gray-300">
            {pagesData?.bloc_2_2?.title}
          </span>
        </h2>
      </div>

      <div
        className="bg-white rounded-2xl border-2 p-4 md:p-8 max-w-5xl mx-auto mt-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {renderHeader()}
        <div className="grid grid-cols-7 gap-2 text-sm md:text-base mb-2">{renderDays()}</div>
        {renderCells()}
      </div>
    </section>
  )
}

export default Bloc3Layout
