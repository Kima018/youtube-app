import {Link} from "react-router-dom";
import RelatedVideoItem from "./RelatedVideoItem.tsx";

const RelatedVideos = ({relatedVideosData}) => {
    if (!relatedVideosData) {
        return <div>is lodaing...</div>
    }
    return <div className=' flex flex-col justify-items-stretch '>
        <div id='relatedVideos-categoriesBtns' className='overflow-hidden flex justify-center mb-3'>
            <div className='flex gap-3 justify-center overflow-x-auto'>
                <Link to='/' className='bg-gray-200 text-black px-3 py-1 rounded'>All</Link>
                <Link to='/' className='bg-gray-200 text-black px-3 py-1 rounded'>Gaming</Link>
                <Link to='/' className='bg-gray-200 text-black px-3 py-1 rounded'>Sport</Link>
                <Link to='/' className='bg-gray-200 text-black px-3 py-1 rounded'>Movies</Link>
            </div>
        </div>
        <div className='w-full'>
            <ul className='w-full flex flex-col gap-2 '>
                {relatedVideosData.map((item, index) =>
                    <RelatedVideoItem key={index}
                                      categoryID={item.snippet.categoryId}
                                      videoID={item.id}
                                      imageUrl={item.snippet.thumbnails.default.url}
                                      title={item.snippet.localized.title}
                                      channelTitle={item.snippet.channelTitle}
                                      viewCount={item.statistics.viewCount}
                                      publishedAt={item.snippet.publishedAt}
                    />)}
            </ul>
        </div>
    </div>


}
export default RelatedVideos