import { createBrowserRouter } from "react-router";
import Roots from "../Root/Roots";
import Home from "../Pages/Home";
import LogIn from "../Components/LogIn";
import Profile from "../Pages/Profile";
import Contact from "../Pages/Contact";
import AuthLayouts from "../Layouts/AuthLayouts";
import Registation from "../Components/Registation";
import PrivateRoutes from "./PrivateRoutes";
import Orders from "../Pages/Orders";
import DashBoard from "../Pages/DashBoard";
import ViewDetails from "../Pages/ViewDetails";
const router = createBrowserRouter([
    {
        path:'/',
        Component:Roots,
        children:[
            {index:true,
            loader:()=>fetch("/courseCard.json"),
            // loader:()=>fetch("/courseCard.json"),
            Component:Home},
            {path:'contact',Component:Contact},
            {path:'profile',element:<PrivateRoutes><Profile></Profile></PrivateRoutes>},
            {path:'orders',element:<PrivateRoutes><Orders></Orders></PrivateRoutes>},
            {path:'dashboard',element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>},

            {path:'details/:id',
            loader:({params})=>fetch("/courseCard.json").then(res=>res.json()).then(data=>data.find(singleData=>singleData.skillId==params.id)),
            element:<PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>}
            
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