import CanView from "../CanView"
import { Required, TextBase } from "@/theme/CommonStyles"

interface ITextProps {
  children?: string
  isShow?: boolean
  onPress?: () => void
  require?: boolean
  isDisabled?: boolean
  required?: boolean
  color?: string
  size?: string
  weight?: string
  italic?: string
  underline?: string
  highlight?: string
}

const CustomText = <T extends Record<string, unknown>>(props: ITextProps & T) => {
  const { isShow = true, required = "", children = "", ...rest } = props
  return (
    <CanView condition={isShow}>
      <TextBase {...rest}>
        {children}
        <Required>{required ? " (*)" : ""}</Required>
      </TextBase>
    </CanView>
  )
}

export default CustomText
