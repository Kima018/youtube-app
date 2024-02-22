import thumbnail from "../assets/pexels-pixabay-461940.jpg"
function FeedItem(){
    return <article className='cursor-pointer hover:bg-opacity-20 hover:bg-neutral-500 rounded-xl p-2'>
        <img src={thumbnail} alt='tumbnail' className='w-full rounded'/>
        <h2 className='text-xl mb-2 mt-1'>Best chanel for codding</h2>
        <h3 className=''>MakiFlow</h3>
        <p className='text-xs'>15k views &bull; 2 days ago</p>
    </article>
}
export default FeedItem