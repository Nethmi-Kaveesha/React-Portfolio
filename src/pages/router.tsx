import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.tsx";
import HomePage from "./HomePage.tsx";
import AboutPage from "./AboutPage.tsx";
import ContactPage from "./ContactPage.tsx";
import ProjectPage from "./ProjectPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {index:true,element:<HomePage/>},
            {path:'/about',element:<AboutPage/>},
            {path: '/contact',element:<ContactPage/>},
            {path: '/project',element:<ProjectPage/>}
        ]
    }
])

export default router;