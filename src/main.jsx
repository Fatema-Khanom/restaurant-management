import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Components/Router/Router.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="">
    <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
  </div>
)