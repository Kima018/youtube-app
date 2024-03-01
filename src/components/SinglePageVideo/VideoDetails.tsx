import {useEffect, useState} from "react";
import {API_KEY} from "../../../data.ts";
import moment from "moment";
import {viewsValueConvector} from "../../utils/viewsValueConvector.ts";

const VideoDetails = ({videoId}) => {
    const [videoApiData, setVideoApidata] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentsData,setCommentsData] = useState(null);


    const fetchVideoData = async () => {
        const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetailsUrl).then(res => res.json()).then(data => setVideoApidata(data.items[0]));
    }
    const fetchOtherData = async () => {
        const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoApiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelDataUrl).then(res => res.json()).then(data => setChannelData(data.items[0]));

        const commentDataUrl = 'https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=[YOUR_API_KEY]'
        await fetch(commentDataUrl).then(res => res.json()).then(data => setCommentsData(data.items[0]));
    }

    useEffect(() => {
        fetchVideoData()
    }, []);


    useEffect(() => {
        fetchOtherData()

    }, [videoApiData]);


    return <div className='w-full flex flex-col gap-3 pt-4'>
        <div className='flex justify-between'>
            <div>
                <h2>{videoApiData ? videoApiData.snippet.title : "Title is Here"}</h2>
                <h4>{videoApiData ? viewsValueConvector(videoApiData.statistics.viewCount) : "10K"} Views &bull; {videoApiData ? moment(videoApiData.snippet.publishedAt).fromNow() : ''}</h4>
            </div>

            <div id='videoDetailButtonsWrapper' className='flex flex-row justify-end gap-2'>
                <div id='like-dislike' className='flex flex-row gap-2'>
                    <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>
                        <span>{videoApiData ? viewsValueConvector(videoApiData.statistics.likeCount) : "10K"}</span> Like
                    </button>
                    <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>Dislike</button>
                </div>
                <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>Deli</button>
                <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>Preuzmi</button>
                <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>Klip</button>
                <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>...</button>
            </div>
        </div>


        <div className='w-full flex flex-row justify-between'>
            <div className='flex items-center'>
                <div className='w-10 h-10 rounded-full overflow-hidden'><img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt='logo'/></div>
                <div className='flex items-center gap-2'>
                    <h4>{channelData ? channelData.snippet.channelTitle : "Channel Title"}</h4>
                    <p>{channelData ? viewsValueConvector(channelData.statistics.subscriberCount) : ""}Subscribers</p>
                </div>
                <button className='ml-4 px-4 h-8 rounded-2xl bg-menu-grey'>Follow</button>
            </div>

        </div>
        <div className='flex flex-col justify-start items-start'>
            <p>{videoApiData ? videoApiData.snippet.description : "Desc is Here"}</p>
        </div>
    </div>
}
export default VideoDetails