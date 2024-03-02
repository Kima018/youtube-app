import {selector} from "recoil";
import {videosByCategoryUrl} from "./urlsAtoms.tsx";
import {fetchData} from "../utils/fetchData.tsx";


export const videosSelector = selector({
    key: "videosSelector",
    get: async ({get}) => {
        const url = get(videosByCategoryUrl);
        try {
            const response = await fetchData(url);
            return response.items;
        } catch (error) {
            console.log(error);
            throw new Error('Greska pri API pozivu!');
        }
    }
});

