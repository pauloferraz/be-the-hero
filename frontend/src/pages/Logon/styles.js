import styled from "styled-components";

export const LogonContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionFormLogon = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  h1 {
    font-size: 32px;
    margin-bottom: 32px;
    font-weight: bold;
  }
  form {
    margin-top: 100px;
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
