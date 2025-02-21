import Header from '../../component/Header/index.js';
import Button from '../../component/Button/index.js';
import {
    MainPageContainer,
    MainPageContentDiv,
    PotoSelectDiv,
    PotoSelectFont,
    PotoSelectLogo,
    PotoDiv,
} from './MainPage.style.js';

function MainPage() {
    return (
        <>
            <Header />
            <MainPageContainer>
                <MainPageContentDiv>
                    <PotoSelectDiv>
                        <PotoSelectFont>사진을 선택해주세요.</PotoSelectFont>
                        <PotoSelectLogo src='/assets/Queue.png' alt='선택 로고' />
                    </PotoSelectDiv>
                    <PotoDiv />
                    <Button />
                </MainPageContentDiv>
            </MainPageContainer>
        </>
    );
}

export default MainPage;
