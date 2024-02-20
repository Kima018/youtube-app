import MainNavigation from "../components/MainNavigation.tsx";
import {Outlet} from "react-router-dom";
import SideMenu from "../components/SideMenu.tsx";

function Root () {
    return (
        <>
            <MainNavigation/>
            {/*<SideMenu/>*/}
            <Outlet/>
        </>
    );
}
export default Root
