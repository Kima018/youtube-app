import {TbMenu2} from "react-icons/tb";
import {Link} from "react-router-dom";
import MainLogo from "../../assets/YouTube Logo Vector.png";
import SideMenuListItems from "./SideMenuListItems.tsx";
import { useSetRecoilState} from "recoil";
import {sideMenuState} from "../../store/sideMenuAtom.ts";



function SideMenu() {
    const setSideMenuState = useSetRecoilState(sideMenuState)
    function handleClick(){
        setSideMenuState(false)
    }


    return (
        <>
            <aside
                className='flex flex-col h-screen w-60 fixed left-0 top-0  bg-neutral-500 pl-3 pt-3 text-white overflow-hidden z-50 '>
                <div className='flex'>
                    <button className='text-2xl p-2' onClick={handleClick}><TbMenu2/></button>
                    <Link to='/' className='p-2 flex justify-center items-center '><img className='h-5' src={MainLogo}
                                                                                        alt='Youtube'/></Link>
                </div>
                <SideMenuListItems/>

            </aside>
        </>
    );
}

export default SideMenu
