import FeedItem from "./FeedItem.tsx";
import {useRecoilState, useRecoilValue} from "recoil";
import {categoryAtom} from "../store/categoryAtom.ts";
import {API_KEY} from "../../data.ts";
import {dataAtom} from "../store/dataAtom.tsx";

import {useFetchData} from "../hooks/useFetchData.tsx";

function HomeFeed() {
    const categoryValue = useRecoilValue(categoryAtom)
    const [data, setData] = useRecoilState(dataAtom)
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryValue}&key=${API_KEY}`

    const tempData = useFetchData(videoList_url);
    tempData && setData(tempData.items)
    console.log(data)

    return <main className='mt-16 feed-grid pl-4 w-full '>
        {data && data.map((item) => (
            <FeedItem thumbnail={item.snippet.thumbnails.default.url}
                      title={item.snippet.localized.title}
                      channelTitle={item.snippet.channelTitle}
                      viewCount={item.statistics.viewCount}
                      publishedAt={item.snippet.localized.publishedAt}
            />
        ))}

    </main>
}

export default HomeFeed