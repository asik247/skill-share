import { createBrowserRouter } from "react-router";
import Roots from "../Root/Roots";
import Home from "../Pages/Home";
import LogIn from "../Components/LogIn";
import Profile from "../Pages/Profile";
import Contact from "../Pages/Contact";
const router = createBrowserRouter([
    {
        path:'/',
        Component:Roots,
        children:[
            {index:true,Component:Home},
            {path:'profile',Component:Profile},
            {path:'contact',Component:Contact},
            {path:'login',Component:LogIn}
        ]
    }
])
export default router;