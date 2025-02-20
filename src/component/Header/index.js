import { HeaderContainer, LogoDiv } from './Header.style';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <>
            <HeaderContainer>
                <LogoDiv
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    ImPro
                </LogoDiv>
            </HeaderContainer>
        </>
    );
}

export default Header;
