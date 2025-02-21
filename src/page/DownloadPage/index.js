import Header from '../../component/Header/index.js';
import Content from '../../component/Content/index.js';

function DownloadPage() {
    return (
        <>
            <Header />
            <Content Message='다운 받아주세요.' Icon='/assets/FileDownload.png' path='/' ButtonMessage='홈으로' />
        </>
    );
}

export default DownloadPage;
