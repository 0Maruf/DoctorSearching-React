import { createBrowserRouter } from "react-router";
import Rootlayout from "../RootLayout/Rootlayout";
import Home from "../Pages/Home/Home/Home";
import Doctors from "../Pages/Home/Doctor/Doctors";
import Loading from '../Pages/Home/Loading'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Rootlayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/doctors',
                element: <Doctors></Doctors>,
                loader: () => fetch('./doctors.json'),
                hydrateFallbackElement: <Loading></Loading>
            }

        ]
    },
]);