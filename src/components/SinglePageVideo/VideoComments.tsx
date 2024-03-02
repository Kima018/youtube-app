import CommentItem from "../../Templates/CommentItem.tsx";

const VideoComments = ({commentsData}) => {

    return <div className=''>
        {commentsData.map((item, index) => (<CommentItem key={index}/>))}
    </div>


}
export default VideoComments