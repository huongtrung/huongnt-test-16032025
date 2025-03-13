import React, { useState } from "react"
import CustomText from "@/components/CustomText"
import { InputContainer } from "@/theme/CommonStyles"
import { Select } from "antd"
import useInput from "../useInput"
import { SelectProps } from "antd/lib"
import { CheckOutlined } from "@ant-design/icons"
import Colors from "@/theme/Colors"
import { ISelect } from "../helper"
import Util from "@/utils/Util"
import IconRightInput from "../IconRightInput"

export interface BaseSelectProps extends SelectProps {
  label?: string
  value?: string
  isFieldError?: boolean
  isDisabled?: boolean
  required?: boolean
  isFilterSort?: boolean
  options?: ISelect[]
  selectLabel?: string
  selectValue?: string
  onChangeValue?: (value: unknown) => void
}

const InputSelect: React.FC<BaseSelectProps> = ({
  label,
  value,
  isFieldError,
  isDisabled,
  isFilterSort,
  required,
  options,
  selectLabel = "label",
  selectValue = "value",
  onChangeValue,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const { borderColorInput } = useInput(isDisabled, isFieldError, isFocused)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  const handleChangeValue = (selectValue: unknown) => {
    if (onChangeValue) {
      onChangeValue(selectValue)
    }
  }

  const handleFilterSort = (optionA: ISelect, optionB: ISelect) => {
    const valueA = Util.setDfValueWhenNull(optionA?.label, "")
    const valueB = Util.setDfValueWhenNull(optionB?.label, "")
    if (isFilterSort) {
      return valueA?.toLowerCase().localeCompare(valueB?.toLowerCase())
    }
    return 0
  }

  return (
    <div style={{ width: "100%" }}>
      <CustomText color="#000B1E" required={required}>
        {label}
      </CustomText>
      <InputContainer border={borderColorInput}>
        <Select
          {...rest}
          value={value}
          fieldNames={{ label: selectLabel, value: selectValue }}
          options={options}
          disabled={isDisabled}
          size={"middle"}
          onChange={handleChangeValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          suffixIcon={
            <IconRightInput
              type="select"
              isHaveValue={!!value}
              isError={isFieldError ?? false}
              onClear={() => {
                onChangeValue && onChangeValue("")
              }}
            />
          }
          filterOption={(input, option) =>
            Util.setDfValueWhenNull(option?.label, "")?.toLowerCase()?.includes(input?.toLowerCase())
          }
          filterSort={handleFilterSort}
          menuItemSelectedIcon={<CheckOutlined color={Colors.primary} />}
          style={{ width: "100%", border: "none", backgroundColor: "transparent" }}
        />
      </InputContainer>
    </div>
  )
}

export default InputSelect
