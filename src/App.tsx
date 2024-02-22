import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root.tsx";
import Home from "./pages/Home.tsx";
import {RecoilRoot,} from "recoil";
import {ErrorPage} from "./pages/ErrorPage.tsx";



function App() {



    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root/>,
            errorElement: <ErrorPage/>,
            children: [
                {path: '', element: <Home/>}
            ]
        }
    ])


    return (<RecoilRoot><RouterProvider router={router}/></RecoilRoot>)

}

export default App
