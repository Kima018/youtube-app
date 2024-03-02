import {atom} from "recoil";

export const videoDataAtom = atom({
    key: "videoData",
    default: []
});

export const channelDataAtom = atom({
    key: "channelData",
    default: []
});

export const commentsDataAtom = atom({
    key: "commentsData",
    default: []
});
export const relatedVideosDataAtom = atom({
    key: "relatedVideosDataAtom",
    default: []
});