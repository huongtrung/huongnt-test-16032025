import CardView from "@/components/CardView"
import FormInput from "@/components/FormInput"
import { typeInputComponent } from "@/components/FormInput/helper"
import React from "react"
import { DASHBOARD_FILED_NAME } from "../filedName"
import { ETAB_LOV, SALLE_LOV, SOCIETE_LOV } from "@/constants/ListOfValues"
import CustomButton from "@/components/CustomButton"
import { SearchOutlined } from "@ant-design/icons"
import { UseFormReturn } from "react-hook-form"

interface SearchLayoutProps {
  onSearch: () => void
  onReset: () => void
  methods: UseFormReturn
}

const SearchLayout: React.FC<SearchLayoutProps> = ({ onSearch, onReset, methods }) => {
  const {
    control,
    getValues,
    formState: { errors },
  } = methods

  return (
    <CardView>
      <div className="flex flex-row gap-6 mb-12 pl-3 pr-3">
        <div className="w-1/5">
          <FormInput
            control={control}
            type={typeInputComponent.InputSelect}
            label="Société :"
            placeholder="Société :"
            name={DASHBOARD_FILED_NAME.SOCIETE}
            options={SOCIETE_LOV}
            selectValue="value"
            selectLabel="label"
            errors={errors}
          />
        </div>
        <div className="w-1/5">
          <FormInput
            showSearch
            control={control}
            type={typeInputComponent.InputSelect}
            label="Etablissement :"
            placeholder="Etablissement :"
            name={DASHBOARD_FILED_NAME.ETABLISSEMENT}
            options={ETAB_LOV}
            selectValue="value"
            selectLabel="label"
            errors={errors}
          />
        </div>
        <div className="w-1/5">
          <FormInput
            control={control}
            type={typeInputComponent.InputSelect}
            label="Salle :"
            placeholder="Salle :"
            name={DASHBOARD_FILED_NAME.SALLE}
            options={SALLE_LOV}
            selectValue="value"
            selectLabel="label"
            errors={errors}
          />
        </div>
      </div>
      <div className="flex flex-row gap-6 border-t rounded-s border-slate-200 pl-3 pr-3 pt-5 pb-4">
        <CustomButton buttonType="primary" iconRight={<SearchOutlined />} onClick={() => onSearch()}>
          {"Search"}
        </CustomButton>
        <CustomButton buttonType="primary" onClick={() => onReset()}>
          {"Reset"}
        </CustomButton>
      </div>
    </CardView>
  )
}
export default SearchLayout
