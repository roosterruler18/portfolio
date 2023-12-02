// project imports
import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import Layout from '../layout/layout';

// COLLABORATORS
const HomePage = (lazy(() => import('../pages/home/Home')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes: RouteObject | any = {
    path: '/',
    element: (
        <Layout />
    ),
    children: [
        { path: '/', element: <HomePage />, index: true },
        { path: '*', element: <Navigate to="/" replace /> }
    ]
};

export default MainRoutes;
