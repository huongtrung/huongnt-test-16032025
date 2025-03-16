import { useMutation } from "@tanstack/react-query"
import { getPagesData } from "../api/getPagesData"
import { usePagesStore } from "@/stores/usePageStore"

const useGetPagesData = async () => {
  const { setPagesData } = usePagesStore()
  return useMutation({
    mutationFn: getPagesData,
    onSuccess(data, variables, context) {
      if (data) {
        setPagesData(data?.[0])
      }
    },
    onError(error, variables, context) {
      setPagesData(null)
    },
  })
}

export default useGetPagesData
