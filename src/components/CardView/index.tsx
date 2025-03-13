import { ReactNode, useState } from "react"
import CustomText from "../CustomText"
import CanView from "../CanView"
import { DownCircleOutlined } from "@ant-design/icons"
import { cn } from "@/utils/Util"

interface CardViewProps {
  title?: string
  children: ReactNode
  isDrop?: boolean
}

const CardView: React.FC<CardViewProps> = ({ title, children, isDrop }) => {
  const [isDropdown, setIsDropdown] = useState<boolean>(true)

  return (
    <div className="pt-2 pb-2 mb-5 border rounded-s border-slate-200">
      <CanView condition={isDropdown}>{children}</CanView>
    </div>
  )
}

export default CardView
