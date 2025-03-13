import React, { useMemo, useState } from "react"
import CustomText from "@/components/CustomText"
import { Checkbox } from "antd"
import type { CheckboxProps } from "antd"
import { ChooseType, IChoose } from "../helper"
import { CheckboxOptionType } from "antd/lib"

export interface BaseCheckboxProps extends CheckboxProps {
  label?: string
  value?: boolean
  chooseType?: ChooseType
  options?: IChoose[]
  isDisabled?: boolean
  isFieldError?: boolean
  required?: boolean
  selectLabel?: string
  selectValue?: string
  onChangeValue?: (value: unknown) => void
}

const InputCheckbox: React.FC<BaseCheckboxProps> = ({
  label,
  value,
  options,
  chooseType = "single",
  isDisabled,
  isFieldError,
  required,
  onChangeValue,
  selectLabel = "label",
  selectValue = "value",
  ...rest
}) => {
  const [checkedItem, setCheckedItem] = useState<string[]>([])

  console.log({ isFieldError })

  const optionsValue = useMemo(() => {
    if (chooseType == "group" && options?.length) {
      const newOption = options?.map((item: IChoose) => {
        return { label: item?.[selectLabel], value: item?.[selectValue] }
      })
      return newOption
    }
    return []
  }, [chooseType, options])

  const toggleChecked = () => {
    if (onChangeValue) {
      onChangeValue(!value)
    }
  }

  const onChangeItems = (checkedValue: string[]) => {
    setCheckedItem(checkedValue)
    if (onChangeValue) {
      onChangeValue(checkedValue)
    }
  }

  if (chooseType == "group") {
    return (
      <>
        <CustomText isShow={!!label} weight={"600"} required={required}>
          {label}
        </CustomText>
        <Checkbox.Group
          {...rest}
          options={optionsValue as CheckboxOptionType<string>[]}
          onChange={onChangeItems}
          value={checkedItem}
        />
      </>
    )
  } else {
    return (
      <Checkbox checked={value} onClick={toggleChecked} {...rest} disabled={isDisabled}>
        <CustomText isShow={!!label} weight={"600"} required={required}>
          {label}
        </CustomText>
      </Checkbox>
    )
  }
}

export default InputCheckbox
