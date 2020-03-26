import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  max-width: 1180px;
  display: flex;
  align-items: center;
  margin: 20px auto 100px;
  padding: 0 30px;

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
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;
    cursor: pointer;
    transition: border-color 0.2s;

    &:hover {
      border-color: #999999;
    }
  }
`;
