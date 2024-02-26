import {Link} from "react-router-dom";

const RelatedVideos = ()=>{
    return <div className='w-full flex flex-col justify-items-stretch col-span-3 lg:col-span-1'>
        <div id='relatedVideos-categoriesBtns' className='overflow-hidden flex justify-center'>
            <div className='flex gap-3 justify-center overflow-x-auto'>
                <Link to='/' className='bg-gray-200 text-black px-3 py-1 rounded'>All</Link>
                <Link to='/' className='bg-gray-200 text-black px-3 py-1 rounded'>Gaming</Link>
                <Link to='/' className='bg-gray-200 text-black px-3 py-1 rounded'>Sport</Link>
                <Link to='/' className='bg-gray-200 text-black px-3 py-1 rounded'>Movies</Link>
            </div>
            <div className='w-full'>
                <ul className='w-full flex flex-row gap-2 '>

                </ul>
            </div>
        </div>
    </div>
}
export default RelatedVideos