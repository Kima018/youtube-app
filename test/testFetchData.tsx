import axios from "axios";

const url: string = 'https://jsonplaceholder.typicode.com/todos/1'

export const testFetching = async (url) => {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

