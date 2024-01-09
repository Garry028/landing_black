import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import PricingPage from "../pages/PricingPage";
import BlogPage from "../pages/BlogPage";
import Layout from "../components/Layout/Layout";
import FeaturesPage from "../pages/FeaturesPage";
import ContactUsPage from "../pages/ContactUsPage";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout><HomePage /></Layout>,
        children: []
    },
    {
        path: "/features",
        element: <Layout><FeaturesPage /></Layout>,
        children: []
    },
    {
        path: "/about",
        element: <Layout><AboutPage /></Layout>,
        children: []
    },
    {
        path: "/pricing",
        element: <Layout><PricingPage /></Layout>,
        children: []
    },
    {
        path: "/blog",
        element: <Layout><BlogPage /></Layout>,
        children: []
    },
    {
        path: "/contact",
        element: <Layout><ContactUsPage /></Layout>,
        children: []
    }

]);

export default appRouter;
