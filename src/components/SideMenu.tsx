import {TbMenu2} from "react-icons/tb";
import {Link} from "react-router-dom";
import MainLogo from "../assets/YouTube Logo Vector.png";
import {MdOutlineHome, MdOutlineKeyboardArrowRight, MdOutlinePodcasts, MdOutlineWatchLater} from "react-icons/md";
import {SiYoutubeshorts} from "react-icons/si";
import {FiYoutube} from "react-icons/fi";
import {LiaHistorySolid} from "react-icons/lia";
import {BiLike} from "react-icons/bi";
import {FaGripfire} from "react-icons/fa";
import {IoMusicalNote} from "react-icons/io5";
import {CgGames} from "react-icons/cg";
import {GiChampions} from "react-icons/gi";


function SideMenu() {


    return (
        <>
            <aside className='translate-x-0 h-screen w-60 absolute left-0 bg-opacity-60 bg-neutral-500 p-3 pr-0 text-white overflow-hidden '>
                <div className='flex'>
                    <button className='text-2xl p-2'><TbMenu2/></button>
                    <Link to='/' className='p-2 flex justify-center items-center '><img className='h-5' src={MainLogo}
                                                                                        alt='Youtube'/></Link>
                </div>
                <div className='h-full divide-y pt-4 overflow-y-auto pb-10'>

                        <ul className='py-2'>
                            <li className='flex items-center mb-1 p-3 rounded-xl hover:bg-neutral-500 '>
                                <div className='text-2xl mr-2'><MdOutlineHome/></div>
                                Home
                            </li>
                            <li className='flex items-center mb-1 p-3 rounded-xl hover:bg-neutral-500 '>
                                <div className='text-2xl mr-2'><SiYoutubeshorts/></div>
                                Home
                            </li>
                            <li className='flex items-center mb-1 p-3 rounded-xl hover:bg-neutral-500 '>
                                <div className='text-2xl mr-2'><FiYoutube/></div>
                                Home
                            </li>
                        </ul>
                        <ul className='py-2'>
                            <li className='flex items-center mb-1 p-3 rounded-xl hover:bg-neutral-500 '>
                                You
                                <div className='text-2xl mr-2'><MdOutlineKeyboardArrowRight/></div>
                            </li>
                            <li className='flex items-center mb-1 p-3 rounded-xl hover:bg-neutral-500 '>
                                <div className='text-2xl mr-2'><LiaHistorySolid/></div>
                                History
                            </li>
                            <li className='flex items-center mb-1 p-3 rounded-xl hover:bg-neutral-500 '>
                                <div className='text-2xl mr-2'><MdOutlineWatchLater/></div>
                                Watch later
                            </li>
                            <li className='flex items-center mb-1 p-3 rounded-xl hover:bg-neutral-500 '>
                                <div className='text-2xl mr-2'><BiLike/></div>
                                Liked
                            </li>
                        </ul>
                        <ul className='py-2'>
                            <li className='flex items-center mb-1 p-3 rounded-xl text-xl  '>
                                Research
                            </li>
                            <li className='flex items-center mb-1 p-3 rounded-xl hover:bg-neutral-500 '>
                                <div className='text-2xl mr-2'><FaGripfire/></div>
                                Trending
                            </li>
                            <li className='flex items-center mb-1 p-3 rounded-xl hover:bg-neutral-500 '>
                                <div className='text-2xl mr-2'><IoMusicalNote/></div>
                                Music
                            </li>
                            <li className='flex items-center mb-1 p-3 rounded-xl hover:bg-neutral-500 '>
                                <div className='text-2xl mr-2'>< CgGames/></div>
                                Games
                            </li>
                            <li className='flex items-center mb-1 p-3 rounded-xl hover:bg-neutral-500 '>
                                <div className='text-2xl mr-2'><GiChampions/></div>
                                Sport
                            </li>
                            <li className='flex items-center mb-1 p-3 rounded-xl hover:bg-neutral-500 '>
                                <div className='text-2xl mr-2'>< MdOutlinePodcasts/></div>
                                Podcast
                            </li>
                        </ul>
                        <ul className='py-2'>
                            <li className='flex items-center mb-1 p-3 rounded-xl hover:bg-neutral-500 '>
                                <div className='text-2xl mr-2'><MdOutlineHome/></div>
                                Home
                            </li>
                            <li className='flex items-center mb-1 p-3 rounded-xl hover:bg-neutral-500 '>
                                <div className='text-2xl mr-2'><SiYoutubeshorts/></div>
                                Home
                            </li>
                            <li className='flex items-center mb-1 p-3 rounded-xl hover:bg-neutral-500 '>
                                <div className='text-2xl mr-2'><FiYoutube/></div>
                                Home
                            </li>
                        </ul>


                </div>

            </aside>
        </>
    );
}

export default SideMenu
