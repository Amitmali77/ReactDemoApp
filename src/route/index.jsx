import React from 'react';
import {createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import PublicLayout from '../components/PublicLayout.jsx';
import ProductsPage from '../pages/ProductsPage.jsx';
import ProductsPageCards from '../pages/ProductsPageCards.jsx';
import ProductsDummyCards from '../pages/ProductsDummyCards.jsx';
import CartItems from '../pages/CartsItems.jsx';


const routes = createBrowserRouter([
    {
        path:'/', 
        element:(<PublicLayout><HomePage /></PublicLayout>)
   },

   {
        path:'/about', 
        element:(<PublicLayout><AboutPage /></PublicLayout>)
   },
   {
     path:'/login', 
     element:(<PublicLayout><LoginPage /></PublicLayout>)
   },
   {
     path:'/products', 
     element:(<PublicLayout><ProductsPage /></PublicLayout>)
   },
   {
     path:'/productscards', 
     element:(<PublicLayout><ProductsPageCards /></PublicLayout>)
    //  element:(<ProductsPageCards />)
   },
   {
    path:'/productscards', 
    element:(<PublicLayout><ProductsPageCards /></PublicLayout>)
   //  element:(<ProductsPageCards />)
  },
  {
    path:'/productsdummycards', 
    element:(<PublicLayout><ProductsDummyCards /></PublicLayout>)
   //  element:(<ProductsPageCards />)
  },
  {
    path:'/cartitems', 
    element:(<PublicLayout><CartItems/></PublicLayout>)
   //  element:(<ProductsPageCards />)
  },


])

export default routes
