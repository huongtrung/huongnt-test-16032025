import Colors from "@/theme/Colors"
import { CaretDownOutlined, CloseCircleFilled, ExclamationCircleFilled } from "@ant-design/icons"

export interface IconProps {
  type?: "input" | "select"
  isHaveValue: boolean
  isError: boolean
  onClear: () => void
}

const IconRightInput: React.FC<IconProps> = ({ type = "input", isHaveValue, isError, onClear = () => {} }) => {
  const renderView = () => {
    if (type == "input") {
      if (isHaveValue) {
        return <CloseCircleFilled style={{ fontSize: "14px", color: Colors.neutral6 }} />
      }
      if (!isHaveValue && isError) {
        return <ExclamationCircleFilled style={{ fontSize: "14px", color: Colors.red }} />
      }
    } else {
      if (isHaveValue) {
        return <CloseCircleFilled style={{ fontSize: "14px", color: Colors.neutral6 }} />
      } else if (!isHaveValue && isError) {
        return <ExclamationCircleFilled style={{ fontSize: "14px", color: Colors.red }} />
      } else {
        return <CaretDownOutlined style={{ fontSize: "16px", color: Colors.neutral6 }} />
      }
    }
  }

  return (
    <div style={{ cursor: "pointer", pointerEvents: "auto" }} onClick={onClear}>
      {renderView()}
    </div>
  )
}

export default IconRightInput
