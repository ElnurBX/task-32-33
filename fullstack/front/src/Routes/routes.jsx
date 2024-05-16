
import AdminRoot from "../pages/admin/AdminRoot"
import Dashboard from "../pages/admin/dashboard/dashboard"
import Add from "../pages/admin/add/add"
import Error from "../pages/error/error/error"
import SiteRoot from "../pages/site/SiteRoot"
import Home from "../pages/site/home/home"
import Details from "../pages/site/details/details"
import Basket from "../pages/site/basket/basket"

const ROUTES =[
    {
        path:"/",
        element:<SiteRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            }, {
                path:"product/:id",
                element:<Details/>
            }, {
                path:"basket",
                element:<Basket/>
            }
        ]
    },
    {
        path:"/admin",
        element: <AdminRoot/>,
        children:[
            {
                path:"",
                element:<Dashboard/>
            },
            {
                path:"add",
                element:<Add/>
            }
        ]
    }
    ,    {
        path:"*",
        element:<Error/>,
        
    },
]
export default ROUTES;