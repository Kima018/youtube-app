import FeedItem from "./FeedItem.tsx";
import {useRecoilValue} from "recoil";
import {categoryAtom} from "../store/categoryAtom.ts";
import {API_KEY} from "../../data.ts";
import {useEffect, useState} from "react";

function HomeFeed(){
    const categoryValue = useRecoilValue(categoryAtom)
    const [data, setData] = useState([])

    const fetchData  = async ()=>{
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryValue}&key=${API_KEY}`
        await fetch(videoList_url).then(response=>response.json()).then(data => setData(data.items))
    }

    useEffect(()=>{
        fetchData()
    },[])

    console.log(data)

    return<main className='mt-16 feed-grid pl-4 '>
            <FeedItem/>
        <FeedItem/>
        <FeedItem/>

        </main>
}
export default HomeFeed