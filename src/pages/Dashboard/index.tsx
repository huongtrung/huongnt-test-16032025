import React, { useEffect } from "react"
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
import { Layout } from "antd"
import AOS from "aos"
import "aos/dist/aos.css"

const layoutStyle = {
  overflow: "hidden",
  width: "calc(100% - 0px)",
  maxWidth: "calc(100% - 0px)",
}

const Dashboard: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <Layout style={layoutStyle}>
      <img src={Images.banner} className="w-full" data-aos="zoom-in-down" data-aos-delay="100" />
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
    </Layout>
  )
}
export default Dashboard
