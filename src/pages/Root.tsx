import MainNavigation from "../components/Navigation/MainNavigation.tsx";
import {Outlet} from "react-router-dom";
import SideMenu from "../components/SideMenu/SideMenu.tsx";
import {useRecoilValue} from "recoil";
import {sideMenuState} from "../store/sideMenuAtom.ts";


function Root () {
    const sideMenuSate = useRecoilValue(sideMenuState)
    return (
        <div className='relative h-full text-white'>
            <MainNavigation/>
            {sideMenuSate && <SideMenu/>}
            <Outlet/>
        </div>
    );
}
export default Root
