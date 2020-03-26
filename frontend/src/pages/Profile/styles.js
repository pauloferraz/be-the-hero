import styled from "styled-components";

export const ContainerProfile = styled.div`
  margin: 32px auto;
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;
    padding-left: 0px;
  }
  li {
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;

    p {
      color: #737380;
      line-height: 21px;
      font-size: 16px;
      margin-bottom: 22px;
      margin-top: 12px;

      &:last-of-type {
        margin-bottom: 7px;
      }
    }

    button {
      position: absolute;
      right: 24px;
      top: 24px;
      background: transparent;
      border: none;
      transition: opacity 0.2s;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
