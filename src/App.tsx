import { Global } from "@emotion/react";
import CharacterDetails from "pages/Details";
import MainPage from "pages/Main";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppWrapper, GlobalStyle } from "./styles";

function App() {
  return (
    <AppWrapper>
      <Global styles={GlobalStyle} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path={"/:id"} element={<CharacterDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
