import { DostavkaSborka } from '@/todo/universalComp/dostavkaSborka';
import { FurniturePage } from '@/pages/FurniturePage/ui/furniturePage';
import { LoginModal } from '@/features/loginModal/ui/loginModal';
import { MainPage } from '@/pages/MainPage/ui/mainPage';
import { Payment } from '@/todo/universalComp/payment';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AddFurn } from '@/features/addFurn';
import { EditElementPage } from '@/pages/EditElementPage';
import { AllFurnPage } from '@/pages/AllFurnPage';
import { ProtectedRoute } from '@/shared/lib/protecredRoute/protecredRoute';

export const AppRoutes = () => {
    return (
        <div style={{ minHeight: '1200px' }}>
            <Routes>
                <Route path={'/'} exact element={<MainPage />} />
                <Route
                    path={
                        '/catalog/:currentCategory?/:currentSubCategory_or_currentElement?/:currentSubElement?'
                    }
                    element={<FurniturePage />}
                    exact
                />
                <Route path={'/login/:type?'} exact element={<LoginModal />} />
                <Route
                    path={'/dostavka-sborka'}
                    exact
                    element={<DostavkaSborka />}
                />
                <Route path={'/kak-oplatit'} exact element={<Payment />} />
                <Route path={'*'} exact element={<NotFoundPage />} />
                <Route
                    exact
                    path="/product-change"
                    element={<ProtectedRoute />}
                >
                    <Route exact path="/product-change" element={<AddFurn />} />
                </Route>
                <Route
                    exact
                    path="/catalog/:currentCategory/:currentElement/editElem"
                    element={<ProtectedRoute />}
                >
                    <Route
                        exact
                        path="/catalog/:currentCategory/:currentElement/editElem"
                        element={<EditElementPage />}
                    />
                </Route>
                <Route exact path="/edit" element={<ProtectedRoute />}>
                    <Route exact path="/edit" element={<AllFurnPage />} />
                </Route>
            </Routes>
        </div>
    );
};
