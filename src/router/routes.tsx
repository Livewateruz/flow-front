import { lazy } from 'react';

// ?Index for Admin
const Index = lazy(() => import('../components/Flows'));
const Login = lazy(() => import('../components/LoginBoxed'));


const routes = [
    {
        path: '/',
        layout:'' ,
        element: <Index />,
    },
    {
        path: '/login',
        layout:'blank' ,
        element: <Login />,
    },
];

export { routes };
