import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
import About from './Components/About';
import Contact from './Components/Contact';
import RestaurantMenu from './Components/RestaurantMenu';
import Login from './Components/Login';
import Error from "./Components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  return (
    <div className="App">
       <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
