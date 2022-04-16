import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

