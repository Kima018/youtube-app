import FeedItem from "../Templates/FeedItem.tsx";
import {useRecoilValueLoadable,} from "recoil";
import {videosSelector} from "../store/videosDataByCategory.tsx";


const HomeFeed = () => {


    const loadVideosData = useRecoilValueLoadable(videosSelector);


    switch (loadVideosData.state) {
        case "loading":
            return <div>Loading...</div>;
        case "hasError":
            return <div>Error with fetching data...</div>;
        case "hasValue":
            // eslint-disable-next-line no-case-declarations
            const videos = loadVideosData.contents;
            console.log(videos);

            return <main className='mt-16 feed-grid pl-4 w-full '>
                {videos.map((item, index) => (
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