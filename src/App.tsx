import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root.tsx";
import Home from "./pages/Home.tsx";


function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root/>,
            children: [
                {path:'', element:<Home/>}
            ]
        }
    ])


    return <RouterProvider router={router}/>

}

export default App
