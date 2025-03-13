import Dashboard from "@/pages/Dashboard"
import { ComponentType } from "react"

export const PATH_NAME = {
  DASHBOARD: "/dashboard",
}

export type IRouter = {
  href: string
  title: string
  element: ComponentType
}

export const ROUTERS_DATA: IRouter[] = [
  {
    href: PATH_NAME.DASHBOARD,
    title: "Trang chủ",
    element: Dashboard,
  },
  {
    href: "/",
    title: "Trang chủ",
    element: Dashboard,
  },
]
