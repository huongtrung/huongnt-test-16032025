import React from "react"
import Header from "./layout/Header"
import Images from "@/theme/Images"
import Bloc1Layout from "./layout/Bloc1Layout"
import Bloc2Layout from "./layout/Bloc2Layout"
import Bloc3Layout from "./layout/Bloc3Layout"
import Bloc4Layout from "./layout/Bloc4Layout"
import Bloc5Layout from "./layout/Bloc5Layout"
import Bloc6Layout from "./layout/Bloc6Layout"
import Bloc7Layout from "./layout/Bloc7Layout"
import Footer from "./layout/Footer"
import Bloc3InputLayout from "./layout/Bloc3InputLayout"
import BottomIconLayout from "./layout/BottomIconLayout"

const Dashboard: React.FC = () => {
  return (
    <div className="w-full h-full">
      <img src={Images.banner} alt="Banner background" className="w-full h-500" />
      <Header />
      <BottomIconLayout />
      <Bloc1Layout />
      <Bloc2Layout />
      <Bloc3Layout />
      <Bloc3InputLayout />
      <Bloc4Layout />
      <Bloc5Layout />
      <Bloc6Layout />
      <Bloc7Layout />
      <Footer />
    </div>
  )
}
export default Dashboard
