import {MdCastForEducation, MdOutlineHome, MdOutlinePets, MdOutlineTravelExplore} from "react-icons/md";
import {BiCameraMovie} from "react-icons/bi";
import {SiPcgamingwiki} from "react-icons/si";
import {BsMusicNote} from "react-icons/bs";
import {IoCarSportOutline} from "react-icons/io5";
import {useSetRecoilState} from "recoil";
import {categoryAtom} from "../../store/categoryAtom.ts";
import {HomeSideButton} from "../../Templates/Buttons/HomeSideButton.tsx";
function HomeSideMenu() {

    const setCategory = useSetRecoilState(categoryAtom)

    return <aside className='sticky top-16 left-0 h-full w-16 text-white mt-16'>
        <div className='h-full divide-y'>
            <ul className='py-2'>
                <li>
                    <HomeSideButton handleClick={() => {
                        setCategory(0)
                    }} icon={<MdOutlineHome/>}><p className='text-xs'>Home</p></HomeSideButton>
                </li>
                <li>
                    <HomeSideButton handleClick={() => {
                        setCategory(26)
                    }} icon={<MdCastForEducation/>}><p className='text-xs'>Education</p></HomeSideButton>
                </li>
                <li>
                    <HomeSideButton handleClick={() => {
                        setCategory(2)
                    }} icon={<IoCarSportOutline/>}><p className='text-xs'>Cars</p></HomeSideButton>
                </li>
                <li>
                    <HomeSideButton handleClick={() => {
                        setCategory(10)
                    }} icon={<BsMusicNote/>}><p className='text-xs'>Music</p></HomeSideButton>
                </li>
                <li>
                    <HomeSideButton handleClick={() => {
                        setCategory(15)
                    }} icon={<MdOutlinePets/>}><p className='text-xs'>Pets</p></HomeSideButton>
                </li>
                <li>
                    <HomeSideButton handleClick={() => {
                        setCategory(10)
                    }} icon={<MdOutlineTravelExplore/>}><p className='text-xs'>Travel</p></HomeSideButton>
                </li>
                <li>
                    <HomeSideButton handleClick={() => {
                        setCategory(20)
                    }} icon={<SiPcgamingwiki/>}><p className='text-xs'>Gaming</p></HomeSideButton>
                </li>
                <li>
                    <HomeSideButton handleClick={() => {
                        setCategory(0)
                    }} icon={<BiCameraMovie/>}><p className='text-xs'>Movies</p></HomeSideButton>
                </li>

            </ul>
        </div>
    </aside>
}

export default HomeSideMenu
