import moment from "moment";
import {viewsValueConvector} from "../../utils/viewsValueConvector.ts";
import {useRecoilValue, useRecoilValueLoadable} from "recoil";
import {fetchChannelSelector, fetchVideoCommentsSelector, fetchVideoSelector} from "../../store/singleVideoData.tsx";
import {useEffect} from "react";

const VideoDetails = ({videoId}) => {


    const videoData = useRecoilValueLoadable(fetchVideoSelector);
    // const channelData = useRecoilValueLoadable(fetchChannelSelector);
    // const commentsData = useRecoilValueLoadable(fetchVideoCommentsSelector);
    console.log(videoData.contents);

    // switch (commentsData.state) {
    //     case "hasValue":
    //         console.log(commentsData.contents)
    //         return
    // }
    //
    //
    // switch (videoData.state) {
    //     case "hasValue":
    //         console.log(videoData.contents)
    //         return
    // }

    //
    //
    // return <div className='w-full flex flex-col gap-3 pt-4'>
    //     <div className='flex justify-between'>
    //         <div>
    //             <h2>{videoData ? videoData.snippet.title : "Title is Here"}</h2>
    //             <h4>{videoData ? viewsValueConvector(videoData.statistics.viewCount) : "10K"} Views &bull; {videoData ? moment(videoData.snippet.publishedAt).fromNow() : ''}</h4>
    //         </div>
    //
    //         <div id='videoDetailButtonsWrapper' className='flex flex-row justify-end gap-2'>
    //             <div id='like-dislike' className='flex flex-row gap-2'>
    //                 <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>
    //                     <span>{videoData ? viewsValueConvector(videoData.statistics.likeCount) : "10K"}</span> Like
    //                 </button>
    //                 <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>Dislike</button>
    //             </div>
    //             <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>Deli</button>
    //             <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>Preuzmi</button>
    //             <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>Klip</button>
    //             <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>...</button>
    //         </div>
    //     </div>
    //
    //
    //     <div className='w-full flex flex-row justify-between'>
    //         <div className='flex items-center'>
    //             <div className='w-10 h-10 rounded-full overflow-hidden'><img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt='logo'/></div>
    //             <div className='flex items-center gap-2'>
    //                 <h4>{channelData ? channelData.snippet.channelTitle : "Channel Title"}</h4>
    //                 <p>{channelData ? viewsValueConvector(channelData.statistics.subscriberCount) : ""}Subscribers</p>
    //             </div>
    //             <button className='ml-4 px-4 h-8 rounded-2xl bg-menu-grey'>Follow</button>
    //         </div>
    //
    //     </div>
    //     <div className='flex flex-col justify-start items-start'>
    //         <p>{videoApiData ? videoApiData.snippet.description : "Desc is Here"}</p>
    //     </div>
    // </div>
}
export default VideoDetails