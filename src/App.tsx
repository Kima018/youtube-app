import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root.tsx";
import Home from "./pages/Home.tsx";
import {RecoilRoot,} from "recoil";
import {ErrorPage} from "./pages/ErrorPage.tsx";
import SingleVideo from "./pages/SingleVideo.tsx";


const App = () => {


    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root/>,
            errorElement: <ErrorPage/>,
            children: [
                {path: '', element: <Home/>},
                {path: '/video/:categoryId/:videoId', element: <SingleVideo/>}
            ]
        }
    ])


    return (<RecoilRoot><RouterProvider router={router}/></RecoilRoot>)

}

export default App
