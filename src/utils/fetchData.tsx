import axios from "axios";

export const fetchData = async (url) => {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}