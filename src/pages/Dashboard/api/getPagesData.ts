import { globalLoading } from "@/components/GlobalLoading"
import Api from "@/utils/Api"

export const getPagesData = async (lang: string) => {
  globalLoading.show()
  const response = await Api.fetch({
    url: "/pages?lang=" + lang,
    config: {
      method: "GET",
    },
  })
  globalLoading.hide()
  return response
}
