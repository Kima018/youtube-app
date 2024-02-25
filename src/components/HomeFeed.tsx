import FeedItem from "../Templates/FeedItem.tsx";
import {useRecoilState, useRecoilValue,} from "recoil";
import {dataAtom} from "../store/dataAtom.tsx";
import {categoryAtom} from "../store/categoryAtom.ts";
import {API_KEY} from "../../data.ts";
import {useEffect} from "react";


const HomeFeed = ()=> {
    const [data, setData] = useRecoilState(dataAtom);

    const categoryValue = useRecoilValue(categoryAtom)
    const HOME_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryValue}&key=${API_KEY}`

    const fetchData = async () => {
        await fetch(HOME_VIDEOS_URL).then(response => response.json()).then(data => setData(data.items))
    }
    useEffect(() => {
        fetchData()
    }, [categoryValue]);

    //
    // useEffect(() => {
    //    const data =  useFetchData()
    //     setData(data.items)
    // }, [categoryValue]);
    //
    //     const tempData =  useFetchData()
    //     setData(tempData.items)


    return <main className='mt-16 feed-grid pl-4 w-full '>
        {data && data.map((item) => (
            <FeedItem thumbnail={item.snippet.thumbnails.default.url}
                      title={item.snippet.localized.title}
                      channelTitle={item.snippet.channelTitle}
                      viewCount={item.statistics.viewCount}
                      publishedAt={item.snippet.publishedAt}
                      itemCategoryID={item.snippet.categoryId}
                      itemID={item.id}
            />
        ))}

    </main>
}

export default HomeFeed;