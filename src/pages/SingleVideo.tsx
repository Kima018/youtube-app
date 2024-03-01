import PlayVideo from "../components/SinglePageVideo/PlayVideo.tsx";
import {useParams} from "react-router-dom";
import RelatedVideos from "../components/SinglePageVideo/RelatedVideos.tsx";
import VideoDetails from "../components/SinglePageVideo/VideoDetails.tsx";
import {useSetRecoilState} from "recoil";
import {useEffect} from "react";
import {videoIdAtom} from "../store/defaultAtoms.tsx";


const SingleVideo = () => {
    const {videoId, categoryId} = useParams()
    // const setVideoId = useSetRecoilState(videoIdAtom)
    // const setCurrCategory = useSetRecoilState(currVideoCategoryIdAtom)
    //
    // useEffect(() => {
    //     setVideoId(videoId)
    //     setCurrCategory(categoryId)
    // }, []);



    return <div id='single-video-page-wrapper' className='mt-16'>
        <div className='grid grid-cols-3 col-auto gap-4 px-3'>
            <div className='lg:col-span-2 col-span-3'>
                <PlayVideo videoId={videoId}/>
                <VideoDetails videoId={videoId}/>
            </div>

            <div className='w-full col-span-3 lg:col-span-1'>
                <RelatedVideos/>
            </div>


        </div>

    </div>
}

export default SingleVideo

