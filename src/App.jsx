import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Pages/Layout";
import HomePage from "./Pages/Home";
import NotFoundPage from "./Pages/404 Page/NotFoundPage.jsx";
import Case02 from "./Pages/Case02";
import Case03 from "./Pages/Case03";
// import MovieDetail from "./Pages/MovieDetail";

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/case-02" element={<Case02 />} />
          <Route path="/case-03" element={<Case03 />} />
          {/* <Route path="/movie/:id" component={MovieDetail} /> */}
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