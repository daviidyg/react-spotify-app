import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginComponent from "../pages/login/login.component";
import HomeComponent from "../pages/home/home.component";

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomeComponent/>}/>
                <Route path={'/login'} element={<LoginComponent/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent;