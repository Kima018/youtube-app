import {useRecoilValue} from "recoil";
import {categoryAtom} from "../store/categoryAtom.ts";
import {API_KEY} from "../../data.ts";

export const useFetchData = async () => {
    const categoryValue = useRecoilValue(categoryAtom)
    const HOME_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryValue}&key=${API_KEY}`

    const response = await fetch(HOME_VIDEOS_URL)
    if (!response.ok) {
        throw new Error("Something went wrong!")
    }
    return await response.json()

}

