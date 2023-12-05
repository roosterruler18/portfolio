import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Contact = React.lazy(() => import("pages/Contact"));
const SinglePost = React.lazy(() => import("pages/SinglePost"));
const Blog = React.lazy(() => import("pages/Blog"));
const SingleProject = React.lazy(() => import("pages/SingleProject"));
const Portfolio2 = React.lazy(() => import("pages/Portfolio2"));
const Portfolio1 = React.lazy(() => import("pages/Portfolio1"));
const Services = React.lazy(() => import("pages/Services"));
const AboutAgency = React.lazy(() => import("pages/AboutAgency"));
const HomeAgency = React.lazy(() => import("pages/HomeAgency"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homeagency" element={<HomeAgency />} />
          <Route path="/aboutagency" element={<AboutAgency />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio1" element={<Portfolio1 />} />
          <Route path="/portfolio2" element={<Portfolio2 />} />
          <Route path="/singleproject" element={<SingleProject />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/singlepost" element={<SinglePost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
