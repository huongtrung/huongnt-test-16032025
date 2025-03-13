import { Route, Routes } from "react-router-dom"
import { IRouter, ROUTERS_DATA } from "./helper"
import AppLayout from "@/layouts/AppLayout"
import NotFound from "@/pages/NotFound"

const AppRoutes = () => {
  return (
    <AppLayout>
      <Routes>
        {ROUTERS_DATA.map((route: IRouter, i: number) => {
          return <Route path={route.href} element={<route.element />} key={i} />
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppLayout>
  )
}

export default AppRoutes
