import {MdCastForEducation, MdOutlineHome, MdOutlinePets, MdOutlineTravelExplore} from "react-icons/md";
import {BiCameraMovie} from "react-icons/bi";
import {SiPcgamingwiki} from "react-icons/si";
import {BsMusicNote} from "react-icons/bs";
import {IoCarSportOutline} from "react-icons/io5";
import {useSetRecoilState} from "recoil";
import {categoryAtom} from "../../store/categoryAtom.ts";
import {HomeSideButton} from "../Buttons/HomeSideButton.tsx";
function HomeSideMenu() {

    const setCategory = useSetRecoilState(categoryAtom)

    return <aside className='sticky top-16 left-0 h-full w-16 text-white mt-16'>
        <div className='h-full divide-y'>
            <ul className='py-2'>
                <li>
                    <HomeSideButton handleClick={() => {
                        setCategory(0)
                    }} icon={<MdOutlineHome/>}>Home</HomeSideButton>
                </li>
                <li>
                    <HomeSideButton handleClick={() => {
                        setCategory(26)
                    }} icon={<MdCastForEducation/>}>Education</HomeSideButton>
                </li>
                <li>
                    <HomeSideButton handleClick={() => {
                        setCategory(2)
                    }} icon={<IoCarSportOutline/>}>Cars</HomeSideButton>
                </li>
                <li>
                    <HomeSideButton handleClick={() => {
                        setCategory(10)
                    }} icon={<BsMusicNote/>}>Music</HomeSideButton>
                </li>
                <li>
                    <HomeSideButton handleClick={() => {
                        setCategory(15)
                    }} icon={<MdOutlinePets/>}>Pets</HomeSideButton>
                </li>
                <li>
                    <HomeSideButton handleClick={() => {
                        setCategory(19)
                    }} icon={<MdOutlineTravelExplore/>}>Travel</HomeSideButton>
                </li>
                <li>
                    <HomeSideButton handleClick={() => {
                        setCategory(20)
                    }} icon={<SiPcgamingwiki/>}>Gaming</HomeSideButton>
                </li>
                <li>
                    <HomeSideButton handleClick={() => {
                        setCategory(30)
                    }} icon={<BiCameraMovie/>}>Movies</HomeSideButton>
                </li>

            </ul>
        </div>
    </aside>
}

export default HomeSideMenu