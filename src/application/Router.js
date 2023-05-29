import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import PvpcCharts from '../pages/PvpcCharts';
import PvpcDays from '../pages/PvpcDays';
import Home from '../pages/Home';
import ErrPage from '../pages/ErrPage';
import Calculadora from '../pages/Calculadora';
import NavBar from '../components/NavBar';
import Login from '../components/Login';
import UpdateUserLogin from '../components/UpdateUserLogin';
import PasswordUpdateUserLogin from '../components/PasswordUpdateUserLogin';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<LayoutHome />}>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="updateUser" element={<UpdateUserLogin />} />
                <Route path="pwd/:mail" element={<PasswordUpdateUserLogin />} />
            </Route>
            <Route element={<Layout />}>

                <Route path="pvpc" element={<PvpcCharts />} />
                <Route exact path="calculadora" element={<PrivateRoute component={Calculadora} />} />
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
            <div className='contentGrid'>
                <Outlet />
                <PvpcDays />
            </div>
        </>
    )
}

const LayoutHome = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}