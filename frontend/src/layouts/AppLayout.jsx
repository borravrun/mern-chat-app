import {Outlet} from "react-router";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

export default function AppLayout() {
    return (
        <div className={'w-full h-screen flex'}>
            <Sidebar/>
            <Outlet/>
        </div>
    )
}
