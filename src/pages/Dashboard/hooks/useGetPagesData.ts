import { useMutation } from "@tanstack/react-query"
import { getPagesData } from "../api/getPagesData"
import { usePagesStore } from "@/stores/usePageStore"

export const useGetPagesData = () => {
  const { setPagesData } = usePagesStore()
  const getPagesDataMutation = useMutation({
    mutationFn: (data: string) => getPagesData(data),
    onSuccess(data, variables, context) {
      if (data) {
        setPagesData(data?.[0])
      }
    },
    onError(error, variables, context) {
      setPagesData(null)
    },
  })
  return getPagesDataMutation
}
