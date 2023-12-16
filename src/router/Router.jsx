import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Home from "../views/Home";
import UserDetails from "../views/UserDetails";
import NotFound from "../views/NotFound";
import { UserProvider } from "../contexts/UserContext";

const Router = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/user/:id" Component={UserDetails} />
          <Route Component={NotFound} />
        </Routes>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
};

export default Router;
