// import {useRecoilValue, useSetRecoilState} from "recoil";
// import {categoryAtom} from "../store/categoryAtom.ts";
// import {API_KEY} from "../../data.ts";
// import {videosDataByCategory} from "../store/videosDataByCategory.tsx";
//
// export const useFetchData = async () => {
//     const categoryValue = useRecoilValue(categoryAtom)
//     const  setVideosData = useSetRecoilState(videosDataByCategory)
//     const HOME_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryValue}&key=${API_KEY}`
//
//     const response = await fetch(HOME_VIDEOS_URL)
//     if (!response.ok) {
//         throw new Error("Something went wrong!")
//     }
//     const data = await response.json()
//     setVideosData(data.items);
// }
//

import { useEffect, useState } from 'react';
import {useSetRecoilState} from "recoil";
import {videosDataByCategory} from "../store/videosDataByCategory.tsx";

export const useFetchData = (url) => {
    const setData = useSetRecoilState(videosDataByCategory);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData.items);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { error, isLoading };
};