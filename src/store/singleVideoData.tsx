import { selector} from "recoil";
import {API_KEY} from "../../data.ts";
import {videoIdAtom} from "./defaultAtoms.tsx";
import {singleVideoUrl} from "./fetchUrlAtoms.tsx";
import {fetchData} from "../utils/fetchData.tsx";




export const fetchVideoSelector = selector({
    key: "fetchVideoSelector",
    get: async ({get}) => {
        const url = get(singleVideoUrl);
        try {
            const response = await fetchData(url);
            return response.items[0];
        } catch (error) {
            console.log(error);
            throw new Error('Greska pri API pozivu!');
        }
    }
});
// const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
// const response = await fetch(url);
// const jsonData = await response.json();
// return jsonData.items[0];
export const fetchChannelSelector = selector({
    key: "fetchChannelSelector",
    get: async ({get}) => {
        const getData = get(fetchVideoSelector)
        const channelId = getData.snippet.channelId
        const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`
        const response = await fetch(url);
        const jsonData = await response.json();
        return jsonData.items[0];
    }
});

export const fetchVideoCommentsSelector = selector({
    key: "fetchVideoCommentsSelector",
    get: async ({get}) => {
        const videoId = get(videoIdAtom)
        const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
        const response = await fetch(url);
        const jsonData = await response.json();
        return jsonData.items;
    }
});

export const fetchRelatedVideosSelector = selector({
    key: "fetchRelatedVideosSelector",
    get: async ({get}) => {
        const categoryId = get(currVideoCategoryIdAtom)
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        const response = await fetch(url);
        const jsonData = await response.json();
        return jsonData.items;
    }
});





