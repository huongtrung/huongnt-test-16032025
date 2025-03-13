import { Empty } from "antd"
import CustomText from "../CustomText"

const EmptyView = (title?: string) => {
  return (
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} imageStyle={{ height: 60 }}>
      <CustomText>{title ? title : "Không có dữ liệu"}</CustomText>
    </Empty>
  )
}

export default EmptyView
