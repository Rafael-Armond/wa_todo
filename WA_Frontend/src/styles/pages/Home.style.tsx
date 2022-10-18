import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: stretch;
    height: 100%;
    width: 100%;
    background: rgb(235, 230, 250);
`;

export const ContentPage = styled.div`
    display: grid;
    align-items: center;
    margin: auto auto;

    grid-template-columns: repeat(3, 2fr);
    overflow-y: auto;
`;