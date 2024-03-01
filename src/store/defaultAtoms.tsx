import {atom, RecoilState} from "recoil";


export const categoryAtom:RecoilState<number> = atom({
    key: 'category',
    default: 0
});
export const videoIdAtom:RecoilState<string> = atom({
    key: "videoIdAtom",
    default: ''
});

export const currVideoCategoryIdAtom:RecoilState<string> = atom({
    key: "currVideoCategoryIdAtom",
    default: ''
});
