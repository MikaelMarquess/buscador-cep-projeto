import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CepRoute from "./screens/cep-screen";
const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<CepRoute/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router