import styled from "styled-components";

export const InputStyle = styled.input`
  width: ${props => props.width || "100%"};
  height: 60px;
  color: ${props => props.theme.color.fontColor};
  font-size: 18px;
  display: inline-block;
  border: 1px solid;
  border-color: ${props => props.theme.color.inputBorderColor};
  background: ${props => props.theme.color.inputColor};
  border-radius: 8px;
  padding: 0 24px;
  margin-top: 8px;
`;
