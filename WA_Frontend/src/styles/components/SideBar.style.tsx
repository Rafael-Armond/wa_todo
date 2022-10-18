import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(131, 90, 253, 0.5);
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  margin: 2vh;
  padding: 1vh;
  background-color: rgb(131, 90, 253);
  border-radius: 4px;
  color: #f8f8f8;
  cursor: pointer;
  -webkit-box-shadow: 0 0 4px rgb(57, 16, 82);
        box-shadow: 0 0 4px rgb(57, 16, 82);
`;

export const IconWrapper = styled.div`
  display: flex; 
  margin-left: 1.5vh; 
  align-items: center;
`;