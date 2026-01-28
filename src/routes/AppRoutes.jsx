import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Page2 from '../pages/Page2';

import Playground from '../pages/Playground';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/playground" element={<Playground />} />
        </Routes>
    );
}
