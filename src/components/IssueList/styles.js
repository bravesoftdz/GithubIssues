import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
  height: 100%;
  flex: 1;
  overflow: auto;
`;

export const Issue = styled.div`
  padding: 20px;
  margin: 20px;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  flex-wrap: wrap;
  height: 150px;
  width: 380px;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  img {
    width: 64px;
    border-radius: 40px;
  }
  .info-issue {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 10px;
    justify-content: space-between;
    strong {
      font-size: 16px;
    }

    small {
      /* margin-top: 10px; */
      font-size: 15px;
      color: #979ca0;
    }

    button {
      background: #b286d1;
      color: #fff;
      height: 35px;
      width: 180px;
      border-radius: 3px;
      font-weight: bold;
      font-size: 15px;
      cursor: pointer;
      &:hover {
        background: #9c76b8;
      }
      /* margin-top: 10px; */
    }
  }
`;
