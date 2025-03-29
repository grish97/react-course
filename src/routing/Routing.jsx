import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import { Home } from '../pages/Home';
import { Images } from '../pages/Images';
import { ImageDetail } from '../pages/ImageDetail';
import { Subscriptions } from '../pages/Subscriptions';
import { Products } from '../pages/products/Products';

// Route groups
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

import { MainLayout } from '../components/MainLayout';
import { SignIn } from '../pages/SignIn';

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicRoutes />}>
                    <Route path='/signin' element={<SignIn />} />  
                </Route>

                <Route element={<PrivateRoutes />}>
                    <Route element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path='/images' element={<Images />} />
                        <Route path='/images/:imageId' element={<ImageDetail />} />
                        <Route path='/subscriptions' element={<Subscriptions />} />
                        <Route path='/products?/:productId' element={<Products />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};