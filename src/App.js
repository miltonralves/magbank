import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import Home from "./views/Home";

import "./App.scss";
import NoPage from "./views/NoPage";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

const App = () => {
  const [shoModal, setShowModal] = useState(false);
  const [name, setName] = useState();
  const [account, setAccount] = useState();
  const isLogged = name && account;

  const fakeAuth = {
    login(name, account, cb) {
      setName(name);
      setAccount(account);
      setTimeout(cb, 100);
    },
    logout(cb) {
      setName();
      setAccount();
      setTimeout(cb, 100);
    },
  };

  return (
    <>
      <Navigation handleCreateAcc={() => setShowModal(true)} />
      <Routes>
        <Route
          path="/"
          element={<Home handleClick={() => setShowModal(true)} />}
        />
        <Route path="/login" element={<Login auth={fakeAuth} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
      <AccountModal show={shoModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default App;
