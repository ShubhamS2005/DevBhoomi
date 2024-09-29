import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './components/layout/Layout';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/home/Home';

const router= createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"home",
        element:<Home/>
      },
      // {
      //   path:"about",
      //   element:<About/>
      // },
      // {
      //   path:"services",
      //   element:<Services/>
      // },
      // {
      //   path:"pricing",
      //   element:<Pricing/>
      // },
      // {
      //   path:"contact",
      //   element:<Contact/>
      // },
      // {
      //   path:"login",
      //   element:<Login/>
      // }

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
