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
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const navigate = useNavigate();
    const PhotoConversion = () => {
        navigate('/download');
    };
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
                    <Button onClick={PhotoConversion} ButtonMessage='변환하기' />
                </MainPageContentDiv>
            </MainPageContainer>
        </>
    );
}

export default MainPage;
