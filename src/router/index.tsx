import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import { routes } from './routes';
import BlankLayout from '../components/Layouts/BlankLayout';

const DefaultRouterProvider = () => {
    const finalRoutes = routes.map(route => {
        return {
            ...route,
            element: route.layout === 'blank' ? <BlankLayout>{route.element}</BlankLayout> : <DefaultLayout>{route.element}</DefaultLayout>
        };
    });
    const router = createBrowserRouter(finalRoutes);
    return <RouterProvider router={router} />;
};

export default DefaultRouterProvider;
    