import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Page2 from '../pages/Page2';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page2" element={<Page2 />} />
        </Routes>
    );
}
