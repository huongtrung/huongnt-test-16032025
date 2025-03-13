import { Tabs } from "antd"
import { TabsProps } from "antd/lib"

interface BaseTabProps extends TabsProps {
  items: TabsProps["items"]
  onChangeTab?: (key: string) => void
}

const CustomTabs: React.FC<BaseTabProps> = ({ items, onChangeTab, ...rest }) => {
  const onChange = (key: string) => {
    onChangeTab && onChangeTab(key)
  }

  return (
    <>
      <Tabs {...rest} items={items} size="large" onChange={onChange} />
    </>
  )
}

export default CustomTabs
