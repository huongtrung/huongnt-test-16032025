import { IRouter } from "@/routes/helper"
import { Breadcrumb } from "antd"

interface IProps {
  data: IRouter[]
}

const CustomBreadcrumb: React.FC<IProps> = ({ data }) => {
  return <Breadcrumb items={data} separator={">"} />
}

export default CustomBreadcrumb
