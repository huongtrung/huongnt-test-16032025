import { useMemo, useRef } from "react"
import {
  Control,
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldErrors,
  FieldValues,
} from "react-hook-form"
import { InputComponent, typeInputComponent } from "./helper"
import { useActiveFormContext } from "@/hooks/useFormActive"
import { ErrorMessage } from "@hookform/error-message"
import { BaseInputProps } from "./InputText"
import CustomText from "../CustomText"
import Colors from "@/theme/Colors"
import Util from "@/utils/Util"
import { BaseInputNumberProps } from "./InputNumber"
import { InputWrapper } from "@/theme/CommonStyles"
import { BaseSelectProps } from "./InputSelect"
import { BaseCheckboxProps } from "./InputCheckbox"
import { BaseRadioProps } from "./InputRadio"
import { BaseSwitchProps } from "./InputSwitch"
import { BaseDateProps } from "./InputDate"
import { BaseDateRangerProps } from "./InputDateRanger"

interface FormInputProps {
  type: string
  control: Control
  name: string
  defaultValue?: string | string[]
  errors?: FieldErrors<FieldValues>
  isDisabled?: boolean
  isNotSetActive?: boolean
}

type CombinedProps = FormInputProps &
  BaseInputProps &
  BaseInputNumberProps &
  BaseSelectProps &
  BaseCheckboxProps &
  BaseRadioProps &
  BaseSwitchProps &
  BaseDateProps &
  BaseDateRangerProps

const FormInput: React.FC<CombinedProps> = (props) => {
  const { type = typeInputComponent.InputText, control, name, errors, defaultValue, isDisabled, isNotSetActive } = props

  const valueRef = useRef(null)
  const { active } = useActiveFormContext()

  const renderComponent = (params: { field: ControllerRenderProps; fieldState: ControllerFieldState }) => {
    const { onChange, value } = params.field
    if (value !== valueRef.current) {
      valueRef.current = value
    }

    const onValueChange = (value: string) => {
      onChange(value)
    }

    const onValueSelect = (value: string) => {
      onChange(value)
    }

    const Input = InputComponent[type]
    const controllerProps = Input?.onBlur
      ? {
          [Input?.onChange]: onValueChange,
          [Input?.value]: value,
        }
      : {
          [Input?.onChange]: onValueSelect,
          [Input?.value]: value,
        }

    const setDisable = () => {
      const isFormActive = isNotSetActive ? false : !active
      return isFormActive || isDisabled
    }

    const isFieldError = useMemo(() => {
      if (errors && Util.existsKey(errors, name)) {
        return true
      }
      return false
    }, [name, errors])

    return (
      <Input.Component
        {...props}
        {...params.field}
        {...controllerProps}
        isFieldError={isFieldError}
        disabled={setDisable()}
      />
    )
  }

  return (
    <InputWrapper>
      <Controller control={control} name={name} defaultValue={defaultValue} render={renderComponent} />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <CustomText color={Colors.red}>{message}</CustomText>}
      />
    </InputWrapper>
  )
}

export default FormInput
