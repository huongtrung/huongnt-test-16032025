import React, { useState } from "react"
import type { InputNumberProps } from "antd"
import CustomText from "@/components/CustomText"
import { InputContainer } from "@/theme/CommonStyles"
import { InputNumber as InputNumberComponent } from "antd"
import useInput from "../useInput"
import IconRightInput from "../IconRightInput"
export interface BaseInputNumberProps extends InputNumberProps {
  label?: string
  value?: string
  isFieldError?: boolean
  isDisabled?: boolean
  required?: boolean
  regex?: RegExp
  onChangeValue?: (value: unknown) => void
}

const InputValueNumber: React.FC<BaseInputNumberProps> = ({
  label,
  value,
  isFieldError,
  isDisabled,
  required,
  regex,
  onChangeValue,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const { borderColorInput } = useInput(isDisabled, isFieldError, isFocused)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  const onChange: InputNumberProps["onChange"] = (value) => {
    if (onChangeValue) {
      if (regex && !regex.test(String(value ?? ""))) {
        throw new Error("value not matches regex")
      }
      onChangeValue(value)
    }
  }

  return (
    <>
      <CustomText weight={"600"} required={required}>
        {label}
      </CustomText>
      <InputContainer border={borderColorInput}>
        <InputNumberComponent
          {...rest}
          min={1}
          suffix={
            <IconRightInput
              isHaveValue={!!value}
              isError={isFieldError ?? false}
              onClear={() => {
                onChangeValue && onChangeValue("")
              }}
            />
          }
          maxLength={15}
          onChange={onChange}
          value={value}
          disabled={isDisabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          size={"large"}
          controls={false}
          formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          parser={(value) => value?.replace(/\$\s?|(,*)/g, "") as unknown as number}
          style={{
            border: "none",
            backgroundColor: "transparent",
            width: "100%",
          }}
        />
      </InputContainer>
    </>
  )
}

export default InputValueNumber
