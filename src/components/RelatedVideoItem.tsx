import {viewsValueConvector} from "../utils/viewsValueConvector.ts";
import moment from "moment/moment";
import {Link} from "react-router-dom";

const RelatedVideoItem = ({imageUrl, title, channelTitle, viewCount, publishedAt,categoryID,videoID}) => {
    return <li className='w-full'>
        <Link to={`/video/${categoryID}/${videoID}`} className='w-full flex flex-row'>
            <div className='mr-3 basis-36 shrink-0'>
                <img src={imageUrl} alt='Logo' className='h-full w-full object-cover'/>
            </div>
            <div className='flex flex-col justify-between'>
                <h3>{title}</h3>
                <h4>{channelTitle}</h4>
                <p className='text-sm'>{viewsValueConvector(viewCount)} views &bull; {moment(publishedAt).fromNow()}</p>
            </div>
        </Link>
    </li>
}
export default RelatedVideoItem