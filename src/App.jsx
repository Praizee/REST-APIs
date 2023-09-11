import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Pages/Layout.jsx";
import HomePage from "./Pages/Home";
import User from "./Pages/User";
import NotFoundPage from "./Pages/404 Page/NotFoundPage.jsx";

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/user/:id" component={User} />
          {/* This is the catch-all route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )

}