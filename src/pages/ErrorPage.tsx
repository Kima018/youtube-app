import {useRouteError} from "react-router-dom";
import {PageContent} from "../components/PageContent.tsx";

export const ErrorPage= ()=>{
    const error = useRouteError();

    let title = "An Error"
    let message = 'Something went wrong!'


    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        title = "Not found"
        message = 'Could not find page!';
    }

    return <PageContent title={title}>
        <p>{message}</p>
    </PageContent>
}