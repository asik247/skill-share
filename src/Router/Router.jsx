import { createBrowserRouter } from "react-router";
import Roots from "../Root/Roots";
import Home from "../Pages/Home";
import LogIn from "../Components/LogIn";
const router = createBrowserRouter([
    {
        path:'/',
        Component:Roots,
        children:[
            {index:true,Component:Home},
            {path:'login',Component:LogIn}
        ]
    }
])
export default router;