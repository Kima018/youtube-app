import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root.tsx";
import Home from "./pages/Home.tsx";
import {RecoilRoot} from "recoil";


function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root/>,
            children: [
                {path: '', element: <Home/>}
            ]
        }
    ])


    return (<RecoilRoot><RouterProvider router={router}/></RecoilRoot>)

}

export default App
