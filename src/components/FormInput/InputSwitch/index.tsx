import React from "react"
import CustomText from "@/components/CustomText"
import { Switch } from "antd"
import type { SwitchProps } from "antd"

export interface BaseSwitchProps extends SwitchProps {
  label?: string
  value?: boolean
  isDisabled?: boolean
  isFieldError?: boolean
  required?: boolean
  onChangeValue?: (value: unknown) => void
}

const InputSwitch: React.FC<BaseSwitchProps> = ({
  label,
  value,
  isDisabled,
  isFieldError,
  required,
  onChangeValue,
  ...rest
}) => {
  console.log({ isFieldError })

  const onChange = (checked: boolean) => {
    if (onChangeValue) {
      onChangeValue(checked)
    }
  }

  return (
    <>
      <CustomText isShow={!!label} weight={"600"} required={required}>
        {label}
      </CustomText>
      <Switch onChange={onChange} checked={value} {...rest} disabled={isDisabled} />
    </>
  )
}

export default InputSwitch
