import { LayoutContainer } from "@/theme/CommonStyles"
import { ReactNode, useEffect } from "react"
import HeaderLayout from "../HeaderLayout"

interface IAppLayout {
  children: ReactNode
}

const AppLayout: React.FC<IAppLayout> = ({ children }) => {
  return (
    <LayoutContainer>
      {/* <HeaderLayout /> */}
      <div className="bg-white">{children}</div>
    </LayoutContainer>
  )
}

export default AppLayout
