import { Segmented, SegmentedProps } from "antd"

interface BaseSegmentedProps extends SegmentedProps {
  options: string[] | number[]
  onChangeValue?: (value: string | number) => void
}

const CustomSegmented: React.FC<BaseSegmentedProps> = ({ options, onChangeValue, ...rest }) => {
  const onChange = (value: string | number) => {
    onChangeValue && onChangeValue(value)
  }

  return <Segmented {...rest} block options={options} onChange={onChange} size={"large"} />
}

export default CustomSegmented
