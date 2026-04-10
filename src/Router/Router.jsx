import { createBrowserRouter } from "react-router";
import Roots from "../Root/Roots";
import Home from "../Pages/Home";
import LogIn from "../Components/LogIn";
import Profile from "../Pages/Profile";
import Contact from "../Pages/Contact";
import AuthLayouts from "../Layouts/AuthLayouts";
import Registation from "../Components/Registation";
const router = createBrowserRouter([
    {
        path:'/',
        Component:Roots,
        children:[
            {index:true,Component:Home},
            {path:'profile',Component:Profile},
            {path:'contact',Component:Contact},
            
        ]
    },
    {
        path:'auth',
        Component:AuthLayouts,
        children:[
            {index:true,Component:LogIn},
            {path:'registation',Component:Registation}
        ]
    }
])
export default router;