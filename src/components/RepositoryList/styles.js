import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Repository = styled.div`
  height: 70px;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;

  img {
    width: 45px;
    height: 45px;
  }

  .infos {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    strong {
      font-size: 24px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }
  .icon {
    flex-grow: 1;
    color: #bdc3c7;
    i {
      float: right;
    }
  }
`;
