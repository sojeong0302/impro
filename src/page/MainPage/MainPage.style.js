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
    height: 40em; // 화면 높이의 20%로 설정
    width: 55em; // 화면 너비의 20%로 설정
    margin: 5%;
`;
