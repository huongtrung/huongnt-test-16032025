import CanView from "@/components/CanView"
import CustomBreadcrumb from "@/components/CustomBreadcrumb"
import CustomText from "@/components/CustomText"
import { IRouter, ROUTERS_DATA } from "@/routes/helper"
import { HeaderContainer } from "@/theme/CommonStyles"
import Images from "@/theme/Images"
import { Image } from "antd"
import { useMemo } from "react"
import { useLocation } from "react-router-dom"

const HeaderLayout: React.FC = () => {
  const location = useLocation()

  const { breadcrumbData, currentTitle } = useMemo(() => {
    const pathnames = location.pathname.split("/").filter((x) => x)
    const currentPath = location?.pathname + location?.search
    let currentTitle = ""
    const breadcrumbData: IRouter[] = []
    ROUTERS_DATA.map((item: IRouter, _: number) => {
      if (pathnames?.includes(item.href?.replace("/", ""))) {
        breadcrumbData.push(item)
      }
      if (currentPath.includes(item.href)) {
        currentTitle = item?.title
      }
    })
    return {
      breadcrumbData,
      currentTitle,
    }
  }, [location.pathname])

  console.log({ name: currentTitle, breadcrumbData })

  const handleLogout = () => {}

  return (
    <CanView condition={!!currentTitle}>
      <HeaderContainer>
        <CanView condition={breadcrumbData?.length > 1}>
          <Image
            width={20}
            height={20}
            src={Images.arrowLeft}
            preview={false}
            style={{ cursor: "pointer" }}
            onClick={() => window.history.back()}
          />
        </CanView>
        <div className="flex flex-col ml-2">
          <CustomText size={"20px"} weight={"bold"}>
            {currentTitle}
          </CustomText>
          <div className="ml-1">
            <CanView condition={breadcrumbData?.length > 1}>
              <CustomBreadcrumb data={ROUTERS_DATA} />
            </CanView>
          </div>
        </div>
      </HeaderContainer>
    </CanView>
  )
}

export default HeaderLayout
