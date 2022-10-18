import styled from 'styled-components';

export const Content = styled.div`
    display: grid;
    //align-items: center;

    background-color: rgba(131, 90, 253, 0.5);
    margin: 2vh 2vh 2vh 0;
    border-radius: 4px;
    padding: 1vh;

    div {
        margin: 0.5vh;

        input {
            border: none;
            outline: none;
            min-height: 4vh;
            padding-left: 0.5vh;
            border-radius: 4px;
            margin-left: 0.5vh;
        }

        textarea {
            border: none;
            outline: none;
            padding: 1vh 0 0 0.5vh;
            border-radius: 4px;
            width: 360px;
            height: 120px;
            resize: none;
        }

        button {
            padding: 1vh;
            border: none;
            color: #fff;
            border-radius: 4px;
            cursor: pointer;
        }
    }
`;