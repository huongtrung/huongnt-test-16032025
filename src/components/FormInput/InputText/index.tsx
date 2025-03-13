import React, { useState } from "react"
import { Input } from "antd"
import type { InputProps } from "antd"
import CustomText from "@/components/CustomText"
import { TextAreaProps } from "antd/es/input"
import { PasswordProps, SearchProps } from "antd/lib/input"
import { InputContainer } from "@/theme/CommonStyles"
import { TypeInput } from "../helper"
import useInput from "../useInput"
import IconRightInput from "../IconRightInput"

type CombinedProps = InputProps & TextAreaProps & PasswordProps & SearchProps

export interface BaseInputProps extends CombinedProps {
  label?: string
  value?: string
  typeInput?: TypeInput
  isFieldError?: boolean
  isDisabled?: boolean
  required?: boolean
  regex?: RegExp
  onChangeValue?: (value: unknown) => void
}

const InputText: React.FC<BaseInputProps> = ({
  typeInput,
  label,
  value,
  isFieldError,
  isDisabled,
  regex,
  required,
  onChangeValue,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const { borderColorInput } = useInput(isDisabled, isFieldError, isFocused)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  let InputComponent
  switch (typeInput) {
    case "password":
      InputComponent = Input.Password
      break
    case "textarea":
      InputComponent = Input.TextArea
      break
    case "search":
      InputComponent = Input.Search
      break
    case "text":
    default:
      InputComponent = Input
      break
  }

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value ?? ""
    if (onChangeValue) {
      if (regex && !regex.test(String(value))) {
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
        <InputComponent
          {...rest}
          value={value}
          suffix={
            <IconRightInput
              isHaveValue={!!value}
              isError={isFieldError ?? false}
              onClear={() => {
                onChangeValue && onChangeValue("")
              }}
            />
          }
          disabled={isDisabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChangeValue}
          type={typeInput}
          size={"large"}
          style={{
            border: "none",
            backgroundColor: "transparent",
          }}
        />
      </InputContainer>
    </>
  )
}

export default InputText
