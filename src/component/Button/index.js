import { ButtonContainer, ButtonFont } from './Button.style';

function Button({ ButtonClick, ButtonMessage }) {
    return (
        <>
            <ButtonContainer onClick={ButtonClick}>
                <ButtonFont>{ButtonMessage}</ButtonFont>
            </ButtonContainer>
        </>
    );
}

export default Button;
