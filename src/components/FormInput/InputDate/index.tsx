import React, { useState } from "react"
import CustomText from "@/components/CustomText"
import { DatePicker } from "antd/lib"
import { PickerProps } from "antd/es/date-picker/generatePicker"
import dayjs, { Dayjs } from "dayjs"
import { InputContainer } from "@/theme/CommonStyles"
import useInput from "../useInput"
import { DATETIME_FORMAT } from "@/utils/DateTime"
import IconRightInput from "../IconRightInput"
import { DATE_FORMAT_FORM } from "@/constants/DatetimeConstants"

export interface BaseDateProps extends Omit<PickerProps<Dayjs>, "value"> {
  label?: string
  isDisabled?: boolean
  isFieldError?: boolean
  required?: boolean
  value?: string
  formatType?: string
  onChangeValue?: (dateString: string | string[]) => void
}

const InputDate: React.FC<BaseDateProps> = ({
  label,
  value,
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

  const onChangeDate = (date: Dayjs | Dayjs[], dateString: string | string[]) => {
    if (onChangeValue) {
      console.log({ date, dateString })
      onChangeValue(dateString)
    }
  }

  return (
    <>
      <CustomText isShow={!!label} weight={"600"} required={required}>
        {label}
      </CustomText>
      <InputContainer border={borderColorInput}>
        <DatePicker
          {...rest}
          allowClear={false}
          value={value ? dayjs(value, formatType) : null}
          disabled={isDisabled}
          format={DATE_FORMAT_FORM}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChangeDate}
          size={"large"}
          style={{
            border: "none",
            backgroundColor: "transparent",
            width: "100%",
          }}
          suffixIcon={
            <IconRightInput
              isHaveValue={!!value}
              isError={isFieldError ?? false}
              onClear={() => {
                onChangeValue && onChangeValue("")
              }}
            />
          }
        />
      </InputContainer>
    </>
  )
}

export default InputDate
