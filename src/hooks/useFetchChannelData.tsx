import {API_KEY} from "../../data.ts";
import {useEffect} from "react";
import {useSetRecoilState} from "recoil";
import {channelData} from "../store/channelDataAtom.tsx";

export const useFetchChannelData = async (channelID) => {
    const setData = useSetRecoilState(channelData)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelID}&key=${API_KEY}`)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const jsonData = await response.json()
                setData(jsonData)
            } catch (error) {
                throw new Error(error)
            }
        };
        fetchData()
    }, [channelID]);
}
