import styled from "styled-components";

export const TextareaStyle = styled.textarea`
  width: 100%;
  min-height: 140px;
  resize: vertical;
  color: ${props => props.theme.color.fontColor};
  font-size: 18px;
  display: inline-block;
  border: 1px solid;
  border-color: ${props => props.theme.color.inputBorderColor};
  background: ${props => props.theme.color.inputColor};
  border-radius: 8px;
  padding: 15px 24px;
  margin-top: 8px;
`;
