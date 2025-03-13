import Colors from "@/theme/Colors"
import { useMemo } from "react"

const useInput = (isDisabled?: boolean, isFieldError?: boolean, isFocused?: boolean) => {
  const borderColorInput = useMemo(() => {
    if (isDisabled) {
      return Colors.borderInput
    } else if (isFieldError && !isFocused) {
      return Colors.red
    } else if (isFocused) {
      return Colors.primary
    } else {
      return Colors.borderInput
    }
  }, [isFieldError, isFocused, isDisabled])

  return {
    borderColorInput,
  }
}

export default useInput
