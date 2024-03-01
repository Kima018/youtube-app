import {atom, RecoilState, selector} from "recoil";
import {API_KEY} from "../../data.ts";
import {categoryAtom, videoIdAtom} from "./defaultAtoms.tsx";

export const videosByCategoryUrl: RecoilState<string> = atom({
    key: "videosByCategoryUrl",
    default: selector({
        key: 'videosByCategoryUrlSelector',
        get: ({get}): string => {
            const categoryValue: number = get(categoryAtom)
            return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryValue}&key=${API_KEY}`
        }
    })
});

export const singleVideoUrl: RecoilState<string> = atom({
    key: "singleVideoUrl",
    default: selector({
        key: 'videosByCategoryUrlSelector',
        get: ({get}): string => {
            const videoId: string = get(videoIdAtom)
            return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        }
    })
});



