import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Images } from '../pages/Images';
import { ImageDetail } from '../pages/ImageDetail';
import { Subscriptions } from '../pages/Subscriptions';

import { MainLayout } from '../components/MainLayout';

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/images' element={<Images />} />
                    <Route path='/images/:imageId' element={<ImageDetail />} />
                    <Route path='/subscriptions' element={<Subscriptions />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};