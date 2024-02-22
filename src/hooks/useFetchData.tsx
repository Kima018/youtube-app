// import {json} from "react-router-dom";
import {useEffect, useState} from "react";

export const useFetchData = (URL) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                   throw new Error('Could not fetch data')
                } else {
                    const json = await response.json()
                    setData(json)
                }
            }catch (error){
                throw new Error(error)
            }

        }
        fetchData()

    }, [URL])
return data
}

// throw json({message: 'Could not fetch data'}, {status: 500})