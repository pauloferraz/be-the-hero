import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SectionRegister = styled.div`
  width: 100%;
  max-width: 400px;

  h1 {
    margin: 64px 0 32px;
    font-size: 32;
  }

  p {
    font-size: 18px;
    color: #737380;
    line-height: 32px;
  }
  svg {
    margin-right: 8px;
  }

  a {
    display: flex;
    align-items: center;
    font-weight: 600;
    transition: 0.2s;
    text-decoration: none;
    color: #41414d;
    font-size: 18px;
    margin-top: 32px;

    &:hover {
      opacity: 0.8;
    }
  }
`;
export const FormRegister = styled.form`
  width: 100%;
  max-width: 450px;

  div {
    display: flex;

    input + input {
      margin-left: 8px;
    }
  }
`;
