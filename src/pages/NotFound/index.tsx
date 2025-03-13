import { HomeOutlined, ArrowLeftOutlined } from "@ant-design/icons"
import React from "react"
import { useNavigate } from "react-router-dom"
import { PATH_NAME } from "@/routes/helper"
import CustomButton from "@/components/CustomButton"
import Images from "@/theme/Images"

const NotFound: React.FC = () => {
  const isSignIn = false
  const navigate = useNavigate()
  return (
    <>
      <div
        style={{
          height: "80vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "grid", gap: 15, justifyItems: "center" }}>
          <img src={Images.warning} style={{ height: 200, width: 200, marginBottom: "-55px" }} />
          <div
            style={{
              fontSize: "5rem",
              fontWeight: 600,
              color: "#FFF",
              textShadow: "0px 0px 10px #00aaad,0px 0px 20px #00aaad,0px 0px 10px #00aaad,0px 0px 10px #00aaad",
            }}
          >
            404
          </div>
          <div style={{ color: "#038e90" }}>Xin lỗi, trang bạn truy cập không tồn tại.</div>
          <div style={{ display: "flex", gap: 12 }}>
            <CustomButton buttonType="outline" iconLeft={<ArrowLeftOutlined />} onClick={() => window.history.back()}>
              {"Trở về"}
            </CustomButton>
            <CustomButton
              buttonType="primary"
              iconLeft={<HomeOutlined />}
              onClick={() => navigate(PATH_NAME.DASHBOARD)}
            >
              {`Trở về ${isSignIn ? "trang chủ" : "Đăng nhập"}`}
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  )
}
export default NotFound
