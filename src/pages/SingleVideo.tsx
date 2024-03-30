import {useParams} from "react-router-dom";
import PlayVideo from "../components/SinglePageVideo/PlayVideo.tsx";
import VideoComments from "../components/SinglePageVideo/VideoComments.tsx";
import {useRecoilValueLoadable, useSetRecoilState} from "recoil";
import {getChannelData, getCommentsVideo, getRelatedVideos, getVideoDetails} from "../store/getSingleVideoData.tsx";
import {channelIdAtom, currVideoCategoryIdAtom, videoIdAtom} from "../store/idAtoms.tsx";
import {useEffect, useState} from "react";
import VideoDetails from "../components/SinglePageVideo/VideoDetails.tsx";
import RelatedVideos from "../components/SinglePageVideo/RelatedVideos.tsx";

const SingleVideo = () => {
    const {categoryId, videoId} = useParams();
    const setVideoId = useSetRecoilState(videoIdAtom)
    const setChannelId = useSetRecoilState(channelIdAtom)
    const setCategoryId = useSetRecoilState(currVideoCategoryIdAtom)
    const videoData = useRecoilValueLoadable(getVideoDetails)
    const channelData = useRecoilValueLoadable(getChannelData)
    const relatedVideosData = useRecoilValueLoadable(getRelatedVideos)
    const [isLoading, setIsLoading] = useState(true)
    const commentsData = useRecoilValueLoadable(getCommentsVideo)
    useEffect(() => {
        setVideoId(videoId)
        setCategoryId(categoryId)
    }, []);





    useEffect(() => {
        if (videoData.state === 'hasValue'){
            setChannelId(videoData.contents.snippet.channelId)
        }
        if (channelData.state ==='hasValue' && videoData.state ==='hasValue' && relatedVideosData.state==='hasValue' && commentsData.state ==='hasValue'){
            setIsLoading(false)
        }

    }, []);

    return <div id='single-video-page-wrapper' className='mt-16'>
        <div className='grid grid-cols-3 col-auto gap-4 px-3'>
            <div className='lg:col-span-2 col-span-3'>
                <PlayVideo videoId={videoId}/>
                {isLoading ? <div>isLoading....</div>: <VideoDetails videoData={videoData.contents} channelData={channelData.contents}/>}
                {isLoading ? <div>isLoading...</div>:<VideoComments commentsData={commentsData.contents}/>}
            </div>
            <div className='w-full col-span-3 lg:col-span-1'>
                {isLoading?<div>isLoading....</div>: <RelatedVideos relatedVideosData={relatedVideosData.contents}/>}
            </div>
        </div>
    </div>
}

export default SingleVideo;





