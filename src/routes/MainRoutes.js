import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// maps routing
const Maps = Loadable(lazy(() => import('views/maps/maps')));

// master-data routing
const Kortek = Loadable(lazy(() => import('views/master-data/Kortek')));
const Teknisi = Loadable(lazy(() => import('views/master-data/Teknisi')));
const Customer = Loadable(lazy(() => import('views/master-data/Customer')));

// sales routing
const Products = Loadable(lazy(() => import('views/catalog/products')));
const Orders = Loadable(lazy(() => import('views/sales/order')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/maps',
      element: <Maps />
    },
    {
      path: '/kortek',
      element: <Kortek />
    },
    {
      path: '/teknisi',
      element: <Teknisi />
    },
    {
      path: '/customers',
      element: <Customer />
    },
    {
      path: '/products',
      element: <Products />
    },
    {
      path: '/orders',
      element: <Orders />
    }
  ]
};

export default MainRoutes;
