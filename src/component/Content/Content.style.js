import styled from 'styled-components';

export const MainPageContainer = styled.div`
    background-color: white;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const MainPageContentDiv = styled.div`
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60em;
    height: 50em;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid black;
`;

export const PotoSelectDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2%;
    width: 50%;
    margin: 5%;
`;

export const PotoSelectFont = styled.div`
    font-size: 2em;
`;

export const PotoSelectLogo = styled.img`
    cursor: pointer;
    height: 2em;
    width: 2em;
`;

export const PotoDiv = styled.div`
    background-color: white;
    height: 40em;
    width: 55em;
    border-radius: 5px;
    border: 1px solid black;
`;
