import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
    background: rgb(235, 230, 250);
`;

export const ContentPage = styled.div`
    display: grid;
    align-items: center;
    margin: auto auto;

    background-color: rgba(131, 90, 253, 0.6);
    border-radius: 4px;
    -webkit-box-shadow: 0 0 10px rgb(57, 16, 82);
        box-shadow: 0 0 10px rgb(57, 16, 82);
    padding: 2vh;
    
    > form > div {
        display: flex;
        
        input {
            border: none;
            outline: none;
            min-height: 4vh;
            padding-left: 0.5vh;
            border-radius: 4px;
        }
        
        textarea {
            border: none;
            outline: none;
            width: 600px; 
            height: 280px;
            padding: 1vh 0 0 0.5vh;
            border-radius: 4px;
            resize: none;
        }

        button {
            padding: 1vh;
            background-color: rgba(28, 3, 101, 0.85);
            border: none;
            color: #fff;
            border-radius: 4px;
            cursor: pointer;
        }
    }
`;