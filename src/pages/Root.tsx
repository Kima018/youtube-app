import MainNavigation from "../components/MainNavigation.tsx";
import {Outlet} from "react-router-dom";

function Root () {
    return (
        <>
            <MainNavigation/>
            <Outlet/>

        </>
    );
}
export default Root
