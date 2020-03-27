import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  max-width: 1180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px auto 100px;
  padding: 0 30px;

  div {
    display: flex;
    align-items: center;
  }

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  img {
    height: 64px;
  }

  a {
    width: 260px;
    margin-left: auto;
  }

  button.logout {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid;
    border-color: ${props => props.theme.color.powerButtonBorder};
    background: ${props => props.theme.color.powerButton};
    margin-left: 16px;
    cursor: pointer;
    transition: border-color 0.2s;

    &:hover {
      border-color: #999999;
    }
  }
`;
