import Button from '../../component/Button/index.js';
import {
    MainPageContainer,
    MainPageContentDiv,
    PotoSelectDiv,
    PotoSelectFont,
    PotoSelectLogo,
    PotoDiv,
} from './Content.style.js';
import { useNavigate } from 'react-router-dom';

function Content({ Message, Icon, path, ButtonMessage }) {
    const navigate = useNavigate();
    const PhotoConversion = () => {
        navigate(path);
    };
    return (
        <>
            <MainPageContainer>
                <MainPageContentDiv>
                    <PotoSelectDiv>
                        <PotoSelectFont>{Message}</PotoSelectFont>
                        <PotoSelectLogo src={Icon} alt='아이콘' />
                    </PotoSelectDiv>
                    <PotoDiv />
                    <Button ButtonClick={PhotoConversion} ButtonMessage={ButtonMessage} />
                </MainPageContentDiv>
            </MainPageContainer>
        </>
    );
}

export default Content;
