import React from 'react';
import {createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import PublicLayout from '../components/PublicLayout.jsx';


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

])

export default routes
