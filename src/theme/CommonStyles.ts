import styled from "styled-components"
import Colors from "./Colors"
import { Table } from "antd"

export const ANTD_GLOBAL_STYLES = {
  token: {
    colorPrimary: Colors.primary,
    colorPrimaryHover: Colors.blueSky,
  },
  components: {
    Input: {
      hoverBorderColor: Colors.white,
      activeBorderColor: Colors.white,
      activeShadow: "0",
    },
    DatePicker: {
      activeBorderColor: Colors.primary,
      cellRangeBorderColor: Colors.primary,
      hoverBorderColor: Colors.primary,
    },
    RangePicker: {
      activeBorderColor: Colors.primary,
      cellRangeBorderColor: Colors.primary,
      hoverBorderColor: Colors.primary,
    },
    Segmented: {
      itemColor: Colors.white,
      itemActiveBg: Colors.primary,
      trackBg: Colors.primary,
    },
  },
}

export const TextBase = styled.div<{
  color?: string
  size?: string
  weight?: string
  italic?: string
  underline?: string
  highlight?: string
}>`
  @import url("https://fonts.googleapis.com/css?family=Inter:400,700&display=swap");
  font-family: "Inter", sans-serif;
  color: ${(props) => props.color || Colors.neutral1};
  font-size: ${(props) => props.size || "14px"};
  font-weight: ${(props) => (props.weight ? props.weight : "500")};
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  background-color: ${(props) => (props.highlight ? "yellow" : "transparent")};
  padding: ${(props) => (props.highlight ? "2px 4px" : "0")};
  letter-spacing: -0.02em;
  border-radius: ${(props) => (props.highlight ? "4px" : "0")};
  span {
    font-size: ${(props) => props.size || "14px"};
    color: "red";
  }
`

export const ButtonBase = styled.div<{
  disabled?: boolean
  type: string
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: "40px";
  padding: 14px 16px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;

  background-color: ${(props) => {
    if (props.disabled) return Colors.disable
    return props.type === "primary" ? Colors.primary : "transparent"
  }};
  color: ${(props) => {
    if (props.disabled) return Colors.white
    return props.type === "primary" ? Colors.white : Colors.primary
  }};
  border: ${(props) => {
    if (props.disabled) return "none"
    return props.type === "outline" ? "1px solid #00aaad" : "none"
  }};

  &:hover {
    background-color: ${(props) => {
      if (props.disabled) return ""
      return props.type === "primary" ? Colors.primary : Colors.white
    }};
    color: ${(props) => {
      if (props.disabled) return ""
      return props.type === "primary" ? Colors.white : Colors.primary
    }};
    box-shadow: ${(props) => (!props.disabled ? "0px 4px 10px rgba(24, 144, 255, 0.5)" : "none")};
    transform: ${(props) => (!props.disabled ? "scale(1.03)" : "none")};
  }
`

export const Required = styled.span({
  color: Colors.red,
  fontSize: 14,
  fontStyle: "italic",
  fontFamily: "Inter",
})

export const InputContainer = styled.div<{
  border?: string
}>`
  border-radius: 8px;
  background: transparent;
  margin: 2px 0 4px 0;
  width: 100%;
`
export const InputWrapper = styled.div`
  margin: 16px 0px 8px 0px;
`

export const TableFooter = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  margin: "16px",
})

export const LayoutContainer = styled("div")({
  height: "100vh",
})

export const HeaderContainer = styled("div")`
  display: flex;
  align-items: center;
  background-color: #edf2f7;
  box-shadow: 0 1px 15px 2px #718096;
  padding: 5px 24px 5px;
  height: 58px;
`

export const TableCustom = styled(Table)`
  .ant-table-cell {
    border-bottom: 1px solid #abbed1 !important;
  }
  .ant-table {
    background-color: transparent !important;
  }
  th {
    background-color: rgba(0, 170, 172, 0.9) !important;
    color: #fff !important;
  }
`
