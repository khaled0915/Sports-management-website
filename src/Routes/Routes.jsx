import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const routes = createBrowserRouter([

    {
        path : '/',
        element: <Root></Root>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            
            {
                path : "/",
                element : <Home></Home>,
                loader : () => fetch('service.json')

    
            },
            {
                path : '/login',
                element : <Login></Login>
            }
         
        ]
    }


])
export default routes;