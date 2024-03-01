import {atom, selector} from "recoil";
import {API_KEY} from "../../data.ts";


export const categoryAtom = atom({
    key: 'category',
    default: 0
})

export const videosByCategoryUrlSelector = selector({
    key: "videosByCategorySelector",
    get: ({get}) => {
        const categoryValue = get(categoryAtom)
        return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryValue}&key=${API_KEY}`

    }
})

export const videosDataByCategory = atom({
    key: 'videosDataByCategory',
    default: []
});

export const videosSelector = selector({
    key: "videosSelector",
    get: async ({get}) => {
        const url = get(videosByCategoryUrlSelector);
        const response = await fetch(url);
        const jsonData= await response.json();
        return jsonData.items;
    }
});

