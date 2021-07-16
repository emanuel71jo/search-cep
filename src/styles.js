import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 50px;
`;

export const Header = styled.div`
  width: 1073px;
  height: 56px;

  margin-bottom: 12px;

  input {
    width: 500px;
    height: 48px;
    border: 1px solid #dfdfdf;
    border-radius: 10px;
    padding-left: 12px;
    margin-right: 48px;
    font-family: Roboto, sans-serif;
    font-size: 18px;
  }

  button {
    width: 200px;
    height: 48px;
    border: none;
    background-color: #18ac00;
    border-radius: 10px;
    color: white;
    font-size: 24px;
    font-family: Roboto, sans-serif;

    transition: 0.2s;
  }

  button:hover:not(:disabled) {
    opacity: 0.7;
  }

  button:disabled {
    background-color: #dfdfdf;
  }
`;

export const Form = styled.div`
  width: 1073px;
  height: 401px;
  background-color: #dfdfdf;

  border-radius: 25px;
  padding: 32px;

  display: flex;
  align-items: flex-start;

  div {
    width: 50%;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    label {
      color: #777;
      font-size: 24px;
      font-family: Roboto, sans-serif;
    }

    input {
      width: 350px;
      height: 48px;
      font-size: 18px;
      font-family: Roboto, sans-serif;
      border-radius: 10px;
      border: 1px solid #289b00;
      margin-bottom: 48px;
      padding-left: 8px;
    }
  }
`;
