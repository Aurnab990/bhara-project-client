import { createBrowserRouter } from "react-router-dom";
import Home from '../Home/Home.jsx';
import Root from "../Root/Root.jsx";
import SIgnIn from "../Registration/SignInPage/SIgnIn.jsx";
import SignUp from "../Registration/SignUpPage/SignUp.jsx";
import Private from "./Private.jsx";
import UserDashboard from "../../Components/Header/Dashboard/UserDashboard/UserDashboard.jsx";
import HelpAndSupport from "../Help&Support/HelpAndSupport.jsx";
import Userprofile from "../../Components/Header/Dashboard/UserDashboard/UserProfile/userProfile.jsx";
import Detailspage from "../DetailsPage/Detailspage.jsx";
import Updateuser from "../../Components/Header/Dashboard/UserDashboard/UpdateUser/Updateuser.jsx";
import Addproduct from "../../Components/Header/Dashboard/UserDashboard/AddProduct/Addproduct.jsx";
import Manageitems from "../../Components/Header/Dashboard/UserDashboard/ManageItems/Manageitems.jsx";
import Orderpage from "../OrderPage/Orderpage.jsx";
import Manageorder from "../../Components/Header/Dashboard/UserDashboard/ManageOrders/Manageorder.jsx";
import Myorders from "../../Components/Header/Dashboard/UserDashboard/MyOrders/Myorders.jsx";
import Payment from "../../Components/Header/Dashboard/UserDashboard/PaymentOrder/Payment.jsx";
import Notification from "../../Components/Header/Dashboard/UserDashboard/Notification/Notification.jsx";
import Premium from "../PremiumMember/Premium.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader:()=>fetch('https://bhara-project-server.vercel.app/products')
            },
            {
                path:"/product/details/:id",
                element:<Detailspage></Detailspage>,
                loader:({params})=>fetch(`https://bhara-project-server.vercel.app/products/${params.id}`)
            }
        ]
    },
    {
        path: "/product/details/:id/order=page",
        element:(
            <Private>
                <Orderpage></Orderpage>
                
            </Private>
        ),
        loader:({params})=>fetch(`https://bhara-project-server.vercel.app/products/${params.id}`)

    },
    {
        path: "/user/dashboard",
        element:(
            <Private>
                <UserDashboard></UserDashboard>
            </Private>
        )

    },
    {
        path: "/user/notification",
        element:(
            <Private>
                <Notification></Notification>
            </Private>
        )

    },
    {
        path: "/user/profile",
        element:(
            <Private>
                <Userprofile></Userprofile>
            </Private>
        )

    },
    {
        path: "/user/add-product",
        element:(
            <Private>
                <Addproduct></Addproduct>
            </Private>
        )

    },
    {
        path: "/user/manage-product",
        element:(
            <Private>
                <Manageitems></Manageitems>
            </Private>
        )

    },
    {
        path: "/user/my-orders",
        element: (
            <Private>
                <Myorders></Myorders>
            </Private>
        )

    },
    {
        path: "/user/orders/transaction/:id",
        element: (
            <Private>
                <Payment></Payment>
            </Private>
        )
        

    },
    {
        path: "/user/orders-manage",
        element: (
            <Private>
                <Manageorder></Manageorder>
            </Private>
        )

    },
    {
        path: "/user/update/:id",
        element:(
            <Private>
                <Updateuser></Updateuser>
            </Private>
        ),
        loader:({params})=>fetch(`https://bhara-project-server.vercel.app/users/${params.id}`)

    },
    {
        path: "/sign-in",
        element: <SIgnIn></SIgnIn>
    },
    {
        path: "/sign-up",
        element: <SignUp></SignUp>
    },
    {
        path: "/premium-member",
        element: <Premium></Premium>
    },
    {
        path: "/support",
        element: <HelpAndSupport></HelpAndSupport>
    }
])