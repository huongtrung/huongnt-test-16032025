import CardView from "@/components/CardView"
import CustomText from "@/components/CustomText"
import FormInput from "@/components/FormInput"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { DASHBOARD_FILED_NAME } from "./filedName"
import { MoreOutlined } from "@ant-design/icons"
import fakeData from "@/assets/data/fakeJson.json"
import CustomTable from "@/components/CustomTable"
import Images from "@/theme/Images"
import SearchLayout from "./component/SearchLayout"
import DetailRightLayout from "./component/DetailRightLayout"
import { TableColumnsType } from "antd"
import { DataType } from "./type"

const Dashboard: React.FC = () => {
  const methods = useForm({
    mode: "onSubmit",
  })

  const {
    getValues,
    formState: { errors },
  } = methods

  const [tableData, setTableData] = useState(fakeData)
  const [itemsDetailData, setItemDetailData] = useState<DataType>({
    key: "",
    societe: "",
    etablissement: "",
    salle: "",
    personnel: "",
    type: "",
    genre: "",
    produit: "",
    identification: "",
  })
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  const columns: TableColumnsType<DataType> = [
    {
      title: "Societe",
      dataIndex: "societe",
      key: "societe",
      filters: [
        {
          text: "SOA",
          value: "S0A",
        },
        {
          text: "SOA 1",
          value: "S0A 1",
        },
        {
          text: "SOA 2",
          value: "S0A 2",
        },
      ],
      render: (text) => <b>{text}</b>,
      onFilter: (value, record) => record.societe.indexOf(value as string) === 0,
    },
    {
      title: "Etablissement",
      dataIndex: "etablissement",
      key: "etablissement",
    },
    {
      title: "Salle",
      dataIndex: "salle",
      key: "salle",
    },
    {
      title: "Personnel",
      dataIndex: "personnel",
      key: "personnel",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text) => renderType(text),
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "Produit",
      dataIndex: "produit",
      key: "produit",
      render: (text) => (
        <div className="flex flex-row gap-2">
          <a>{"16721"}</a>
          <img src={Images.imgBoxFill} style={{ height: 20, width: 20 }} />
        </div>
      ),
    },
    {
      title: "Etat",
      dataIndex: "etat",
      key: "etat",
    },
    {
      title: "Identification",
      dataIndex: "identification",
      key: "identification",
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 40,
      render: () => <MoreOutlined />,
    },
  ]

  const renderType = (type: string) => {
    let icon = ""
    switch (type) {
      case "Électroménager":
        icon = Images.electronique
        break
      case "Mobilier":
        icon = Images.mobilier
        break
      case "Outillage":
        icon = Images.outillage
        break
      case "Stockage":
        icon = Images.stockage
        break
      default:
        icon = Images.electronique
        break
    }
    return (
      <div className="flex flex-row gap-2">
        <img src={icon} style={{ height: 20, width: 20 }} />
        <a>{type}</a>
      </div>
    )
  }

  const onSearch = () => {
    const values = getValues()
    const societeValue = values[DASHBOARD_FILED_NAME.SOCIETE]
    const etablissementValue = values[DASHBOARD_FILED_NAME.ETABLISSEMENT]
    const salleValue = values[DASHBOARD_FILED_NAME.SALLE]

    const filterData = fakeData?.filter((item) => {
      return (
        (!societeValue || item.societe === societeValue) &&
        (!etablissementValue || item.etablissement === etablissementValue) &&
        (!salleValue || item.salle === salleValue)
      )
    })
    console.log({ filterData })
    setTableData(filterData)
  }

  const onReset = () => {
    methods.reset()
    setTableData(fakeData)
  }

  const showDrawer = () => {
    setIsOpenDrawer(true)
  }

  const onClose = () => {
    setIsOpenDrawer(false)
    setItemDetailData({
      key: "",
      societe: "",
      etablissement: "",
      salle: "",
      personnel: "",
      type: "",
      genre: "",
      produit: "",
      identification: "",
    })
  }

  const handleRowClick = (record: any, rowIndex: number) => {
    console.log("✅ Clicked row:", record)
    setItemDetailData(record)
    showDrawer()
  }

  return (
    <div className="flex flex-col justify-center h-full p-4">
      <div className="mb-8">
        <CustomText size="20px" weight="600">
          {"Actifs disponibles"}
        </CustomText>
      </div>
      <SearchLayout methods={methods} onSearch={onSearch} onReset={onReset} />
      <CustomTable
        rowKey="key"
        dataSource={tableData}
        columns={columns as any}
        currentPage={currentPage}
        total={tableData?.length}
        onRow={(record, rowIndex) => ({
          onClick: () => handleRowClick(record, rowIndex as number),
        })}
        onChangeCurrentPage={(page) => setCurrentPage(page)}
      />
      <DetailRightLayout itemsDetailData={itemsDetailData} isOpen={isOpenDrawer} onClose={onClose} />
    </div>
  )
}
export default Dashboard
