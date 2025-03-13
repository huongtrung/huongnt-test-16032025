import { ButtonBase } from "@/theme/CommonStyles"
import { ButtonProps } from "antd/lib/button"
import { ReactNode } from "react"

interface BaseButtonProps extends ButtonProps {
  buttonType: "primary" | "outline"
  disabled?: boolean
  children: string | ReactNode
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

const CustomButton: React.FC<BaseButtonProps> = ({
  buttonType,
  disabled = false,
  children = "",
  iconLeft,
  iconRight,
  ...rest
}) => {
  return (
    <ButtonBase disabled={disabled} type={buttonType} {...rest}>
      {iconLeft}
      <div className="ml-2 mr-2">{children}</div>
      {iconRight}
    </ButtonBase>
  )
}

export default CustomButton
