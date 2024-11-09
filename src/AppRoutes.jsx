import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import ProductViewPage from './pages/ProductViewPage/ProductViewPage';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage';

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/ProductViewPage" element={<ProductViewPage />}></Route>
                <Route path="/ProductListingPage" element={<ProductListingPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;