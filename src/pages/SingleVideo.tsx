import PlayVideo from "../components/PlayVideo.tsx";
import {useParams} from "react-router-dom";
import RelatedVideos from "../components/RelatedVideos.tsx";

const SingleVideo = ()=>{
    const {videoId,videoCategoryId} = useParams()

return<div id='single-video-page-wrapper' className='mt-16'>
    <div className='grid grid-cols-3 gap-4 px-3'>
        <PlayVideo videoId={videoId}/>
        <RelatedVideos/>

    </div>

</div>
}

export default SingleVideo