import React, { useState } from "react"
import CustomText from "@/components/CustomText"
import { DatePicker } from "antd/lib"
import dayjs from "dayjs"
import { InputContainer } from "@/theme/CommonStyles"
import useInput from "../useInput"
import { DATETIME_FORMAT } from "@/utils/DateTime"
import IconRightInput from "../IconRightInput"
import { DATE_FORMAT_FORM } from "@/constants/DatetimeConstants"
import type { RangePickerProps } from "antd/es/date-picker"

const { RangePicker } = DatePicker

export interface BaseDateRangerProps extends Omit<RangePickerProps, "value" | "onChange" | "placeholder"> {
  label?: string
  isDisabled?: boolean
  isFieldError?: boolean
  required?: boolean
  value?: string[]
  placeholder?: string
  placeholders?: [string, string]
  formatType?: string
  onChangeValue?: (dateString: string[] | null) => void
}

const InputDateRanger: React.FC<BaseDateRangerProps> = ({
  label,
  value,
  placeholder,
  placeholders = ["", ""],
  isDisabled,
  isFieldError,
  required,
  onChangeValue,
  formatType = DATETIME_FORMAT.DATE_04,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const { borderColorInput } = useInput(isDisabled, isFieldError, isFocused)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  const handleRanger = (_: unknown, dateStrings: string[]) => {
    if (onChangeValue) {
      console.log({ dateStrings })
      onChangeValue(dateStrings)
    }
  }

  console.log({ value, placeholder })

  return (
    <>
      <CustomText isShow={!!label} weight={"600"} required={required}>
        {label}
      </CustomText>
      <InputContainer border={borderColorInput}>
        <RangePicker
          {...rest}
          placeholder={placeholders}
          showTime={false}
          allowClear={false}
          value={value ? [dayjs(value?.[0], formatType), dayjs(value?.[1], formatType)] : null}
          disabled={isDisabled}
          format={DATE_FORMAT_FORM}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleRanger}
          size={"large"}
          suffixIcon={
            <IconRightInput
              isHaveValue={!!value}
              isError={isFieldError ?? false}
              onClear={() => {
                onChangeValue && onChangeValue(null)
              }}
            />
          }
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

export default InputDateRanger
