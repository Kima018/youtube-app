import HomeSideMenu from "../components/SideMenu/HomeSideMenu.tsx";
import HomeFeed from "../components/HomeFeed.tsx";


function Home() {


    return (
        <div className='h-full flex flex-row px-2'>
            <HomeSideMenu/>
            <HomeFeed/>
        </div>
    );
}

export default Home
