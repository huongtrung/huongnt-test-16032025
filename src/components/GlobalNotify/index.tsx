import { notification } from "antd"

type NotificationType = "success" | "info" | "warning" | "error"

const successType = {
  border: "1px solid #57bf66",
  color: "#FFFFFF !important",
  borderRadius: 7,
  backgroundColor: "#edf7ef",
}
const infoType = {
  border: "1px solid #447ee5",
  color: "#FFFFFF",
  borderRadius: 5,
  backgroundColor: "#e9edf9",
}
const warningType = {
  border: "1px solid #e9a745",
  color: "#FFFFFF",
  borderRadius: 5,
  backgroundColor: "#fff7ea",
}
const errorType = {
  border: "1px solid #ec7557",
  color: "#FFFFFF !important",
  borderRadius: 5,
  backgroundColor: "#fbedea",
}

const getStyle = (type: NotificationType) => {
  switch (type) {
    case "success":
      return successType
    case "info":
      return infoType
    case "warning":
      return warningType
    case "error":
      return errorType
  }
}

const openNotify = (
  type: NotificationType, // dạng hiển thị của notify
  message: string // text muốn hiển thị ở notify
) => {
  notification[type]({
    message: message,
    placement: "topRight",
    style: getStyle(type),
    showProgress: false,
    pauseOnHover: true,
  })
}

export default openNotify
