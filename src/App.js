import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ProvideAuth } from "./hooks/useAuth.js";
import ProfilePage from "./components/ProfilePage.js";
import Navbar from "./components/Navbar.js";
import './App.css';
import Pages from "./pages";

const App = (props) => {
  return (
    <ProvideAuth>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        {Pages.map(([pagePath, Component]) => (
          <Route path={pagePath} element={<Component />} />
        ))}
      </Routes>
    </ProvideAuth>
  );
}


export default App;
