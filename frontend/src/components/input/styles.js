import styled from "styled-components";

export const InputStyle = styled.input`
  width: ${props => props.width || "100%"};
  height: 60px;
  color: #333;
  font-size: 18px;
  display: inline-block;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
  margin-top: 8px;
`;
