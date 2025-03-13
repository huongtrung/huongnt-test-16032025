import { RESPONSE_CODE } from "@/constants/HTTPResponseStatus"
import axios from "axios"

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(async (config) => {
  return config
})

axiosInstance.interceptors.response.use(
  async (response) => {
    return response
  },
  function (error) {
    if (error?.response?.status === RESPONSE_CODE.UNAUTHORIZE) {
      return Promise.resolve(error.response)
    } else {
      return Promise.resolve(error)
    }
  }
)

export default axiosInstance
