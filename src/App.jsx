import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Pages/Layout";
import HomePage from "./Pages/Home";
import NotFoundPage from "./Pages/404 Page/NotFoundPage.jsx";
import Example02 from "./Pages/Example02";
import Example03 from "./Pages/Example03";

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/example-02" element={<Example02 />} />
          <Route path="/example-03" element={<Example03 />} />
          {/* This is the catch-all route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )

}

// https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/

// https://www.smashingmagazine.com/2020/04/react-hooks-api-guide/

// https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/