import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 100%;
  height: 60px;
  color: #ffffff;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  font-weight: 700;
  margin-top: ${props => props.marginTop || "16px"};
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`;
