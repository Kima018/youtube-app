import PlayVideo from "../components/PlayVideo.tsx";
import {useParams} from "react-router-dom";

const SingleVideo = ()=>{
    const {videoId,videoCategoryId} = useParams()




return<div id='single-video-page-wrapper'>
    <div className='grid grid-cols-3 gap-4 px-3'>
        <PlayVideo videoId={videoId}/>
        <div className='bg-yellow-200 h-56 w-full col-span-3 lg:col-span-1'>
            <div></div>
        </div>
    </div>

</div>
}

export default SingleVideo