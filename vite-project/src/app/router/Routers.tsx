import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashBoard from "../../features/activities/dashboard/ActivityDashBoard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import TestErrors from "../../features/error/TestError";
import NotFound from "../../features/error/NotFound";
import ServerError from "../../features/error/ServerError";

export const routers: RouteObject[] = [
{
    path:"/",
    element: <App/>,
    children: [
        {path: '', element: <HomePage/>},
        {path: 'activities', element: <ActivityDashBoard/>},
        {path: 'activities/:id', element: <ActivityDetails/>},
        {path: 'createActivity', element: <ActivityForm key='create'/>},
        {path: 'manage/:id', element: <ActivityForm key='manage'/>},
        {path: 'error', element: <TestErrors />},
        {path: 'not-found', element: <NotFound />},
        {path: 'server-error', element: <ServerError />},
        {path: '*', element: <Navigate replace to='/not-found' />}

    ]
},
]
export const  router = createBrowserRouter(routers)