import { globalLoading } from "@/components/GlobalLoading"
import Api from "@/utils/Api"

export const getPagesData = async (lang: string) => {
  const response = await Api.fetch({
    url: "/pages?lang=" + lang,
    config: {
      method: "GET",
    },
  })
  return response
}
