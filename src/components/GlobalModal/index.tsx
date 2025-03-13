import { Modal } from "antd"
import { createRef, forwardRef, ReactNode, useImperativeHandle, useState } from "react"
import CustomButton from "../CustomButton"
import CanView from "../CanView"
import CustomText from "../CustomText"
import { CloseCircleOutlined } from "@ant-design/icons"
import Colors from "@/theme/Colors"

interface GlobalModalProps {
  title: string
  content?: string | ReactNode
  okText?: string
  cancelText?: string
  onOk?: () => void
  onCancel?: () => void
  isOpen?: boolean
}
interface GlobalModalAction {
  open: (config: GlobalModalProps) => void
  close: () => void
}

const INIT_CONFIG: GlobalModalProps = {
  title: "",
  isOpen: false,
  content: "",
  okText: "Đồng ý",
  cancelText: "",
  onOk: () => {},
  onCancel: () => {},
}

const globalModalRef = createRef<GlobalModalAction>()

const GlobalModalComponent = forwardRef<GlobalModalAction>((props, ref) => {
  const [config, setConfig] = useState(INIT_CONFIG)

  const closeModal = () => {
    setConfig((prev: GlobalModalProps) => ({ ...prev, isOpen: false }))
  }

  useImperativeHandle(ref, () => {
    return {
      open: (config: GlobalModalProps) => {
        setConfig((prev: GlobalModalProps) => ({ ...prev, ...config, isOpen: true }))
      },
      close: closeModal,
    }
  })

  return (
    <Modal centered footer={false} open={config.isOpen} closable={false}>
      <div className="flex flex-row">
        <div className="flex-1">
          <CustomText size={"16px"} weight={"bold"}>
            {config.title}
          </CustomText>
        </div>
        <div className="self-end">
          <CloseCircleOutlined
            className="flex-end"
            onClick={() => closeModal()}
            style={{ color: Colors.primary, fontSize: 20 }}
            size={40}
          />
        </div>
      </div>
      <div className="mt-2 mb-2">
        <CanView condition={typeof config.content == "string"} fallbackComponent={() => <>{config.content}</>}>
          <CustomText>{config.content as string}</CustomText>
        </CanView>
      </div>
      <div className="flex flex-1 justify-end mt-2">
        <CanView condition={!!config.cancelText}>
          <CustomButton buttonType="outline" onClick={config.onCancel}>
            {config.cancelText}
          </CustomButton>
        </CanView>
        <div className="w-4" />
        <CanView condition={!!config.okText}>
          <CustomButton buttonType="primary" onClick={config.onOk}>
            {config.okText}
          </CustomButton>
        </CanView>
      </div>
    </Modal>
  )
})

const GlobalModal = () => <GlobalModalComponent ref={globalModalRef} />

export const globalModal: GlobalModalAction = {
  open: (config: GlobalModalProps) => globalModalRef.current?.open(config),
  close: () => globalModalRef.current?.close(),
}

export default GlobalModal
