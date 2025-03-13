import { globalLoading } from "@/components/GlobalLoading"
import axiosInstance from "@/config/axios"
import { RESPONSE_CODE } from "@/constants/HTTPResponseStatus"
import { AxiosRequestConfig, AxiosResponse, GenericAbortSignal } from "axios"
import openNotify from "@/components/GlobalNotify"

interface RequestConfig extends AxiosRequestConfig {
  contentType: string
  signal?: GenericAbortSignal
}

type FetchParams = {
  url: string
  config?: AxiosRequestConfig
  contentType?: string
  useGeneralErrorHanding?: boolean
  showNotificationOnError?: boolean
  apiType?: "DEFAULT" | "AUTH"
  isAuthorization?: boolean
  isFixedDomain?: boolean
}

class ApiUtil {
  isSuccess = (code: string) => {
    return code === RESPONSE_CODE.TD_MS_SUCCESS
  }

  onError(response: AxiosResponse) {
    globalLoading.hide()
    switch (response?.status) {
      case RESPONSE_CODE.NOT_FOUND:
        openNotify("error", "Lỗi không tìm thấy dữ liệu.")
        break
      case RESPONSE_CODE.INTERNAL_SERVER_ERROR:
        openNotify("error", "Hệ thống không xử lý được yêu cầu hiện tại. Vui lòng thử lại sau.")
        break
      case RESPONSE_CODE.UNAUTHORIZE:
        openNotify("error", "Hết phiên đăng nhập.")
        break
      default:
        openNotify("error", "Có lỗi xảy ra trong quá trình xử lý.")
        break
    }
  }

  showError(code: string) {
    switch (code) {
      default:
        openNotify("error", "Có lỗi xảy ra trong quá trình xử lý.")
        break
    }
  }

  setBaseURL(type: string) {
    switch (type) {
      case "DEFAULT":
        return process.env.REACT_APP_BASE_URL
    }
  }

  async configRequest(isAuthorization: boolean, config: RequestConfig) {
    const { method = "GET", timeout = 30000, headers = {}, contentType, url, data, signal } = config
    const auth = sessionStorage.getItem("token")
    const configData = {
      data,
      url,
      method,
      timeout,
      signal,
      headers: {
        ...headers,
        "Content-Type": contentType,
        Authorization: isAuthorization ? `Bearer ${auth}` : "",
      },
    }

    if (method === "GET" && !data) {
      delete configData.data
    }
    return configData
  }

  async fetch(params: FetchParams) {
    const {
      url,
      config,
      contentType = "application/json",
      useGeneralErrorHanding = true,
      apiType = "DEFAULT",
      showNotificationOnError = true,
      isFixedDomain = true,
      isAuthorization = true,
    } = params
    try {
      const requestConfig = await this.configRequest(isAuthorization, {
        ...config,
        contentType,
        url: isFixedDomain ? this.setBaseURL(apiType) + url : url,
      })
      console.log(`==== CONFIG : ${url} =====`, requestConfig)
      const response = await axiosInstance(requestConfig)
      console.log(`==== RESPONSE : ${url} =====`, response)
      if (response?.status !== RESPONSE_CODE.SUCCESS_RES && useGeneralErrorHanding) {
        globalLoading.hide()
        showNotificationOnError && this.onError(response)
      } else {
        return response?.data
      }
    } catch (error: unknown) {
      console.error("Caught an error:", error)
      globalLoading.hide()
      if (showNotificationOnError) {
        openNotify("error", "Có lỗi xảy ra trong quá trình xử lý.")
      }
      return null
    }
  }
}

export default new ApiUtil()
