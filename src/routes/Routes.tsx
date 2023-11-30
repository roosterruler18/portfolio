import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Services from '../pages/services/Services';
import Contact from '../pages/contact/Contact';
import Blog from '../pages/blog/Blog';
import Portfolio from '../pages/portfolio/Portfolio';
import { FC, PropsWithChildren } from 'react';

const AppRoutes: FC<PropsWithChildren> = props => {
    return (
        <BrowserRouter basename='/'>
            <>{props.children}</>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

        </BrowserRouter>
    );
};


export default AppRoutes