import './App.css';
import MainPage from './page/MainPage/index.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
