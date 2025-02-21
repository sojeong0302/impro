import Header from '../../component/Header/index.js';
import Content from '../../component/Content/index.js';

function MainPage() {
    return (
        <>
            <Header />
            <Content
                Message='사진을 선택해주세요.'
                Icon='/assets/Queue.png'
                path='/download'
                ButtonMessage='변환하기'
            />
        </>
    );
}

export default MainPage;
