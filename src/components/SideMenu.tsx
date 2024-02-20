import {TbMenu2} from "react-icons/tb";
import {Link} from "react-router-dom";
import MainLogo from "../assets/YouTube Logo Vector.png";


function SideMenu () {


    return (
        <>
        <aside className='h-screen w-60 absolute left-0 bg-opacity-60 bg-neutral-500 pl-4 pt-2'>
            <div className='flex text-white'>
                <button className='text-2xl p-2'><TbMenu2/></button>
                <Link to='/' className='p-2 flex justify-center items-center '><img className='h-5' src={MainLogo}
                                                                                    alt='Youtube'/></Link>
            </div>
            <div className='overflow-y-auto divide-y pt-4'>
                <ul>
                    <li>Content1</li>
                    <li>Content2</li>
                    <li>Content3</li>
                </ul>
                <ul>
                    <li>Content1</li>
                    <li>Content2</li>
                    <li>Content3</li>
                </ul>
                <ul>
                    <li>Content1</li>
                    <li>Content2</li>
                    <li>Content3</li>
                </ul>
                <ul>
                    <li>Content1</li>
                    <li>Content2</li>
                    <li>Content3</li>
                </ul>
            </div>
        </aside>
        </>
    );
}

export default SideMenu
