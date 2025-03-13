import { TableFooter } from "@/theme/CommonStyles"
import { List, Pagination } from "antd"
import { PaginationProps } from "antd/lib"
import CanView from "../CanView"
import { ReactNode } from "react"

interface ListProps<T = unknown> {
  items: T[]
  renderItem: (item: T) => ReactNode
  currentPage?: number
  onChangeCurrentPage?: (current: number) => void
}

const CustomList: React.FC<ListProps> = ({ items, renderItem, currentPage, onChangeCurrentPage, ...rest }) => {
  const onChange: PaginationProps["onShowSizeChange"] = (page) => {
    onChangeCurrentPage && onChangeCurrentPage(page)
  }

  return (
    <>
      <List {...rest} dataSource={items} size={"large"} renderItem={renderItem} />
      <CanView condition={!!currentPage && currentPage != 0}>
        <TableFooter>
          <Pagination current={currentPage} defaultCurrent={1} total={items?.length} onChange={onChange} />
        </TableFooter>
      </CanView>
    </>
  )
}

export default CustomList
