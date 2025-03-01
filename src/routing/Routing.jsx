import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Shorts } from '../pages/Shorts';
import { ShortDetail } from '../pages/ShortDetail';
import { Subscribtions } from '../pages/Subscribtions';

import { MainLayout } from '../components/MainLayout';

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/shorts' element={<Shorts />} />
                    <Route path='/shorts/:imageId' element={<ShortDetail />} />
                    <Route path='/subscribtions' element={<Subscribtions />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};