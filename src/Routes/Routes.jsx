import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import ServiceDetail from "../Pages/ServiceDetail/ServiceDetail";


const routes = createBrowserRouter([

    {
        path : '/',
        element: <Root></Root>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            
            {
                path : "/",
                element : <Home></Home>,
                loader : () => fetch('/service.json')

    
            },
            {
                path : '/service/:id',
                element : <ServiceDetail></ServiceDetail>,
                loader : () => fetch('/service.json')

            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            }
         
        ]
    }


])
export default routes;