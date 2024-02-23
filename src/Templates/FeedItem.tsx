import {viewsValueConvector} from "../utils/viewsValueConvector.ts";
import moment from 'moment';

function FeedItem({thumbnail, channelTitle, viewCount, title, publishedAt}) {
    return <article className='cursor-pointer hover:bg-opacity-20 hover:bg-neutral-500 rounded-xl p-2'>
        <img src={thumbnail} alt={title} className='w-full rounded '/>
        <h2 className='text-base mb-2 mt-1'>{title}</h2>
        <h3 className='text-sm'>{channelTitle}</h3>
        <p className='text-sm'>{viewsValueConvector(viewCount)} views &bull; {moment(publishedAt).fromNow()}</p>
    </article>
}

export default FeedItem