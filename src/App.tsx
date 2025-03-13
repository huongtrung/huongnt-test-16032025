import { ConfigProvider, notification } from "antd"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import GlobalModal from "./components/GlobalModal"
import isPropValid from "@emotion/is-prop-valid"
import { StyleSheetManager } from "styled-components"
import AppRoutes from "./routes"
import { ANTD_GLOBAL_STYLES } from "./theme/CommonStyles"
import React from "react"

if (!process.env.NODE_ENV || process.env.NODE_ENV === "production") {
  console.log = function () {}
  console.warn = function () {}
  console.error = function () {}
}

const queryClient = new QueryClient()

const App = () => {
  notification.config({
    maxCount: 1,
    placement: "topRight",
    showProgress: true,
    pauseOnHover: true,
  })

  return (
    <React.StrictMode>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <ConfigProvider theme={ANTD_GLOBAL_STYLES}>
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              <AppRoutes />
              <GlobalModal />
            </QueryClientProvider>
          </BrowserRouter>
        </ConfigProvider>
      </StyleSheetManager>
    </React.StrictMode>
  )
}

export default App
