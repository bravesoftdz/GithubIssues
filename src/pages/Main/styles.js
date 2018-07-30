import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Sidebar = styled.div`
  position: inherit;
  z-index: 1001;
  height: 100%;
  width: 320px;
  padding: 30px;
  background-color: #fff;
  overflow-x: scroll;
  box-shadow: 0 0px 38px rgba(0, 0, 0, 0.3);
  input {
  }
  button {
    cursor: pointer;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  header {
    position: inherit;
    z-index: 1000;
    width: 100%;
    padding: 30px 40px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    div {
      cursor: default !important;
    }
    .filter {
      select {
        cursor: pointer;
        font-size: 16px;
        height: 42px;
        width: 150px;
        border: 1px solid #ddd;
        background: #fff;
      }
    }
  }

  .text-error {
    color: red;
    margin: 20px;
    font-size: 16px;
  }

  .loading-issues {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 45px;
    padding: 0 15px;
    background: #fff;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    width: 100%;

    border: ${({ withError }) => (withError ? '2px solid #F00' : 0)};

    background-color: #eee;
  }

  button {
    width: 45px;
    height: 45px;
    padding: 0 12px;
    margin-left: 10px;
    background: #59ea9a;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    &:hover {
      background: #4dcd87;
    }
  }
`;
