import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginRegisterForm from "./components/LoginRegisterForm";

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<LoginRegisterForm/>}/>
            </Routes>
        </BrowserRouter>
    )
}

