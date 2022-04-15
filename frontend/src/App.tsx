import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginRegisterForm from "./components/LoginRegisterForm";
import TestPage from "./components/TestPage";

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<LoginRegisterForm/>}/>
                <Route path={'/test'} element={<TestPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

