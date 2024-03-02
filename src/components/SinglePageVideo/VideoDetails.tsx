import moment from "moment";
import {viewsValueConvector} from "../../utils/viewsValueConvector.ts";
import VideoComments from "./VideoComments.tsx";

const VideoDetails = ({videoData, channelData}) => {

    return <div className='w-full flex flex-col gap-3 pt-4'>
        <div className='flex justify-between'>
            <div>
                <h2>{videoData.snippet.title}</h2>
                <h4>{viewsValueConvector(videoData.statistics.viewCount)} Views &bull; {moment(videoData.snippet.publishedAt).fromNow()}</h4>
            </div>

            <div id='videoDetailButtonsWrapper' className='flex flex-row justify-end gap-2'>
                <div id='like-dislike' className='flex flex-row gap-2'>
                    <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>
                        <span>{viewsValueConvector(videoData.statistics.likeCount)}</span> Like
                    </button>
                    <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>Dislike</button>
                </div>
                <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>Deli</button>
                <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>Preuzmi</button>
                <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>Klip</button>
                <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>...</button>
            </div>
        </div>
        <div className='w-full flex flex-col justify-between'>
            <div className='flex items-start'>
                <div className='w-10 h-10 rounded-full overflow-hidden'><img
                    src={channelData.snippet.thumbnails.default.url} alt='logo'/></div>

                <div className='flex items-center gap-2'>
                    <h4>{channelData.snippet.channelTitle}</h4>
                    <p>{viewsValueConvector(channelData.statistics.subscriberCount)}Subscribers</p>
                    <button className='ml-4 px-4 h-8 rounded-2xl bg-menu-grey'>Follow</button>
                </div>
            </div>
            <div className='flex flex-col justify-start items-start'>
                <p>{videoData.snippet.description}</p>
            </div>
        </div>
        <VideoComments/>
    </div>
}
export default VideoDetails