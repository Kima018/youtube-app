import FeedItem from "../Templates/FeedItem.tsx";
import {useRecoilValue,} from "recoil";
import {videosDataByCategory} from "../store/videosDataByCategory.tsx";
import {categoryAtom} from "../store/categoryAtom.ts";
import {API_KEY} from "../../data.ts";
import {useFetchData} from "../hooks/useFetchData.tsx";


const HomeFeed = () => {
    const categoryValue = useRecoilValue(categoryAtom)
    const HOME_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryValue}&key=${API_KEY}`
    const {error, isLoading} = useFetchData(HOME_VIDEOS_URL);
    const data =useRecoilValue(videosDataByCategory)


    //
    // const [data, setData] = useRecoilState(videosDataByCategory);
    //
    // const categoryValue = useRecoilValue(categoryAtom)
    // const HOME_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryValue}&key=${API_KEY}`
    //
    // const fetchData = async () => {
    //     await fetch(HOME_VIDEOS_URL).then(response => response.json()).then(data => setData(data.items))
    // }
    // useEffect(() => {
    //    fetchData()
    // }, [categoryValue]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <main className='mt-16 feed-grid pl-4 w-full '>
        {data && data.map((item, index) => (
            <FeedItem key={index}
                      thumbnail={item.snippet.thumbnails.default.url}
                      title={item.snippet.localized.title}
                      channelTitle={item.snippet.channelTitle}
                      viewCount={item.statistics.viewCount}
                      publishedAt={item.snippet.publishedAt}
                      categoryID={item.snippet.categoryId}
                      videoID={item.id}
            />
        ))}

    </main>
}

export default HomeFeed;

//   kako da resim ovo?
//   const data = useRecoilValue(videosDataByCategory)
//   const selectedCategory = useRecoilValue(categoryAtom)
//
// try {
//     useFetchData()
// }catch (error){
//       throw new Error(error)
// }