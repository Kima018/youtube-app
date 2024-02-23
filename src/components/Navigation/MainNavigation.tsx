import {Link} from "react-router-dom";
import MainLogo from "../../assets/YouTube Logo Vector.png"
import {TbMenu2} from "react-icons/tb";
import {FaBell} from "react-icons/fa6";
import {AiOutlineVideoCameraAdd} from "react-icons/ai";
import Dropdown from "./Dropdown.tsx";
import {CiSearch} from "react-icons/ci";
import {useRecoilState} from "recoil";
import {sideMenuState} from "../../store/sideMenuAtom.ts";


const MainNavigation=()=> {
    const [sideMenuSate, setSideMenuState] = useRecoilState(sideMenuState)
    function handleOpenSideMenu(){
        setSideMenuState(!sideMenuSate)
    }

    return <nav
        className='fixed top-0 left-0 right-0 w-full min-h-10 flex justify-between items-center py-3 text-white px-3'>
        <div className='flex justify-center '>
            <button className='text-2xl p-2' onClick={handleOpenSideMenu}><TbMenu2/></button>
            <Link to='/' className='p-2 flex justify-center items-center '><img className='h-5' src={MainLogo}
                                                                                alt='Youtube'/></Link>
        </div>
        <div className='flex items-center max-w-3xl flex-1 mx-3 '>
            <form className='h-6 flex justify-center items-center w-full'>
                <div className=' flex items-center border border-gray-700 rounded-3xl px-4  w-full'>
                    <div className='w-full flex '>
                        <input id='search' placeholder='Pretrazite' type='search'
                               className='block border-0 outline-0  m-0 w-full bg-transparent rounded-3xl focus:border-0 focus:ring-0 '/>

                    </div>
                    <button type='button' className='text-2xl'>
                        <CiSearch/>
                    </button>
                </div>
            </form>
        </div>
        <div className='relative flex items-center text-2xl'>
            <Dropdown label={<AiOutlineVideoCameraAdd/>}>
                <p>content 1</p>
                <p>content 2</p>
                <p>content 3</p>
            </Dropdown>
            <Dropdown label={<FaBell/>}>
                <p>content 1</p>
                <p>content 2</p>
                <p>content 3</p>
            </Dropdown>
            <Dropdown label={<img/>}>
                <p>content 1</p>
                <p>content 2</p>
                <p>content 3</p>
            </Dropdown>
        </div>

    </nav>

}

export default MainNavigation