import {Route, Routes} from "react-router";
import Home from "./pages/home/Home.jsx";
import AppLayout from "./layouts/AppLayout.jsx";
import Login from "./pages/login/Login.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import SignUp from "./pages/signup/SignUp.jsx";


export default function App() {
    return (
        <Routes>
            <Route element={<AuthLayout/>}>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'signup'} element={<SignUp/>}/>
            </Route>
            <Route element={<AppLayout/>}>
                 <Route path={'/'} element={<Home/>}/>
            </Route>
        </Routes>
    )
}
