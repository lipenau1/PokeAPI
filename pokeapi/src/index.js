import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import PokeHook from "./components/hooks/PokeHook";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import AppHook from "./components/hooks/AppHook";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact={true} element={<App/>} />
      <Route path="/view" element={<PokeHook/>} />

      <Route path="/hook"element={<AppHook/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("container")
);
