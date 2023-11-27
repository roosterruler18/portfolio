import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';

const AppRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </ReactRoutes>
    );
};

const Routes = () => {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
};

export default Routes;
