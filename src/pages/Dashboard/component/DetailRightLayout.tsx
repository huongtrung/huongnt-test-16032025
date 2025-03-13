import React from "react"
import { Drawer } from "antd"
import { DataType } from "../type"
import CustomText from "@/components/CustomText"
import Images from "@/theme/Images"

interface DetailRightLayoutProps {
  isOpen: boolean
  onClose: () => void
  itemsDetailData: DataType
}

const DetailRightLayout: React.FC<DetailRightLayoutProps> = ({ itemsDetailData, isOpen, onClose }) => {
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
        <CustomText size="16px" weight="600">
          {type}
        </CustomText>
      </div>
    )
  }

  return (
    <Drawer title={"Detail"} onClose={onClose} open={isOpen}>
      <div className="flex flex-row gap-6 pt-2 pb-2">
        <CustomText size="16px">Société :</CustomText>
        <CustomText size="16px" weight="600">
          {itemsDetailData?.societe}
        </CustomText>
      </div>
      <div className="flex flex-row gap-6 pt-2 pb-2">
        <CustomText size="16px">Etablissement : </CustomText>
        <CustomText size="16px" weight="600">
          {itemsDetailData?.etablissement}
        </CustomText>
      </div>
      <div className="flex flex-row gap-6 pt-2 pb-2">
        <CustomText size="16px">Salle : </CustomText>
        <CustomText size="16px" weight="600">
          {itemsDetailData?.salle}
        </CustomText>
      </div>
      <div className="flex flex-row gap-6 pt-2 pb-2">
        <CustomText size="16px">Personnel : </CustomText>
        <CustomText size="16px" weight="600">
          {itemsDetailData?.personnel}
        </CustomText>
      </div>
      <div className="flex flex-row gap-6 pt-2 pb-2">
        <CustomText size="16px">Type : </CustomText>
        {renderType(itemsDetailData?.type)}
      </div>
      <div className="flex flex-row gap-6 pt-2 pb-2">
        <CustomText size="16px">Genre : </CustomText>
        <CustomText size="16px" weight="600">
          {itemsDetailData?.genre}
        </CustomText>
      </div>
      <div className="flex flex-row gap-6 pt-2 pb-2">
        <CustomText size="16px">Produit : </CustomText>
        <div className="flex flex-row gap-2">
          <CustomText size="16px" weight="600">
            {"16721"}
          </CustomText>
          <img src={Images.imgBoxFill} style={{ height: 20, width: 20 }} />
        </div>
      </div>
      <div className="flex flex-row gap-6 pt-2 pb-2">
        <CustomText size="16px">Identification : </CustomText>
        <CustomText size="16px" weight="600">
          {itemsDetailData?.identification}
        </CustomText>
      </div>
    </Drawer>
  )
}
export default DetailRightLayout
