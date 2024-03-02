import {useParams} from "react-router-dom";
import PlayVideo from "../components/SinglePageVideo/PlayVideo.tsx";
import VideoComments from "../components/SinglePageVideo/VideoComments.tsx";
import {useRecoilValueLoadable, useSetRecoilState} from "recoil";
import {getChannelData, getRelatedVideos, getVideoDetails} from "../store/getSingleVideoData.tsx";
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

    useEffect(() => {
        setVideoId(videoId)
        setCategoryId(categoryId)
    }, []);

    useEffect(() => {
        if (videoData.state === 'hasValue'){
            setChannelId(videoData.contents.snippet.channelId)
        }
        if (channelData.state ==='hasValue' && videoData.state ==='hasValue' && relatedVideosData.state==='hasValue'){
            setIsLoading(false)
        }

    }, []);

    return <div id='single-video-page-wrapper' className='mt-16'>
        <div className='grid grid-cols-3 col-auto gap-4 px-3'>
            <div className='lg:col-span-2 col-span-3'>
                <PlayVideo videoId={videoId}/>
                {isLoading ?<div>isLoading....</div>: <VideoDetails videoData={videoData.contents} channelData={channelData.contents}/>}
                <VideoComments/>
            </div>
            <div className='w-full col-span-3 lg:col-span-1'>
                <RelatedVideos relatedVideosData={relatedVideosData.contents}/>
            </div>
        </div>
    </div>
}

export default SingleVideo;





