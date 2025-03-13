/* eslint react/prop-types: 0 */
import { Pagination, PaginationProps, Table, TableProps } from "antd"
import CanView from "../CanView"
import { TableFooter, TextBase } from "@/theme/CommonStyles"
import "./table-custom.css"
import Colors from "@/theme/Colors"

interface BaseTableProps extends TableProps {
  isShowTotal?: boolean
  total: number
  currentPage: number
  onChangeCurrentPage?: (current: number) => void
}

const CustomTable: React.FC<BaseTableProps> = ({
  isShowTotal = false,
  total = 0,
  currentPage = 1,
  onChangeCurrentPage,
  ...rest
}) => {
  const onChange: PaginationProps["onShowSizeChange"] = (page) => {
    onChangeCurrentPage && onChangeCurrentPage(page)
  }

  return (
    <>
      <CanView condition={isShowTotal}>
        <TextBase>
          Có <span style={{ color: Colors.orange }}>{total}</span> bản ghi
        </TextBase>
      </CanView>
      <Table {...rest} className="custom-table" pagination={false} size="middle" />
      <TableFooter>
        <Pagination current={currentPage} defaultCurrent={0} total={10} onChange={onChange} />
      </TableFooter>
    </>
  )
}

export default CustomTable
