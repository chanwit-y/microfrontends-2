import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
