import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Pvpc from '../pages/Pvpc';
import Home from '../pages/Home';
import ErrPage from '../pages/ErrPage';
import NavBar from '../components/NavBar';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/pvpc" element={<Pvpc />} />
                <Route path="*" element={<ErrPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
export default Router;

const Layout = () => {

    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}