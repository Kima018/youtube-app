import {atom, RecoilState, selector} from "recoil";
import {API_KEY} from "../../data.ts";
import {categoryIdAtom, channelIdAtom, currVideoCategoryIdAtom, videoIdAtom} from "./idAtoms.tsx";

export const videosByCategoryUrl: RecoilState<string> = atom({
    key: "videosByCategoryUrl",
    default: selector({
        key: 'categoryUrl',
        get: ({get}): string => {
            const categoryValue: number = get(categoryIdAtom)
            return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${String(categoryValue)}&key=${API_KEY}`
        }
    })
});



export const singleVideoUrl: RecoilState<string> = atom({
    key: "singleVideoUrl",
    default: selector({
        key: 'videoByIdUrl',
        get: ({get}): string => {
            const videoId: string = get(videoIdAtom)
            return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        }
    })
});

export const channelDataUrl: RecoilState<string> = atom({
    key: "channelDataUrl",
    default: selector({
        key: 'channelUrl',
        get: ({get}): string => {
            const channelId: string = get(channelIdAtom)
            return `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`
        }
    })
});

export const relatedVideosUrl: RecoilState<string> = atom({
    key: "relatedVideosUrl",
    default: selector({
        key: 'relatedVideosUrlSelector',
        get: ({get}): string => {
            const currCategoryValue: string = get(currVideoCategoryIdAtom)
            return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${currCategoryValue}&key=${API_KEY}`
        }
    })
});


export const videoCommentsUrl: RecoilState<string> = atom({
    key: "videoCommentsUrl",
    default: selector({
        key: 'videoCommentsUrlSelector',
        get: ({get}): string => {
            const videoId: string = get(videoIdAtom)
            return `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
        }
    })
});