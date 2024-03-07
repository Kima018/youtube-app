import {selector} from "recoil";
import {fetchData} from "../utils/fetchData.tsx";
import {channelDataUrl, relatedVideosUrl, singleVideoUrl, videoCommentsUrl} from "./urlsAtoms.tsx";



export const getVideoDetails = selector({
    key: "getVideoDetailsSelector",
    get: async ({get}) => {
        const url = get(singleVideoUrl)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        // const setChannelId = useSetRecoilState(channelIdAtom)
        try {
            const response = await fetchData(url);
            return response.items[0];
        } catch (error) {
            console.log(error);
            throw new Error('Greska pri API pozivu!');
        }
    }
});






export const getChannelData = selector({
    key: "getChannelDataSelectorFamily",
    get: async ({get}) => {
        const url = get(channelDataUrl)
        try {
            const response = await fetchData(url);
            return response.items[0];
        } catch (error) {
            console.log(error);
            throw new Error('Greska pri API pozivu!');
        }
    }
});




export const getRelatedVideos = selector({
    key: "relatedVideosSelectorFamily",
    get: async ({get}) => {
        const url = get(relatedVideosUrl)
        try {
            const response = await fetchData(url);
            return response.items;
        } catch (error) {
            console.log(error);
            throw new Error('Greska pri API pozivu!');
        }
    }
})


export const getCommentsVideo = selector({
    key: "getCommentsVideoSelectorFamily",
    get: async ({get}) => {
        const url = get(videoCommentsUrl)
        try {
            const response = await fetchData(url);
            return response.items;
        } catch (error) {
            console.log(error);
            throw new Error('Greska pri API pozivu!');
        }
    }
});





