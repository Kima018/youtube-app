import FeedItem from "../Templates/FeedItem.tsx";
import {useRecoilValueLoadable} from "recoil";
import {videosSelector} from "../store/videosDataByCategory.tsx";


const HomeFeed = () => {
    const videoData = useRecoilValueLoadable(videosSelector);

    switch (videoData.state) {
        case "loading":
            return <div>Loading...</div>;
        case "hasError":
            return <div>Error with fetching data...</div>;
        case "hasValue":
            return <main className='mt-16 feed-grid pl-4 w-full '>
                {videoData.contents.map((item, index) => (
                    <FeedItem key={index}
                              thumbnail={item.snippet.thumbnails.high.url}
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
}
export default HomeFeed;


