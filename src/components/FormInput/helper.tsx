import InputCheckbox from "./InputCheckbox"
import InputDate from "./InputDate"
import InputDateRanger from "./InputDateRanger"
import InputValueNumber from "./InputNumber"
import InputRadio from "./InputRadio"
import InputSelect from "./InputSelect"
import InputSwitch from "./InputSwitch"
import InputText from "./InputText"

export const typeInputComponent = {
  InputText: "input-text",
  InputNumber: "input-number",
  InputSelect: "input-select",
  InputCheckbox: "input-checkbox",
  InputRadio: "input-radio",
  InputSwitch: "input-switch",
  InputDate: "input-date",
  InputDateRanger: "input-date-ranger",
}

export const InputComponent = {
  [typeInputComponent.InputText]: {
    Component: InputText,
    onChange: "onChangeValue",
    value: "value",
    onBlur: "onBlur",
    label: "label",
  },
  [typeInputComponent.InputNumber]: {
    Component: InputValueNumber,
    onChange: "onChangeValue",
    value: "value",
    onBlur: "onBlur",
    label: "label",
  },
  [typeInputComponent.InputSelect]: {
    Component: InputSelect,
    onChange: "onChangeValue",
    value: "value",
    label: "label",
  },
  [typeInputComponent.InputCheckbox]: {
    Component: InputCheckbox,
    onChange: "onChangeValue",
    value: "value",
    label: "label",
  },
  [typeInputComponent.InputRadio]: {
    Component: InputRadio,
    onChange: "onChangeValue",
    value: "value",
    label: "label",
  },
  [typeInputComponent.InputSwitch]: {
    Component: InputSwitch,
    onChange: "onChangeValue",
    value: "value",
    label: "label",
  },
  [typeInputComponent.InputDate]: {
    Component: InputDate,
    onChange: "onChangeValue",
    value: "value",
    label: "label",
  },
  [typeInputComponent.InputDateRanger]: {
    Component: InputDateRanger,
    onChange: "onChangeValue",
    value: "value",
    label: "label",
  },
}

export type IChoose = {
  [key: string]: unknown
}

export type ISelect = {
  [key: string]: unknown
}

export type TypeInput = "text" | "password" | "textarea" | "search"
export type ChooseType = "group" | "single"
