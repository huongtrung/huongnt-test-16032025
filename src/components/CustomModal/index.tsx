import { Modal } from "antd"
import { ReactNode } from "react"
import CustomButton from "../CustomButton"
import CanView from "../CanView"
import CustomText from "../CustomText"
import { CloseCircleOutlined } from "@ant-design/icons"
import Colors from "@/theme/Colors"

interface CustomModalProps {
  isOpen: boolean
  title: string
  content?: string | ReactNode
  okText?: string
  cancelText?: string
  onOk?: () => void
  onCancel?: () => void
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  title,
  content,
  okText,
  cancelText,
  onOk = () => {},
  onCancel = () => {},
}) => {
  return (
    <Modal centered footer={false} open={isOpen} closable={false}>
      <div className="flex flex-row">
        <div className="flex-1">
          <CustomText size={"16px"} weight={"bold"}>
            {title}
          </CustomText>
        </div>
        <div className="self-end">
          <CloseCircleOutlined
            className="flex-end"
            onClick={onCancel}
            style={{ color: Colors.primary, fontSize: 20 }}
            size={40}
          />
        </div>
      </div>
      <div className="mt-2 mb-2">
        <CanView condition={typeof content == "string"} fallbackComponent={() => <>{content}</>}>
          <CustomText>{content as string}</CustomText>
        </CanView>
      </div>
      <div className="flex flex-1 justify-end mt-2">
        <CanView condition={!!cancelText}>
          <CustomButton buttonType="outline" onClick={onCancel}>
            {cancelText}
          </CustomButton>
        </CanView>
        <div className="w-4" />
        <CanView condition={!!okText}>
          <CustomButton buttonType="primary" onClick={onOk}>
            {okText}
          </CustomButton>
        </CanView>
      </div>
    </Modal>
  )
}
export default CustomModal
