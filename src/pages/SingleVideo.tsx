import PlayVideo from "../components/PlayVideo.tsx";
import {useParams} from "react-router-dom";
import RelatedVideos from "../components/RelatedVideos.tsx";


const SingleVideo = () => {
    const {videoId, videoCategoryId} = useParams()

    return <div id='single-video-page-wrapper' className='mt-16'>
        <div className='grid grid-cols-3 col-auto gap-4 px-3'>
            <div className='lg:col-span-2 col-span-3'>
                <PlayVideo videoId={videoId}/>
            </div>

            <div className='w-full col-span-3 lg:col-span-1 lg:row-span-2'>
                <RelatedVideos/>
            </div>


        </div>

    </div>
}

export default SingleVideo