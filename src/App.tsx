import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root.tsx";


function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root/>,
            children: []
        }
    ])


    return <RouterProvider router={router}/>

}

export default App
