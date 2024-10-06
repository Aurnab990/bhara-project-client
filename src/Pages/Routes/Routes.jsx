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


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader:()=>fetch('http://localhost:3000/products')
            },
            {
                path:"/product/details/:id",
                element:(
                    <Private>
                        <Detailspage></Detailspage>
                    </Private>
                ),
                loader:({params})=>fetch(`http://localhost:3000/products/${params.id}`)
            }
        ]
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
        path: "/user/profile",
        element:(
            <Private>
                <Userprofile></Userprofile>
            </Private>
        )

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
        path: "/support",
        element: <HelpAndSupport></HelpAndSupport>
    }
])