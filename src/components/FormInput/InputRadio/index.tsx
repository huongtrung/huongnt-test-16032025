import React, { useMemo, useState } from "react"
import CustomText from "@/components/CustomText"
import { CheckboxChangeEvent, CheckboxOptionType, Radio } from "antd"
import { RadioProps } from "antd/lib"
import { ChooseType, IChoose } from "../helper"

export interface BaseRadioProps extends RadioProps {
  label?: string
  chooseType?: ChooseType
  options?: IChoose[]
  isDisabled?: boolean
  isFieldError?: boolean
  required?: boolean
  selectLabel?: string
  selectValue?: string
  onChangeValue?: (value: unknown) => void
}

const InputRadio: React.FC<BaseRadioProps> = ({
  label,
  chooseType = "single",
  options,
  isDisabled,
  isFieldError,
  required,
  selectLabel = "label",
  selectValue = "value",
  onChangeValue,
  ...rest
}) => {
  const [checked, setChecked] = useState(false)
  const [checkedItem, setCheckedItem] = useState("")

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

  const onChange = () => {
    if (onChangeValue) {
      console.log({ checked })
      onChangeValue(!checked)
      setChecked(!checked)
    }
  }

  const onChangeItems = (e: CheckboxChangeEvent) => {
    const chooseItem = e?.target?.value || ""
    setCheckedItem(chooseItem)
    if (onChangeValue) {
      onChangeValue(chooseItem)
    }
  }

  if (chooseType == "group") {
    return (
      <div style={{ flex: 1, flexDirection: "row" }}>
        <CustomText isShow={!!label} weight={"600"} required={required}>
          {label}
        </CustomText>
        <Radio.Group
          {...rest}
          options={optionsValue as CheckboxOptionType<IChoose>[]}
          onChange={onChangeItems}
          value={checkedItem}
          optionType="default"
          buttonStyle="outline"
        />
      </div>
    )
  } else {
    return (
      <Radio checked={checked} onClick={onChange} {...rest} disabled={isDisabled}>
        <CustomText isShow={!!label} weight={"600"} required={required}>
          {label}
        </CustomText>
      </Radio>
    )
  }
}

export default InputRadio
