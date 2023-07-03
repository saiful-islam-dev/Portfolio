import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home";
import BlogPage from "../page/BlogPage/BlogPage";
import ContactMe from "../page/Home/contactMe/ContactMe";
import SkillsPage from "../page/SkillsPage/SkillsPage";
import AboutPage from "../page/AboutPage/AboutPage";
import PortfolioPage from "../page/PortfolioPage/PortfolioPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/blog",
        element: <BlogPage/>
      },
      {
        path: "/contact",
        element: <ContactMe/>
      },
      {
        path: "/skill",
        element: <SkillsPage/>
      },
      {
        path: "/aboutme",
        element: <AboutPage/>
      },
      {
        path: "/portfolio",
        element: <PortfolioPage/>
      }
    ],
  },
]);

export default router;
